//Install express server
const express = require('express');
const path = require('path');
console.log('server.js file is hosting');
const app = express();

// Serve only the static files form the dist directory (set the dist file directory location)
app.use(express.static(__dirname + '/dist/podcast-angular'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/podcast-angular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);