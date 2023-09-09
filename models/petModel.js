// people table: id, owner's name, age, location, pet
// pets table: id, pet name, type

const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")

const Pet = connectToDB.define("pet",{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    pet_name:{
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    type:{
        type: DataTypes.STRING(50),
        allowNull: true
    }, 
}, {
    timestamps:false
})

module.exports = Pet