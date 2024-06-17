import { openDatabase }  from 'expo-sqlite';

const db = openDatabase('PizzaSeloReal.db');

db.transaction((tx) => {
  tx.executeSql(
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
    db.transaction((tx) => {
      tx.executeSql(
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
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM contas WHERE email = ? AND senha = ?', [email, senha], (_, { rows }) => {
        if (rows.length > 0) {
          callback(rows._array[0]);
        } else {
          callback(null);
        }
      });
    });
};

export { adicionarConta, encontrarConta };