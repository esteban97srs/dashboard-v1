import type { NextPage } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from '../components/layout/Navbar';
import Card from '../components/Card';
import theme from '../styles/theme';
import Button from '@mui/material/Button';
import TabGroup from '../components/TabGroup';
import ChartClientToday from '../components/ChartClientToday';
import MuiDataGrid from '../components/grid/MuiDataGrid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Home: NextPage = () => {

  const queryClient = new QueryClient();

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
            <div style={{marginTop:-34}}>
              <TabGroup />
            </div>
            <div className='d-flex j-content' style={{marginTop:-34}}>
              <div className='d-flex gap-1'>
                <Button variant="outlined">Clientes</Button>
                <Button variant="outlined">Transacciones</Button>
              </div>
              <div className='d-flex gap-1'>
                <Button variant="outlined">Dinero</Button>
                <Button variant="outlined">Cashback</Button>
              </div>
            </div>
            <div style={{marginTop:-65}}>
              <ChartClientToday />
            </div>
            <div className='d-flex j-center' style={{marginTop:-26}}>
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
};

export default Home;