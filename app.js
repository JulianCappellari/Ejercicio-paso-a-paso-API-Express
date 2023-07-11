const express = require('express');
const app = express();
app.use(express.json())

const librosRouter = require('./routes/libros.js')

const errorHandler = require('./middleware/errorHandler.js')

app.use('/libros', librosRouter)

app.use(errorHandler)

app.listen(3005, () => {
    console.log('Servidor iniciado en el puerto 3005')
})