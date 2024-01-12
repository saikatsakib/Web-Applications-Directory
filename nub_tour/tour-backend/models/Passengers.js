

module.exports = (Sequelize, DataTypes) =>{
    const Passenger = Sequelize.define('Passengers', {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        nub_id:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        nid_img:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        transction_id:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        is_self_booked:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        reference:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        confirm_status:{
            type:DataTypes.STRING,
            allowNull:true,
        },
    });

    return Passenger;
}