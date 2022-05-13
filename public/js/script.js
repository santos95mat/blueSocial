document.onreadystatechange = function() {
    if(document.readyState === 'complete') {

        const btnCC = document.querySelector('#btn_cadastro');
        const btnSC = document.querySelector('#btn_sairCadastro');
        const cad = document.querySelector('#opacidade');

        btnCC.addEventListener('click', function() {
            cad.style.display = 'flex'
        });
        
        btnSC.addEventListener('click', function() {
            cad.style.display = 'none'
        }); 
    };
};

function redirecionar() {
    document.onreadystatechange = function() {
        if(document.readyState === 'complete') {
            setTimeout(function() {
                window.location.href = "/home";
            }, 1000)
        }
    }
};