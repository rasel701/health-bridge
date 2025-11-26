export default async function getSinglePost(id) {
  const res = await fetch(`http://localhost:4000/health-post/${id}`);
  return res.json();
}
