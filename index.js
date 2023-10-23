    const estimacionesTiempo = {
        N5: 150,
        N4: 200,
        N3: 300,
        N2: 400,
        N1: 500
    };

    function calcularTiempoEstudio() {
        const nivelJLPT = document.getElementById("nivel-jlpt").value;
const estimacionesTiempo = document.getElementById()
        if (nivelJLPT in estimacionesTiempo) {
            const estimacionesTiempo = estimacionesTiempo[nivelJLPT];
            document.getElementById("resultado").textContent = `Para el nivel ${nivelJLPT}, se recomienda aproximadamente ${estimacionesTiempo} horas de estudio.`;
     } else {
            document.getElementById("resultado").textContent = "Nivel del JLPT no válido.";
        }
        
    }