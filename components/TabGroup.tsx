import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { useRouter } from 'next/router';

const TabGroup = () => {
  const router = useRouter();

  return (
    <Stack direction="row" spacing={'10px'}>
      <Chip label="HOY" onClick={() => router.push('/clientToday')} />
      <Chip label="7D" onClick={() => router.push('/clientSevenDays')} />
      <Chip label="Este mes" />
      <Chip label="6M" />
      <Chip label="YTD/YTG" />
      <Chip label="1A" />
      <Chip label="MÁX" />
      <div className='d-flex j-content'>
        <InsertInvitationIcon sx={{position:'static', margin: '5px', color:'#644BBA'}} />
        <Chip label="Personalizado" />
      </div>
    </Stack>
  );
};

export default TabGroup;