const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const svg = () => {
  return `
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="120">
            <text x="0" y="20" transform="rotate(30 20,40)">
              ランダムナンバー: ${getRandomInt(100)}
            </text>
          </svg>
          `;
}

export default async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  return res.send(svg())
}
