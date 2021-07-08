import React, { useEffect, useState, useCallback } from "react";
import { DataGrid } from "@material-ui/data-grid";
import {
  Avatar,
  Box,
  Button,
  Typography,
  OutlinedInput,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import { getTypeProduct,createType} from "../helper/CallApiHelper";
import { useForm } from "react-hook-form";
// import "./styles.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(''),
  urlImg:yup.string().required(''),
  quantity:yup.string().required(''),
  
});
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 3, 0),
  },
  avater: {
    margin: "0 auto",
  },
  title: {
    padding: theme.spacing(5, 0, 3, 0),
  },
  submit: {
    margin: theme.spacing(5, 0, 0, 0),
  },
}));
export default function TypeProduct(props) {
  const classes=useStyles()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const [change,setChange]=useState(false)
  const handlerSubmit = async (values) => {
    try{
      const data= await createType(values)
      setChange(!change)
    }catch(e){
      console.log(e)
    }

    // // setDataList(arr=>[...arr,values])
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const columns = [
    {
      field: "name",
      headerName: "Loại sản phẩm",
      width: 400,
      type: "string",
      editable: true,
      renderCell: (params) => (
        <Box display="flex" flexWrap="wrap" p={1} m={1}>
          <Box p={1}>
            <Avatar
              variant="square"
              alt=""
              src={params.getValue(params.id, "image")}
            />
          </Box>
          <Box p={1}>
            <Typography variant="body1">
              <b>{params.getValue(params.id, "name")}</b>
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: "quantity",
      headerName: "Số lượng sản phẩm",
      width: 400,
      renderCell: (params) => (
        <Box p={1}>
          <Typography variant="body1">
            <b>{params.getValue(params.id, "quantity")}</b>
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Sản phẩm
          </Typography>
        </Box>
      ),
    },
  ];

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const data = await getTypeProduct();
    const tmp = data.map((index, key) => ({
      name: index.name,
      image: index.urlImg,
      quantity: index.quantity,
    }));
    setRows(tmp);
    setLoading(false);
  });
  useEffect(() => {
    getData();
    
  }, [change]);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Box>
        <Box display="flex" flexWrap="wrap" mb={2}>
          <Box mr={2}>
            <Typography variant="h6">
              <b>Danh sách loại sản phẩm</b>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Đang có <b>{rows.length} </b> loại sản phẩm
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

            <Button variant="contained" color="primary" onClick={handleClickOpen}>
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
        loading={loading}
      />

      <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          disableBackdropClick
          disableEscapeKeyDown
        >
          <DialogContent>
            <Avatar>
              <PersonAddTwoToneIcon />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
              Thêm loại sản phẩm
            </Typography>
            <form onSubmit={handleSubmit(handlerSubmit)}>
              <TextField 
                variant="outlined"
                label="name" 
                {...register("name")}
                />
                 <TextField 
                variant="outlined"
                label="url image" 
                {...register("urlImg")}
                />
                 <TextField 
                variant="outlined"
                label="quantity" 
                {...register("quantity")}
                />
              
              <Button
                className={classes.submit}
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
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
  );
}
