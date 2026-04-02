const app = () =>{
    // Criando os elementos via javascript para manter o código funcional
    const containerData = document.createElement('div');
    const containerHora = document.createElement('div');
    const containerDiaSemana = document.createElement('div');
    
    function criarElementos(){
        document.body.appendChild(containerData);
        document.body.appendChild(containerHora);
        document.body.appendChild(containerDiaSemana);
    
    }
    criarElementos()
    function atualizarRelogio() {
        const agora = new Date();
    
        //Atualiza apenas o conteudo de cada container
        containerData.textContent = agora.toLocaleDateString();
        containerHora.textContent = agora.toLocaleTimeString();
        containerDiaSemana.textContent = agora.toLocaleDateString('pt-br', {weekday: 'long'});
    
    };
    
    atualizarRelogio()
    
    function aplicarEstilos(){
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';
        //formatar fonte
        document.body.style.fontsize = '80px';
        document.body.style.color = 'red';
        document.body.style.fontFamily = 'sans-serif';
    };
    
    aplicarEstilos()
    setInterval(atualizarRelogio, 1000);
    
    
    
    }
    
    app();
