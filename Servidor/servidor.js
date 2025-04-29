require("colors");
var http = require("http");
var express = require("express")
let bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://lucabortoleto:Luca2006@cluster0.pgne2it.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("AulaBD");
var usuarios = dbo.collection("usuarios");


var app = express();
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando....!".rainbow);


// Métodos e actions

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("LAB/index.html")
})

app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("LAB/index.html")
})

app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;
    
    console.log(nome, login, senha, nasc)

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc};
    
    usuarios.insertOne(data, function(err){
        console.log(err)
        if(err){
          resposta.render('resposta', {status: "Erro ao cadastrar usuário!",nome, login, senha,nasc})
        }else {
          resposta.render('resposta', {status: "Usuário cadastrado com sucesso!",nome, login, senha,nasc})        
        };
      });
  
})

app.get("/for_ejs", function(requisicao, resposta){
    let valor = requisicao.query.valor
    resposta.render("exemplo_for",{valor})
})

app.post('/logar',function(requisicao, resposta){
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    console.log(login, senha);

    var data = {db_login: login, db_senha: senha}

    usuarios.find(data).toArray(function(err, items){
        if(items.length == 0){
            resposta.render("resposta_login",{status: "usuario/senha não encontrado"})
            // nao encontrou usuario
        }else if(err){
            resposta.render("resposta_login",{status: "erro ao logar"})
            //erro ao logar
        }else{
            resposta.render("resposta_login",{status: "usuario "+login+" logado"})
            // usuario encontrado
        }
            
    })
})






