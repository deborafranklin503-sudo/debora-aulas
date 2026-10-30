const express = require ("express")
const app = express();

app.get("/", (req, res) => {
    res.send("olá, meu primeiro servidor!");
});
app.get("/", (req, res) => {
    res.json([
        { dia: "segunda", horario: "18h"},
        { dia: "quarta", horario: "19h"}
    ]);
});

app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000");
});












