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
    fontFamily: "'Lato', 'sans-serif'",
  },
});

function createData(name: string, team: string, minutes: number) {
  return { name, team, minutes };
}

/*Temp Data */
const rows = [
  createData('Lionel Messi', 'Barcelona', 6.0),
  createData('Edinson Cavani', 'Manchester United', 9.0),
  createData('Cristiano Ronaldo', "Real Madrid", 16.0),
  createData('Neymar', "Barcelona", 3.7),
  createData('Zlatan Ibrahimović', "Real Madrid", 16.0),
  createData('Gerard Piqué', "Real Madrid", 16.0),
  createData('Robert Lewandowski', "Real Madrid", 16.0),
  createData('Sergio Ramos', 'Barcelona', 16.0),
  createData('Marcelo', "Real Madrid", 16.0),
  createData('Luka Modrić', "Real Madrid", 16.0),
  createData('Toni Kroos', "Germany", 16.0),
  createData('Eden Hazard', "Manchester United", 16.0),
  createData('Thiago Silva', "Barcelona", 16.0),
  createData('Dani Alves', "Barcelona", 16.0),
  createData('Gareth Bale', "Real Madrid", 16.0),
  createData('Karim Benzema', "Real Madrid", 16.0),
  createData('James Rodríguez', "Real Madrid", 16.0),
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
              <TableCell align="center">{row.team}</TableCell>
              <TableCell align="center">{row.minutes}</TableCell>
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
