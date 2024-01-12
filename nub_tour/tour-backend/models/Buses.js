
module.exports = (Sequelize, DataTypes) =>{
    const Buses= Sequelize.define('Buses', {
        bus_name:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        capacity:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        bus_type:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    });
    
    return Buses;
}