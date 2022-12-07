const app = angular.module('HW1', ['ngAnimate', 'ngMaterial', 'ngMessages', 'ngSanitize']);

const dmp = new diff_match_patch();
const BASE = `
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

const STUDENTS = [
  {
    name: 'Shakked Naftali', embed_url: '<iframe src="https://editor.p5js.org/shakkedn/full/vuO0E99FM"></iframe>', code: `
let t =5; // time variable

function setup() {
  createCanvas(1000, 800);
  noStroke();
  fill(40,15, 40);
}

function draw() {
  background(10, 30); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 1) {
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
`},
{
  name: 'Maya Shalev', embed_url: '<iframe src="https://editor.p5js.org/mayauni13/full/xiSSlif93"></iframe>', code: `
let t = 0; // time variable
function setup() {
createCanvas(600, 600);
noStroke();
fill(100, 500, 100);
}

function draw() {
background(255, 204, 100);; // translucent background (creates trails)

// make a x and y grid of circles
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
`},
{name: 'Lahan', embed_url: '<iframe src="https://editor.p5js.org/lahanf21/full/TE0ObXK_B"></iframe>', code: `
let t = 6; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(255, 22, 205);
}

function draw() {
  background(0, 120, 255); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 4; x <= width; x = x + 20) {
    for (let y = 7; y <= height; y = y + 7) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 33, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(4 * PI * t + angle);
      const myY = y + 25 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 11); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Tamar Galant', embed_url: '<iframe src="https://editor.p5js.org/8gltm1897/full/S9dC51QLK"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(700, 600);
  noStroke(4);
  fill("rgb(225,184,252)");
}

function draw() {
  background("rgb(228,249,253)"); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 20) {
    for (let y = 0; y <= height; y = y + 100) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 2 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 2 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 40 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 8); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Noga Shragai', embed_url: '<iframe src="https://editor.p5js.org/nogashragai/full/k0oLe8jyM"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(255, 250, 250
      );
}

function draw() {
  background(30, 90); // translucent background (creates trails)


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

      rect(myX, myY, 70, 10); // draw particle
    }
  }

  t = t + 0.001; // update time
}
`},
{name: 'Ron Adar', embed_url: '<iframe src="https://editor.p5js.org/ronadar127/full/V358BgrSt"></iframe>', code: `let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(40, 200, random(255));
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

      ellipse(myX, myY, 2); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Erel Caro', embed_url: '<iframe src="https://editor.p5js.org/erelcaro/full/yBnAFUiJtR"></iframe>', code: `
let t = 20; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(10, 200, 10);
}

function draw() {
  background(200, 100); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -2 * PI, 6 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 6 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 40 * cos(2 * PI * t + angle);
      const myY = y + 40 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 30); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Michal Efrati', embed_url: '<iframe src="https://editor.p5js.org/michalef8/full/_L_ND0d6k"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(650, 600);
  noStroke();
  fill(255, 204, 0);
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 90) {
    for (let y = 0; y <= height; y = y + 70) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 5 * cos(2 * PI * t + angle);
      const myY = y + 5 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.04; // update time
}
`},
{name: 'Shayel', embed_url: '<iframe src="https://editor.p5js.org/shayelhn/full/9uV8J_-51"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(200, 40, 200);
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -2 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(4 * PI * t + angle);
      const myY = y + 20 * sin(1 * PI * t + angle);

      ellipse(myX, myY, 7); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Amit Engel', embed_url: '<iframe src="https://editor.p5js.org/amit_engel26/full/Imlzbn05g"></iframe>', code: `let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(500, 150, 500);
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 35) {
    for (let y = 0; y <= height; y = y + 5) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 6 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 6 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 10 * cos(2 * PI * t + angle);
      const myY = y + 10 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Or Burshtein', embed_url: '<iframe src="https://editor.p5js.org/orburstein/full/yIF0dMRPH"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(800, 800);
  noStroke();
  fill(255, 100, 40);
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 100) {
    for (let y = 0; y <= height; y = y + 100) {
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
`},
{name: 'Ido Taragano', embed_url: '<iframe src="https://editor.p5js.org/idotaragano/full/PUThPvuUO"></iframe>', code: `
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
`},
{name: 'Michal Lichtenstein', embed_url: '<iframe src="https://editor.p5js.org/MichalFania/full/g1Qmj7pIr"></iframe>', code: `let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(30, 50, 250);
}

function draw() {
  background(15, 30, 20); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 50) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -5 * PI, 5 * PI, true);
      const yAngle = map(mouseY, 0, height, -5 * PI, 5 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 35 * cos(5 * PI * t + angle);
      const myY = y + 35 * sin(5 * PI * t + angle);

      ellipse(myX, myY, 50); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Yuval Keshet', embed_url: '<iframe src="https://editor.p5js.org/yuvalkeshet/full/RNLiGwa1d"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  fill(50, 50, random(255));
}

function draw() {
  background(10, 10); // translucent background (creates trails)
//frameRate(10);
fill(random(255), random(255), random(255));
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(30, 0, width, -4 * PI, 4 * PI, true);
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
`},
{name: 'Ori Druckman', embed_url: '<iframe src="https://editor.p5js.org/12345ori/full/A0za9E7Qb"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(100, 0, 255);
}

function draw() {
  background(150, 150); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 70 * cos(2 * PI * t + angle);
      const myY = y + 70 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Ella Kol', embed_url: '<iframe src="https://editor.p5js.org/ellakol20/full/T5-MEGc4s"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill('rgba(100%,0%,100%,0.5)');
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 10) {
    for (let y = 0; y <= height; y = y + 10) {
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
`},
{name: 'Adva Kornhauser', embed_url: '<iframe src="https://editor.p5js.org/Adva.kor/full/rGPM7myly"></iframe>', code: `
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(40, 600, 40);
}

function draw() {
  background('#fae'); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 60) {
    for (let y = 0; y <= height; y = y + 90) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -5 * PI, 6 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 40 * cos(2 * PI * t + angle);
      const myY = y + 80 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
{name: 'Yahel Sharvit Solomon', embed_url: '<iframe src="https://editor.p5js.org/Yahelsharvitsolomon/full/B7m-lhsVJ"></iframe>', code: `let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  frameRate(20);
  noStroke(1);
  fill("#9A7C7C");
}

function draw() {
  background(7, 7); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -10 * PI, 4 * PI, true);
      random(255);
      const yAngle = map(mouseY, 0, height, -10 * PI, 4 * PI, true);
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
`},
// {name: '', embed_url: '', code: ``}, // empty template
];

function htmlSeparateDiff(base, text) {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(base, text);
  dmp.diff_cleanupSemantic(diffs);
  const formattedBase = [];
  const formattedTest = [];

  let pattern_amp = /&/g;
  let pattern_lt = /</g;
  let pattern_gt = />/g;
  let pattern_para = /\n/g;
  for (let x = 0; x < diffs.length; x++) {
    let op = diffs[x][0];    // Operation (insert, delete, equal)
    let data = diffs[x][1];  // Text of change.
    let text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
      .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
    switch (op) {
      case DIFF_INSERT:
        formattedTest[x] = '<span class="code addition">' + text + '</span>';
        break;
      case DIFF_DELETE:
        formattedBase[x] = '<span class="code deletion">' + text + '</span>';
        break;
      case DIFF_EQUAL:
        formattedBase[x] = '<span class="code">' + text + '</span>';
        formattedTest[x] = '<span class="code">' + text + '</span>';
        break;
    }
  }
  return [formattedBase.join(''), formattedTest.join('')];
}

class MainController {
  constructor($window, $sce, $http) {
    this.window_ = $window;
    this.http_ = $http;
    this.students = STUDENTS.map((v) => {
      const diff_sides = htmlSeparateDiff(BASE, v.code);
      return {
        name: v.name,
        embed_url: $sce.trustAsHtml(v.embed_url),
        base: diff_sides[0],
        test: diff_sides[1],
      };
    });
    this.studentIndex = 0;
    this.http_.get('http://editor.p5js.org/mayauni13/sketches/xiSSlif93').then((v) => void console.log(v));;
    this.http_.get('https://editor.p5js.org/mayauni13/sketches/xiSSlif93').then((v) => void console.log(v));;
  }

  incrementStudent() {
    this.studentIndex = (this.studentIndex + 1) % this.students.length;
  }

  decrementStudent() {
    this.studentIndex = (this.studentIndex - 1) % this.students.length;
    if (this.studentIndex < 0) this.studentIndex += this.students.length;
  }
  
  get student() {
    return this.students[this.studentIndex];
  }
}

app.controller('MainController', MainController);