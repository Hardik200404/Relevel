const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');
morgan.token('host', function(req, res){
    return req.hostname;
});
app.listen(3000, () => {
    console.debug('App listening on :3000');
});