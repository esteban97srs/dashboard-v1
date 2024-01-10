import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function Chart() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
       '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'] }]}
      series={
        [
          { data: [5, 10, 20, 20, 40, 60, 100, 60, 90, 20, 60, 80, 100, 20, 10, 60, 100, 60, 80, 80, 40, 60, 40, 60]},
          { data: [5, 3, 20, 20, 5, 60, 60, 60, 90, 20, 60, 100, 40, 20, 10, 60, 20, 60, 90, 100, 40, 40, 90, 100]}
        ]
      }
      width={1070}
      height={366}
    />
  );
}

export default Chart;