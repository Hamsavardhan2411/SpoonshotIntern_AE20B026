import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddTable from "./components/AddTable";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  async function handleDelete(_id) {
    await axios({
      baseURL: "http://localhost:8000/inventory",
      method: "delete",
      data: { _id },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/inventory").then((response) => {
      setFinalData(response.data);
    });
  });
  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setOpen("true");
    setIsAdd("true");
    // console.log('Hi')
    await axios({
      baseURL: "http://localhost:8000/books",
      method: "post",
      data: { book },
    })
      .then((data) => {
        console.log(data);
        setResult(data.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <NavBar />
      <Typography sx={{ paddingTop: 3 }} variant="h5" color={"blue"}>
        Add New Books
      </Typography>
      <br></br>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={2} md={2}>
            <TextField
              id="outlined-basic"
              label="Search Books"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={1} md={1}>
            <Box sx={{ paddingTop: 1 }}>
              {" "}
              <Button
                variant="contained"
                endIcon={<SearchIcon />}
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Box>
          </Grid>
        </Grid>
        
      </div>
      {isAdd?(
      <AddTable result={result} />)
      :(null)}
      <div>
        
        <Typography variant="h6" color={"blue"} fontSize={25}>
          Inventory{" "}
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {finalData.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.bookName}</TableCell>
                      <TableCell align="left">{row.authorName}</TableCell>
                      <TableCell align="center">{row.pages}</TableCell>
                      <TableCell align="left">{row.publisher}</TableCell>
                      <TableCell align="left">
                        <IconButton aria-label="delete">
                          <DeleteIcon onClick={() => handleDelete(row._id)} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default App;
