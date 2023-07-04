import { Box, Card, CardContent, CardHeader, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";



export default function Trasnporte() {

  const [funcion, setFuncion] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/consulta_4')
      .then((response) => response.json())
      .then((data) => setFuncion(data));
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
                Clientes Aereos sin escala en Mexico
              </Typography>
            }
          />
          <CardContent sx={{ p: 3, mb: 0 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: grayColor[11] }}>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellidos</TableCell>
                    <TableCell>Contacto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {funcion.map((funcion, index) => (
                    <TableRow key={index}>
                      <TableCell>{funcion.nombre}</TableCell>
                      <TableCell>{funcion.apellidos}</TableCell>
                      <TableCell>{funcion.telefono}</TableCell>
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