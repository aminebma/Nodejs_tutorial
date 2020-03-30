var Todos = require('../models/todoModel')

module.exports = function(app){

    app.get('/api/setupTodos', function(req,res){

        // seed database
        var starterTodos = [
            {
                username: 'amine',
                todo: 'Acheter du lait',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'amine',
                todo: 'Sortir le chien',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'amine',
                todo: 'Apprendre NodeJS',
                isDone: false,
                hasAttachment: false
            },
        ]
        Todos.create(startedTodos, function(err, results){
            res.send(results)
        })
        
    })

}