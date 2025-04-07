const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

// Configuração para servir arquivos estáticos na pasta src/pages
app.use('/src/pages', express.static(path.join(__dirname, 'src', 'pages')));

// Rotas para arquivos na pasta src
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'register.html'));
});

// Rotas para arquivos na pasta public
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/graphics', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'graphics.html'));
});

app.get('/password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'password.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tables.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});