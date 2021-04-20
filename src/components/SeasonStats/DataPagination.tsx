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
  table: {
    minWidth: 650,
  },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

/*Temp Data */
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
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

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align='right'>Age</TableCell>
            <TableCell align='right'>Team</TableCell>
            <TableCell align='right'>Position</TableCell>
            <TableCell align='right'>Appearences</TableCell>
            <TableCell align='right'>Country</TableCell>
            <TableCell align='right'>League</TableCell>
            <TableCell align='right'>Goal/Game</TableCell>
            <TableCell align='right'>Assist/Game</TableCell>
            <TableCell align='right'>Shots On Taget/Game</TableCell>
            <TableCell align='right'>Tackles/Game</TableCell>
            <TableCell align='right'>Blocks/Game</TableCell>
            <TableCell align='right'>Duels Tot/Game</TableCell>
            <TableCell align='right'>Fouls Comm/Game</TableCell>
            <TableCell align='right'>Croesses Tot/Game</TableCell>
            <TableCell align='right'>Dribbles Att/Game</TableCell>
            <TableCell align='right'>Saves Tot/Game</TableCell>
            <TableCell align='right'>Dribbles Att/Game</TableCell>
            <TableCell align='right'>KeyPasses/Game</TableCell>
            <TableCell align='right'>Passes Tot/Game</TableCell>
            <TableCell align='right'>Passes Accuracy/Game</TableCell>
            <TableCell align='right'>Oyuncu Sayisi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={row.name}>
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
            <TableRow style={{ height: 53 * emptyRows }}>
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
