//Root

let express = require('express');
let bodyparser = require('body-parser');
let app = express();
let port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/www'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/views', express.static(__dirname + '/views'));

//BodyParser

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//Preparation du serveur 

app.listen(port,()=>{
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

let monObjet={
    nom:"monObjet",
    valeur:10
};

app.get('/',(req, res, next)=>{
   // res.sendFile('www/index.html');
   res.render('index.ejs', {monObjet : monObjet});
});

app.get('/page2',(req, res, next)=>{
    res.render('page2.ejs');
 });
 
 app.post('/page2',(req,res,next)=>{ //url que l'on tape 
    console.log(req.body.name);
 })

  //Ajout de la page correction
  app.get('/correction',(req, res, next)=>{
   res.render('correction.ejs');
});

  //Ajout de la page questions
  app.get('/questions',(req, res, next)=>{
   res.render('questions.ejs');
});

// ROMAIN CLEMENT RECUPERATION RESULATS
app.post('/questions',(req,res,next)=>{ //url que l'on tape 
   console.log(req.body.q1);
   res.redirect('/questions');
   let resultat_q1 = parseInt(req.body.q1);
   let resultat_q2 = parseInt(req.body.q2);
   let resultat_q3 = parseInt(req.body.q3);

   let total = resultat_q1 + resultat_q2 + resultat_q3;
   
   console.log(total);
})


app.use((req, res, next)=>{
    res.status(404).render('error.ejs');
 });
 