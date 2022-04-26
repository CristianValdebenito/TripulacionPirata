const mongoose = require("mongoose");
/* const uniqueValidator = require('mongoose-unique-validator'); */

const PirataSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Nombre del pirata obligatorio"],
      },
      image: {
        type: String,
        required: [true, "Imagen obligatoria"],
      },
      treasure: {
        type: Number,
        required: [true, "Cofres del tesoro obligatorio"],
      },
      catch: {
        type: String,
        required: [true, "valor captura obligatoria"],
      },
      position: {
        type: String,
        required: [true, "pocicion del pirata obligatorio"],
       /*  unique: true */
      },
      skill1: {
        type: Boolean
      },
      skill2: {
        type: Boolean
      },
      skill3: {
        type: Boolean
      },
      
    },
    { timestamps: true }
  );

/* PirataSchema.plugin(uniqueValidator); */

const Pirata = mongoose.model('Pirata', PirataSchema);

module.exports = {PirataSchema, Pirata };