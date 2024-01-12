
module.exports = (Sequelize, DataTypes) =>{
    const Reservations= Sequelize.define('Reservations', {
        bus_id:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        passenger_id:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        seat_no:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        status:{
            type:DataTypes.ENUM(["pending", "confirmed","cancelled"]),
            allowNull:true,
        }
    });


    Reservations.associate = (models) =>{
        Reservations.hasOne(models.Passengers,{
            onDelete:'NO ACTION',
            onUpdate: 'CASCADE',
        });
    }

    
    return Reservations;
}