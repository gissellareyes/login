var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.post('/', function (req, res, next){
    model.user.create({
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        email: req.body.email,
        password: req.body.password
    })
    .then(user => res.status(201).json({
        data: usuario,
        message: 'El usuario ha sido creado'
    }))
    .catch(error => res.status(400).json({
        error: error
    }));
});

router.get('/id', function(req, res, next){
    model.usuario.findOne({
		where: {
			id: req.params.id
		},
	}).then(usuario =>{
			if (usuario != null) {
				res.status(200).json(usuario)    
			}
			else{
				res.status(404).json(usuario)
			}
		}).catch(error => res.status(400).json({
			error: true,
			data: [],
			error: error
		}));
});
module.exports = router;
