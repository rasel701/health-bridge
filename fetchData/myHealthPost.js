export default function getMyHealthPost(email) {
  console.log(email);
  return fetch(`http://localhost:4000/health-post?email=${email}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
