const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function () {

    // agrega nuevos paciente vía POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    // Obtiene un paciente en especifico (ID)   
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualizar un paciente en especifico (ID)   
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    // elimina un paciente en especifico (ID)   
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}