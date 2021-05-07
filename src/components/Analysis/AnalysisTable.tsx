/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  tableContainer: {
    marginTop: 5,
    borderRadius:15,
  },
  table: {
    minWidth: 300,  
  },
  cellTitle: {
    backgroundColor: '#ccc9c9',
    color:" #004E7C",
    fontFamily: "'Poppins', 'sans-serif'",
  },
});

function createData(name: string, calories: number, fat: number, carbs: number) {
  return { name, calories, fat, carbs };
}

/*Temp Data */
const rows = [
  createData('Lionel Messi', 30, 6.0, 24),
  createData('Edinson Cavani', 35, 9.0, 37),
  createData('Cristiano Ronaldo', 25, 16.0, 24),
  createData('Neymar', 28, 3.7, 67),
  createData('Zlatan Ibrahimović', 20, 16.0, 49),
  createData('Gerard Piqué', 30, 16.0, 49),
  createData('Robert Lewandowski', 33, 16.0, 49),
  createData('Sergio Ramos', 34, 16.0, 49),
  createData('Marcelo', 35, 16.0, 49),
  createData('Luka Modrić', 30, 16.0, 49),
  createData('Toni Kroos', 33, 16.0, 49),
  createData('Eden Hazard', 25, 16.0, 49),
  createData('Thiago Silva', 32, 16.0, 49),
  createData('Dani Alves', 35, 16.0, 49),
  createData('Gareth Bale', 25, 16.0, 49),
  createData('Karim Benzema', 28, 16.0, 49),
  createData('James Rodríguez', 29, 16.0, 49),
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SimpleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const cellData = [
    'Player',
    'Team',
    'Minute',
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow hover>
            <TableCell className={classes.cellTitle}>Player</TableCell>
            {cellData.map((cell, index) => (
              <TableCell key={index} className={classes.cellTitle} align="center">
                {cell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={row.name} hover>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow >
              <TableCell colSpan={6}  style={{ height: 39 * emptyRows }}/>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
