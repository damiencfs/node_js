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

app.get('/',(req, res, next)=>{
   // res.sendFile('www/index.html');
   res.render('game.ejs', {questions : questions});
});

app.get('/page2',(req, res, next)=>{
    res.render('page2.ejs');
 });
 
 app.post('/page2',(req,res,next)=>{ //url que l'on tape 
    console.log(req.body.section.joueur.value);
    res.render('page2.ejs');
 })

  //Ajout de la page correction
  app.get('/correction',(req, res, next)=>{
   res.render('correction.ejs');
});

  //Ajout de la page questions
  app.get('/questions',(req, res, next)=>{
   res.render('questions.ejs');
});


// RECUPERATION DU NOMBRE DE JOUEURS
// RECUPERATION DES NOMS DES JOUEURS
app.get('/',(req,res,next)=>{ //url que l'on tape 
   
   let nb_joueur = req.body.nb_joueur.value;
   console.log(nb_joueur);

})

// ROMAIN CLEMENT RECUPERATION RESULATS
app.post('/questions',(req,res,next)=>{ //url que l'on tape 
   console.log(req.body.q1);
   res.redirect('/questions');
   let resultat_q1 = parseInt(req.body.q1);
   let resultat_q2 = parseInt(req.body.q2);
   let resultat_q3 = parseInt(req.body.q3);

   let total = resultat_q1 + resultat_q2 + resultat_q3;
   
   console.log(`Total de points : ${total}`);
})


app.use((req, res, next)=>{
    res.status(404).render('error.ejs');
 });
