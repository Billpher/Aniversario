
//pegar o dia e hora do evento
const dataEvento = new Date('Oct 26, 2024 20:00:00');
const tempoEvento = dataEvento.getTime();

//setInterval ira ficar atualizando de acordo com o tempo inserido
const contador = setInterval(() => {
    const dataAtual = new Date();
    const tempoAtual = dataAtual.getTime();

    const contagemEvento = tempoEvento - tempoAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const dias = Math.floor(contagemEvento / diaEmMs);
    const horas = Math.floor((contagemEvento % diaEmMs) / horaEmMs);
    const minutos = Math.floor((contagemEvento % horaEmMs) / minEmMs);
    const segundos = Math.floor((contagemEvento % minEmMs) / 1000);

    const tempo = document.getElementById('contador');

    tempo.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (contagemEvento < 0) {
        clearInterval(contador);
        tempo.innerHTML = `O Evento ja iniciou`
    }
    
}, 1000);

