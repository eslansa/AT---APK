import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardHeader, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, makeStyles } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AgregarClienteForm from './AgregarClienteForm';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import FormDialog from '../FormReserva';


const Reservar = () => {
  
  const [clientes, setClientes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCliente, setCurrentCliente] = useState({});
  const [openDialog, setOpenDialog] = useState(false);


  useEffect(() => {
    fetch('http://localhost:3000/clientes')
      .then((response) => response.json())
      .then((data) => setClientes(data));
  }, []);

  const eliminarCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/clientes/${id}`);
      setClientes(clientes.filter((cliente) => cliente.id_cliente !== id));
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  };

  const handleAgregarCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  const editarCliente = (id) => {
    setIsEditing(true);
    setCurrentCliente(clientes.find((cliente) => cliente.id_cliente === id));
    setOpenEditDialog(true);
  };

  const handleEditInputChange = (e) => {
    setCurrentCliente({ ...currentCliente, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/clientes/${currentCliente.id_cliente}`, currentCliente);
      setClientes(
        clientes.map((cliente) =>
          cliente.id_cliente === currentCliente.id_cliente
            ? currentCliente
            : cliente
        )
      );
      setIsEditing(false);
      setOpenEditDialog(false);
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
    }
  };

  
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

  //Dialog
  const [openEditDialog, setOpenEditDialog] = useState(false);


  const handleConfirmDelete = (id) => {
    setOpenDialog(false);
    eliminarCliente(id);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card elevation={8}>
          <CardHeader
            title={
              <Typography variant="h6" color="white">
                Listado de Clientes
              </Typography>
            }
          />
          <Card>
            <AgregarClienteForm onSubmit={handleAgregarCliente} />
          </Card>
          <Dialog
      open={openEditDialog}
      onClose={() => setOpenEditDialog(false)}
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSave();
        }
      }}
    >
      <form onSubmit={handleSave}>
        <DialogTitle>Editar Cliente</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            name="nombre"
            value={currentCliente.nombre}
            onChange={handleEditInputChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Apellido"
            name="apellidos"
            value={currentCliente.apellidos}
            onChange={handleEditInputChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Edad"
            name="edad"
            value={currentCliente.edad}
            onChange={handleEditInputChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Telefono"
            name="telefono"
            value={currentCliente.telefono}
            onChange={handleEditInputChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="País"
            name="pais"
            value={currentCliente.pais}
            onChange={handleEditInputChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancelar</Button>
          <Button type="submit" color="primary">
            Guardar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
          <CardContent sx={{ p: 3, mb: 0 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: grayColor[11] }}>
                  <TableRow>
                    <TableCell align='center'>Nombre</TableCell>
                    <TableCell align='center'>Apellido</TableCell>
                    <TableCell align='center'>Edad</TableCell>
                    <TableCell align='center'>Telefono</TableCell>
                    <TableCell align='center'>País</TableCell>
                    <TableCell align='center'>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clientes.map((cliente) => (
                    <TableRow key={cliente.id_cliente}>
                      <TableCell align='center'>{cliente.nombre}</TableCell>
                      <TableCell align='center'>{cliente.apellidos}</TableCell>
                      <TableCell align='center'>{cliente.edad}</TableCell>
                      <TableCell align='center'>{cliente.telefono}</TableCell>
                      <TableCell align='center'>{cliente.pais}</TableCell>
                      <TableCell align='center'>
                        <Button
                          onClick={() => setOpenDialog(true)}
                        >
                          <DeleteIcon />
                        </Button>
                        <Dialog
                          open={openDialog}
                          onClose={() => setOpenDialog(false)}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Confirmar eliminación"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              ¿Estás seguro de que deseas eliminar este cliente?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => setOpenDialog(false)}
                              color="primary"
                            >
                              Cancelar
                            </Button>
                            <Button
                              onClick={() => handleConfirmDelete(cliente.id_cliente)}
                              color="secondary"
                              autoFocus
                            >
                              Eliminar
                            </Button>
                          </DialogActions>
                        </Dialog>

                        <Button onClick={() => editarCliente(cliente.id_cliente)}>
                          <ModeEditIcon />
                        </Button>
                      </TableCell>
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

export default Reservar;
