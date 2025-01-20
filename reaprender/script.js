// 1)
function soma(x,y){
     let r = x + y
     return r
}

// console.log(soma(2,4))

// 2)
const idade = 20
function maioridade(idade){
     if(idade>=18){
          console.log("Maior de idade")
     }else{
          console.log("Menor de idade")
     }
}

// console.log(maioridade(idade))

// 3)
function numeros(){
     for (let i = 1; i<11; i++){
          console.log(i)
     }
     console.log("Soma dos numeros de 1 a 5")
     let l = 1
     let j = 0
     while (l <= 5){
          j += l
          l++
     }return j
}
// console.log(numeros())

// 4)
function calcularAreaRetangulo(base, altura){
     const area = (base*altura)/2
     return area
}

// console.log(calcularAreaRetangulo(6,9))

// 5)
let arr = [2, 4, 6, 8, 10]
for(num of arr){
     console.log(num)
}   
arr.push(12)
console.log(arr)

// 6)
let obj = {
     Nome: "Maria",
     Idade: 18,
     Cidade: "Campo Mourão"
}
for(let propriedade in obj){
     console.log(`${propriedade}: ${obj[propriedade]}`)
}