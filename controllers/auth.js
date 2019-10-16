const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.login = (req, res)=>{    
    

    console.log(req.body)
    const email = req.body.email
    const password = req.body.password

    User.findOne({where: {email, password}}).then(user=>{
        if(user){
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            const email = user['email']
            res.send({
                email,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })

}