const express = require('express');
const cors = require('cors');
const app = express();
const { Client } = require('pg');
const db = {
  user: 'postgres',
  host: 'localhost',
  database: 'AT',
  password: 'eslan',
  port: 5432,
};

const puerto = 3000;

app.use(cors());
app.use(express.json());




const cliente = new Client(db);
cliente.connect();

//Tablas

app.get("/clientes", async (request, response) => {
    try {
        const results = await cliente.query('SELECT * FROM "Cliente"');
        response.json(results.rows);
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        response.status(500).send('Error al realizar la consulta');
    }
});

app.get("/hoteles", async (request, response) => {
    try {
        const results = await cliente.query('SELECT * FROM "Hotel"');
        response.json(results.rows);
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        response.status(500).send('Error al realizar la consulta');
    }
});

app.get("/paquete", async (request, response) => {
  try {
      const results = await cliente.query('SELECT * FROM "Paquete"');
      response.json(results.rows);
  } catch (error) {
      console.error('Error al realizar la consulta:', error);
      response.status(500).send('Error al realizar la consulta');
  }
});

//Consultas

app.get("/consulta1", async (request, response) => {
    try {
        const results = await cliente.query('SELECT * FROM consulta_1;');
        response.json(results.rows);
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        response.status(500).send('Error al realizar la consulta');
    }
});

app.get("/consulta2", async (request, response) => {
  try {
      const results = await cliente.query('SELECT * FROM consulta_2;');
      response.json(results.rows);
  } catch (error) {
      console.error('Error al realizar la consulta:', error);
      response.status(500).send('Error al realizar la consulta');
  }
});

app.get("/consulta3", async (request, response) => {
    try {
        const results = await cliente.query('Select * from consulta_3');
        response.json(results.rows);
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        response.status(500).send('Error al realizar la consulta');
    }
});


app.get("/consulta_4", async (request, response) => {
  try {
      const results = await cliente.query('SELECT * FROM consulta_4');
      response.json(results.rows);
  } catch (error) {
      console.error('Error al realizar la consulta:', error);
      response.status(500).send('Error al realizar la consulta');
  }
});

app.get("/consulta_5", async (request, response) => {
  try {
      const results = await cliente.query('SELECT * FROM consulta_5');
      response.json(results.rows);
  } catch (error) {
      console.error('Error al realizar la consulta:', error);
      response.status(500).send('Error al realizar la consulta');
  }
});

app.get("/consulta_6", async (request, response) => {
  try {
      const results = await cliente.query('SELECT * FROM consulta_6');
      response.json(results.rows);
  } catch (error) {
      console.error('Error al realizar la consulta:', error);
      response.status(500).send('Error al realizar la consulta');
  }
});

//Cliente Insert-Update-Delete

app.delete("/clientes/:id", async (request, response) => {
  const id_cliente = request.params.id;

  try {
      const rowCount = await deleteCliente(id_cliente);
      if (rowCount > 0) {
          response.status(200).send('Cliente eliminado correctamente');
      } else {
          response.status(404).send('Cliente no encontrado');
      }
  } catch (error) {
      console.error('Error al eliminar el cliente:', error);
      response.status(500).send('Error al eliminar el cliente');
  }
});


app.post('/clientes', async (request, response) => {
  const { nombre, apellidos, edad, telefono, pais } = request.body;

  try {
    const result = await cliente.query(
      'INSERT INTO "Cliente" (nombre, apellidos, edad, telefono, pais) VALUES (\$1, \$2, \$3, \$4, \$5) RETURNING *',
      [nombre, apellidos, edad, telefono, pais]
    );

    response.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al agregar el cliente:', error);
    response.status(500).send('Error al agregar el cliente');
  }
});

async function deleteCliente(id_cliente) {
  try {
    const res = await cliente.query(
      'DELETE FROM "Cliente" WHERE id_cliente = \$1',
      [id_cliente]
    );

    return res.rowCount;
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
    throw error;
  }
}

async function updateCliente(id_cliente, data) {
  try {
    const { nombre, apellidos, edad, telefono, pais } = data;
    const res = await cliente.query(
      `UPDATE "Cliente" SET nombre = \$1, apellidos = \$2, edad = \$3, telefono = \$4, pais = \$5 WHERE id_cliente = \$6`,
      [nombre, apellidos, edad, telefono, pais, id_cliente]
    );

    return res.rowCount;
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
    throw error;
  }
}

app.put('/clientes/:id', async (request, response) => {
  const id_cliente = request.params.id;
  const data = request.body;

  try {
    const rowCount = await updateCliente(id_cliente, data);
    if (rowCount > 0) {
      response.status(200).send('Cliente actualizado correctamente');
    } else {
      response.status(404).send('Cliente no encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
    response.status(500).send('Error al actualizar el cliente');
  }
});

//Funciones generales

app.get("/funcion2", async (request, response) => {
  try {
    const anio = request.query.anio || '2021';
    const transporte = request.query.transporte || 'Aereo';

    const results = await cliente.query(
      `SELECT * FROM funcion2(${anio}, '${transporte}')`,
    );
    response.json(results.rows);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    response.status(500).send('Error al realizar la consulta');
  }
});


app.listen(puerto, () => {
    console.log(`serverejecuntandoseen:${puerto}`)
});
