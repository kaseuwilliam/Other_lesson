// people table: id, owner's name, age, location, pet
// pets table: id, pet name, type

const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")
const Pet = require("./petModel")

const People = connectToDB.define("people",{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    owner_name:{
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    age:{
        type: DataTypes.INTEGER,
        allowNull: true
    }, 
    location:{
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    pet_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:"pets",
            key:"id"
        }
    }
}, {
    timestamps:false
})

People.belongsTo(Pet, {
    foreignKey:"pet_id"
})


module.exports = People