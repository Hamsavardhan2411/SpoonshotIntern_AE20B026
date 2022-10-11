import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const AddTable = ({ result }) => {
  async function handleChange(row) {
    console.log(row);
    const addData={
        bookName: row.volumeInfo.title ,
        authorName: row.volumeInfo.authors[0] ,
        publisher: row.volumeInfo.publisher,
        pages:row.volumeInfo.pageCount,
    }
    await axios({
        baseURL: "http://localhost:8000/inventory",
        method: "post",
        data: {addData},
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
  }
  return (
    <div>
      <Typography variant="h6" color={"blue"} fontSize={25}>
        Searched books{" "}
      </Typography>
      <div style={{ padding: "15px" }}>
        <Paper>
          <TableContainer elevation={20} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 18 }}>Book Name</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="left">
                    Author
                  </TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="center">
                    Pages
                  </TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="left">
                    Publisher
                  </TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="center">
                    Preview
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.length !== 0
                  ? result.items.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.volumeInfo.title}
                        </TableCell>
                        <TableCell align="left">
                          {row.volumeInfo.authors}
                        </TableCell>
                        <TableCell align="center">
                          {row.volumeInfo.pageCount}
                        </TableCell>
                        <TableCell align="left">
                          {row.volumeInfo.publisher}
                        </TableCell>
                        <TableCell align="center">
                          <a href={row.volumeInfo.previewLink}>Click</a>
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            onClick={() => handleChange(row)}
                          >
                            Add
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default AddTable;
