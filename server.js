const express = require('express');
const venom = require('venom-bot');
const bodyParser = require("body-parser");
const app = express();
const port = 9090;
const server = require('http').createServer(app);

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
      port: port
  });
});

server.listen(port, () =>{
  console.log(`Servidor rodando na porta ${port}`);
})
//inicia o venom-bot
venom.create({
    session: 'session-macrolub', //nome da session *alteraar nome da empresa
  })
  .then((client) => start(client)) //se o venom iniciar correto da o start no cliente
  .catch((erro) => { console.log(erro); }); //se não mostra um console log com o erro

function start(client) {
  client.onMessage((message) => { //vai ficar ouvindo as mensagens 
    //se quiser ver o que veem nas mensagens pode descomentar este console log abaixo 
    //console.log(message) 
    //este if aabaixo verifica o message.body corpo da mensagem que a pessoa enviou e posso fazer algo se o texto for isso
    //if (message.body === 'oi' && message.isGroupMsg === false) {  //faz algo se o testo for oi }
      //vai enviar quando a pessoa mandar qualquer coisa **o \n é quebra de linha
      client.sendText(message.from, 'Bem vindo ao Whatsapp Suporte Macrolub! \n\n 1 - Chamado\n 2 - Atendimento')    
  });
}

//código não usado 
/* app.get('/config', async (req, res) => {
  const oracle = await DadosOracle.findAll();
  const dados =  await ConfigBot.findAll();
  let dataO = oracle[0].dataValues;
  let dataB = dados[0].dataValues;
  res.render('config', {
          data: dataO,
          dataB: dataB
  })
}); */

/* app.post('/dados', async (req, res) => {
  let body = req.body;
  const verifica = await DadosOracle.findOne({where:{ id: 1}});
  if(!verifica){
      DadosOracle.create({
          host: body.host,
          port: body.port,
          sid: body.sid,
          user: body.user,
          pass: body.pass
      }).then(() => {
        ConfigBot.create({
            hora: body.hora,
            local: body.local,
            msg: body.msg,
            formato: body.formato
        }).then(() =>{
          res.redirect('config');
        })
      })
  }else{
      DadosOracle.update({
        host: body.host,
        port: body.port,
        sid: body.sid,
        user: body.user,
        pass: body.pass
    }, {where: { id: 1 }}).then(() => {
      ConfigBot.update({
          hora: body.hora,
          local: body.local,
          msg: body.msg,
          formato: body.formato
      }, {where: { id: 1 }}).then(() =>{
        res.redirect('config');
      })
    })
  }
}); */