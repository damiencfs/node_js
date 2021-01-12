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

app.get('/resultat',(req, res, next)=>{
   res.render('resultat.ejs');
});

app.get('/resultat',(req, res, next)=>{
   res.render('resultat.ejs');
});


app.get('/calculpoints',(req, res, next)=>{
    res.render('calculpoints.ejs');
 });
 
 app.post('/page2',(req,res,next)=>{ //url que l'on tape 
    console.log(req.body.name);
 })

 app.use((req, res, next)=>{
    res.status(404).render('error.ejs');
 });
 