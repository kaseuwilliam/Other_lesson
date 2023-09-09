const {Sequelize} = require("sequelize")

// Connect to database
const connectToDB = new Sequelize("animal_lovers", "postgres", "Password1234", {
    host:"localhost",
    dialect:"postgres"
})

async function testConnection(){

    try{

        await connectToDB.authenticate()
        console.log("You have successfully connected to the database")
        return true

    } catch (error){

        console.error("This is the Database connection error: ", error)
        return false
    }
}

module.exports = {connectToDB, testConnection}
