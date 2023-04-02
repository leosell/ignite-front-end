import express from 'express'
import Carteira from '../models/Carteira.js'

const carteira = express.Router()

carteira.get('/busca/:id', async (req, res) => {
    const id = req.params
    const idUsuario = id.id
    console.log(idUsuario)
    const carteira = await Carteira.findOne({ where: { idUsuario } }).catch((error) => console.log(error))

    if (carteira) {
        const saldo = carteira
        return res
            .json({saldo})
    } else {
        return null
    }
})

carteira.post('/register', async (req, res) => {
    const { saldoTotal, idUsuario } = req.body

    const existUser = await Carteira.findOne(
        { where: { idUsuario } }
    ).catch((error) => {
        console.log(error)
    })

    const user = existUser

    if (user) {
        console.log(existUser.saldoTotal)
        const newSaldo = parseFloat(existUser.saldoTotal) + parseFloat(saldoTotal)

        await Carteira.update(
            { saldoTotal: newSaldo }, 
            { where: { idUsuario } }
        ).catch((error) => {
            console.log(error)
        })
        return res
            .status(200)
            .json({ message: 'Saldo atualizado com sucesso'})
    } else {
        const newWallet = new Carteira({ saldoTotal, idUsuario })
        await newWallet.save(
            { where: { idUsuario } }
        ).catch((error) => {
            console.log(error)
            res.status(500).json({ message: 'Não foi impossivel inserir seu saldo!\n Contate um administrador!'})
        })
        return res
            .status(200)
            .json({ message: 'Inserção de saldo salva com sucesso!'})
    }

})

export default carteira