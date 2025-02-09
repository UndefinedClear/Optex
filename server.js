const express = require('express');
const fs = require('fs');
const app = express();

function getTemplate(path) {
    return fs.readFileSync(`templates/${path}`, 'utf8');
}

function getStyle(path) {
    return fs.readFileSync(`static/styles/${path}`, 'utf8');
}

function getScript(path) {
    return fs.readFileSync(`static/scripts/${path}`, 'utf8');
}

function getImage(path) {
    return fs.readFileSync(`static/images/${path}`, 'utf8');
}

const data = {
    message: 'Hello World!'
}

// PAGES
app.get('/', (req, res) => {
    res.send(getTemplate('index.html'));
});

// CSS
app.get('/styles/mainPage', (req, res) => {
    res.type('text/css');  // Устанавливаем MIME-тип для CSS
    res.send(getStyle('mainPage.css'));
});

app.get('/styles/Notifications', (req, res) => {
    res.type('text/css');  // Устанавливаем MIME-тип для CSS
    res.send(getStyle('Notifications.css'));
});


// JAVASCRIPT
app.get('/scripts/Notifications', (req, res) => {
    res.type('text/js');  // Устанавливаем MIME-тип для Js
    res.send(getScript('Notifications.js'));
});

// IMAGES
app.get('/images/icon', (req, res) => {
    res.type('image/jpeg');  // Устанавливаем MIME-тип для Js
    res.send(getImage('icon.jpg'));
});

// app.get('/api', (req, res) => {
//     res.send(data);
// });

app.listen(5555, () => {
    console.log('Application listening on port 5555!');
    console.log('http://127.0.0.1:5555/');
});