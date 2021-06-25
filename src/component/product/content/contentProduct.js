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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LinearProgress } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import CallApi from "../../../helper/callAPIforComponent"
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
      minWidth: 100,
      // maxWidth:300,
    },
    appbarProduct:{
      // backgroundColor:
    },
    imageClass: {
      width:200,
      height:100,
      margin:12
    },
    description:{
      width:400,
    },
    buttonProduct:{
      
      margin:10
    },
    so:{
      width: 20,
      paddingLeft:50,
    },
    imageCover:{
      with:300
    },
    nameHead:{
      paddingLeft:40,
    },
    ratingHead:{
      paddingRight:0,
      margin: 0,
    }
    ,
    descriptionHead:{
      paddingLeft:100
    },
    dateHead:{
      paddingLeft:0,
    }
  });

export default function ContentProduct(props){
    
    const history=useHistory()
    const [rows,setRows]=useState([]);

    const takeData=props.name;
    
    const [data,setData]=useState("")
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      setData(takeData)
    },[takeData])


    const callApi=async ()=>{
      setLoading(false)
       CallApi("/all","GET",null).then(res=>{
        setRows(res.data)
        setLoading(true)
      }
      )
    }
     useEffect(()=>{
       
       if(data !== ""){
        setLoading(false)
          const name="?name="+data;
          CallApi(name,"GET",null).then(res=>{
          setRows(res.data);
          setLoading(true)
        })
       }
      },[data]);
    
    useEffect(()=>{
      CallApi("/all","GET",null).then(res=>{
        setRows(res.data)
        setLoading(true)
      });
      
    },[])
    
    // const home=()=>{
    //   history.replace('/customer')
    // }
    const classes = useStyles();
    let identified=1;
    // const imageError="https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_10b4c383-7fc6-4b58-8b3f-6d05cef0369c_900x900.png?v=1610061677"
    return(
        <div className='content'>   
              <Button className={classes.buttonProduct}  variant="contained" color="secondary" onClick={callApi}>
                  Lấy tất cả sản phẩm
              </Button>
              <br/>
              {/* <Button className={classes.buttonProduct} variant="contained" color="secondary" onClick={home}>
                  Trang home
              </Button> */}

             <AppBar id='appbar-product' position="static">
                <Toolbar>
                    Danh sách sản phẩm
                </Toolbar>
              </AppBar>

            {loading?<TableContainer component={Paper}>
              {/* {setLoading(false)} */}
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                        <StyledTableCell>Images</StyledTableCell>
                        <StyledTableCell >Categories</StyledTableCell>
                        <StyledTableCell className={classes.nameHead}>Name</StyledTableCell>
                        <StyledTableCell className={classes.ratingHead}>Ratings Average</StyledTableCell>
                        <StyledTableCell className={classes.ratingHead}>Ratings Quantity</StyledTableCell>
                        <StyledTableCell className={classes.so}>Price</StyledTableCell>
                        <StyledTableCell className={classes.descriptionHead}>Description</StyledTableCell>
                        {/* <StyledTableCell >imageCover</StyledTableCell> */}
                        <StyledTableCell >Brand</StyledTableCell>
                        <StyledTableCell >Date</StyledTableCell>
                        {/* <StyledTableCell >__v</StyledTableCell> */}
                    </TableRow>
                  </TableHead>

                  <TableBody >
                  
                  {rows.map((row) => (
                        <StyledTableRow>
                            <StyledTableCell >
                              {row.images.map((r)=>(
                                // const altt="https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_10b4c383-7fc6-4b58-8b3f-6d05cef0369c_900x900.png?v=1610061677"
                                
                                <div>
                                   <img src={r} alt="image error" onError={(e)=>{e.target.onError=null; e.target.src="https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_10b4c383-7fc6-4b58-8b3f-6d05cef0369c_900x900.png"}}
                                   className={classes.imageClass}></img><br/>
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
                            <StyledTableCell className={classes.so}>{row.ratingsAverage}</StyledTableCell>
                            
                            <StyledTableCell className={classes.so}> {row.ratingsQuantity}</StyledTableCell>
                            
                            <StyledTableCell className={classes.so}>{row.price}</StyledTableCell>
                            <StyledTableCell>
                              {
                                <div className={classes.description}>
                                  {row.description}
                                </div>
                              }
                            </StyledTableCell>
                            {/* <StyledTableCell>
                              <div className={classes.imageCover}>
                                {row.imageCover}
                              </div>
                            </StyledTableCell> */}
                            <StyledTableCell>{row.brand}</StyledTableCell>
                            
                            <StyledTableCell className={classes.dateHead}>{row.date}</StyledTableCell>
                            {/* <StyledTableCell>{row.__v}</StyledTableCell>   */}
                        </StyledTableRow>                       
                        ))}                       
                  </TableBody>
                </Table>

            </TableContainer>:<CircularProgress disableShrink />}
        </div>
    )
}