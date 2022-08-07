const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const svg = () => {
  return `
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <style>
            .header {
              fill: red;
              animation:center 1s 1;
            }
            #fuuno {
              transform-origin: center;
              animation:omikuji 1s ease-in-out forwards;
              }
              @keyframes omikuji {
                0% {
                  transform:scale(1) rotate(0deg);
                  opacity:0;
                }
                100% {
                  transform:scale(5) rotate(360deg);
                  opacity:1;
                }
              }
              </style>
            <text class="header" id="fuuno" x="100" y="100">
              ${getRandomInt(100)}
            </text>
          </svg>
          `;
}

export default async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  return res.send(svg())
}
