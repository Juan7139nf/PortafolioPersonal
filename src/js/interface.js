function mostar() {
    document.getElementById("btn-imaggen-mostrar").style.display = "none"
    document.getElementById("btn-imaggen-ocultar").style.display = "block"
    document.getElementById("imaggen").style.display = "block";
}

function ocultar() {
    document.getElementById("btn-imaggen-mostrar").style.display = "block"
    document.getElementById("btn-imaggen-ocultar").style.display = "none"
    document.getElementById("imaggen").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#tabla-usuarios tbody");
            data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});


let elInput = document.getElementById('volumeControl');
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const audioPlayer = document.getElementById('audioPlayer');
    const coverImage = document.getElementById('cover');

    if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.style.display = 'block';
        audioPlayer.volume = elInput.value;
        audioPlayer.play();
        
        document.getElementById('equalizer').style.display = 'block';

        jsmediatags.read(file, {
            onSuccess: function (tag) {
                const tags = tag.tags;
                if (tags.picture) {
                    const picture = tags.picture;
                    const base64String = arrayBufferToBase64(picture.data);
                    coverImage.src = `data:${picture.format};base64,${base64String}`;
                    coverImage.style.display = 'block';
                }
            },
            onError: function (error) {
                console.log(error);
            }
        });
        setupEqualizer(audioPlayer);
    }
});


document.getElementById('volumeControl').addEventListener('input', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = this.value;
});

if (elInput) {
    let etiqueta = document.getElementById('etiqueta');
    if (etiqueta) {
        etiqueta.innerHTML = Math.round(elInput.value * 100 * 2);
        elInput.addEventListener('input', function () {
            etiqueta.innerHTML = Math.round(elInput.value * 100 * 2);
        }, false);
    }
}

function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}


let audioContext;
let sourceNode;
let gainNodes = [];
const frequencies = [60, 170, 350, 1000, 3500, 10000];

function setupEqualizer(audioElement) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    sourceNode = audioContext.createMediaElementSource(audioElement);

    frequencies.forEach((frequency, index) => {
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        filter.type = "peaking";
        filter.frequency.value = frequency;
        filter.gain.value = 0;

        sourceNode.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);

        gainNodes.push(gainNode);

        const slider = document.getElementById(`band${frequency}`);
        slider.addEventListener('input', function () {
            filter.gain.value = this.value;
        });
    });
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.parentElement.offsetWidth;
canvas.height = 200;

let cañonX = 0;
let cañonY = canvas.height;
let largoCañon = 50;
let anguloCanon = Math.PI / 4;
let disparando = false;
let arriba = true;
let derecha = false;

let bolaX = cañonX;
let bolaY = cañonY;
let radioBola = 8;
let velocidadBolaX = 0;
let velocidadBolaY = 0;
let bolaDisparada = false;

const gravedad = 0.5;
const html = document.documentElement;

let elInput1 = document.getElementById('volumeControl');
let etiqueta1 = document.getElementById('etiqueta');

canvas.addEventListener('click', dispararCañon);

function dispararCañon(event) {
    if (!bolaDisparada) {
        bolaDisparada = true;
        bolaX = cañonX + largoCañon * Math.cos(anguloCanon);
        bolaY = cañonY - largoCañon * Math.sin(anguloCanon);
        velocidadBolaX = 15 * Math.cos(anguloCanon);
        velocidadBolaY = -15 * Math.sin(anguloCanon);
    }
}

function actualizar() {
    if (bolaDisparada) {
        velocidadBolaY += gravedad;
        bolaX += velocidadBolaX;
        bolaY += velocidadBolaY;

        if (bolaX - radioBola < 0) {
            bolaX = radioBola;
            velocidadBolaX = 0;
        } else if (bolaX + radioBola > canvas.width) {
            bolaX = canvas.width - radioBola;
            velocidadBolaX = 0;
        }

        if (bolaY - radioBola < 0) {
            bolaY = radioBola;
            velocidadBolaY = 0;
        } else if (bolaY + radioBola > canvas.height) {
            bolaY = canvas.height - radioBola;
            bolaDisparada = false;
            actualizarRango();
        }
    }
}

function actualizarRango() {
    const distancia = (bolaX - cañonX) * 0.205 - 2
    elInput1.value = distancia * 0.005;
    etiqueta1.innerHTML = Math.round(elInput1.value * 100 * 2);
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = elInput.value;
}

function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = html.getAttribute('data-bs-theme') === 'dark' ? '#ffffff' : '#000000';
    ctx.save();
    ctx.translate(cañonX + 10, cañonY);
    ctx.rotate(- largoCañon * Math.sin(anguloCanon * 0.02));
    ctx.fillRect(0, -5, largoCañon - 9, 10);
    ctx.restore();/*
    ctx.beginPath();
    ctx.moveTo(cañonX+2, cañonY);
    ctx.lineTo(cañonX + largoCañon * Math.cos(anguloCanon), cañonY - largoCañon * Math.sin(anguloCanon));
    ctx.stroke();*/

    if (bolaDisparada) {
        ctx.beginPath();
        ctx.arc(bolaX, bolaY, radioBola, 0, Math.PI * 2);
        ctx.fillStyle = html.getAttribute('data-bs-theme') === 'dark' ? '#8bb9fe' : '#0d6efd';
        ctx.fill();
        ctx.stroke();
    }
}

function bucleJuego() {
    actualizar();
    dibujar();
    requestAnimationFrame(bucleJuego);
    if (arriba) {
        anguloCanon += 0.005;
        if (anguloCanon >= Math.PI / 2) {
            derecha = true;
            arriba = false;
        }
    } else if (derecha) {
        anguloCanon -= 0.005;
        if (anguloCanon <= 0.1) {
            derecha = false;
            arriba = true;
        }
    }
}

bucleJuego();
window.addEventListener('resize', onWindowResize);