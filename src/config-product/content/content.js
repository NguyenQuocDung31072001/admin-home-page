import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './content.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(1, 159, 'Giày', '24.000', 'còn hàng'),
    createData(2, 237, 'Giày', '37.000', 'hết  hàng'),
    createData(3, 262, 'Giày', '24.000', 'còn hàng'),
    createData(4, 305, 'Giày', '67.000', 'còn hàng'),
    createData(5, 356, 'Giày', '49.000', 'còn hàng'),
    createData(6, 356, 'Giày', '49.000', 'còn hàng'),
    createData(7, 356, 'Giày', '49.000', 'còn hàng'),
    createData(8, 356, 'Giày', '49.000', 'còn hàng'),
    createData(9, 356, 'Giày', '49.000', 'còn hàng'),
    createData(10, 356, 'Giày', '49.000', 'còn hàng'),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
export default function Content(){
    const classes = useStyles();
    return(
        <div className='content'>       
            <Button id='button-themsp' variant="contained" color="primary">
                  Thêm sản phẩm
              </Button>

             <AppBar id='appbar-product' position="static">
                <Toolbar>
                    Danh sách sản phẩm
                </Toolbar>
              </AppBar>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                        <StyledTableCell>STT</StyledTableCell>
                        <StyledTableCell >Mã</StyledTableCell>
                        <StyledTableCell >Tên sản phẩm</StyledTableCell>
                        <StyledTableCell >Giá</StyledTableCell>
                        <StyledTableCell >Trạng thái</StyledTableCell>
                        <StyledTableCell >Hành động</StyledTableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell>{row.calories}</StyledTableCell>
                            <StyledTableCell>{row.fat}</StyledTableCell>
                            <StyledTableCell>{row.carbs}</StyledTableCell>
                            <StyledTableCell>{row.protein}</StyledTableCell>
                            <Button className='sua-xoa' variant="contained" color="primary">Sửa</Button>
                            <Button className='sua-xoa' variant="contained" color="primary">xóa</Button>
                        </StyledTableRow>
                        ))}
                  </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}