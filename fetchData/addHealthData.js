export default async function getAddHealthData(data) {
  const res = await fetch(
    "https://health-bridge-server-three.vercel.app/health-post",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
}
