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
    marginTop: 10,
  },
  table: {
    minWidth: 650,
  },
  cellTitle: {
    backgroundColor: '#ccc9c9',
    color:" #004E7C",
    fontFamily: "'Poppins', 'sans-serif'",
    padding: '5px 10px 5px 10px',
  },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

/*Temp Data */
const rows = [
  createData('Yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread2', 356, 16.0, 49, 3.9),
  createData('Gingerbread3', 356, 16.0, 49, 3.9),
  createData('Gingerbread4', 356, 16.0, 49, 3.9),
  createData('Gingerbread5', 356, 16.0, 49, 3.9),
  createData('Gingerbread6', 356, 16.0, 49, 3.9),
  createData('Gingerbread7', 356, 16.0, 49, 3.9),
  createData('Gingerbread8', 356, 16.0, 49, 3.9),
  createData('Gingerbread9', 356, 16.0, 49, 3.9),
  createData('Gingerbread10', 356, 16.0, 49, 3.9),
  createData('Gingerbread11', 356, 16.0, 49, 3.9),
  createData('Gingerbread12', 356, 16.0, 49, 3.9),
  createData('Gingerbread13', 356, 16.0, 49, 3.9),
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SimpleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: unknown, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const cellData = [
    'Age',
    'Position',
    'Appearences',
    'Country',
    'League',
    'Goal/Game',
    'Assist/Game',
    'Shots On Taget/Game',
    'Tackles/Game',
    'Blocks/Game',
    'Duels Tot/Game',
    'Fouls Comm/Game',
    'Croesses Tot/Game',
    'Dribbles Att/Game',
    'Saves Tot/Game',
    'Dribbles Att/Game',
    'KeyPasses/Game',
    'Passes Tot/Game',
    'Passes Accuracy/Game',
    'Oyuncu Sayisi',
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow hover> 
            <TableCell className={classes.cellTitle}>Player</TableCell>
            {cellData.map((cell, index) => (
              <TableCell key={index} className={classes.cellTitle} align='right'>
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
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }} hover>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
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
