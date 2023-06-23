const { createPool } = require('mysql2');

const pool = createPool({
    host: "localhost",
    user: "root",
    // password: "",
    database: "Vaccination",
    connectionLimit: 10
});

pool.query(`SELECT * FROM sys.user`, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res);
});
