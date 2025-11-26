export default function getMyHealthPost(email) {
  console.log(email);
  return fetch(
    `https://health-bridge-server-three.vercel.app/health-post?email=${email}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
