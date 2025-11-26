export default async function getAllHealthPost() {
  const res = await fetch("http://localhost:4000/health-post");
  return res.json();
}
