const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Document",
    {
      id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
      credential: {
        type: DataTypes.ENUM("DU", "LE", "LC", "CI", "PS"),
        defaultValue: "DU",
      },
      num: {
        type: DataTypes.NUMBER,
        alloNull: false,
      },
    },
    { timestamps: false }
  );
};


//este es un comentario para guardar cambios
