const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

let app = express();
let port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../public')));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
