import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Paquetes() {

  const [paquetes, setPaquetes] = useState([]);
  const [anio, setAnio] = useState('');
  const [transporte, setTransporte] = useState('');


  useEffect(() => {
    fetch('http://localhost:3000/paquete')
      .then((response) => response.json())
      .then((data) => setPaquetes(data));
  }, []);

  const buscarPaquetes = () => {
    fetch(`http://localhost:3000/funcion2?anio=${anio}&transporte=${transporte}`)
      .then((response) => response.json())
      .then((data) => setPaquetes(data));
  };

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
      <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
        <Card elevation={8} sx={{ width: "100%", p: 2 }}>
          <CardHeader
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "0 1% 0 1%",
              borderRadius: "6px",
              top: "50px",
              bgcolor: Color[1],
            }}
            title={
              <Typography variant="h6" color="white">
                Paquetes
              </Typography>
            }
          />
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ mb: 2, mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item sx={{ ml: 10 }} justifyContent="flex-start" display="flex" xs={12} >
                    <Grid item xs={2}>
                      <Button variant="outlined" component={Link} to="/Transporte">
                        Paquetes Terrestres
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="outlined" component={Link} to="/paquete2023">
                        Servicio Estrella 2021
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <Grid item xs={2}>
                      <TextField
                        label="Año"
                        value={anio}
                        onChange={(e) => setAnio(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        label="Transporte"
                        value={transporte}
                        onChange={(e) => setTransporte(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={buscarPaquetes}
                        sx={{ bgcolor: Color[1] }}
                      >
                        Buscar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <CardContent sx={{ p: 3, mb: 0 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: grayColor[11] }}>
                  <TableRow>
                    <TableCell>Nombre del Paquete</TableCell>
                    <TableCell>Metodo de Pago</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Costo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paquetes.map((paquete, index) => (
                    <TableRow key={`${paquete.id_cliente}-${index}`}>
                      <TableCell>{paquete.nombre}</TableCell>
                      <TableCell>{paquete.metodo_pago}</TableCell>
                      <TableCell>{paquete.fecha}</TableCell>
                      <TableCell>{paquete.costo}</TableCell>
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