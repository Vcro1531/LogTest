const express = require('express');
const app = express();

//__dirname = 현재 디렉토리를 의미
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //ejs는 HTML에서 JS를 같이 쓸 수 있게 해주는 템플릿
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
	res.render('index.html');
});

app.get('/about', function (req, res) {
	res.render('about.html');
});

var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'example.org',
	user: 'bob',
	password: 'secret',
	database: 'my_db',
});

app.get('/db', function (req, res) {
	pool.getConnection(function (err, connection) {
		if (err) throw err; // not connected!

		// Use the connection
		connection.query('SELECT * FROM Test', function (error, results, fields) {
			res.send(JSON.stringify(results));
			console.log('results', results);
			// When done with the connection, release it.
			connection.release();

			// Handle error after the release.
			if (error) throw error;

			// Don't use the connection here, it has been returned to the pool.
		});
	});
});

const server = app.listen(3000, () => {
	console.log('The Server is running');
});
