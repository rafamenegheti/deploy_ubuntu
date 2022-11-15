const express = require('express');

const app = express();
const port = 3333;

app.get('/',(request, response) => {
    return response.json({ message: "Server is up!"});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});