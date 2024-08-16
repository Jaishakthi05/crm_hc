// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const bcrypt = require('bcryptjs');   

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

//  const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',  
//   database: 'mydatabase'
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected1 to the MySQL database!');
// });

//  app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   db.query('SELECT * FROM users WHERE user = ?', [email], (err, results) => {
//     if (err) throw err;

//     if (results.length === 0) {
//       return res.status(401).send('Invalid Username or Password!!');
//     }

//     const user = results[0];

//     bcrypt.compare(password, user.password, (err, isMatch) => {
//       if (err) throw err;

//       if (isMatch) {
//         return res.json({ success: true, userType: user.email === 'admin' ? 'admin' : 'user' });
//       } else {
//         return res.status(401).send('Invalid Username or Password!!');
//       }
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'mydatabase'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

