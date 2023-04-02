import express from "express";
import Estacionamento from "../models/Estacionamento.js";

const estacionamento = express.Router()

estacionamento.get('/busca', async (req, res) => {
    const estacionamento = await Estacionamento.findAll().catch((error) => console.log(error))

    if (estacionamento) {
        return res.json({estacionamento})
    } else {
        return null
    }
})

estacionamento.post('/register/', async (req, res) => {
    const { idUsuario, nome, cnpj, endereco, numero, bairro, cidade, estado, funcionamento, horario } = req.body

    const verificandoEstacionamentoExistente = await Estacionamento.findOne({ where: { cnpj } }).catch((error) => console.log(error))

    if (verificandoEstacionamentoExistente) {
        return res
            .status(400)
            .json({ message: 'Estacionamento já cadastrado!' })
    }

    const novoEstacionamento = new Estacionamento({ idUsuario, nome, cnpj, endereco, numero, bairro, cidade, estado, funcionamento, horario })
    const salvarEstacionamento = await novoEstacionamento.save({ where: { idUsuario } }).catch((error) => {
        console.log(error)
        res
            .status(500)
            .json({ error: 'Não foi possivel registrar o estacionamento!' })
    })

    if (salvarEstacionamento) {
        res
            .status(200)
            .json({ message: 'Estacionamento salvo com sucesso!' })
    }
})

estacionamento.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deletarId = await Estacionamento.findOne({ where: {id:id} }).catch((error) => { console.log(error) })
    
    if(deletarId) {
        await deletarId.destroy()
            .then(res.json(deletarId))
            .catch((error) => console.log(error))
    }
})

estacionamento.put('/update/:id', async (req, res) => {
    /* const { nome, cnpj, endereco, numero, bairro, cidade, estado, funcionamento, horario } = req.body */
    const id = req.params.id

    const estacionamento = await Estacionamento.findOne(
        { where: { id } }
    ).catch((error) => {
        console.log(error)
    })

    console.log(estacionamento)
})

export default estacionamento;