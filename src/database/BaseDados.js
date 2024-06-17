import * as SQLite  from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('PizzaSeloReal');

await db.execAsync(
`
CREATE TABLE IF NOT EXISTS contas(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    email TEXT, 
    senha TEXT
);
`
);

const adicionarConta = (email, senha, callback) => {
    db.withTransactionAsync(async () => {
      db.executeAsync(
        'INSERT INTO contas (email, senha) VALUES (?, ?)',
        [email, senha],
        (_, result) => {
          callback(result.insertId);
        },
        (_, error) => {
          console.error('Erro ao adicionar conta:', error);
          callback(null);
        }
      );
    });
};

const encontrarConta = (email, senha, callback) => {
  db.withTransactionAsync(async () => {
    db.executeAsync('SELECT * FROM contas WHERE email = ? AND senha = ?', [email, senha], (_, { rows }) => {
        if (rows.length > 0) {
          callback(rows._array[0]);
        } else {
          callback(null);
        }
      });
    });
};

const encontrarEmail= (email, callback) => {
  db.withTransactionAsync(async () => {
    db.executeAsync('SELECT * FROM contas WHERE email = ?', [email], (_, { rows }) => {
      if (rows.length > 0) {
        callback(rows._array[0]);
      } else {
        callback(null);
      }
    });
  });
};

export { adicionarConta, encontrarConta, encontrarEmail };