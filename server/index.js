//Servidor Node
const express = require("express") //referenciando o express
const PORT = process.env.PORT || 3001
const app = express()
const axios = require('axios').default

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


//GPT Cod
app.get('/api/user', (req, res) => {
    const {user, pass} = req.body;

    if(user === 'miour' && pass === 'mor'){
        res.json({ message: "Login realizado com sucesso!" });
    }else {
        res.status(401).json({ message: "Nome ou senha inválidos." });
    }
})
//


async function main() {
    // Devolver e Selecionar o objeto no DB - Consulta
    const allUsers = await prisma.usuario.findMany()
    

    app.get('/api/user', (req, res) => {
        res.send(allUsers)
    })

    // Inserir dados no DB
    /*await prisma.usuario.create({
        data: {
            nome: 'Shum',
            email: 'Mishiy01@hotmail.com',
            senha: 'Mor',
            moedas: {
                create: { dolar: 1000, diamante: 1000 },
            }
        },
    })
    
    const allUsers = await prisma.usuario.findMany({
        include: {
            moedas: true
        },
    })
    console.dir(allUsers, { depth: null })*/

    // Alterar dados do banco de dados
    /*const post = await prisma.usuario.update({
        where: { id: 2 },
        data: { senha: 'miour' },
    })
    console.log(post)*/


}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})






// Ativar servidor
app.get("/api", (req, res) => {
    res.json({
        message: "Hello from server!"
    })
})





app.listen(PORT, () => {
    console.log(`Server back-end listening on ${PORT}`)
})