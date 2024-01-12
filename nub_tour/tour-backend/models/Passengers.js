

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
        is_self_booked:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        reference:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        confirm_status:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    });

    return Passenger;
}