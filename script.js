
let sorvete = 0;
        let geradorPorSegundo = 0;
        let custo = {
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
        
        setInterval(() => {
            sorvete += geradorPorSegundo;
            atualizarInterface();
        }, 1000);