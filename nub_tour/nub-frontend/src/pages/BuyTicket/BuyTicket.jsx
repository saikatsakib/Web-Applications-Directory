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
import { v4 as uuid } from "uuid";
import banner2 from './../../assets/images/banner2.png';





const BuyTicket = () => {

  // New unique id
  const unique_id = uuid();

  const [refId, setRefId] = useState(unique_id.slice(0, 10));

  const [busCapacity, setBusCapacity] = useState(50);
  const [seatInfoTrack, setseatInfoTrack] = useState(0);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsIndex, setSelectedSeatsIndex] = useState([]);

  const [isStudent, setIsStudent] = useState(false);
  const [bookedSeatInfo, setbookedSeatInfo] = useState({
    name: "",
    category: "",
    gender: "",
    seat_no: "",
    nub_id: "",
    reference: refId,
    bus_no:"Bus-1"
  });

  const [bookedSeatsInfo, setbookedSeatsInfo] = useState([]);


  const seatNames = [
    { seat_no: "A1", status: 0, gender: "" }, { seat_no: "A2", status: 0, gender: "" }, "","", { seat_no: "A3", status: 0, gender: "" }, { seat_no: "A4", status: 0, gender: "" },
    { seat_no: "B1", status: 0, gender: "" }, { seat_no: "B2", status: 0, gender: "" }, "","", { seat_no: "B3", status: 0, gender: "" }, { seat_no: "B4", status: 0, gender: "" },
    { seat_no: "C1", status: 0, gender: "" }, { seat_no: "C2", status: 0, gender: "" }, "","", { seat_no: "C3", status: 0, gender: "" }, { seat_no: "C4", status: 0, gender: "" },
    { seat_no: "D1", status: 0, gender: "" }, { seat_no: "D2", status: 0, gender: "" }, "","", { seat_no: "D3", status: 0, gender: "" }, { seat_no: "D4", status: 0, gender: "" },
    { seat_no: "E1", status: 0, gender: "" }, { seat_no: "E2", status: 0, gender: "" }, "","", { seat_no: "E3", status: 0, gender: "" }, { seat_no: "E4", status: 0, gender: "" },
    { seat_no: "F1", status: 0, gender: "" }, { seat_no: "F2", status: 1, gender: "Female" }, "","", { seat_no: "F3", status: 0, gender: "" }, { seat_no: "F4", status: 0, gender: "" },
    { seat_no: "G1", status: 1, gender: "Male" }, { seat_no: "G2", status: 0, gender: "" }, "","", { seat_no: "G3", status: 0, gender: "" }, { seat_no: "G4", status: 0, gender: "" },
    { seat_no: "H1", status: 0, gender: "" }, { seat_no: "H2", status: 0, gender: "" }, "","", { seat_no: "H3", status: 0, gender: "" }, { seat_no: "H4", status: 0, gender: "" },
    { seat_no: "I1", status: 0, gender: "" }, { seat_no: "I2", status: 0, gender: "" }, "","", { seat_no: "I3", status: 0, gender: "" }, { seat_no: "I4", status: 0, gender: "" },
    { seat_no: "J1", status: 0, gender: "" }, { seat_no: "J2", status: 0, gender: "" }, "","", { seat_no: "J3", status: 0, gender: "" }, { seat_no: "J4", status: 0, gender: "" },
    { seat_no: "K1", status: 0, gender: "" }, { seat_no: "K2", status: 0, gender: "" }, "","", { seat_no: "K3", status: 0, gender: "" }, { seat_no: "K4", status: 0, gender: "" },

  ];




  const handleSelectSeat = (seat_no, index) => {
    console.log(selectedSeats);
    setSelectedSeats((prev) => [...prev, seat_no]);
    setSelectedSeatsIndex((prev) => [...prev, index]);
  }

  useEffect(() => {
    setbookedSeatInfo((prev) => ({ ...prev, seat_no: selectedSeats[seatInfoTrack] }));
  }, [handleSelectSeat])



  const handleNextStep = () => {
    setbookedSeatsInfo((prev) => [...prev, bookedSeatInfo]);
    setseatInfoTrack(seatInfoTrack + 1);
    console.log(bookedSeatsInfo);
    setbookedSeatInfo({
      name: "",
      category: "",
      gender: "",
      seat_no: "",
      nub_id: "",
      reference: refId,
    });
  }









  return (
    <>
    

    <div className='mx-auto' style={{width:'80%'}}>
      <img src={banner2} alt="" className='img-fluid' />
    </div>
    <h4 className='text-center p-3 py-4 pb-1'>NUB CSE Annual Tour E-Ticket Booking System</h4>
    <div className='ticket_container'>


      <div className="bus_container">

        <div className="bus_selection text-center d-flex justify-content-center">
          <FormControl sx={{ width: 150, mx: 'auto', backgroundColor:'white'}}>
            <InputLabel id="demo-simple-select-label1">Select Bus</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              label="Select Bus"
              onChange={(e) => setbookedSeatInfo((prev) => ({ ...prev, bus_no: e.target.value }))}
            >
              <MenuItem value={1}>Bus-1</MenuItem>
              <MenuItem value={2}>Bus-2</MenuItem>
              <MenuItem value={3}>Bus-3</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className="bus_layout">
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
                
                if(val.status==1){
                  return (
                    <div key={index} className="seat">
                      <span className={bg} style={{ width: '35px' }}>{val.seat_no}</span>
  
                    </div>
                  )
                }else{
                  return (
                    <div key={index} className="seat">
                      <span onClick={() => handleSelectSeat(val.seat_no, index)} className={bg} style={{ width: '35px' }}>{val.seat_no}</span>
  
                    </div>
                  )
                }
              
              }

            })}

          </div>
        </div>
      </div>

      <div className="right-container">
        <div className="wrapper-right">
          <div className="info">
            <h4>Selected Seats:</h4>
            {selectedSeats.map((val, i) => {
              return (
                <span key={i}>[{val}]</span>
              );
            })
            }
          </div>
          {(selectedSeats.length != 0) &&
            <div className="booking_form mt-3">



              <p>Information of Seat: {selectedSeats[seatInfoTrack]}</p>

              <input id='seatNo' type="text" value={selectedSeats[seatInfoTrack]} hidden />

              <FormControl sx={{ minWidth: 100 }}>
                <TextField
                  id="fullWidth"
                  label="Passenger Name"
                  value={bookedSeatInfo.name}
                  onChange={(e) => setbookedSeatInfo((prev) => ({ ...prev, name: e.target.value }))}
                />
              </FormControl>

              <FormControl sx={{ minWidth: 120, ml: 2 }}>
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


              <FormControl sx={{ minWidth: 120, mt: 2 }}>
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
                <FormControl sx={{ minWidth: 100, mt: 2, ml: 2 }}>
                  <TextField
                    id="fullWidth"
                    label="nub_id"
                    value={bookedSeatInfo.nub_id}
                    onChange={(e) => setbookedSeatInfo((prev) => ({ ...prev, nub_id: e.target.value }))}
                  />
                </FormControl>

              }


              <div className="booking_info mt-3">
                <Button onClick={handleNextStep} variant='contained'>Next Step</Button>
              </div>


            </div>

          }
        </div>
      </div>
    </div>

    </>
  )
}

export default BuyTicket