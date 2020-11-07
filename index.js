const express = require('express');
const path = require('path');
const logger = require('./middleware/Logger');

const app = express();

// init middleware
// app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder created.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./router/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`e dey run for port ${PORT}`);
});
