import { useEffect, useRef } from "react";

const ParticleCanvas = ({
  imageSrc,
  clases,
  tWidth = 400,
  tHeight = 400,
  nParticlesCanvas = 1200,
  speedFactor = 1,
  backgroundColor = "rgb(0, 0, 0)"
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = imageSrc;

    image.onload = function () {
      canvas.width = tWidth;
      canvas.height = tHeight;

      let particlesArray = [];
      const numberOfParticles = nParticlesCanvas;
      const detail = 1;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let grid = [];
      let colorGrid = [];
      for (let y = 0; y < canvas.height; y += detail) {
        let row = [];
        let colorRow = [];
        for (let x = 0; x < canvas.width; x += detail) {
          const red = pixels.data[y * 4 * pixels.width + x * 4];
          const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
          const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
          const brightness = calculateBrightness(red, green, blue) / 100;
          row.push(brightness);
          colorRow.push(`rgb(${red}, ${green}, ${blue})`);
        }
        grid.push(row);
        colorGrid.push(colorRow);
      }

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = 0;
          this.speed = 0;
          this.velocity = Math.random() * 0.7 * speedFactor;
          this.size = Math.random() * 2 + 0.1;
          this.color = "white";
        }
        update() {
          const gridX = Math.floor(this.x / detail);
          const gridY = Math.floor(this.y / detail);
          this.speed = grid[gridY][gridX];
          this.color = colorGrid[gridY][gridX];
          let movement = (2.5 - this.speed + this.velocity) * speedFactor;
          this.y += movement;
          if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
          }
        }
        draw() {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      }
      init();

      function animate() {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.8;
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          ctx.globalAlpha = particlesArray[i].speed * 0.5;
          particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
      }
      animate();
    };

    function calculateBrightness(red, green, blue) {
      return Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      );
    }
  }, [imageSrc, speedFactor, backgroundColor]);

  return <canvas ref={canvasRef} id="canvas1" className={clases}></canvas>;
};

export default ParticleCanvas;
