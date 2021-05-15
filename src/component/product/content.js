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
  appbarProduct: {
    // backgroundColor:
  },
  imageClass: {
    width: 200,
    height: 100,
  },
  description: {
    width: 300,
  },
  buttonProduct: {
    backgroundColor: "rgb(245, 66, 111)",
    margin: 10,
  },
});

export default function ContentProduct() {
  const history = useHistory();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:4000/product/all",
      data: null,
    })
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const xemSP = () => {
    history.replace("/home");
  };
  const classes = useStyles();
  let identified = 1;
  return (
    <div className="content">
      <Button
        className={classes.buttonProduct}
        variant="contained"
        color="primary"
        onClick={xemSP}
      >
        Trang home
      </Button>

      <AppBar id="appbar-product" position="static">
        <Toolbar>Danh sách sản phẩm</Toolbar>
      </AppBar>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>images</StyledTableCell>
              <StyledTableCell>categories</StyledTableCell>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell>ratingsAverage</StyledTableCell>
              <StyledTableCell>ratingsQuantity</StyledTableCell>
              <StyledTableCell>price</StyledTableCell>
              <StyledTableCell>description</StyledTableCell>
              <StyledTableCell>imageCover</StyledTableCell>
              <StyledTableCell>brand</StyledTableCell>
              <StyledTableCell>date</StyledTableCell>
              <StyledTableCell>__v</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={identified}>
                <StyledTableCell>
                  {row.images.map((r) => (
                    <div>
                      <img
                        src={r}
                        alt="image error"
                        className={classes.imageClass}
                      ></img>
                      <br />
                    </div>
                  ))}
                </StyledTableCell>

                <StyledTableCell>
                  {row.categories.map((r) => (
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
                  {<div className={classes.description}>{row.description}</div>}
                </StyledTableCell>
                <StyledTableCell>
                  <div className={classes.description}>{row.imageCover}</div>
                </StyledTableCell>
                <StyledTableCell>{row.brand}</StyledTableCell>

                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>{row.__v}</StyledTableCell>

                {(identified = identified + 1)}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
