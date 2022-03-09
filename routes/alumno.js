
const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.post('/', alumnoController.createAlumno);
router.get('/', alumnoController.getAlumnos);
router.get('/:id', alumnoController.getAlumno);
router.put('/:id', alumnoController.updateAlumno);
router.delete('/:id', alumnoController.deleteAlumno);

module.exports = router;     