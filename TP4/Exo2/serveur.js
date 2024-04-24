'use strict';

const express = require ('express');
const app = express();
const api = require('./api/api');


app.use(express.static('public'));
app.use('/api', api);
app.listen(8080, () => {

});


