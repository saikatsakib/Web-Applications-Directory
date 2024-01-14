
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


const Home = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormControl sx={{ minWidth: 100 }}>
          <TextField
            id="fullWidth"
            label="Full Name"
          helperText="Enter Your Full Name"
          />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Category"
            sx={{ minWidth: '150px' }}
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Faculty">Faculty</MenuItem>
            <MenuItem value="Gurdian">Gurdian</MenuItem>
          </Select>
          <FormHelperText>Select your category</FormHelperText>
        </FormControl>

        <TextField
          id="outlined-error-helper-text"
          label="NUB ID"
          helperText="Enter Your NUB ID"
        />

      </div>

      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label1">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label1"
            id="demo-simple-select-helper"
            label="Gender"
            sx={{ minWidth: '150px' }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
          <FormHelperText>Select Gender</FormHelperText>
        </FormControl>
        <TextField
          id="outlined-error-helper-text1"
          label="Contact Number"
          helperText="Contact Info"
        />


        <TextField
          id="outlined-error-helper-text1"
          label="Ticket Quantity"
          helperText="No. of Tickets"
          value={2}
        />

      </div>

      <div></div>

      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label2">Payment</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label2"
            id="demo-simple-select-helper"
            label="Gender"
            sx={{ minWidth: '150px' }}
          >
            <MenuItem value="Bkash">Bkash</MenuItem>
            <MenuItem value="Nagad">Nagad</MenuItem>
            <MenuItem value="Rocket">Rocket</MenuItem>
          </Select>
          <FormHelperText>Select Payment Method</FormHelperText>
        </FormControl>
        <TextField
          id="outlined-error-helper-text1"
          label="Transaction ID"
          helperText="Transaction No."
        />

      </div>




    </Box>
  )
}


export default Home