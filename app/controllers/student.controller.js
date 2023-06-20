const Student = require('../models/student.model')

exports.create = (req,res)=>{
    console.log(req.body);
    if(!req.body.name){
        return res.status(400).send({
            'message': "Name can not be empty"
        })
    } else if (!req.body.age){
        return res.status(400).send({
            'message': "Age can not be empty"
        })
    } else if(!req.body.major){
        return res.status(400).send({
            'message': "Major can not be empty"
        })
    }

    const student = new Student({
        name: req.body.name || 'Unknown',
        age: req.body.age,
        major: req.body.major
    });

    student.save()
        .then(data => res.send(data))
        .catch(err =>{
            res.status(500).send({
                'message':"something went wrong while inserting data!",
                'error': err
            })

        });
}

exports.update = (req, res) =>{
    const id = req.params.id;

    if(!req.body.name){
        return res.status(400).send({
            'message': "Name can not be empty"
        })
    }

    if(!req.body.age){
        return res.status(400).send({
            'message': "Age can not be empty"
        })
    }

    if(!req.body.major){
        return res.status(400).send({
            'message': "Major can not be empty"
        })
    }

    Student.findByIdAndUpdate(id, {
        name: req.body.name || 'Unknown',
        age: req.body.age,
        major: req.body.major
    }, {new: true}).then(students =>{
        res.send(students)
    }).catch(
        err => {
            res.status(500).send({
                'message' : 'Something went wrong',
                'error' : err
            })
        }
    )

}

exports.findAll = (req, res) => {
    Student.find().then(students => {
            res.send(students)
        }
    ).catch(
        err => {
            res.status(500).send({
                'message' : 'Something went wrong',
                'error' : err
            })
        }
    ) 
}

exports.findOne = (req, res) => {

    const id = req.params.id;

    Student.findById(id).then(students => {
            if (!students){
                res.status(400).send({
                    'message' : 'Student do not exist!'
                })
            }
            res.send(students)
        }
    ).catch(
        err => {
            res.status(500).send({
                'message' : 'Something went wrong',
                'error' : err
            })
        }
    )
}





exports.delete = (req, res) =>{
    const id = req.params.id
    Student.findByIdAndRemove(id).then( students =>{ 
        res.send({
            'message':'The student information is removed!'
        })
    }).catch(err =>{
        res.status(500).send({
            'message' : 'Something went wrong',
            'error' : err
        })
    })
}
