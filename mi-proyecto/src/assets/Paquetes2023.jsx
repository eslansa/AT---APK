import { Box, Card, CardContent, CardHeader, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";



export default function Paquete2023 () {

    const [paquete, setPaquete] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/consulta2')
            .then((response) => response.json())
            .then((data) => setPaquete(data));
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

    return(
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
              title={
                <Typography variant="h6" color="white">
                 Servicio Estrella 2021
                </Typography>
              }
            />  
          <CardContent sx={{ p:3, mb:0 }}>     
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{backgroundColor: grayColor[11] }}>
                <TableRow>
                  <TableCell>Nombre del Paquete</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Costo</TableCell>
                  <TableCell>Metodo de Pago</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paquete.map(paquete => (
                  <TableRow key={paquete.id_paquete}>
                    <TableCell>{paquete.nombre}</TableCell>
                    <TableCell>{paquete.fecha}</TableCell>
                    <TableCell>{paquete.costo}</TableCell>
                    <TableCell>{paquete.metodo_pago}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </CardContent> 
          </Card>
        </Grid>
      </Grid>
    );
}