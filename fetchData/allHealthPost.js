export default async function getAllHealthPost() {
  const res = await fetch(
    "https://health-bridge-server-three.vercel.app/health-post"
  );
  return res.json();
}
