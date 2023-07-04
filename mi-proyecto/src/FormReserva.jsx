import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useState } from 'react';

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [clientes, setClientes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCliente, setCurrentCliente] = useState({});
  const editarCliente = (id) => {
    setIsEditing(true);
    setCurrentCliente(clientes.find((cliente) => cliente.id_cliente === id));
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
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Editar Cliente</Typography>
                  <TextField
                    label="Nombre"
                    name="nombre"
                    value={currentCliente.nombre}
                    onChange={handleEditInputChange}
                  />
                  <TextField
                    label="Apellido"
                    name="apellidos"
                    value={currentCliente.apellidos}
                    onChange={handleEditInputChange}
                  />
                  <TextField
                    label="Edad"
                    name="edad"
                    value={currentCliente.edad}
                    onChange={handleEditInputChange}
                  />
                  <TextField
                    label="Telefono"
                    name="telefono"
                    value={currentCliente.telefono}
                    onChange={handleEditInputChange}
                  />
                  <TextField
                    label="País"
                    name="pais"
                    value={currentCliente.pais}
                    onChange={handleEditInputChange}
                  />
                  <Button onClick={handleSave} color="primary" variant="contained">
                    Guardar
                  </Button>
                </CardContent>
              </Card>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
