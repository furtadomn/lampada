let statusAtual = 'off';

function lampStatus() {
    statusAtual === 'off' ? statusAtual = 'on' : statusAtual = 'off';
    return statusAtual;
}

function ligaDesliga() {
    if (statusAtual == 'off') {
        document.getElementById("lamp-status").src='./src/assets/images/lamp-on.jpg';
    } else {
        document.getElementById("lamp-status").src='./src/assets/images/lamp-off.jpg';
    }

    lampStatus();
}

