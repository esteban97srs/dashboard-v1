import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import { useQuery } from 'react-query';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Typography } from '@mui/material';

const YtdChart = () => {

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
    const response = await fetch('/api/YtdMoney');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  };

  const Tableau10 = [
    {label: '2022', color :'#EB3535'},
    {label: '2023', color :'#7A35EB'},
  ];
  const { isLoading, data }  = useQuery('data', fetchSalesData);
  const [ color ] = useState('');

  return (
    <>
      {!isLoading &&
        <>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
              <BarChart
                colors={['#EB3535', '#7A35EB']}
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
                width={500}
              />
              <ToggleButtonGroup
                value={color}
                exclusive
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
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
              <BarChart
                colors={['#EB3535', '#7A35EB']}
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
                width={500}
              />
              <ToggleButtonGroup
                value={color}
                exclusive
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
            </div>
          </div>
        </>
      }
    </>
  );
};

export default YtdChart;