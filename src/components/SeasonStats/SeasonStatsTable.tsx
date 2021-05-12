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
    marginTop:20,
    borderRadius: 15,
  },
  table: {
    minWidth: 650,
  },
  cellTitle: {
    backgroundColor: '#ccc9c9',
    color: ' #004E7C',
    fontFamily: "'Lato', 'sans-serif'",
    padding: '5px 10px 5px 10px',
  },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

/*Temp Data */
const rows = [
  createData('Lionel Messi', 25, 6.0, 24, 4.0),
  createData('Edinson Cavani', 30, 9.0, 37, 4.3),
  createData('Cristiano Ronaldo', 28, 16.0, 24, 6.0),
  createData('Neymar', 30, 3.7, 67, 4.3),
  createData('Zlatan Ibrahimović', 35, 16.0, 49, 3.9),
  createData('Gerard Piqué', 33, 16.0, 49, 3.9),
  createData('Robert Lewandowski', 33, 16.0, 49, 3.9),
  createData('Sergio Ramos', 32, 16.0, 49, 3.9),
  createData('Marcelo', 31, 16.0, 49, 3.9),
  createData('Luka Modrić', 30, 16.0, 49, 3.9),
  createData('Toni Kroos', 29, 16.0, 49, 3.9),
  createData('Eden Hazard', 28, 16.0, 49, 3.9),
  createData('Thiago Silva', 24, 16.0, 49, 3.9),
  createData('Dani Alves', 36, 16.0, 49, 3.9),
  createData('Gareth Bale', 29, 16.0, 49, 3.9),
  createData('Karim Benzema', 28, 16.0, 49, 3.9),
  createData('James Rodríguez', 34, 16.0, 49, 3.9),
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
              <TableCell key={index} className={classes.cellTitle} align='center'>
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
              <TableCell align='center'>{row.calories}</TableCell>
              <TableCell align='center'>{row.fat}</TableCell>
              <TableCell align='center'>{row.carbs}</TableCell>
              <TableCell align='center'>{row.protein}</TableCell>
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
