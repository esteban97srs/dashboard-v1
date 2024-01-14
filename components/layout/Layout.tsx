import Navbar from '../Navbar';
import Card from '../Card';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import DoneIcon from '@mui/icons-material/Done';
import { useRouter } from 'next/router';
import { useState } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { IconButton } from '@mui/material';

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: DashboardLayoutProps) {
  const router                                  = useRouter();
  const [filterChipFirst, setFilterChipFirst]   = useState('today');
  const [filterChipSecond, setFilterChipSecond] = useState('all');
  const [filterChipThird, setFilterChipThird]   = useState('client');
  const [filterChipFourth, setFilterChipFourth] = useState('');
  const [pulsoSelected, setPulsoSelected]       = useState('grafico');

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='main'>
          <div className='d-flex j-content'>
            <Stack direction="row" spacing={'10px'}>
              <Chip className='mui-chip-hover' color={filterChipFirst === 'today' ? 'secondary': 'info'} label='HOY' onClick={() => {
                setFilterChipFirst('today');
                router.push('/clientToday');
              }}/>
              <Chip className='mui-chip-hover' color={filterChipFirst === '7D' ? 'secondary': 'info'} label="7D" onClick={() => {
                setFilterChipFirst('7D');
                router.push('/clientSevenDays');
              }}/>
              <Chip className='mui-chip-hover' color={filterChipFirst === 'Estemes' ? 'secondary': 'info'} label="Este mes" onClick={() => {
                setFilterChipFirst('Estemes');
              }}/>
              <Chip className='mui-chip-hover' color={filterChipFirst === '6M' ? 'secondary': 'info'} label="6M" onClick={() => {
                setFilterChipFirst('6M');
              }}/>
              <Chip className='mui-chip-hover' color={filterChipFirst === 'YTDYTG' ? 'secondary': 'info'} label="YTD / YTG" onClick={() => {
                setFilterChipFirst('YTDYTG');
              }}/>
              <Chip className='mui-chip-hover' color={filterChipFirst === '1A' ? 'secondary': 'info'} label="1A" onClick={() => {
                setFilterChipFirst('1A');
              }}/>
              <Chip className='mui-chip-hover' color={filterChipFirst === 'MAX' ? 'secondary': 'info'} label="MÁX" onClick={() => {
                setFilterChipFirst('MAX');
              }}/>
              <div className='d-flex j-content'>
                <InsertInvitationIcon sx={{margin: '5px', color:'#644BBA'}} />
                <Chip className='mui-chip-hover' color={filterChipFirst === 'custom' ? 'secondary': 'info'} label="Personalizado" onClick={() => {
                  setFilterChipFirst('custom');
                }}/>
              </div>
            </Stack>
            <Button className='f-size1 MuiButton'>
              <RemoveRedEyeIcon sx={{ color: '#644BBA' }} />
              Ver detalle
            </Button>
          </div>
          {filterChipFirst === '7D'
            ?
            <div className='d-flex j-content' style={{marginTop:-34}}>
              <Stack direction="row" spacing={'10px'}>
                <Chip className='mui-chip-hover' color={filterChipSecond === 'all' ? 'secondary': 'info'} label='Todo' onClick={() => {
                  setFilterChipSecond('all');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipSecond === 'monday' ? 'secondary': 'info'} label="Lunes" onClick={() => {
                  setFilterChipSecond('monday');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipSecond === 'tuesday' ? 'secondary': 'info'} label="Martes" onClick={() => {
                  setFilterChipSecond('tuesday');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipSecond === 'wednesday' ? 'secondary': 'info'} label="Miércoles" onClick={() => {
                  setFilterChipSecond('wednesday');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipSecond === 'thursday' ? 'secondary': 'info'} label="Jueves" onClick={() => {
                  setFilterChipSecond('thursday');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipSecond === 'friday' ? 'secondary': 'info'} label="Viernes" onClick={() => {
                  setFilterChipSecond('friday');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipSecond === 'saturday' ? 'secondary': 'info'} label="Sabado" onClick={() => {
                  setFilterChipSecond('saturday');
                }}/>
                <div className='d-flex j-content'>
                  <Chip className='mui-chip-hover' color={filterChipSecond === 'sunday' ? 'secondary': 'info'} label="Domingo" onClick={() => {
                    setFilterChipSecond('sunday');
                  }}/>
                </div>
              </Stack>
            </div>
            :
            null
          }
          <div className='d-flex j-content' style={{marginTop:-34}}>
            <div className='d-flex gap-1'>
              <Chip className='chip-icon-done mui-chip-hover' icon={filterChipThird === 'client' ? <DoneIcon /> : <></> } color={filterChipThird === 'client' ? 'secondary': 'info'} label="Clientes" onClick={() => {
                setFilterChipThird('client');
              }}/>
              <Chip className='chip-icon-done mui-chip-hover' icon={filterChipThird === 'transactions' ? <DoneIcon /> : <></> } color={filterChipThird === 'transactions' ? 'secondary': 'info'} label="Transacciones" onClick={() => {
                setFilterChipThird('transactions');
              }}/>
            </div>
            <div className='d-flex gap-1'>
              <Chip className='chip-icon-done mui-chip-hover' icon={filterChipFourth === 'money' ? <DoneIcon /> : <></> } color={filterChipFourth === 'money' ? 'secondary': 'info'} label="Dinero" onClick={() => {
                setFilterChipFourth('money');
              }}/>
              <Chip className='chip-icon-done mui-chip-hover' icon={filterChipFourth === 'cashback' ? <DoneIcon /> : <></> } color={filterChipFourth === 'cashback' ? 'secondary': 'info'} label="Cashback" onClick={() => {
                setFilterChipFourth('cashback');
              }}/>
            </div>
          </div>
          <div style={{marginTop:-65}}>
            <main>{children}</main>
          </div>
        </div>
        <aside className='aside'>
          <div className='switch-pulso'>
            <Chip className='chip-pulso' icon={<BarChartOutlinedIcon color='primary'  sx={{width:'25px', height:'25px' }} />} color={pulsoSelected === 'grafico' ? 'primary': 'info'} label="Gráfico" onClick={() => {
              setPulsoSelected('grafico');
            }}/>
            <Chip className='chip-pulso' icon={<StarRoundedIcon color='primary' sx={{ width:'25px', height:'25px' }} />} color={pulsoSelected === 'pulso' ? 'primary': 'info'} label="Pulso" onClick={() => {
              setPulsoSelected('pulso');
            }}/>
            <div>
              <IconButton onClick={()=>{}} sx={{ p: 0 }}>
                <KeyboardArrowDownIcon />
              </IconButton>
            </div>
          </div>
          <Card />
          <Card />
          <Card />
        </aside>
      </div>
    </>
  );
}