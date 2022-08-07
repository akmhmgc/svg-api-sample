export default async (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  return res.send('hello world')
}
