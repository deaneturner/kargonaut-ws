import {loginUser} from './auth.route';
import { getAllItems } from './get-items.route';
import { saveItem } from './save-item.route';

const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(process.cwd() + '/dist/demo'));

app.route('/api/login').post(loginUser);
app.route('/api/item').get(getAllItems);
app.route('/api/item/:id').put(saveItem);

app.get('/*', (req, res) => {

  res.sendFile(path.join(process.cwd() + '/dist/demo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
