module.exports = (app) => {
  app.get("/atendimentos", (req, res) => res.send("Rota de atendimento, ok."));

  app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    res.send('Realizando um POST')
  })
};
