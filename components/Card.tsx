import * as React from 'react';
import CustomCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const card = (
  <CardContent className='d-flex f-direction custom-card'>
    <Typography className='f-size2 j-center'>
      Noviembre
    </Typography>
    <div className='d-flex j-content'>
      <Typography className='f-size1'>
        Clientes
      </Typography>
      <Typography className='f-size1'>
        81.420
      </Typography>
    </div>
    <div className='d-flex j-content'>
      <Typography className='f-size1'>
        Ventas totales
      </Typography>
      <Typography className='f-size1'>
        1.100
      </Typography>
    </div>
    <div className='d-flex j-content'>
      <Typography className='f-size1'>
        Monto total
      </Typography>
      <Typography className='f-size1'>
        $70M
      </Typography>
    </div>
    <div>
      <Typography className='f-size2'>
        Cashback
      </Typography>
    </div>
    <div className='d-flex j-content'>
      <Typography className='f-size1'>
        Acumulado
      </Typography>
      <Typography className='f-size1'>
        $200.000
      </Typography>
    </div>
    <div className='d-flex j-content'>
      <Typography className='f-size1'>
        Facturado 01/11
      </Typography>
      <Typography className='f-size1'>
        $120.000
      </Typography>
    </div>
    <div className='d-flex j-content'>
      <Typography className='f-size1'>
        Facturado 10/11
      </Typography>
      <Typography className='f-size1'>
        $200.000
      </Typography>
    </div>
    <div className='d-flex j-content'>
      <Typography className='f-size1'>
        Facturado 20/11
      </Typography>
      <Typography className='f-size1'>
        $0
      </Typography>
    </div>
  </CardContent>
);

export default function Card() {
  return (
    <CustomCard>{card}</CustomCard>
  );
}