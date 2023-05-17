const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const parametro = req.query.parametro;
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>URL Parameter Example</title>
    </head>
    <body>
        <p>El valor del parámetro "parametro" es: ${parametro}</p>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});