const mysqli = require('mysqli');

const conn = mysqli.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pintop@ssw0rdrj200100p',
  database: 'schooldb'
});

conn.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }

  console.log('Connected to database as id ' + conn.threadId);
});
