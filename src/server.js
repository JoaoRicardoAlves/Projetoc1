// server.js 
const express = require('express'); 
const path = require('path'); 
const app = express(); 
const port = 3000;

// Middleware para arquivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para arquivos HTML 
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'pages/index.html'))); 
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'pages/login.html')));
app.get('/cadastro', (req, res) => res.sendFile(path.join(__dirname, 'pages/cadastro.html'))); 
app.get('/esqueci-senha', (req, res) => res.sendFile(path.join(__dirname, 'pages/esqueci-senha.html'))); 
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'pages/dashboard.html')));

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));