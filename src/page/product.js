import React, { useEffect, useState, useCallback } from "react";
import { DataGrid } from "@material-ui/data-grid";
import {
  Avatar,
  Box,
  Button,
  Typography,
  OutlinedInput,
} from "@material-ui/core";
import { getProduct} from "../helper/CallApiHelper";

export default function Product(props) {
  const columns = [
    {
      field: "name",
      headerName: "Sản phẩm",
      width: 600,
      type: "string",
      editable: true,
      renderCell: (params) => (
        <Box display="flex" flexWrap="wrap" p={1} m={1}>              
            
                <Box p={1}>
                    <Avatar
                        variant="square"
                        alt=""
                        src={params.getValue(params.id,"image")[0]}
                      />
                </Box>
            
          <Box p={1}>
            <Typography variant="inherit">
              <b>{params.getValue(params.id,"name")}</b>
            </Typography>
          </Box>    
      </Box>  
       )
    },
  
    {
      field: "loaiSP",
      headerName: "Loại sản phẩm",
      width: 300,
    },
    {
      field: "brand",
      headerName: "Thương hiệu",
      width: 200,
      type: "string",
      editable: true,
     
    },
  ];

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const data = await getProduct();
    console.log(data)
    const tmp = data.map((index, key) => ({
      id: key + 1,
      name: index.name,
      image: index.images,
      loaiSP: index.categories,
      brand:index.brand
    }));
    setRows(tmp);
    setLoading(false);
  });
  useEffect(() => {
    getData();
    
  }, []);
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

            <Button variant="contained" color="primary">
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
    </div>
  );
}
