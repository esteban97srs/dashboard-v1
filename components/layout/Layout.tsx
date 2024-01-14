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
  const [filterChipFirst, setFilterChipFirst]   = useState('Today');
  const [filterChipSecond, setFilterChipSecond] = useState('All');
  const [filterChipThird, setFilterChipThird]   = useState('Client');
  const [filterChipFourth, setFilterChipFourth] = useState('');
  const [PulsoSelected, setPulsoSelected]       = useState('Grafico');

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='main'>
          {PulsoSelected === 'Grafico'
            ?
            <div className='d-flex j-content'>
              <Stack direction="row" spacing={'10px'}>
                <Chip className='mui-chip-hover' color={filterChipFirst === 'Today' ? 'secondary': 'info'} label='HOY' onClick={() => {
                  setFilterChipFirst('Today');
                  router.push('/TodayClient');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipFirst === '7D' ? 'secondary': 'info'} label="7D" onClick={() => {
                  setFilterChipFirst('7D');
                  router.push('/ClientSevenDays');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipFirst === 'Estemes' ? 'secondary': 'info'} label="Este mes" onClick={() => {
                  setFilterChipFirst('Estemes');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipFirst === '6M' ? 'secondary': 'info'} label="6M" onClick={() => {
                  setFilterChipFirst('6M');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipFirst === 'YTDYTG' ? 'secondary': 'info'} label="YTD / YTG" onClick={() => {
                  setFilterChipFirst('YTDYTG');
                  router.push('/YtdMoney');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipFirst === '1A' ? 'secondary': 'info'} label="1A" onClick={() => {
                  setFilterChipFirst('1A');
                }}/>
                <Chip className='mui-chip-hover' color={filterChipFirst === 'MAX' ? 'secondary': 'info'} label="MÁX" onClick={() => {
                  setFilterChipFirst('MAX');
                }}/>
                <div className='d-flex j-content'>
                  <InsertInvitationIcon sx={{margin: '5px', color:'#644BBA'}} />
                  <Chip className='mui-chip-hover' color={filterChipFirst === 'Custom' ? 'secondary': 'info'} label="Personalizado" onClick={() => {
                    setFilterChipFirst('Custom');
                  }}/>
                </div>
              </Stack>
              <Button className='f-size1 MuiButton'>
                <RemoveRedEyeIcon sx={{ color: '#644BBA' }} />
                Ver detalle
              </Button>
            </div>
            :
            null
          }
          {PulsoSelected === 'Grafico'
            ?
            <>
              {filterChipFirst === '7D'
                ?
                <div className='d-flex j-content' style={{marginTop:-34}}>
                  <Stack direction="row" spacing={'10px'}>
                    <Chip className='mui-chip-hover' color={filterChipSecond === 'All' ? 'secondary': 'info'} label='Todo' onClick={() => {
                      setFilterChipSecond('All');
                    }}/>
                    <Chip className='mui-chip-hover' color={filterChipSecond === 'Monday' ? 'secondary': 'info'} label="Lunes" onClick={() => {
                      setFilterChipSecond('Monday');
                    }}/>
                    <Chip className='mui-chip-hover' color={filterChipSecond === 'Tuesday' ? 'secondary': 'info'} label="Martes" onClick={() => {
                      setFilterChipSecond('Tuesday');
                    }}/>
                    <Chip className='mui-chip-hover' color={filterChipSecond === 'Wednesday' ? 'secondary': 'info'} label="Miércoles" onClick={() => {
                      setFilterChipSecond('Wednesday');
                    }}/>
                    <Chip className='mui-chip-hover' color={filterChipSecond === 'Thursday' ? 'secondary': 'info'} label="Jueves" onClick={() => {
                      setFilterChipSecond('Thursday');
                    }}/>
                    <Chip className='mui-chip-hover' color={filterChipSecond === 'Friday' ? 'secondary': 'info'} label="Viernes" onClick={() => {
                      setFilterChipSecond('Friday');
                    }}/>
                    <Chip className='mui-chip-hover' color={filterChipSecond === 'Saturday' ? 'secondary': 'info'} label="Sabado" onClick={() => {
                      setFilterChipSecond('Saturday');
                    }}/>
                    <div className='d-flex j-content'>
                      <Chip className='mui-chip-hover' color={filterChipSecond === 'Sunday' ? 'secondary': 'info'} label="Domingo" onClick={() => {
                        setFilterChipSecond('Sunday');
                      }}/>
                    </div>
                  </Stack>
                </div>
                :
                null
              }
            </>
            :
            null
          }

          {PulsoSelected === 'Grafico'
            ?
            <div className='d-flex j-content' style={{marginTop:-34}}>
              <div className='d-flex gap-1'>
                <Chip className='chip-icon-done mui-chip-hover' icon={filterChipThird === 'Client' ? <DoneIcon /> : <></> } color={filterChipThird === 'Client' ? 'secondary': 'info'} label="Clientes" onClick={() => {
                  setFilterChipThird('Client');
                }}/>
                <Chip className='chip-icon-done mui-chip-hover' icon={filterChipThird === 'Transactions' ? <DoneIcon /> : <></> } color={filterChipThird === 'Transactions' ? 'secondary': 'info'} label="Transacciones" onClick={() => {
                  setFilterChipThird('Transactions');
                }}/>
              </div>
              <div className='d-flex gap-1'>
                <Chip className='chip-icon-done mui-chip-hover' icon={filterChipFourth === 'Money' ? <DoneIcon /> : <></> } color={filterChipFourth === 'Money' ? 'secondary': 'info'} label="Dinero" onClick={() => {
                  setFilterChipFourth('Money');
                }}/>
                <Chip className='chip-icon-done mui-chip-hover' icon={filterChipFourth === 'Cashback' ? <DoneIcon /> : <></> } color={filterChipFourth === 'Cashback' ? 'secondary': 'info'} label="Cashback" onClick={() => {
                  setFilterChipFourth('Cashback');
                }}/>
              </div>
            </div>
            :
            null
          }
          {PulsoSelected === 'Pulso'
            ?
            <>
              <div className='d-flex j-content'>
                <Stack direction="row" spacing={'10px'}>
                  <Chip className='mui-chip-hover' color={filterChipFirst === 'Today' ? 'secondary': 'info'} label='PULSO' onClick={() => {
                    setFilterChipFirst('Today');
                    router.push('/TodayClient');
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
                    <Chip className='mui-chip-hover' color={filterChipFirst === 'Custom' ? 'secondary': 'info'} label="Personalizado" onClick={() => {
                      setFilterChipFirst('Custom');
                    }}/>
                  </div>
                </Stack>
              </div>
              <div className='d-flex j-content' style={{marginTop:-34}}>
                <Stack direction="row" spacing={'10px'}>
                  <Chip className='mui-chip-hover' color={filterChipSecond === 'All' ? 'secondary': 'info'} label='Todos' onClick={() => {
                    setFilterChipSecond('All');
                  }}/>
                  <Chip className='mui-chip-hover' color={filterChipSecond === 'Monday' ? 'secondary': 'info'} label="Sep" onClick={() => {
                    setFilterChipSecond('Monday');
                  }}/>
                  <Chip className='mui-chip-hover' color={filterChipSecond === 'Tuesday' ? 'secondary': 'info'} label="Oct" onClick={() => {
                    setFilterChipSecond('Tuesday');
                  }}/>
                  <Chip className='mui-chip-hover' color={filterChipSecond === 'Wednesday' ? 'secondary': 'info'} label="Nov" onClick={() => {
                    setFilterChipSecond('Wednesday');
                  }}/>
                </Stack>
              </div>
            </>
            :
            null
          }
          <div style={{marginTop:-65}}>
            <main>{children}</main>
          </div>
        </div>
        <aside className='aside'>
          <div className='switch-pulso'>
            <Chip className='chip-pulso' icon={<BarChartOutlinedIcon color='primary'  sx={{width:'25px', height:'25px' }} />} color={PulsoSelected === 'Grafico' ? 'primary': 'info'} label="Gráfico" onClick={() => {
              setPulsoSelected('Grafico');
              router.push('/');

            }}/>
            <Chip className='chip-pulso' icon={<StarRoundedIcon color='primary' sx={{ width:'25px', height:'25px' }} />} color={PulsoSelected === 'Pulso' ? 'primary': 'info'} label="Pulso" onClick={() => {
              setPulsoSelected('Pulso');
              router.push('/Pulso');
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