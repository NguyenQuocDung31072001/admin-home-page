import React,{useEffect,useState,useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import './contentProduct.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {useHistory} from 'react-router-dom'
import CallApi from "../../Api/callApi"
import {ContextSearch} from "../header/headerProduct"
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
    appbarProduct:{
      // backgroundColor:
    },
    imageClass: {
      width:200,
      height:100
    },
    description:{
      width:300
    },
    buttonProduct:{
      
      margin:10
    }
  });

export default function ContentProduct(props){
    
    const history=useHistory()
    const [rows,setRows]=useState([]);
    const takeData=useContext(ContextSearch)
    const [data,setData]=useState("")

    useEffect(()=>{
      setData(takeData)
    },[takeData])


    const callApi=()=>{
      CallApi("/all","GET",null).then(res=>{
        setRows(res.data)
      })
    }
     useEffect(()=>{
       if(data !== ""){
          const name="?name="+data;
          CallApi(name,"GET",null).then(res=>{
          setRows(res.data)
        })
       }
      },[data]);
    
    useEffect(()=>{
      CallApi("/all","GET",null).then(res=>{
        setRows(res.data)
      })
    },[])
    
    const homez=()=>{
      history.replace('/home')
    }
    const classes = useStyles();
    let identified=1;
    return(
        <div className='content'>   
              <Button className={classes.buttonProduct}  variant="contained" color="secondary" onClick={callApi}>
                  get all
              </Button>
              <br/>
              <Button className={classes.buttonProduct} variant="contained" color="secondary" onClick={homez}>
                  Trang home
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
                        <StyledTableCell>images</StyledTableCell>
                        <StyledTableCell >categories</StyledTableCell>
                        <StyledTableCell >name</StyledTableCell>
                        <StyledTableCell >ratingsAverage</StyledTableCell>
                        <StyledTableCell >ratingsQuantity</StyledTableCell>
                        <StyledTableCell >price</StyledTableCell>
                        <StyledTableCell >description</StyledTableCell>
                        <StyledTableCell >imageCover</StyledTableCell>
                        <StyledTableCell >brand</StyledTableCell>
                        <StyledTableCell >date</StyledTableCell>
                        <StyledTableCell >__v</StyledTableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody >
                  
                  {rows.map((row) => (
                        <StyledTableRow>
                            <StyledTableCell >
                              {row.images.map((r)=>(
                                <div>
                                  <img src={r} alt='image error' className={classes.imageClass}></img><br/>
                                </div>                                                                
                              )                                
                              )}
                            </StyledTableCell>
 
                            <StyledTableCell>
                              {row.categories.map((r)=>(
                                <div>
                                  <p>{r}</p>
                                </div>
                              ))}
                            </StyledTableCell>
                            
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.ratingsAverage}</StyledTableCell>
                            
                            <StyledTableCell> {row.ratingsQuantity}</StyledTableCell>
                            
                            <StyledTableCell>{row.price}</StyledTableCell>
                            <StyledTableCell>
                              {
                                <div className={classes.description}>
                                  {row.description}
                                </div>
                              }
                            </StyledTableCell>
                            <StyledTableCell>
                              <div className={classes.description}>
                                {row.imageCover}
                              </div>
                            </StyledTableCell>
                            <StyledTableCell>{row.brand}</StyledTableCell>
                            
                            <StyledTableCell>{row.date}</StyledTableCell>
                            <StyledTableCell>{row.__v}</StyledTableCell>  
                        </StyledTableRow>                       
                        ))}                       
                  </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}