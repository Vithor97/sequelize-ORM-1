const { Router } = require('express');

const PessoaController = require('../controllers/PessoaController');



module.exports = app =>{
    
    app.route('/pessoas')
    .get(PessoaController.pegaTodasAsPessoas)
    
    app.route('/pessoas/:id')
    .get(PessoaController.pegaUmaPessoa)
};