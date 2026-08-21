var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function isNum(n){
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNum(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.innerText = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
    }else{
        alert('Valor invalido ou já encontrado na lista!')
    }

    num.value=''
    num.focus()
}

function end(){
    if(valores.length==1){
        res.innerText = `Você adicionou ${valores.length} valor no total!`
    }else{
         res.innerText = `Você adicionou ${valores.length} valores no total!`
    }
}