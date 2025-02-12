
        console.log(window.innerWidth);  // Largura da tela
        console.log(window.innerHeight); // Altura da tela

        const precos = {
            pinguim: 10,
            urso: 50,
            carrinhoSorvete: 600,
            sorveteria: 1000
        };
        let addClick = 1;
        
        function ganharSorvete() {
            sorvete += addClick;
            atualizarInterface();
        }
        
        function comprarItem(tipo) {
            if (sorvete >= custo[tipo]) {
                sorvete -= custo[tipo];
                if (tipo === 'pinguim') geradorPorSegundo += 5;
                if (tipo === 'urso') geradorPorSegundo += 10;
                if (tipo === 'carrinho') addClick += 40;
                if (tipo === 'sorveteria') geradorPorSegundo += 100;
                custo[tipo] *= 2;
                atualizarInterface();
            } else {
                alert("Sorvetes insuficientes :(");
            }
        }
        
        function atualizarInterface() {
            document.getElementById("sorvete").textContent = sorvete;
            document.getElementById("gerador").textContent = geradorPorSegundo;
            document.getElementById("custoPinguim").textContent = custo.pinguim;
            document.getElementById("custoUrso").textContent = custo.urso;
            document.getElementById("custoCarrinho").textContent = custo.carrinhoSorvete;
            document.getElementById("custoSorveteria").textContent = custo.sorveteria;
        }

        function atualizarPrecos() {
            const ursoPreco = document.getElementById("ursoPreco");
            const carrinhoPreco = document.getElementById("carrinhoPreco");
            const sorveteriaPreco = document.getElementById("sorveteriaPreco");
        
            // Mostra o preço do urso se o número de sorvetes for >= ao preço atual
            if (sorvetes >= precos.urso) {
                ursoPreco.textContent = `R$ ${precos.urso.toFixed(2)}`;
            } else {
                ursoPreco.textContent = "";
            }
        
            // Mostra o preço do carrinho se o número de sorvetes for >= ao preço atual
            if (sorvetes >= precos.carrinhoSorvete) {
                carrinhoPreco.textContent = `R$ ${precos.carrinhoSorvete.toFixed(2)}`;
            } else {
                carrinhoPreco.textContent = "";
            }
        
            // Mostra o preço da sorveteria se o número de sorvetes for >= ao preço atual
            if (sorvetes >= precos.sorveteria) {
                sorveteriaPreco.textContent = `R$ ${precos.sorveteria.toFixed(2)}`;
            } else {
                sorveteriaPreco.textContent = "";
            }
        }
        
        setInterval(() => {
            sorvete += geradorPorSegundo;
            atualizarInterface();
        }, 1000);