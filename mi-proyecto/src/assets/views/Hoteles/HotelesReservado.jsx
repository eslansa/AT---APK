import { Box, CardContent, CardHeader, Grid } from "@mui/material";
import BasicCard from "./CardHoteles";
import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/joy";
import BasicCard2 from "./CardHotelesReservado";



export default function HotelesReservado() {

    const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
        fetch('http://localhost:3000/consulta1')
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
        <CardContent sx={{ p:3, mb:0 }}> <Grid container spacing={2} >
                            {hoteles.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.nombre}>
                                    <BasicCard2 {...item} />
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