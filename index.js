const express = require("express");
// const port = process.env.PORT || 8080;
// const cors = require("cors");

// const router = require("./router");

const app = express();
app.use(express.json());
// app.use(cors());

// app.use("/api", router);
const produto = require("./api/produto/produto.controller");
const possui_produto = require("./api/possui_produto/possui_produto.controller");
const possui_malha = require("./api/possui_malha/possui_malha.controller");
const malha = require("./api/malha/malha.controller");
const fios_da_malha = require("./api/fios_da_malha/fios_da_malha.controller");
const cliente = require("./api/cliente/cliente.controller");
const funcionario = require("./api/funcionario/funcionario.controller");
const maquina = require("./api/maquina/maquina.controller");
const producao = require("./api/producao/producao.controller");
const malha_do_cliente = require("./api/malha_do_cliente/malha_do_cliente.controller");

app.use("/fornecedor", fornecedor);
app.use("/fio", fio);
app.use("/entrada_de_fio", entrada_de_fio);
app.use("/saida_de_malha", saida_de_malha);
app.use("/saidas_de_malhas", saidas_de_malhas);
app.use("/fios_da_malha", fios_da_malha);
app.use("/malha", malha);
app.use("/possui_malha", possui_malha);
app.use("/possui_produto", possui_produto);
app.use("/produto", produto);
app.use("/cliente", cliente);
app.use("/funcionario", funcionario);
app.use("/maquina", maquina);
app.use("/producao", producao);
app.use("/malha_do_cliente", malha_do_cliente);

app.get("/", (req, res) => {
    res.json("Hellow World");
})

app.listen(8080, () => {
    console.log(`App listening on http://localhost:8080`);
})