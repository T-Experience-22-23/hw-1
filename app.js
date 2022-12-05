const app = angular.module('HW1', ['ngAnimate', 'ngMaterial', 'ngMessages']);

const dmp = new diff_match_patch();


class MainController {
    constructor($window) {
        this.window_ = $window;
        var base = `
        let t = 0; // time variable
        
        function setup() {
          createCanvas(600, 600);
          noStroke();
          fill(40, 200, 40);
        }
        
        function draw() {
          background(10, 10); // translucent background (creates trails)
        
          // make a x and y grid of ellipses
          for (let x = 0; x <= width; x = x + 30) {
            for (let y = 0; y <= height; y = y + 30) {
              // starting point of each circle depends on mouse position
              const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
              const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
              // and also varies based on the particle's location
              const angle = xAngle * (x / width) + yAngle * (y / height);
        
              // each particle moves in a circle
              const myX = x + 20 * cos(2 * PI * t + angle);
              const myY = y + 20 * sin(2 * PI * t + angle);
        
              ellipse(myX, myY, 10); // draw particle
            }
          }
        
          t = t + 0.01; // update time
        }
        `;

        let test = `
        let t = 0; // time variable
        
        function setup() {
          createCanvas(740, 725);
          noStroke;
          //or stroke (1, 0, 0)
          fill(180, 0, 0);
        }
        
        function draw() {
          background(10, 10); // translucent background (creates trails)
        
          // make a x and y grid of ellipses
          for (let x = 0; x <= width; x = x + 30) {
            for (let y = 0; y <= height; y = y + 30) {
              // starting point of each circle depends on mouse position
              const xAngle = map(mouseX, 0, width, 4 * PI, -4 * PI, true);
              const yAngle = map(mouseY, 0, height, 4 * PI, -4 * PI, true);
              // and also varies based on the particle's location
              const angle = xAngle * (x / width) + yAngle * (y / height);
        
              // each particle moves in a circle
              const myX = x + 300 * cos(3 * PI * t + angle);
              const myY = y + 30 * sin(30 * PI * t + angle);
        
              triangle(myX, 350, 380, myY, 300, 100);// draw particle
            }
          }
        
          t = t + 0.001; // update time
        }
        `;
    
        const d = dmp.diff_main(base, test);
        console.log(dmp);
    }

}

app.controller('MainController', MainController);