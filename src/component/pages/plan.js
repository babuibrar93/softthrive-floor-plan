import React from "react";

import {
  Card,
  Grid,
  Stack,
  Button,
  TextField,
  Typography,
  ButtonGroup,
} from "@mui/material";

import { useLocation } from "react-router-dom";
import Draggable from "react-draggable";

import style from "../styles/planStyles.css";

const Plan = () => {
  const { state } = useLocation();

  console.log("Plan props", state);
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "space-evenly" }}
          sx={{ mt: 5 }}
        >
          <Card
            sx={{ p: 5 }}
            className="roomCard"
            style={{
              width: `${state.roomWidth}`,
              height: `${state.roomHeight}`,
              boxShadow:
                "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
            }}
          ></Card>
          <Draggable >
            <Card
              sx={{ p: 5 }}
              className="roomCard"
              style={{
                width: `${state.rectangleWidth}`,
                height: `${state.rectangleHeight}`,
                cursor: 'move',
                boxShadow:
                  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
              }}
            ></Card>
          </Draggable>
        </Grid>
      </Grid>
    </>
  );
};

export default Plan;
