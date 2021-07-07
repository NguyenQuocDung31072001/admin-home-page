import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  LinearProgress,
  OutlinedInput,
  Paper,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getDanhGia } from "../helper/CallApiHelper";
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';

export default function Account() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getDanhGia();
        console.log(data);
        const temp = data.map((index,key) => ({
          id: key,
          product: index.product,
          username: index.user.username,
          review:index.review,
          rating:index.rating,
        }));

        setDataList(temp);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  const colUser = [

    {
      field: "product",
      headerName: "Sản phẩm",
      disableColumnMenu: true,
      sortable: true,
      width: 400,
     
    },
    {
      field: "username",
      headerName: "Người dùng",
      type: "string",
      width: 300,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "review",
      headerName: "Nhận xét",
      type: "string",
      width: 120,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "rate",
      headerName: "Đánh giá",
      type: "string",
      width: 150,
      disableColumnMenu: true,
      sortable: false,

      renderCell: (params) =>{
        let arr=[]
        for(let i=0;i<params.getValue(params.id,"rating");i++){
         arr.push(1)
        } 
        return arr.map(e=>(
          <GradeRoundedIcon/>
        ))
      }
      
    },
  ];
  return (
      <div>
        <Box>
          <Box display="flex" flexWrap="wrap" mb={2}>
            <Box mr={2}>
              <Typography variant="h6">
                <b>Danh sách đánh giá của khách hàng </b>
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <b>{dataList.length}</b> bài đánh giá
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
                onClick={handleClickOpen}
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
        <Paper elevation={4}>
          <DataGrid
            autoHeight
            rows={dataList}
            columns={colUser}
            checkboxSelection
            pageSize={10}
            loading={loading}
            // onRowSelected={(param) => {
            //   setIdOrg(String(param.data.id))
            // }}
            
          />
        </Paper>
        
      </div>
    )
  
}
