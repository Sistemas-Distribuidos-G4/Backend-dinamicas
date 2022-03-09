const mongoose = require('mongoose');
uri = require('dotenv').config({ path: 'variables.env' }).parsed.DB_MONGO;



const connection = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = connection;