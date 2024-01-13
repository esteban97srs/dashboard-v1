import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import { useQuery } from 'react-query';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Typography } from '@mui/material';
import TodayGrid from '../grid/TodayGrid';

const ClientToday = () => {

  interface SaleData {
    newClient: {
      hour: string,
      value: number
    },
    bought: {
      hour: string,
      value: number
    },
  }

  const fetchSalesData = async () => {
    const response = await fetch('/api/sales');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  };

  const Tableau10 = [
    {label: 'Clientes totales', color :'#F5BFC2'},
    {label: 'Clientes nuevos', color :'#EB7635'},
    {label: 'Compraron', color :'#358DEB'},
    {label: 'No compraron', color :'#B9E8C9'}
  ];
  const { isLoading, data }  = useQuery('data', fetchSalesData);
  const [ color ] = useState('');

  return (
    <>
      {!isLoading &&
        <div>
          <BarChart
            colors={['#EB7635', '#358DEB']}
            xAxis={[{ scaleType: 'band', data: data?.map((i: SaleData) => {return i.newClient?.hour;})}]}
            series={[
              {
                data: data?.map((i: SaleData) => {
                  return i?.newClient?.value;
                })
              },
              {
                data: data?.map((i: SaleData) => {
                  return i?.bought?.value;
                })
              }
            ]}
            height={320}
          />
          <ToggleButtonGroup
            value={color}
            exclusive
            className='d-flex j-center'
            sx={{marginTop:'-24px'}}
          >
            {Tableau10.map((value) => (
              <ToggleButton key={value?.color} value={value?.color} sx={{gap:'5px', border:'none', pointerEvents:'none' }}>
                <div
                  style={{
                    width: 15,
                    height: 16,
                    backgroundColor: value?.color,
                  }}
                />
                <Typography sx={{fontSize:12}}>{value?.label}</Typography>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <div className='d-flex j-center'>
            <TodayGrid/>
          </div>
        </div>
      }
    </>
  );
};

export default ClientToday;