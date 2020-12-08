//Root

let express = require('express');
let app = express();
let port = 3000;
app.use(express.static(__dirname + '/www'));

//Preparation du serveur 

app.listen(port,()=>{
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

app.get('/',(req, res, next)=>{
    res.sendFile('www/index.html');
});

