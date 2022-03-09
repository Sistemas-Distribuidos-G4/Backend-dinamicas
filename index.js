const express = require('express');
const morgan = require('morgan');
const connection = require('./config/connection');
//const cors = require("cors");

// Create the server
const app = express();

// Connect the bd

connection(); 


app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/alumnos', require('./routes/alumno'));

app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${app.get('port')}`)
})

