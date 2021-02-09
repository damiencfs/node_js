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



class Joueur {
   constructor(nom){
       this.nom = nom;
       this.score=0;
   }
}

let questions = ["Qui était le dieu de la guerre dans la mythologie grecque ?",
            "Quel acteur américain incarne le héros du film de Christopher Nolan de 2014 « Interstellar » ?",
            "Quel animal est « pan-pan » dans Bambi ?"
            ];
            
let  propositions = [
               "A)Arès B)Hadès C)Hermès D)Apollon",
               "A)Léonardo DiCaprio B)Brad Pitt C)Matthew MacConaughey D)Tom Cruise",
               "A)Un chien B)Un cerf C)Un oiseau D)Un lapin"
               ];
           
let reponses = ["Arès",
               "Matthew MacConaughey",
               "Un lapin"];
           

app.get('/',(req, res, next)=>{
   // res.sendFile('www/index.html');
   res.render('game.ejs', {questions : questions});


app.get('/',(req, res, next)=>{
   // res.sendFile('www/index.html');
   res.render('index.ejs');

});

app.get('/page2',(req, res, next)=>{
    res.render('page2.ejs');
 });
 
 app.post('/page2',(req,res,next)=>{ //url que l'on tape 
    console.log(req.body.section.joueur.value);
    res.render('page2.ejs');
 })

 app.use((req, res, next)=>{
    res.status(404).render('error.ejs');
 });
 