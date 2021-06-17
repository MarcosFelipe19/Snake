
window.addEventListener("load", function () {
    var mover

    
document.addEventListener("keydown", capturarTecla);
function capturarTecla(event) {
    mover = event.keyCode;
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var cobra = {
    posiX: 20,
    posiY: 20,
    tamanho: 20,
    velo: 0,
    rabo: 5,
    tamanhoC: []

}
var maca = {
    tamanho: 19,
    posix: 20,
    posiy: 20
} 
    function game() {
        /*desenha Tela*/
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        /*verificando qual tecla foi digitada e mover cobra*/ 
        if (mover == 38) {
            cobra.velo = 1
            cobra.posiY -= cobra.velo*20;
        }
        else if (mover == 40) {
            cobra.velo = 1
            cobra.posiY += cobra.velo*20;
        } else if (mover == 39) {
            cobra.velo = 1
            cobra.posiX += cobra.velo*20;
        } else if (mover == 37) {
            cobra.velo = 1
            cobra.posiX -= cobra.velo*20;
        }   

        /*desenha cobra, percorre todo o array, desenhado na posição x e y,*/ 
        ctx.fillStyle = "#fff"
        for (i = 0; i < cobra.tamanhoC.length; i++) {
            ctx.fillRect(cobra.tamanhoC[i].x, cobra.tamanhoC[i].y, cobra.tamanho -1, cobra.tamanho -1);
            
                   
            if(cobra.velo==1){
                if(cobra.tamanhoC[i].x == cobra.posiX && cobra.tamanhoC[i].y == cobra.posiY)
                {
                    newgame()
                }
            }
        }
        //coloca cada quadrado da cobra no array, pela posição x e y
        cobra.tamanhoC.push({ x: cobra.posiX, y: cobra.posiY })
        if (cobra.tamanhoC.length > cobra.rabo) {
            cobra.tamanhoC.shift();
        } 
            //Verifica colisão da cobra com a maça
        if ( cobra.posiY == maca.posiy*20 && cobra.posiX == maca.posix*20) {
            cobra.rabo++;
            maca.posix = Math.round(Math.random() * 29);
            maca.posiy = Math.round(Math.random() * 29);
        }

        ctx.fillStyle = "red";
        ctx.fillRect(maca.posix * 20, maca.posiy * 20, maca.tamanho, maca.tamanho);
        
        
     /*quando a cabeça da cobra atingir algum limite da tela, ela passará para o lado inverso*/ 
        if (cobra.posiX < 0) {
            
            cobra.posiX = 600
        } else if (cobra.posiX > 600) {
            
            cobra.posiX = 0;
        } else if (cobra.posiY < 0) {
    
            cobra.posiY = 600;
        } else if (cobra.posiY > 600) {
             
            cobra.posiY = 0
        }

    }

   function newgame(){
    cobra.velo = 0;
    clearInterval(jogar);
    alert("new game")
   }

var jogar = setInterval(game, 120);
})
