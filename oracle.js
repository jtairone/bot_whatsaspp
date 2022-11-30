const oracledb = require('oracledb');
//rodar em windows precisa da pasta instantclient e descomentar linha abaixo
oracledb.initOracleClient({libDir: './instantclient'});
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const querys = require('./src/consultaUsers')
const  DadosOracle = require('./modal/tb_oracle');

DadosOracle.findAll().then((data) => {
 
let dados = data[0].dataValues;
exports.rca = async function() {
    let connection;
      try {
    // Get a non-pooled connection
    connection = await oracledb.getConnection({
                user          : dados.user,
                password      : dados.pass,
                connectString : `${dados.host}:${dados.port}/${dados.sid}`
      });
      const result = await connection.execute(`${querys.sqluser}`)
      return result
      } catch (err) {
          console.error(err);
    } finally {
        if (connection) {
            try {
              await connection.close();
            } catch (err) {
          console.error(err);
      }
    }
  }
}
})