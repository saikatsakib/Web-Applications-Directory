import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import './Home.scss';


const Home = ({data, seats}) => {

  // const data = [
  //   {name:"Sakib"},
  //   {name:"Roni"},
  //   {name:"Rifat"},
  // ];

  return (
    <div className='container home-container'>
      <h5 className='mt-5 py-3'>Billing Information</h5>
      <div className="total_cost">
        <span className="d-block">Seat No. - </span>
        <span className="d-block">Ticket Quantity - </span>
        <h3 className="mt-2">Total Amount: <span></span></h3>
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
          <FormControl sx={{ minWidth: 200, mt:1 }}>
                <InputLabel id="demo-simple-select-helper-label">Name</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Names"
                  sx={{ minWidth: '220px' }}
                >

                  {
                    data.map((val,i)=>{
                      return(
                      <MenuItem key={i} value={val.name}>{val.name}</MenuItem>
                      )
                    })
                  }

                </Select>
              </FormControl>

            <TextField
              id="outlined-error-helper-text1"
              label="Contact Number"
            />


        

          </div>



          <div></div>

          <div>
            <FormControl sx={{ minWidth: 200, mt:1 }}>
              <InputLabel id="demo-simple-select-helper-label2">Payment</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label2"
                id="demo-simple-select-helper"
                label="Gender"
                sx={{ minWidth: '220px' }}
              >
                <MenuItem value="Bkash">Bkash</MenuItem>
                <MenuItem value="Nagad">Nagad</MenuItem>
                <MenuItem value="Rocket">Rocket</MenuItem>
              </Select>
            
            </FormControl>
            <TextField
              id="outlined-error-helper-text1"
              label="Transaction ID"
             
            />

          </div>




        </Box>
        <Button className="mt-3" variant="contained">Confirm Ticket</Button>
      </div>
    </div>
  )
}


export default Home