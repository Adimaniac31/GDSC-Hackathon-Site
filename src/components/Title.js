import React from 'react';
import Typography from '@mui/material/Typography';
import "./Title.css";

function Title() {
  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <img src="your-image-source" alt="Title Image" style={{ width: '50px', height: '50px' }} />
      <Typography variant="h6">Your Title</Typography>
    </div>
  );
}

export default Title;
