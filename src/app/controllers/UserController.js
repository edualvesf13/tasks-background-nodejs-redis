import passwordGenerator from 'password-generator'
export default {
    async store(req, res){
        const {nome, email} = req.body

        const user = {
            nome,
            email,
            password: passwordGenerator(15, false)
        }

        return res.json(user)
    }
}