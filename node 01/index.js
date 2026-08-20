const express = require('express');

const app = express();

app.listen('3000',()=>(
    console.log("Servidor rodando 2!")
));

//instalei o nodemon para atualizar sempre que o código for mudando