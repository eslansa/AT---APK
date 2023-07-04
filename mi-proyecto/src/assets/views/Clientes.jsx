import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('/clientes')
      .then(res => setClientes(res.data))
      .catch(err => console.log(err));
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
                Listado de Clientes
              </Typography>
            }
          />  
        <CardContent sx={{ p:3, mb:0 }}>     
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{backgroundColor: grayColor[11] }}>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Edad</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>País</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.map(cliente => (
                <TableRow key={cliente.id_cliente}>
                  <TableCell>{cliente.nombre}</TableCell>
                  <TableCell>{cliente.apellido}</TableCell>
                  <TableCell>{cliente.edad}</TableCell>
                  <TableCell>{cliente.email}</TableCell>
                  <TableCell>{cliente.pais}</TableCell>
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
};

export default Clientes;