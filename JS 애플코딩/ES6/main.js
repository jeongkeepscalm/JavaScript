
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var image1 = new Image();
image1.src = 'runningman.png';
// 공룡
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(image1, this.x, this.y, this.width, this.height)
    }
}




// 장애물 : 같은 여러 객체를 생성해야 하니 class를 만듦.
var image2 = new Image();
image2.src = 'obstacle.png';
class obstacle {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(){
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(image2, this.x, this.y, this.width, this.height);
    }
}

let timer = 0; 
let obstacles = []; 
let animation; 
function executeSixty() {
    // 프레임마다 실행. 
    animation = requestAnimationFrame(executeSixty);
    timer++; // 한프레임마다 ++;

    ctx.clearRect(0,0,canvas.width, canvas.height);



    // 모니터마다 1초에 몇 프레임을 보여주는 지 다름. 1초에 60프레임이면 아래처럼. 
    if(timer % 200 === 0){
        obstacles.push(new obstacle(500, 200, 50,50));
    }
    obstacles.forEach((v, i, o)=>{
        // 지나간 장애물 배열에서 삭제. 
        if(v.x < 0){
            o.splice(i,1);
        }


        if (jumping === true) {
            dino.y--;
            jumpTimer++;
        }

        if (jumpTimer > 100) {
            jumping = false;
            jumpTimer = 0;
        }

        if (jumping === false) {
            if (dino.y < 200 ) {
                dino.y++;
            }
        }

        collisionDetection(dino, v);

        v.x--;
        v.draw();
    });
    dino.draw();
}

var jumping = false;
var jumpTimer = 0; 
document.addEventListener('keydown',function(e){
    if (e.code === 'Space'){
        jumping = true;
    }
})

function collisionDetection(dino, obstacle){
    let gapX = obstacle.x - (dino.x + dino.width);
    let gapY = obstacle.y - (dino.y + dino.height);

    if (gapX < 0 && gapY < 0) {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}


