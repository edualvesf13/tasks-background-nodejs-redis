export default {
    async store(req, res){
        const {nome, email} = req.body
        
        const user = {
            nome,
            email,
            password: '123'
        }

        return res.json(user)
    }
}