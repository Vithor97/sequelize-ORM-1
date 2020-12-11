const bodyParser = require('body-parser')
 
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

//const pessoas2 = require('./pessoasRoute2')

module.exports = app => {
 app.use(
    bodyParser.json(),
    pessoas,
    niveis,
    turmas
)

   //pessoas2(app)
 }