let canvas;
let ctx;
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")

canvas.width=1200;
canvas.height=600;
document.body.appendChild(canvas);

let duswhgkImage, gunImage, backgroundImage,
 enemyImage, gameOverImage;

function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src="images/background.jpg";

    duswhgkImage = new Image();
    duswhgkImage.src="images/duswhgk.jpg";

    gunImage = new Image();
    gunImage.src="images/gun.png";
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(duswhgkImage, 1050, 300);
    ctx.drawImage(gunImage, 980, 330);



    

}

function main(){
    render()
    requestAnimationFrame(main)
}

loadImage();
main();

