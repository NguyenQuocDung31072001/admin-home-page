import React,{useEffect,useState,useContext} from "react";
import { DataGrid } from '@material-ui/data-grid';
import {
  Avatar,
  Box,
  Button,
  Typography,
  OutlinedInput,
  Paper
} from "@material-ui/core"
import {useHistory} from 'react-router-dom'
import CallApi from "../helper/callAPIforComponent"

export default function Product(props){

    const columns = [
        {
          field: 'name',
          headerName: 'Tên sản phẩm',
          width: 200,
          type:"string",
          editable: true,
        },
        {
          field: 'image',
          headerName: 'Hình ảnh',
          width: 300,
          renderCell: (params) => (
            
            <Box display="flex" flexWrap="wrap" p={1} m={1}>
              <Box p={1}>
                <Avatar
                  variant="square"
                  alt=""
                  src={params.getValue(params.id,"image")}
                />
              </Box>
            </Box>
          ),
        },
      ];
      
    const [rows,setRows]=useState([])
    useEffect(()=>{
        CallApi("","GET",null).then(res=>{
          const data= res.data.map((index,key)=>({
            id:key+1,
            name:index.name,
            image:index.urlImg
          }))
          setRows(data);
        });
        
      },[])
      return (
        <div style={{ height: 400, width: '100%' }}>
            <Box>
              <Box display="flex" flexWrap="wrap" mb={2}>
                <Box mr={2}>
                  <Typography variant="h6">
                    <b>Danh sách sản phẩm</b>
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                  Đang có <b>{rows.length} </b>sản phẩm
                  </Typography>
                </Box>

                <Box ml="auto">
                  <OutlinedInput
                    style={{
                      width: "200px",
                      marginRight: "24px",
                    }}
                    placeholder="Tìm kiếm"
                  />

                  <Button
                    variant="contained"
                    color="primary"
                  >
                    Thêm
                  </Button>
                  <Button variant="contained" color="primary">
                    Chỉnh sửa
                  </Button>
                  <Button variant="outlined" color="primary">
                    Xóa
                  </Button>
                </Box>
              </Box>
            </Box>
          
              <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                pageSize={10}
                checkboxSelection               
              />
        </div>
      );
}
