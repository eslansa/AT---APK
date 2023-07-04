import React, { useState } from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import axios from 'axios';

const AgregarClienteForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [pais, setPais] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/clientes', {
        nombre,
        apellidos,
        edad,
        telefono,
        pais,
      });

      setNombre('');
      setApellidos('');
      setEdad('');
      setTelefono('');
      setPais('');

      console.log('Cliente agregado:', response.data);
    } catch (error) {
      console.error('Error al agregar el cliente:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
    <Grid>
      <TableContainer component={Paper} sx={{ padding: '12px' }}>
        <Table>
          <TableHead sx={{ backgroundColor: 'white' }}>
            {/* Resto del código para el encabezado de la tabla */}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Apellidos"
                  variant="outlined"
                  fullWidth
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Edad"
                  variant="outlined"
                  fullWidth
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Teléfono"
                  variant="outlined"
                  fullWidth
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="País"
                  variant="outlined"
                  fullWidth
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button type="submit" variant="contained" color="primary">
                  Reservar
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </form>
  
  );
};

export default AgregarClienteForm;
