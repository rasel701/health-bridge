export default async function getSinglePost(id) {
  const res = await fetch(
    `https://health-bridge-server-three.vercel.app/health-post/${id}`
  );
  return res.json();
}
