const express = require('express');

const app = express();
const port = 3333;

app.get('/',(request, response) => {
    return response.json({ message: "Server is up!"});
});

app.get('/alunos',(request, response) => {
    const alunos = [
        {
            id: 584,
            nome: "Rafael Menegheti",
        },
        {
            id: 848,
            nome: "José Aldo",
        },
    ]
    return response.json(alunos);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});