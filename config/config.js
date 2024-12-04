module.exports = {
  "development": {
    "username": "rifal", // Ganti dengan username MySQL Anda
    "password": "1933", // Ganti dengan password MySQL Anda
    "database": "advokataDB", // Ganti dengan nama database Anda
    "host": "/cloudsql/artful-mystery-441112-u2:asia-southeast2:advokata-db", // Ganti dengan connection name instance Cloud SQL
    "dialect": "mysql",
    "logging": false // Optional, set to false to disable logging
  },
  "test": {
    "username": "rifal", // Ganti dengan username MySQL Anda
    "password": "1933", // Ganti dengan password MySQL Anda
    "database": "advokataDB", // Ganti dengan nama database Anda
    "host": "/cloudsql/artful-mystery-441112-u2:asia-southeast2:advokata-db", // Ganti dengan connection name instance Cloud SQL
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "username": "rifal", // Ganti dengan username MySQL Anda
    "password": "1933", // Ganti dengan password MySQL Anda
    "database": "advokataDB", // Ganti dengan nama database Anda
    "host": "/cloudsql/artful-mystery-441112-u2:asia-southeast2:advokata-db", // Ganti dengan connection name instance Cloud SQL
    "dialect": "mysql",
    "logging": false // Optional, set to false to disable logging in production
  }
};
