import React,{ useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "./TitleWithMenu.css";
import image from "../assets/dev-oddesey.png"
function TitleWithMenu() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [selectedOption, setSelectedOption] = useState(1); // Initially set to Option 1

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2} className="Grid">
      <Grid item>
        <img src={image} alt="Title Image" className='hackathon-image'/>
      </Grid>
      <Grid item>
        <Typography variant="h3" fontFamily={"Nunito Sans"} fontWeight={700}>Dev Odyssey</Typography>
      </Grid>
      <Grid item>
        {isMobile ? (
          // Display select menu for mobile view
          <Select value={selectedOption} onChange={handleOptionChange}>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
            <MenuItem value={5}>Option 5</MenuItem>
          </Select>
        ) : (
          // Display a bar with 5 options in desktop view
          <div style={{ display: 'flex' }} className='btnContainer'>
            <button style={{ flex: 1 }} className='ButtonSelected'>Option 1</button>
            <button style={{ flex: 1 }} className='BtnNotSelect'>Option 2</button>
            <button style={{ flex: 1 }} className='BtnNotSelect'>Option 3</button>
            <button style={{ flex: 1 }} className='BtnNotSelect'>Option 4</button>
            <button style={{ flex: 1 }} className='BtnNotSelect'>Option 5</button>
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default TitleWithMenu;

