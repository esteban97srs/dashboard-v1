import * as React from 'react';
import type { NextPage } from 'next'
import Navbar from '../components/layout/Navbar'
import Card from '../components/Card'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/theme'
import TabGroup from '../components/TabGroup';
import Chart from '../components/Chart';
import MuiDataGrid from '../components/grid/MuiDataGrid';
import Button from '@mui/material/Button';
import { QueryClient, QueryClientProvider } from 'react-query';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Typography } from '@mui/material';
const queryClient = new QueryClient();

const Tableau10 = [
  {label: 'Clientes totales', color :'#EB3535'},
  {label: 'Clientes nuevos', color :'#EB7635'},
  {label: 'Compraron', color :'#358DEB'},
  {label: 'No compraron', color :'#2DCF5A'}
];

const Home: NextPage = () => {

  const [color, setColor] = React.useState('#4e79a7');

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className='flex'>
          <div className='main'>
            <div className='d-flex j-content'>
              <TabGroup />
              <Button className='f-size1'><RemoveRedEyeIcon sx={{ color: '#644BBA' }} />Ver detalle</Button>
            </div>
            <div>

            </div>
            <div className='d-flex j-content'>
              <div className='d-flex gap-1'>
                <Button variant="outlined">Clientes</Button>
                <Button variant="outlined">Transacciones</Button>
              </div>
              <div className='d-flex gap-1'>
                <Button variant="outlined">Dinero</Button>
                <Button variant="outlined">Cashback</Button>
              </div>
            </div>
            <div className='d-flex j-content f-direction' style={{height:370}}>
              <div className='d-flex j-center'>
                {/* <Chart /> */}
              </div>
              <div className='d-flex j-center'>
                <ToggleButtonGroup
                  value={color}
                  exclusive
                >
                  {Tableau10.map((value) => (
                    <ToggleButton key={value?.color} value={value?.color} sx={{gap:'5px', border:'none', pointerEvents:'none' }}>
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: value?.color,
                        }}
                        />
                        <Typography sx={{fontSize:12}}>{value?.label}</Typography>
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
            </div>
            <div className='d-flex j-center'>
              <MuiDataGrid/>
            </div>
          </div>
          <aside className='aside'>
            <Button variant="outlined">Switch</Button>
            <Card />
            <Card />
            <Card />
          </aside>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Home;