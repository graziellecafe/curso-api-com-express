import express from "express";

const app = express();
const porta = 8081;

// app.use: criar um endpoint
app.use("/", (req, res) => {
  res.send("<h1>Olá mundo</h1>");
});

// definindo a porta para ouvir requisições
// callback: realizar alguma função quando a porta for acionada
app.listen(porta, () => {
  console.log("Servidor rodando");
});
