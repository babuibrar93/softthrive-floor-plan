import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rectangleLayout from "./rectangle.js";

import {
  Card,
  Grid,
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  ButtonGroup,
  FormControl,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

import "../styles/planStyles.css";

const CreatePlan = () => {
  const navigate = useNavigate();
  const [roomWidth, setRoomWidth] = useState("1250px");
  const [roomHeight, setRoomHeight] = useState("500px");

  let [count, setCount] = useState(0);

  // const [rectangleName, setRectangleName] = useState("ff");
  // const [rectangleWidth, setRectangleWidth] = useState("200px");
  // const [rectangleHeight, setRectangleHeight] = useState("100px");

  const [rectangleArray, setRectangleArray] = useState([]);
  const newRectangleArray = rectangleArray.slice(0, 10);

  const [showMessage, setShowMessage] = useState(false);

  const handleDecrement = (e, index) => {
    e.preventDefault();
    count > 0 && setCount(count - 1);
    setShowMessage(false);

    console.log("hand", index);
    rectangleArray.splice(index, 1);

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    count < 10 && setCount(count + 1);
    setRectangleArray([...rectangleArray, count]);
    if (count === 10) {
      setShowMessage(true);
    }

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    let array = [...rectangleArray];
    array.push({
      rectangleName: "",
      rectangleWidth: "",
      rectangleHeight: "",
    });
    setRectangleArray(array);

    return () => clearTimeout(timer);
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    console.log("handleNextButton");

    navigate("/plan", {
      state: {
        roomWidth,
        roomHeight,
        newRectangleArray,
      },
    });
  };

  const changeFeild = (e, index) => {
    e.preventDefault();
    let array = [...rectangleArray];
    array[index][e.target.name] = e.target.value;
    setRectangleArray(array);
  };

  return (
    <>
      <Grid className="createPlaneForm">
        <FormControl autoComplete="off" className="form">
          <Typography style={{ fontSize: "100px" }}>Floor Plan</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  p: 5,
                  alignItems: "center",
                  backgroundColor: "#e3edf7",
                }}
              >
                <Typography>
                  <b>Room Size</b>
                </Typography>

                <TextField
                  color="success"
                  label="Room Width"
                  placeholder="Enter Room Width"
                  value={roomWidth}
                  onChange={(e) => setRoomWidth(e.target.value)}
                />
                <TextField
                  color="success"
                  label="Room Height"
                  placeholder="Enter Room Height"
                  value={roomHeight}
                  onChange={(e) => setRoomHeight(e.target.value)}
                />
              </Card>
            </Grid>

            <Grid item xs={3} md={12}>
              <Card sx={{ p: 3 }} style={{ backgroundColor: "#e3edf7" }}>
                <ButtonGroup
                  color="primary"
                  variant="contained"
                  aria-label="outlined primary button group"
                  className="buttonGroup"
                  size="small"
                >
                  <Button className="buttons">Number 0f Rectangles - {count} </Button>
                  <Button className="buttons" onClick={handleIncrement}>
                    +
                  </Button>
                </ButtonGroup>
                <Box>
                  <Box>
                    {showMessage === true
                      ? "You can only add upto 10 rectangles"
                      : null}
                  </Box>
                </Box>
                {newRectangleArray?.map((item, index) => {
                  console.log("item", item, index);
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        mt: 5,
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        <b>{index + 1}</b>
                      </Typography>
                      <TextField
                        key={index}
                        color="success"
                        label="Rectangle Name"
                        placeholder="Enter Rectangle Name"
                        value={item.rectangleName}
                        name="rectangleName"
                        onChange={(e) => changeFeild(e, index)}
                        style={{ width: "20%" }}
                      />
                      <TextField
                        color="success"
                        label="Rectangle Width"
                        placeholder="Enter Rectangle Width"
                        value={item.rectangleWidth}
                        name="rectangleWidth"
                        onChange={(e) => changeFeild(e, index)}
                        style={{ width: "20%" }}
                      />
                      <TextField
                        color="success"
                        label="Rectangle Height"
                        placeholder="Enter Rectangle Height"
                        value={item.rectangleHeight}
                        name="rectangleHeight"
                        onChange={(e) => changeFeild(e, index)}
                        style={{ width: "20%" }}
                      />
                      <Delete
                        sx={{ color: "black" }}
                        onClick={(e) => handleDecrement(e, index)}
                        style={{ cursor: "pointer" }}
                        size="large"
                      />
                    </Box>
                  );
                })}
              </Card>
              <Stack sx={{ mt: 3 }}>
                <div>
                  <Button
                    className="btn btn-block buttons"
                    fullWidth
                    type="submit"
                    variant="contained"
                    size="large"
                    onClick={handleNextButton}
                    // style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                  >
                    Next
                  </Button>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </>
  );
};

export default CreatePlan;
