const Paciente = require('../models/Paciente');

// cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    // crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    //TODO: insertar en la base de datos
    try {
        await paciente.save();
        res.json({ mensaje: 'El cliente se agregó correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

/* Obtiene todos los pacientes*/
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

/* Obtiene un paciente por ID*/
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

/* Actualizar un paciente por ID*/
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}
/* elimina un paciente por ID*/
exports.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}
