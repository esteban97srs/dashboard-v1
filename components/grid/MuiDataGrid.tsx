import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  column1: string,
  column2: string,
  column3: string,
  column4: string,
) {
  return { column1, column2, column3, column4 };
}

const rows = [
  createData('Column 1', 'Column 2', 'Column 3', 'Total'),
  createData('Column 1', 'Column 2', 'Column 3', 'Total'),
  createData('Column 1', 'Column 2', 'Column 3', 'Total'),
  createData('Column 1', 'Column 2', 'Column 3', 'Total'),
  createData('Column 1', 'Column 2', 'Column 3', 'Total'),

];

export default function MuiDataGrid() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 510, background:'#E6E1E6'}}>
      <Table>
        <TableHead className='d-flex j-center'>
          <TableRow className='d-flex j-center'>
            <TableCell>Clientes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.column1}
              </TableCell>
              <TableCell align="right">{row.column2}</TableCell>
              <TableCell align="right">{row.column3}</TableCell>
              <TableCell align="right">{row.column4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}