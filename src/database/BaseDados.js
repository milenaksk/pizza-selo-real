import * as SQLite  from 'expo-sqlite';

const db = SQLite.openDatabaseSync('PizzaSeloReal');

db.withTransactionSync(() => {
  db.execSync(
    `
    CREATE TABLE IF NOT EXISTS contas(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        email TEXT, 
        senha TEXT
    );
    `
  );
});

const adicionarConta = (email, senha, callback) => {
    const result = db.runSync('INSERT INTO contas (email, senha) VALUES (lower(?), ?)', [email, senha]);
    console.log(result);
    if (result != null && result.lastInsertRowId != null) {
      callback(result.lastInsertRowId);
    } else {
      callback(null);
    }
};

const encontrarConta = (email, senha, callback) => {
  const rows = db.getAllSync('SELECT * FROM contas WHERE email = lower(?) AND senha = ?', [email, senha]);
  if (rows.length > 0) {
    callback(rows[0]);
  } else {
    callback(null);
  }
};

const encontrarEmail= (email, callback) => {
  const rows = db.getAllSync('SELECT * FROM contas WHERE email = lower(?)', [email]);
  if (rows.length > 0) {
    callback(rows[0]);
  } else {
    callback(null);
  }
};

export { adicionarConta, encontrarConta, encontrarEmail };