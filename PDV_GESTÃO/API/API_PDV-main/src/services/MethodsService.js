const db = require("../database");

const MethodsService = {
  createMethod: async ({ nome, logged }) => {
    const [data] = await db.query(
      "INSERT INTO metodo_pagamento(nome,id_loja) values (?,?)",
      [nome, logged]
    );
    return data;
  },

  getAll: async ({ logged }) => {
    const [data] = await db.query(
      "SELECT * FROM metodo_pagamento where id_loja = ?",
      [logged]
    );
    return data;
  },

  deleteMethod: async ({ idParam, logged }) => {
    const [data] = await db.query(
      "DELETE from metodo_pagamento where id = ? AND id_loja = ?",
      [idParam, logged]
    );
    return data;
  },
};

module.exports = MethodsService;
