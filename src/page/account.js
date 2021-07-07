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
import { getAccountList } from "../helper/CallApiHelper";
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import InputField from "../formField/account"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const images = [
  "https://i.pinimg.com/originals/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanbNEeTxWMOWX_tDXccW7X7OSiDW38IoApSSKyTEqA3do2fRtM7x7e4i6I3t_Pp3X2k8&usqp=CAU",
  "https://i.pinimg.com/originals/be/36/33/be363303cbccecf2a2a78c5af3d55c40.gif",
  "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1.jpg",
  "https://pdp.edu.vn/wp-content/uploads/2021/01/anh-avatar-dep-dai-dien-facebook-zalo.jpg",
];
const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(3,0,3,0),
  },
  avater:{
      margin:'0 auto',
      
  },
  title:{
      padding: theme.spacing(5,0,3,0),
  },
  submit:{
      margin: theme.spacing(5,0,0,0),
      
  }
}));

export default function Account() {
  const classes=useStyles();
  const schema = yup.object().shape({
    tennguoidung: yup.string().required(),
    email: yup.string().required(),
    sodienthoai: yup.string().required(),
    diachi: yup.string().required(),
  });
  const form=useForm({
    defaultValues:{
        tennguoidung:'',
        email:'',
        sodienthoai:'',
        diachi:'',
    },
    resolver: yupResolver(schema)
  })
  const handlerSubmit=(values)=>{
    //setAddUser(values)
    console.log("account ",values)
  }
  const [addUser,setAddUser]=useState("");


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getAccountList();
        console.log(data);
        const temp = data.map((el, index) => ({
          id: el._id,
          stt: index,
          username: el.username,
          name: el.name,
          phone: el.phone,
          email: el.email,
          urlImage: images[Math.floor(Math.random() * images.length)],
          address: el.address,
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
    // {
    //   field: "stt",
    //   width: 80,
    //   headerName: "STT",
    //   disableColumnMenu: false,
    //   sortable: false,
    // },
    {
      field: "user",
      headerName: "Người dùng",
      disableColumnMenu: true,
      sortable: true,
      width: 400,
      renderCell: (params) => (
        <Box display="flex" flexWrap="wrap" p={1} m={1}>
          <Box p={1}>
            <Avatar
              variant="square"
              alt=""
              src={params.getValue(params.id, "urlImage")}
            />
          </Box>
          <Box p={1}>
            <Typography variant="body1">
              <b>{params.getValue(params.id, "username")}</b>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {params.getValue(params.id, "name")}
            </Typography>
          </Box>
        </Box>
      ),
    },
    // {
    //   field: "name",
    //   headerName: "Họ tên",
    //   type: "string",
    //   width: 200,
    //   disableColumnMenu: true,
    //   sortable: false,
    // },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 300,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      type: "string",
      width: 120,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      type: "string",
      width: 120,
      disableColumnMenu: true,
      sortable: false,
    },
    
  ];
  return (
    dataList && (
      // <div>
      //   <HeaderAccount />
      //   <ContentAccount />
      // </div>
      <div>
        <Box>
          <Box display="flex" flexWrap="wrap" mb={2}>
            <Box mr={2}>
              <Typography variant="h6">
                <b>Danh sách người dùng (Khách hàng)</b>
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <b>{dataList.length}</b> người đang sử dụng ứng dụng
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
            paginationMode="server"
            checkboxSelection
            pageSize={10}
            loading={loading}
            // onRowSelected={(param) => {
            //   setIdOrg(String(param.data.id))
            // }}
          />
        </Paper>
        {/* form dialog to add user */}
        <Dialog
           open={open} 
           onClose={handleClose} 
           aria-labelledby="form-dialog-title"
           disableBackdropClick	
           disableEscapeKeyDown
          >
            <DialogContent>
              <Avatar >
                  <PersonAddTwoToneIcon/>
              </Avatar>
              <Typography className={classes.title} component="h3" variant="h5">
                  Thêm người dùng 
              </Typography>
              <form onSubmit={form.handleSubmit(handlerSubmit)}>
                  <InputField  name="tennguoidung" label="Tên người dùng" form={form}/><br/>
                  <InputField  name="email" label="Email" form={form}/><br/>
                  <InputField  name="sodienthoai" label="Số điện thoại" form={form}/><br/>
                  <InputField  name="diachi" label="Địa chỉ" form={form}/><br/>
                  <Button className={classes.submit} variant="contained" type="submit" fullWidth color="primary" >
                      Add
                  </Button>
              </form>
            </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                
              </DialogActions>
        </Dialog>
      </div>
    )
  );
}
