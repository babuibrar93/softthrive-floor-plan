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

import "../styles/planStyles.css";

const Plan = () => {
  const { state } = useLocation();

  return (
    <>
      <Typography style={{ fontSize: "100px" }}>Floor Plan</Typography>
      <Typography>
        Room Width - {state.roomWidth} meter || Room Length - {state.roomLength}{" "}
        meter
      </Typography>

      <Grid container spacing={1} sx={{ m: 2 }}>
        <Grid>
          <Card
            className="roomCard"
            style={{
              width: `${state.actualRoomWidth}px`,
              height: `${state.newRoomLength}px`,
              position: "absolute",
              backgroundColor: "#e3edf7",
              left: `${state.windowWidth}px`,
              boxShadow:
                "-6px -6px 12px hsla(0,0%,100%,.5),6px 6px 12px rgba(12,0,58,.1)",
            }}
          >
            {state?.newRectangleArray?.map((rectangle) => {
              if (
                rectangle.rectangleName &&
                rectangle.rectangleLength &&
                rectangle.rectangleWidth !== ""
              ) {
                return (
                  <Draggable grid={[25, 25]} bounds="parent">
                    <Card
                      sx={{ p: 1 }}
                      className="roomCard"
                      style={{
                        width: `${rectangle.rectangleWidth * state.ratio}px`,
                        height: `${rectangle.rectangleLength * state.ratio}px`,
                        cursor: "move",
                        border: "1px solid black",
                        background: "red",
                        position: "absolute",
                        backgroundColor: "#edf0f3",
                        boxShadow:
                          "-6px -6px 12px hsla(0,0%,100%,.5),6px 6px 12px rgba(12,0,58,.1)",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          color: "black",
                          alignItems: "center",
                        }}
                      >
                        {rectangle.rectangleName}
                      </div>
                    </Card>
                  </Draggable>
                );
              }
            })}
          </Card>
        </Grid>
      </Grid>
    </>
    // </div>
  );
};

export default Plan;
