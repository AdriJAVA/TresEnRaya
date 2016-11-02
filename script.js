window.onload = function(){
    
    for(var i = 0; i < teclas.length; i++){
        mostrar(teclas[i]);
        }
    
}

var teclas = document.getElementsByName("tecla");

var contador = 0;

var contador2 = 0;

var ganadoMaquina = false;

var ganadoJugador = false;

var empate = false;
    
function mostrar(boton){
        
        
        
        boton.onclick = function(){
            if(this.value === ""){
                
                this.value = "X";
                
                contador2++;
                
                parar();

                setTimeout(maquina,"500");
                
                
            }   
            
              
                    
}
}

function maquina(){

var seguir = true;
        while(seguir){
            var aleatorio = Math.floor(Math.random() * 9);
            
            if(contador > 3 ){
                seguir = false
            }else if(teclas[aleatorio].value != "X" && teclas[aleatorio].value != "O"){
               teclas[aleatorio].value = "O";
                seguir = false;
                contador++;
            }
                        
        }
    
    comprobar();
    reanudar();
    reiniciar();
                 
}

function parar(){
    for(var i = 0; i < teclas.length; i++){
        teclas[i].disabled = true;
    }
}

function reanudar(){
    for(var i = 0; i < teclas.length; i++){
        teclas[i].disabled = false;
    }
}

function comprobar(){
    
    var arr = [[teclas[0].value,teclas[1].value,teclas[2].value],
           [teclas[3].value,teclas[4].value,teclas[5].value],
           [teclas[6].value,teclas[7].value,teclas[8].value]];
    
    for(var i = 0; i < 3; i++){
        if (arr[i][0] !== "" && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]){
            
                if ("X" === arr[i][0]){
                      alert("Has ganado!");   
                    ganadoJugador = true;
                    return;
                    }else if("O" === arr[i][0]){
                      alert("Te ha ganado la máquina");
                        ganadoMaquina = true;
                     return;
                         }
            
            }
        
        }
    
    for(var j = 0; j < 3; j++){
        if (arr[0][j] !== "" && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]){
            
                if ("X" === arr[0][j]){
                      alert("Has ganado!");   
                    ganadoJugador = true;
                    return;
                    }else if("O" === arr[0][j]){
                      alert("Te ha ganado la máquina");
                        ganadoMaquina = true;
                        return;
                         }
            }
        }
    
    if(arr[0][0] !== "" && arr[0][0] === arr[1][1] && arr[1][1]=== arr[2][2]){
        if("X" === arr[0][0]){
            alert("Has ganado!"); 
            ganadoJugador = true;
            return;
        }else{
            alert("Te ha ganado la máquina");
            ganadoMaquina = true;
            return;
        }
        
    }
    
    if(arr[0][2] !== "" && arr[0][2] === arr[1][1] && arr[1][1]=== arr[2][0]){
        if("X" === arr[0][2]){
            alert("Has ganado!")
            ganadoJugador = true;
            return;
        }else{
            alert("Te ha ganado la máquina");
            ganadoMaquina = true;
            return;
        }
        
      
        
    }
        
        

}

function reiniciar(){
    if(ganadoMaquina === true || ganadoJugador ===true || contador2 > 4){
        if(ganadoMaquina){
            document.getElementById("maquina").innerHTML =      parseInt(document.getElementById("maquina").innerHTML,10)+1;
        }else if(ganadoJugador){
            
            document.getElementById("jugador").innerHTML =      parseInt(document.getElementById("jugador").innerHTML,10)+1;
        }else{
            alert("Empate!");
        }
        
        for(var i = 0; i < teclas.length; i++){
            teclas[i].value = "";
            
        }
        
        ganadoMaquina = false;
        ganadoJugador = false;
        contador = 0;
        contador2 = 0;
    } 
}