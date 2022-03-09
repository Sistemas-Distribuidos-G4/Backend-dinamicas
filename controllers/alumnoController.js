const Alumno = require("../models/Alumno");
 
//get read

exports.getAlumno = async (req, res) => {

    try {
        let alumno = await Alumno.findById(req.params.id);

        if(!alumno) {
            res.status(404).json({ msg: 'Alumno does not exist' })
        }
       
        res.json(alumno);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getAlumnos = async (req, res) => {

    try {

        const alumnos = await Alumno.find();
        res.json(alumnos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//create
exports.createAlumno = async (req, res) => {

    try {
        let alumno;

        
        alumno = new Alumno(req.body);

        await alumno.save();
        res.send(alumno);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//delete
exports.deleteAlumno = async (req, res) => {

    try {
        let alumno = await Alumno.findById(req.params.id);

        if(!alumno) {
            res.status(404).json({ msg: 'Alumno does not exist' })
        }
       
        await Alumno.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Alumno successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateAlumno = async (req, res) => {

    try {
        const { name, last_name, email, phone,status,created_date, updated_date } = req.body;
        let alumno = await Alumno.findById(req.params.id);
 
        if(!alumno) {
            res.status(404).json({ msg: 'Patient does not exist' })
        }

        alumno.name = name;
        alumno.last_name=last_name;
        alumno.email=email;
        alumno.phone=phone;
        alumno.status=status;
        alumno.created_date=created_date;
        alumno.updated_date=updated_date;
        alumno = await Alumno.findOneAndUpdate({ _id: req.params.id },alumno, { new: true} )
        res.json(alumno);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}