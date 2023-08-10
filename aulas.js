function contas(a, b){
    console.log(a+b, a-b, a*b, a/b)
}
contas(5,10)
contas(10,5)

function triang(c, d , e){
    if(c == d && d == e){
        return 'equilatero'
    }
    else if(c == d || c == e || d == e){
        return 'isosceles'
    }
    else{
       return 'escalelo'
    }
}
console.log(triang(4,4,6));




