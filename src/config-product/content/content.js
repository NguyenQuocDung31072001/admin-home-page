import React,{useEffect,useState} from 'react';
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
import axios from 'axios'

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

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  

export default function Content(){
  
    const [rows,setRows]=useState([]);
    useEffect(()=>{
      axios({
        method:'GET',
        url:'https://60966e92116f3f00174b316b.mockapi.io/products',
        data:null
      }).then(res=>{
        console.log(rows);
        setRows(res.data);
        
      }).catch(err=>{
        console.log(err)
      });
    },[]);
    console.log(rows);
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

                  <TableBody >
                    {rows.map((row) => (
                        <StyledTableRow key={parseInt(row.stt)}>
                            <StyledTableCell component="th" scope="row">{row.stt}</StyledTableCell>
 
                            <StyledTableCell>{row.masp}</StyledTableCell>
                            
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.gia}</StyledTableCell>
                  
                            <StyledTableCell>{row.status}</StyledTableCell>
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