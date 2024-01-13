import Navbar from '../Navbar';
import Card from '../Card';
import Button from '@mui/material/Button';
import TabGroup from '../TabGroup';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from 'next/router';
// import { useState } from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  // const [filter, setFilter] = useState('');

  return (
    <>
      {/* {console.log(filter)} */}
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
              <Button variant="outlined" onClick={() => router.push('/')}>Clientes</Button>
              <Button variant="outlined">Transacciones</Button>
            </div>
            <div className='d-flex gap-1'>
              <Button variant="outlined">Dinero</Button>
              <Button variant="outlined">Cashback</Button>
            </div>
          </div>
          <div style={{marginTop:-65}}>
            <main>{children}</main>
          </div>
        </div>
        <aside className='aside'>
          <Button variant="outlined">Switch</Button>
          <Card />
          <Card />
          <Card />
        </aside>
      </div>
    </>
  );
}