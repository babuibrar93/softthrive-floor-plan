import React, { useState, useEffect } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Grid,
  Stack,
  Button,
  TextField,
  Typography,
  ButtonGroup,
} from "@mui/material";

import "../styles/planStyles.css";

const CreatePlan = () => {
  const navigate = useNavigate();
  const [roomWidth, setRoomWidth] = useState("600px");
  const [roomHeight, setRoomHeight] = useState("600px");

  let [count, setCount] = useState(0);
  const [rectangleWidth, setRectangleWidth] = useState("200px");
  const [rectangleHeight, setRectangleHeight] = useState("100px");

  const [rectangleArray, setRectangleArray] = useState([]);

  console.log("count", rectangleArray);

  const formik = useFormik({});

  const handleDecrement = (e) => {
    e.preventDefault();
    count > 0 && setCount(count - 1);
    const newArray = rectangleArray.pop();
    setRectangleArray(newArray.filter((item) => item !== count));
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    count < 10 && setCount(count + 1);

    setRectangleArray([...rectangleArray, count]);
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    console.log("handleNextButton");

    navigate("/plan", {
      state: { roomWidth, roomHeight, rectangleWidth, rectangleHeight },
    });
  };

  return (
    <>
      <Grid className="createPlaneForm">
        <FormikProvider value={formik}>
          <Form noValidate autoComplete="off" className="form">
            <div class="tittle">
              <h5>Plan</h5>
            </div>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Room Width"
                      placeholder="Enter Room Width"
                      value={roomWidth}
                      onChange={(e) => setRoomWidth(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      label="Room Height"
                      placeholder="Enter Room Height"
                      value={roomHeight}
                      onChange={(e) => setRoomHeight(e.target.value)}
                    />
                  </Stack>
                </Card>
              </Grid>

              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <ButtonGroup
                    color="success"
                    variant="contained"
                    aria-label="outlined primary button group"
                    className="buttonGroup"
                    size="small"
                  >
                    <Button className="buttons" onClick={handleDecrement}>
                      -
                    </Button>
                    <Button className="buttons">
                      Number 0f Rectangles - {count}
                    </Button>
                    <Button className="buttons" onClick={handleIncrement}>
                      +
                    </Button>
                  </ButtonGroup>

                  {rectangleArray?.map((item, index) => {
                    console.log(index)
                    return (
                      <Stack
                        spacing={3}
                        style={{ marginTop: "25px" }}
                        key={index}
                      >
                        <TextField
                          fullWidth
                          label="Rectangle Width"
                          placeholder="Enter Rectangle Width"
                          value={rectangleWidth}
                          onChange={(e) => setRectangleWidth(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          label="Room Height"
                          placeholder="Enter Rectangle Height"
                          value={rectangleHeight}
                          onChange={(e) => setRectangleHeight(e.target.value)}
                        />
                        <hr />
                      </Stack>
                    );
                  })}
                </Card>
                <Stack sx={{ mt: 3 }}>
                  <div>
                    <Button
                      color="success"
                      className="btn btn-block"
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
          </Form>
        </FormikProvider>
      </Grid>
    </>
  );
};

export default CreatePlan;
