import express from 'express'
import Carteira from '../models/Carteira.js'

const carteira = express.Router()

carteira.get('/busca', async (req, res) => {
    const carteira = await Carteira.findAll().catch((error) => console.log(error))

    if (carteira) {
        return res
            .json({carteira})
    } else {
        return null
    }
})

carteira.post('/register', async (req, res) => {
    const { saldo, idUsuario } = req.body

    const novoSaldo = new Carteira({ saldo, idUsuario })
    console.log('leu 1')
    // const idExistCarteira = await Carteira.findOne({ where: { idUsuario } }).catch((err) => `Error: ${err}`)
    console.log('leu 2')

    const idExistCarteira = await Carteira.findOne({ where: { idUsuario } }).catch((err) => console.log(`Error: ${err}`))
    console.log(idExistCarteira)

    if (idUsuario == idExistCarteira.idUsuario) {

        let novoSaldo = 0

        novoSaldo = parseFloat(idExistCarteira.saldo) + parseFloat(saldo)
        console.log(novoSaldo)
        await Carteira.update({ saldo: novoSaldo }, { where: { idUsuario } }).catch((err) => {
            console.log(`Error: ${err}`)
        })
    } else {
        const salvarSaldo = await novoSaldo.save({ where: { idUsuario } }).catch((error) => {
            console.log(error)
            res
                .status(500)
                .json({ error: 'Não foi possivel inserir seu saldo!' })
        })
    
        if (salvarSaldo) {
            
            res
                .status(200)
                .json({ message: 'Saldo salvo com sucesso!' })
        }
    }

})

export default carteira