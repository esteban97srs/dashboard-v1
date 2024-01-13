import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SevenDaysGrid = () => {

  function createData (
    column1: string,
    column2: string,
    column3: string,
    column4: string,
  ) {
    return { column1, column2, column3, column4 };
  }

  function createSecondData (
    column1: string
  ) {
    return { column1};
  }

  const rowsTableFirst = [
    createData('Column 1', 'Column 2', 'Column 3', 'Total'),
    createData('20', '10', '50.450', '20.120'),
    createData('30', '60', '20.304', '10.926'),
    createData('10', '20', '11.123', '50.255'),
    createData('60', '80', '10.125', '20.164'),
    createData('10', '10', '17.221', '45.153'),
    createData('50', '15', '16.632', '21.122'),
    createData('80', '22', '11.755', '21.792'),
    createData('80', '22', '8.125', '63.555'),
    createData('80', '22', '9.545', '67.221')
  ];

  const rowsTableSecond = [
    createSecondData('Semana'),
    createSecondData('Lunes'),
    createSecondData('Martes'),
    createSecondData('Miércoles'),
    createSecondData('Jueves'),
    createSecondData('Viernes'),
    createSecondData('Sábado'),
    createSecondData('Domingo'),
    createSecondData('Total')
  ];

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 110, height: 508, background:'#E6E1E6'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">7 DÍAS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsTableSecond.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  {row.column1}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{ width: 10, height: 508, background:'#fdfafe'}} />
      <TableContainer component={Paper} sx={{ maxWidth: 510,  height: 508, background:'#E6E1E6'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell sx={{display:'flex', justifyContent:'right'}}>Clientes</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsTableFirst.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.column1}</TableCell>
                <TableCell align="center">{row.column2}</TableCell>
                <TableCell align="center">{row.column3}</TableCell>
                <TableCell align="center">{row.column4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SevenDaysGrid;