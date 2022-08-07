const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const omikuji = () => {
  const number = getRandomInt(10);
  if (number <= 1) return "大凶";
  if (number <= 2) return "凶";
  if (number <= 6) return "吉";
  if (number <= 9) return "中吉";
  return "大吉";
}

const svg = () => {
  return `
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <rect x="0.5" y="0.5" width="200" height="200" fill="white"/>
          <style>
            #fuuno {
              fill: red;
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
            <text class="header" id="fuuno" x="85" y="105">
              ${omikuji()}
            </text>
          </svg>
          `;
}

export default async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  return res.send(svg())
}
