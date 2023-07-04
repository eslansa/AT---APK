import { Box, Button, CardContent, CardHeader, Grid } from "@mui/material";
import BasicCard from "./CardHoteles";
import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/joy";
import { Link } from "react-router-dom";




export default function Hoteles() {

  const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hoteles')
      .then((response) => response.json())
      .then((data) => setHoteles(data));
  }, []);


  const Color = ["#00aeef", "#00aeef", "#009bef", "#00d3ee"];
  const grayColor = [
    "#999",
    "#777",
    "#3C4858",
    "#AAAAAA",
    "#D2D2D2",
    "#DDD",
    "#b4b4b4",
    "#555555",
    "#333",
    "#a9afbb",
    "#eee",
    "#e7e7e7",
  ];


  return (
    <>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card elevation={8}>
            <CardHeader sx={{
              display: "flex",
              alignItems: "center",
              margin: "0 1% 0 1%",
              borderRadius: "6px",
              top: "50px",
              bgcolor: Color[1],
            }}
            />

            <Grid container justifyContent="center" >
              <Button variant="soft" component={Link} to="/HotelesNA">
                Hoteles sin Actividades
              </Button>
              <Button variant="soft" component={Link} to="/Hoteles_Reservados">
                Reservado/ Francia-2023
              </Button>
              <Button variant="soft" component={Link} to="/HotelesPais">
                Reservado/ Brasil-2023
              </Button>
            </Grid>

            <CardHeader sx={{
              display: "flex",
              alignItems: "center",
              margin: "0 1% 0 1%",
              borderRadius: "6px",
              top: "50px",
              bgcolor: Color[1],
            }}
            />
            <CardContent sx={{ p: 3, mb: 0 }}> <Grid container spacing={2} >
              {hoteles.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                  <BasicCard {...item} />
                </Grid>
              ))}
            </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}