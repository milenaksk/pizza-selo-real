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
    console.error("cu");
    const result = db.execSync('INSERT INTO contas (email, senha) VALUES (?, ?)', [email, senha]);
    if (result.lastInsertRowId != undefined) {
      callback(result.lastInsertRowId);
    } else {
      callback(null);
    }
};

const encontrarConta = (email, senha, callback) => {
  const rows = db.getAllSync('SELECT * FROM contas WHERE email = ? AND senha = ?', [email, senha]);
  if (rows.length > 0) {
    callback(rows._array[0]);
  } else {
    callback(null);
  }
};

const encontrarEmail= (email, callback) => {
  const rows = db.getAllSync('SELECT * FROM contas WHERE email = ?', [email]);
  if (rows.length > 0) {
    callback(rows._array[0]);
  } else {
    callback(null);
  }
};

export { adicionarConta, encontrarConta, encontrarEmail };