const Reservations = require('./../models').Reservations;


const index = async (req,res)=>{
    let reservation = await Reservations.findAll();
    res.json(reservation);
}

const addReservation = async (req, res)=>{
    let reservation = req.body;
    await Reservations.create(reservation);
    res.json(reservation);
}

module.exports = {index, addReservation};