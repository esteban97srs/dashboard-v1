import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import { useQuery } from 'react-query';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Typography } from '@mui/material';

function ChartClientToday() {

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

  interface SalesArray extends Array<SaleData> {
  }

  const fetchSalesData = async () => {
    const response = await fetch('/api/sales');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  };

  const Tableau10 = [
    {label: 'Clientes totales', color :'#EB3535'},
    {label: 'Clientes nuevos', color :'#EB7635'},
    {label: 'Compraron', color :'#358DEB'},
    {label: 'No compraron', color :'#2DCF5A'}
  ];
  const { data, isLoading } : SalesArray = useQuery('data', fetchSalesData);
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
      }
    </>
  );
}

export default ChartClientToday;