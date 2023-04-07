const express = require('express');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');
const authUser = require('../middlewares/authUser');
const conectarBancoDados = require('../middlewares/conectarBD');
const EsquemaComentario = require('../models/comentario');
const router = express.Router();


router.post('/criar', authUser, conectarBancoDados, async function (req, res) {
  try {
    // #swagger.tags = ['Comentario']
    let { texto, idTarefa } = req.body;
    const usuarioCriador = req.usuarioJwt.id;
    const respostaBD = await EsquemaComentario.create({ texto, tarefa: idTarefa, usuarioCriador });

    res.status(200).json({
      status: "OK",
      statusMensagem: "Comentario criado com sucesso.",
      resposta: respostaBD
    })

  } catch (error) {
    return tratarErrosEsperados(res, error);
  }
});


router.get('/obter/tarefa/:id', authUser, conectarBancoDados, async function (req, res) {
  try {
    // #swagger.tags = ['Comentario']
    // #swagger.description = "Endpoint para obter todos comentarios de uma taerfa."
    const respostaBD = await EsquemaComentario.find({ tarefa: id }).populate('usuarioCriador');

    res.status(200).json({
      status: "OK",
      statusMensagem: "Comentarios listadas na resposta com sucesso.",
      resposta: respostaBD
    })

  } catch (error) {
    return tratarErrosEsperados(res, error);
  }
});

module.exports = router;
