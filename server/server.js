const express = require('express');
const app = express();
const port = 3333;

//serve the static files in dist
app.use(express.static(`${__dirname}/../client/dist/`));

app.listen(port, () => console.log('listening on port : ',port ))