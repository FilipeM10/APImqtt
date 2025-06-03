const Dados = require('../model/dados')

exports.listar = async (req, res) => {
    try {
        const dado = await Dados.find()
        res.status(200).json(dado)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar dados' })
    } 
}
exports.buscarPorId = async (req, res) => {
    const { id } = req.params
    try {
        const dado = await Dados.findById(id)

        return dado === 0 
        ? res.status(404).json({ error: 'nome não encontrado' })
        : res.status(200).json(dado)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' })
    }
}
exports.postar = async (req, res) => {
    try {
        const novo = await Dados.create(req.body)
        if(novo) return res.status(200).json(novo)
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao inserir dados' })
    }
}
exports.deletar = async (req, res) => {
    try {
        const delet = await Dados.findByIdAndDelete(req.params.id)
        return delet === 0 
        ? res.status(404).json({ error:'Nome não encontrado' }) 
        :  res.status(200).send(`nome: ${id} deletado com sucesso`)
    } catch (error) {
        return res.status(500).json(error)
    }
}