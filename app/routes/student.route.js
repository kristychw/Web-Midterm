module.exports = (app) =>{
    const students = require('../controllers/student.controller');

    app.post('/students',students.create);

    app.get('/students',students.findAll); //go to postman GET localhost:4000/students

    app.get('/students/:id',students.findOne);  //go to postman GET localhost:4000/students/[id]
    
    app.put('/students/:id', students.update);

    app.delete('/students/:id',students.delete);
}