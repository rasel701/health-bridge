export default async function getAddHealthData(data) {
  const res = await fetch("http://localhost:4000/health-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
