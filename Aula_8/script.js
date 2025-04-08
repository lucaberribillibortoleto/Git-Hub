//let carro = {
    //cor: 'green',
    //modelo: 'SUV',
    //marca: 'Toyota',
    //buzina: function(){
     //   return 'bii bii';
  //  }
//};

//let carro2 = {
    //cor: 'black',
    //modelo: 'SUV',
    //marca: 'Ford',
    //buzina: function(){
       // return 'fom fom';
   // }
//};

class Carro {
    construtor(cor, modelo, marca){
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    buzina(){
        return 'bii bii'
    }
}

let carro1 = new Carro('green', 'SUV', 'Toyota');
let carro2 = new Carro ('black', 'SUV', 'for');

console.log(carro1);
console.log(carro2);

//console.log(carro);
//console.log(carro.cor)

//console.log(carro.buzina())
//console.log(carro2.buzina())

let carros = []
carros.push(carro1)
carros.push(carro2)
for(let i = 0; i < carros.length; i++){
    console.log(carros[i].buzina())
}


class retangulo{
    construtor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura){
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(){
        ctx.beginPath();
        ctx.lineWidth = this.espessura_linha;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';
        ctx.fillRect(30, 330, 40, 40);
        ctx.strokeRect(30, 330, 40, 40);
        ctx.closePath();
    }
}