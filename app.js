const express = require('express');
const app = express();

//definimos un puerto para HTTP
const port = 3020;

app.use('/static',express.static(__dirname + '/public'));

//Creamos una ruta para el directorio raíz en este caso solo envía el texto 'Hello world!!!' pero es común que se envíe una vista (archivo HTML)
// app.get('/', (req, res) => {
//     res.send('Hello world!!!');
// });

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

//Comienza a escuchar el puerto definido 3000
app.listen(port, ()=>{
    console.log('Listen on the port 3020');
});