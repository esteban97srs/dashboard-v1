import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

const TabGroup = () => {
  return (
    <Stack direction="row" spacing={'10px'}>
      <Chip sx={{background:'#E7DFF8'}} label="HOY" onClick={()=>{}} />
      <Chip label="7D" onClick={()=>{}} />
      <Chip label="Este mes" onClick={()=>{}} />
      <Chip label="6M" onClick={()=>{}} />
      <Chip label="YTD/YTG" onClick={()=>{}} />
      <Chip label="1A" onClick={()=>{}} />
      <Chip label="MÁX" onClick={()=>{}} />
      <div className='d-flex j-content'>
        <InsertInvitationIcon sx={{position:'static', margin: '5px', color:'#644BBA'}} />
        <Chip label="Personalizado" onClick={()=>{}} />
      </div>
    </Stack>
  );
};

export default TabGroup;