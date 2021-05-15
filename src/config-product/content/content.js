import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./content.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import axios from "axios";

import { useHistory } from "react-router-dom";
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Content() {
  const [rows, setRows] = useState([]);
  const history = useHistory();
  const xemSP = () => {
    history.replace("/product");
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:4000/account/accounts",
      data: null,
    })
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();
  let identified = 1;
  return (
    <div className="content">
      <Button
        id="button-themsp"
        variant="contained"
        color="primary"
        onClick={xemSP}
      >
        Xem sản phẩm
      </Button>

      <AppBar id="appbar-product" position="static">
        <Toolbar>Account</Toolbar>
      </AppBar>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>_id</StyledTableCell>
              <StyledTableCell>username</StyledTableCell>
              <StyledTableCell>password</StyledTableCell>
              <StyledTableCell>email</StyledTableCell>
              <StyledTableCell>__v</StyledTableCell>
              <StyledTableCell>address</StyledTableCell>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell>phone</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={identified}>
                <StyledTableCell component="th" scope="row">
                  {row._id}
                </StyledTableCell>

                <StyledTableCell>{row.username}</StyledTableCell>

                <StyledTableCell>{row.password}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>

                <StyledTableCell>{row.__v}</StyledTableCell>
                {/* <Button className='sua-xoa' variant="contained" color="primary">Sửa</Button>
                            <Button className='sua-xoa' variant="contained" color="primary">xóa</Button> */}
                <StyledTableCell>{row.address}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                {(identified = identified + 1)}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
