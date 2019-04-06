let values = [];
let i = 0;
let j = 0;
let columns = 50;

function setup() {
    createCanvas(800, 400);
    for(let i = 0; i < columns; i ++) 
        values.push(Math.ceil(random(height - 1)));
    frameRate(2);
    // Bubble Sort
    // for(let i = 0; i < values.length; i ++) {
    //     for(let j = 0; j < values.length - i - 1; j ++) {
    //         let a = values[j];
    //         let b = values[j + 1];
    //         if(a > b) {
    //             swap(values, j, j + 1);
    //         }
    //     }
    // }

}

function draw() {
    background(0);
    fill(200, 50, 80);    
    textSize(60);
    textAlign(CENTER);
    text('Bubble Sort Visualization', width / 2, height / 2 + 20);
    let max = Infinity;
    let a = values[j];
    let b = values[j + 1];
    if(a > b) {
        max = values[j];
        swap(values, j, j + 1);
    }

    j ++;
    if(i < values.length) {
        if(j >= values.length - i - 1) {
            j = 0;
            i ++;
        }
    } else {
        noLoop();
    }

    for(let i = 0; i < values.length; i ++) {
        noStroke();
        if(values[i] == max) {
            fill(200, 50, 80, 230);
            rect(i * (width / columns), height - values[i], width / columns, values[i]);
        } else {
            fill(50, 80, 200, 230);
            rect(i * (width / columns), height - values[i], width / columns, values[i]);    
        }
    }
}

function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
