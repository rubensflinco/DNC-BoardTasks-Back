const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
  {
    texto: {
      type: String,
      default: '',
    },
    tarefa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tarefa',
      required: 'é obrigatório!',
    },
    usuarioCriador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: 'é obrigatório!',
    },
  },
  {
    timestamps: true
  }
);

const EsquemaComentario = mongoose.models.Comentario || mongoose.model('Comentario', esquema);
module.exports = EsquemaComentario;
