(function() {
    var app = {
        numero1: 0,
        numero2: 1,
        resultado: 0,
        mainStyle: document.getElementById("main").style,
        operacionStyle: document.getElementById("operacion").style
    };

    function addClickListener(target, callback) {
        document.getElementById(target).addEventListener("click", callback);
    }

    function getNumberValues() {
        app.numero1 = Number(document.getElementsByName("numero1")[0].value);
        app.numero2 = Number(document.getElementsByName("numero2")[0].value);
    }

    function validate() {
        return !isNaN(parseFloat(app.numero1)) && isFinite(app.numero1) && !isNaN(parseFloat(app.numero2)) && isFinite(app.numero2);
    }

    function verResultado() {
        document.getElementById("resultado").textContent = app.resultado;
        app.mainStyle.display = "none";
        app.operacionStyle.display = "block";
    }

    function regresar() {
        app.operacionStyle.display = "none";
        app.mainStyle.display = "block";
    }

    function sumar() {
        getNumberValues();
        app.resultado = app.numero1 + app.numero2;
        verResultado();
    }

    function restar() {
        getNumberValues();
        app.resultado = app.numero1 - app.numero2;
        verResultado();
    }

    function multiplicar() {
        getNumberValues();
        app.resultado = app.numero1 * app.numero2;
        verResultado();
    }

    function dividir() {
        getNumberValues();
        app.resultado = app.numero1 / app.numero2;
        verResultado();
    }

    addClickListener("sumar", sumar);
    addClickListener("restar", restar);
    addClickListener("multiplicar", multiplicar);
    addClickListener("dividir", dividir);
    addClickListener("regresar", regresar);
})();
