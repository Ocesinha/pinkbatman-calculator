function Calculadora(){
    this.display = document.querySelector('.display')

    this.iniciar = () =>{
        this.capturabotao()
    }

    this.capturabotao = () =>{
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')){this.addDisplayNumber(el)}
            if(el.classList.contains('btn-clear')){this.clearDisplayNumber()}
            if(el.classList.contains('btn-del')){this.delDisplayNumber()}
            if(el.classList.contains('btn-eq')){this.contaDisplayNumber()}
        })
    }

    this.addDisplayNumber = (el) => this.display.value += el.innerText;
    this.clearDisplayNumber = () => this.display.value = '';
    this.delDisplayNumber = () => this.display.value = this.display.value.slice(0, -1)
    this.contaDisplayNumber = () => {
        try{
            const conta = eval(this.display.value)

            if(this.display.value === '9/9'){
                this.display.value = 'Cesinha ;)'
                return
            }
            if(this.display.value === '9/3'){
                this.display.value = 'Helennn <3'
                return
            }
            if(this.display.value === '9/9+9/3'){
                this.display.value = 'Catatauuu'
                return
            }
            if(this.display.value === '3/9+9/9'){
                this.display.value = 'Catatauuu'
                return
            }

            if(conta === NaN){
                alert('Conta Inválida!')
                this.display.value = '';
                return;
            }

            this.display.value = conta;
            return;

        } catch(error){
            alert('Conta Inválida!')
            this.display.value = '';
            return;
        }
    }
}
calculadora = new Calculadora();
calculadora.iniciar();


function Mudatema(){

    this.body = document.querySelector('body');
    this.calculadora = document.querySelector('.calculadora')
    this.display = this.calculadora.querySelector('.display')


this.iniciar = () =>{
    this.capturabotao()
}

this.capturabotao = () => {

    this.body.addEventListener('click', e => {
        botao = e.target
        if(botao.classList.contains('dark-theme')){
        this.body.style.backgroundColor = "black";
        this.calculadora.style.backgroundColor = "rgb(54, 54, 54)";
        this.display.style.backgroundColor = "gray";
        }else if(botao.classList.contains('white-theme')){
            this.body.style.backgroundColor = "palevioletred";
            this.calculadora.style.backgroundColor = "palevioletred";
            this.display.style.backgroundColor = "rgb(255, 225, 230)";
        }
    })
}


}

mudatema = new Mudatema();
mudatema.iniciar();