import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './BuyTicket.scss';
import wheel from "./../../assets/images/steering-wheel.png";
import door from "./../../assets/images/door.png";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { v4 as uuid } from "uuid";
import banner2 from './../../assets/images/banner2.png';
import axios from "axios";
import Ticket from './../Ticket/Ticket';
import { motion } from 'framer-motion';


const BuyTicket = () => {

  // New unique id
  const unique_id = uuid();

  const [confirmMsg, setConfirmMsg] = useState(false);

  const [refId, setRefId] = useState(unique_id.slice(0, 10));

  const [busData, setBusData] = useState([]);
  const [selectedBus, setSelectedBus] = useState("");

  const [isVisibleRightContiner, setIsVisibleRightContiner] = useState(true);
  const [isVisibleConfirmContiner, setIsVisibleConfirmContiner] = useState(false);
  const [isVisivleSeatLayout, setIsVisivleSeatLayout] = useState(false);

  const [busCapacity, setBusCapacity] = useState(0);
  const [seatInfoTrack, setseatInfoTrack] = useState(0);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsIndex, setSelectedSeatsIndex] = useState([]);

  const [seatData, setSeatData] = useState([]);
  const [isStudent, setIsStudent] = useState(false);
  const [bookedSeatInfo, setbookedSeatInfo] = useState({
    name: "",
    category: "",
    gender: "",
    seat_no: "",
    nub_id: "",
    reference: refId,
    bus_name: selectedBus,
  });

  const [reservationInfo, setReservationInfo] = useState({
    name: "",
    reference: refId,
    phone: "",
    payment_by: "",
    amount: "",
    bkash_amount: "",
    booking_amount: "",
    transaction_id: "",
  })

  const [bookedSeatsInfo, setbookedSeatsInfo] = useState([]);


  //get bus table info
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.01:8000/api/buses/get');
        setBusData(response.data);
        console.log(busData);

      } catch (error) {
        console.log(error);
      } finally {
        console.log("DONE");
      }
    };

    fetchData();
  }, []);



  // let seatNames = [
  //   { seat_no: "A1", status: 0, gender: "" }, { seat_no: "A2", status: 0, gender: "" }, "", "", { seat_no: "A3", status: 0, gender: "" }, { seat_no: "A4", status: 0, gender: "" },
  //   { seat_no: "B1", status: 0, gender: "" }, { seat_no: "B2", status: 0, gender: "" }, "", "", { seat_no: "B3", status: 0, gender: "" }, { seat_no: "B4", status: 0, gender: "" },
  //   { seat_no: "C1", status: 0, gender: "" }, { seat_no: "C2", status: 0, gender: "" }, "", "", { seat_no: "C3", status: 0, gender: "" }, { seat_no: "C4", status: 0, gender: "" },
  //   { seat_no: "D1", status: 0, gender: "" }, { seat_no: "D2", status: 0, gender: "" }, "", "", { seat_no: "D3", status: 0, gender: "" }, { seat_no: "D4", status: 0, gender: "" },
  //   { seat_no: "E1", status: 0, gender: "" }, { seat_no: "E2", status: 0, gender: "" }, "", "", { seat_no: "E3", status: 0, gender: "" }, { seat_no: "E4", status: 0, gender: "" },
  //   { seat_no: "F1", status: 0, gender: "" }, { seat_no: "F2", status: 0, gender: "" }, "", "", { seat_no: "F3", status: 0, gender: "" }, { seat_no: "F4", status: 0, gender: "" },
  //   { seat_no: "G1", status: 0, gender: "" }, { seat_no: "G2", status: 0, gender: "" }, "", "", { seat_no: "G3", status: 0, gender: "" }, { seat_no: "G4", status: 0, gender: "" },
  //   { seat_no: "H1", status: 0, gender: "" }, { seat_no: "H2", status: 0, gender: "" }, "", "", { seat_no: "H3", status: 0, gender: "" }, { seat_no: "H4", status: 0, gender: "" },
  //   { seat_no: "I1", status: 0, gender: "" }, { seat_no: "I2", status: 0, gender: "" }, "", "", { seat_no: "I3", status: 0, gender: "" }, { seat_no: "I4", status: 0, gender: "" },
  //   { seat_no: "J1", status: 0, gender: "" }, { seat_no: "J2", status: 0, gender: "" }, "", "", { seat_no: "J3", status: 0, gender: "" }, { seat_no: "J4", status: 0, gender: "" },
  //   { seat_no: "K1", status: 0, gender: "" }, { seat_no: "K2", status: 0, gender: "" }, "", "", { seat_no: "K3", status: 0, gender: "" }, { seat_no: "K4", status: 0, gender: "" },

  // ];

  const [seatNames, setseatNames] = useState([
    { seat_no: "A1", status: 0, gender: "" }, { seat_no: "A2", status: 0, gender: "" }, { seat_no: "A3", status: 0, gender: "" }, { seat_no: "A4", status: 0, gender: "" },
    { seat_no: "B1", status: 0, gender: "" }, { seat_no: "B2", status: 0, gender: "" }, { seat_no: "B3", status: 0, gender: "" }, { seat_no: "B4", status: 0, gender: "" },
    { seat_no: "C1", status: 0, gender: "" }, { seat_no: "C2", status: 0, gender: "" }, { seat_no: "C3", status: 0, gender: "" }, { seat_no: "C4", status: 0, gender: "" },
    { seat_no: "D1", status: 0, gender: "" }, { seat_no: "D2", status: 0, gender: "" }, { seat_no: "D3", status: 0, gender: "" }, { seat_no: "D4", status: 0, gender: "" },
    { seat_no: "E1", status: 0, gender: "" }, { seat_no: "E2", status: 0, gender: "" }, { seat_no: "E3", status: 0, gender: "" }, { seat_no: "E4", status: 0, gender: "" },
    { seat_no: "F1", status: 0, gender: "" }, { seat_no: "F2", status: 0, gender: "" }, { seat_no: "F3", status: 0, gender: "" }, { seat_no: "F4", status: 0, gender: "" },
    { seat_no: "G1", status: 0, gender: "" }, { seat_no: "G2", status: 0, gender: "" }, { seat_no: "G3", status: 0, gender: "" }, { seat_no: "G4", status: 0, gender: "" },
    { seat_no: "H1", status: 0, gender: "" }, { seat_no: "H2", status: 0, gender: "" }, { seat_no: "H3", status: 0, gender: "" }, { seat_no: "H4", status: 0, gender: "" },
    { seat_no: "I1", status: 0, gender: "" }, { seat_no: "I2", status: 0, gender: "" }, { seat_no: "I3", status: 0, gender: "" }, { seat_no: "I4", status: 0, gender: "" },
    { seat_no: "J1", status: 0, gender: "" }, { seat_no: "J2", status: 0, gender: "" }, { seat_no: "J3", status: 0, gender: "" }, { seat_no: "J4", status: 0, gender: "" },
    { seat_no: "K1", status: 0, gender: "" }, { seat_no: "K2", status: 0, gender: "" }, { seat_no: "K3", status: 0, gender: "" }, { seat_no: "K4", status: 0, gender: "" },

  ]);





  const handleSelectSeat = (seat_no, index) => {

    console.log(selectedSeats);
    seatNames[index].status = 2;
    setSelectedSeats((prev) => [...prev, seat_no]);
    setSelectedSeatsIndex((prev) => [...prev, index]);



  }

  useEffect(() => {
    setbookedSeatInfo((prev) => ({ ...prev, seat_no: selectedSeats[seatInfoTrack] }));
  }, [handleSelectSeat])

  useEffect(() => {
    busData.forEach((value, index) => {
      console.log(value.capacity, index)
      if (value.bus_name == selectedBus) {
        setBusCapacity(value.capacity);
        console.log(value.capacity)
      }
    })
  }, [setBusData])

  const sendSeatData = async (postData) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await axios.post('http://127.0.01:8000/api/buses/del', postData);

      // Handle the response as needed
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  const confirmReservationData = (updateData) => {
    axios.put('http://127.0.01:8000/api/buses/delupdate', updateData)
      .then(response => {
        console.log('Update successful', response.data);
      })
      .catch(error => {
        console.error('Update failed', error);
      });
  };
  const handleNextStep = () => {
    // setSelectedBus(selectedBus);
    // setbookedSeatInfo((prev)=>({...prev,bus_name:selectedBus}));

    setbookedSeatsInfo((prev) => [...prev, bookedSeatInfo]);
    sendSeatData(bookedSeatInfo)
    // console.log(bookedSeatsInfo);
    console.log(bookedSeatInfo);
    if (seatInfoTrack + 1 == selectedSeats.length) {
      setIsVisibleRightContiner(false);
      setIsVisibleConfirmContiner(true);
      setReservationInfo((prev) => ({ ...prev, amount: (selectedSeats.length * 6000), bkash_amount: ((selectedSeats.length * 6000) + (selectedSeats.length * 120)), booking_amount: (selectedSeats.length * 1020) }));
    } else {
      setseatInfoTrack(seatInfoTrack + 1);
      // console.log(bookedSeatsInfo);
    }



    setbookedSeatInfo({
      name: "",
      category: "",
      gender: "",
      seat_no: "",
      nub_id: "",
      bus_name: selectedBus,
      reference: refId,
    });
  }


  useEffect(() => {
    if (selectedBus != "") {
      busData.forEach((value) => {
        if (value.bus_name == selectedBus) {
          // let temp = parseInt(value.capacity) / 4;
          // let temp2 = (temp * 2) + parseInt(value.capacity);
          // setBusCapacity(temp2);
          setBusCapacity(value.capacity);
        }
      })
      setIsVisivleSeatLayout(true);
    } else {
      setIsVisivleSeatLayout(false);
    }

    setSelectedBus(selectedBus);
    console.log(selectedBus);
    setbookedSeatInfo((prev) => ({ ...prev, bus_name: selectedBus }));

  }, [selectedBus]);



  //get Seat Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.01:8000/api/buses/search/${selectedBus}`);
        let responseData = response.data.reservations;
        let entry;
        let array = [];
        responseData.forEach((reservation) => {
          // console.log('Seat_no:', reservation.seat_no);
          // console.log('passenger_name:', reservation.passenger.name);
          // console.log('Passenger_gender:', reservation.passenger.gender);
          entry = {
            'name': reservation.passenger.name,
            'seat_no': reservation.seat_no,
            'gender': reservation.passenger.gender
          }
          array.push(entry);
        });
        console.log(array[0])
        // setSeatData(array);
        // clearSeat();
        for (let x = 0; x < seatNames.length; x++) {
          let temp = 0;
          for (let y = 0; y < array.length; y++) {
            if (seatNames[x].seat_no == array[y].seat_no) {
              console.log("Hi");
              seatNames[x].status = 1;
              seatNames[x].gender = array[y].gender;
              temp = 1;
              break;
            }

          }
          if (temp == 0) {
            let temp2 = seatNames[x].seat_no;
            seatNames[x] = {};
            seatNames[x].seat_no = temp2
            seatNames[x].status = 0;
            seatNames[x].gender = "";
          }

        }

        console.log(seatData)
      } catch (error) {
        console.log(error);
      } finally {
        console.log("DONE");
      }
    };

    fetchData();
  }, [selectedBus])




  const handleReservation = () => {
    confirmReservationData(reservationInfo);
    setConfirmMsg(true);
    console.log(reservationInfo);
  }


  if (confirmMsg) {
    return (
      <Ticket name={reservationInfo.name} seat={selectedSeats} reference={reservationInfo.reference} />
      // <Ticket name="Sakib" seat={["A1", "B4"]} reference="45GH7O4" />
    )
  }


  return (
    <>


      <motion.div
        initial={{ opacity: 0, x: 0, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='mx-auto' style={{ width: '80%' }}>

        <img src={banner2} alt="" className='img-fluid' />
      </motion.div>
      <motion.h4
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center p-3 pb-1 caption-tour'>
        NUB CSE Annual Tour E-Ticket Booking System</motion.h4>


      <div className='ticket_container'>

        {isVisibleRightContiner &&

          <motion.div
            initial={{ opacity: 0, x: 0, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bus_container">

            <div className="bus_selection text-center d-flex justify-content-center">
              <FormControl sx={{ width: 150, mx: 'auto', backgroundColor: 'white' }}>
                <InputLabel id="demo-simple-select-label1">Select Bus</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select"
                  label="Select Bus"
                  value={selectedBus}
                  onChange={(e) => { setSelectedBus(e.target.value) }}
                >

                  {busData.map((val, i) => {
                    return (
                      <MenuItem key={i} value={val.bus_name}>{val.bus_name}</MenuItem>
                    )
                  })}


                </Select>
              </FormControl>
            </div>



            {isVisivleSeatLayout &&

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}

                className="bus_layout">
                <div className="front_layout">
                  {/* <SensorDoorIcon sx={{fontSize:40, color:'#535c68', cursor:'pointer'}} /> */}
                  <div className="door">
                    <img src={door} alt="door" width={50} />
                  </div>
                  <div className="wheel">
                    <img src={wheel} alt="wheel" width={70} />
                  </div>
                </div>

                <div className="seat_layout">


                  {seatNames.map((val, index) => {
                    if (index <= busCapacity - 1) {
                      if (val == "") {
                        return (
                          <div key={index} className="seat">
                          </div>
                        )
                      }
                      let bg = (val.status == 1) ? "d-inline-block p-1 text-light bg-danger text-center" : "d-inline-block p-1 text-light bg-success text-center";

                      if (val.status == 1) {
                        return (
                          <div key={index} className="seat">
                            <span className={bg} style={{ width: '35px' }}>{val.seat_no}</span>

                          </div>
                        )
                      }
                      else if (val.status == 2) {
                        return (
                          <div key={index} className="seat">
                            <span className="d-inline-block p-1 text-light bg-dark text-center" style={{ width: '35px' }}>{val.seat_no}</span>

                          </div>
                        )
                      } else {
                        return (
                          <div key={index} className="seat">
                            <span onClick={() => handleSelectSeat(val.seat_no, index)} className={bg} style={{ width: '35px' }}>{val.seat_no}</span>

                          </div>
                        )
                      }

                    }

                  })}

                </div>
              </motion.div>
            }


          </motion.div>
        }

        {isVisibleRightContiner &&
          (selectedSeats.length != 0) &&

          <div className="right-container">


            <div className="wrapper-right">
              <motion.div
                initial={{ opacity: 0, x: 0, y: 5 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className="info">
                <h4>Selected Seats:</h4>
                {selectedSeats.map((val, i) => {
                  return (
                    <span key={i}>[{val}]</span>
                  );
                })
                }
              </motion.div>
              {/* {(selectedSeats.length != 0) && */}
              <div className="booking_form mt-3">



                <p className="fw-bold">Information of Seat: <span className="text-primary">{selectedSeats[seatInfoTrack]}</span> </p>

                <input id='seatNo' type="text" value={selectedSeats[seatInfoTrack]} hidden />

                <FormControl sx={{ minWidth: 100, m: 2 }}>
                  <TextField
                    id="fullWidth"
                    label="Passenger Name"
                    value={bookedSeatInfo.name}
                    onChange={(e) => setbookedSeatInfo((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </FormControl>

                <FormControl sx={{ minWidth: 120, m: 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Category"
                    sx={{ minWidth: '150px' }}
                    value={bookedSeatInfo.category}
                    onChange={(e) => {
                      if (e.target.value == "Student") {
                        setIsStudent(true);
                      } else {
                        setIsStudent(false);
                      }
                      setbookedSeatInfo((prev) => ({ ...prev, category: e.target.value }))
                    }}
                  >
                    <MenuItem value="Student">Student</MenuItem>
                    <MenuItem value="Faculty">Faculty</MenuItem>
                    <MenuItem value="Gurdian">Gurdian</MenuItem>
                  </Select>
                </FormControl>


                <FormControl sx={{ minWidth: 120, m: 2 }}>
                  <InputLabel id="demo-simple-select-helper-label1">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label1"
                    id="demo-simple-select-helper"
                    label="Gender"
                    sx={{ minWidth: '150px' }}
                    value={bookedSeatInfo.gender}
                    onChange={(e) => setbookedSeatInfo((prev) => ({ ...prev, gender: e.target.value }))}
                  >
                    {(((selectedSeatsIndex[seatInfoTrack] % 2 == 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] + 1].gender == "Male")) || ((selectedSeatsIndex[seatInfoTrack] % 2 != 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] - 1].gender == "Male"))) &&
                      <MenuItem value="Male">Male</MenuItem>
                    }
                    {(((selectedSeatsIndex[seatInfoTrack] % 2 == 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] + 1].gender == "Female")) || ((selectedSeatsIndex[seatInfoTrack] % 2 != 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] - 1].gender == "Female"))) &&
                      <MenuItem value="Female">Female</MenuItem>
                    }

                    {(((selectedSeatsIndex[seatInfoTrack] % 2 == 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] + 1].gender == "")) || ((selectedSeatsIndex[seatInfoTrack] % 2 != 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] - 1].gender == ""))) &&
                      <MenuItem value="Male">Male</MenuItem>
                    }

                    {(((selectedSeatsIndex[seatInfoTrack] % 2 == 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] + 1].gender == "")) || ((selectedSeatsIndex[seatInfoTrack] % 2 != 0) && (seatNames[selectedSeatsIndex[seatInfoTrack] - 1].gender == ""))) &&
                      <MenuItem value="Female">Female</MenuItem>
                    }

                  </Select>
                </FormControl>


                {isStudent &&
                  <FormControl sx={{ minWidth: 100, m: 2 }}>
                    <TextField
                      id="fullWidth"
                      label="nub_id"
                      value={bookedSeatInfo.nub_id}
                      onChange={(e) => setbookedSeatInfo((prev) => ({ ...prev, nub_id: e.target.value }))}
                    />
                  </FormControl>

                }

                {
                  (bookedSeatInfo.gender == "") &&
                  <div className="booking_info mt-3">
                    <Button sx={{ m: 2 }} onClick={handleNextStep} variant='contained' disabled>Next Step</Button>
                  </div>

                }
                {
                  (bookedSeatInfo.gender != "") &&
                  <div className="booking_info mt-3">
                    <Button sx={{ m: 2 }} onClick={handleNextStep} variant='contained'>Next Step</Button>
                  </div>

                }



              </div>


            </div>



          </div>
        }
        {
          isVisibleConfirmContiner &&
          // <Home data={bookedSeatsInfo} seats={selectedSeats} />
          <div className='container home-container'>
            <h4 className='mt-5 py-3'>Billing Information</h4>
            <div className="total_cost">
              <span className="d-block fw-bold">Seat No. -
                {selectedSeats.map((val, i) => {
                  return (
                    <span className="text-primary" key={i}> [{val}]</span>
                  );
                })
                }
              </span>
              <span className="d-block fw-bold">Ticket Quantity - <span className="text-success">{selectedSeats.length}</span></span>
              <span className="d-block fw-bold">Bus Name - <span className="text-danger">{selectedBus}</span></span>

              <br />
              <h4 className="mt-2 t_amount">Amount: <span className="text-warning fw-bolder">{reservationInfo.amount}.00 </span>BDT</h4>
              <h4 className="mt-2 t_amount">Total Amount (Bkash):  <span className="text-warning fw-bolder">{reservationInfo.bkash_amount}.00 </span>BDT</h4>

              <br />
              <span className="text-primary">You can buy tickets with booking amount.</span>
              <h4 className="mt-2 t_amount">Booking Amount:  <span className="text-warning fw-bolder">{reservationInfo.booking_amount}.00 </span>BDT</h4>
              <br />
            </div>

            <div className='p-2'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <FormControl sx={{ minWidth: 200, mt: 1, ml: 1 }}>
                    <InputLabel id="demo-simple-select-helper-label">Name</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Names"
                      onChange={(e) => setReservationInfo((prev) => ({ ...prev, name: e.target.value }))}
                      sx={{ minWidth: '220px' }}
                    >

                      {
                        bookedSeatsInfo.map((val, i) => {
                          return (
                            <MenuItem key={i} value={val.name}>{val.name}</MenuItem>
                          )
                        })
                      }

                    </Select>
                    <FormHelperText>Responsible One</FormHelperText>
                  </FormControl>

                  <TextField
                    id="outlined-error-helper-text1"
                    label="Contact Number"
                    value={reservationInfo.phone}
                    onChange={(e) => setReservationInfo((prev) => ({ ...prev, phone: e.target.value }))}

                  />




                </div>



                <div></div>

                <div>
                  <FormControl sx={{ minWidth: 200, mt: 1, ml: 1 }}>
                    <InputLabel id="demo-simple-select-helper-label2">Payment</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label2"
                      id="demo-simple-select-helper"
                      label="Gender"
                      sx={{ minWidth: '220px' }}
                      // value={payment_by}
                      onChange={(e) => setReservationInfo((prev) => ({ ...prev, payment_by: e.target.value }))}
                    >
                      <MenuItem value="Bkash">Bkash</MenuItem>
                      <MenuItem value="Nagad">Nagad</MenuItem>
                      <MenuItem value="Rocket">Rocket</MenuItem>
                    </Select>
                    <FormHelperText>Payment Method</FormHelperText>
                  </FormControl>
                  <TextField
                    id="outlined-error-helper-text1"
                    label="Amount"
                    value={reservationInfo.amount}
                    onChange={(e) => setReservationInfo((prev) => ({ ...prev, amount: e.target.value }))}


                  />
                  <TextField
                    id="outlined-error-helper-text1"
                    label="Transaction ID"
                    value={reservationInfo.transaction_id}
                    onChange={(e) => setReservationInfo((prev) => ({ ...prev, transaction_id: e.target.value }))}


                  />

                </div>




              </Box>

              {
                (reservationInfo.transaction_id=="") &&
                <Button sx={{ m: 1, mt: 2 }} onClick={handleReservation} className="mt-3" variant="contained" disabled>Confirm Ticket</Button>
              }
              {
                (reservationInfo.transaction_id!="") &&
                <Button sx={{ m: 1, mt: 2 }} onClick={handleReservation} className="mt-3" variant="contained">Confirm Ticket</Button>
              }

              




            </div>
          </div>
        }




      </div>



      <center className="py-2 d-block">
        <span className="d-block text-dark c">Developed By</span>
        <span className="d-block text-primary c">Sakibur Rahman Saikat & Ebrahim Khalil Roni</span>
        <span className="d-block text-dark c">&copy;copyright nubcc_offficial 2024. All rights reserved.</span>
      </center>
    </>
  )
}

export default BuyTicket