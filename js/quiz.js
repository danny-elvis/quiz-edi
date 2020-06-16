function setChoice() {
    document.getElementById('avancar').disabled = false
}

var choices = []
let n = 0

function next() {

    choice = document.getElementsByName('choice')
    if (choice[0].checked == true){
        choices[n] = choice[0].value
    }else if (choice[1].checked == true){
        choices[n] = choice[1].value
    }

    if(n == 0){
        document.getElementById("1").innerHTML = `
        <input type="radio" name="choice" value="romantico" onclick="setChoice()">
        <img src="images/quiz/romantico.jpg">`
        
        document.getElementById("2").innerHTML = `
        <input type="radio" name="choice" value="contemporaneo" onclick="setChoice()">
        <img src="images/quiz/contemporaneo.jpg">`

        document.getElementById('voltar').className = "voltar"
        document.getElementById('voltar').disabled = false
        document.getElementById('avancar').disabled = true

    }else if(n == 1){
        document.getElementById("1").innerHTML = `
        <input type="radio" name="choice" value="industrial" onclick="setChoice()">
        <img src="images/quiz/industrial.jpg">`
        
        document.getElementById("2").innerHTML = `
        <input type="radio" name="choice" value="minimalista" onclick="setChoice()">
        <img src="images/quiz/minimalista.jpg">`

        document.getElementById('avancar').disabled = true
        document.getElementById('avancar').value = "Finalizar"
        /*document.getElementById('avancar').setAttribute( "onclick", "javascript: result()" ); */
    }else{
        document.getElementById('avancar').disabled = true
        result()
    }

    console.log(n)
    console.log(choices[n])
    n +=1
    console.log(choices)

}

function back() {
    
    if(n == 1){
        document.getElementById("1").innerHTML = `
        <input type="radio" name="choice" value="etnico" onclick="setChoice()">
        <img src="images/quiz/etnico.jpg">`
        
        document.getElementById("2").innerHTML = `
        <input type="radio" name="choice" value="hightech" onclick="setChoice()">
        <img src="images/quiz/hightech.jpg">`
        
        document.getElementById('voltar').className = "voltar--hide"
        document.getElementById('voltar').disabled = true  
    }else if(n == 2){
        document.getElementById("1").innerHTML = `
        <input type="radio" name="choice" value="romantico" onclick="setChoice()">
        <img src="images/quiz/romantico.jpg">`
        
        document.getElementById("2").innerHTML = `
        <input type="radio" name="choice" value="contemporaneo" onclick="setChoice()">
        <img src="images/quiz/contemporaneo.jpg">`

        document.getElementById('avancar').value = "Avançar"
        document.getElementById('avancar').setAttribute( "onclick", "javascript: next()" );
        document.getElementById('avancar').disabled = true
    }

    n -=1
}

function result() {

    if(choices[0] == 'etnico' && choices[1] == 'romantico'){
        console.log('resultado: romantico') //ok
        window.location.href='file:///android_asset/www/results/romantico.html'
    }else if(choices[0] == 'etnico' && choices[1] == 'contemporaneo' && choices[2] == 'industrial'){
        console.log('resultado: industrial') //ok
        window.location.href='file:///android_asset/www/results/industrial.html'
    }else if(choices[0] == 'hightech' && choices[1] == 'romantico' && choices[2] == 'industrial'){
        console.log('resultado: vintage') //ok
        window.location.href='file:///android_asset/www/results/vintage.html'
    }else if(choices[0] == 'hightech' && choices[1] == 'romantico' && choices[2] == 'minimalista'){
        console.log('resultado: minimalista') //ok
        window.location.href='file:///android_asset/www/results/minimalista.html'
    }else if(choices[0] == 'etnico' || choices[0] == 'hightech' && choices[1] == 'contemporaneo'){
        console.log('resultado: contemporaneo') //ok
        window.location.href='file:///android_asset/www/results/contemporaneo.html'
    }
}