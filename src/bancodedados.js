const bancodedados = {
    identificadorInstrutor: 3,
    indentificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email:'guido@email.com',
            statuss: true
        },
        {
            id:2,
            nome: 'Dani',
            email: 'dani@email.com',
            statuss: true
        }
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o primeiro servidor'
        }
    ]
}

module.exports = bancodedados;