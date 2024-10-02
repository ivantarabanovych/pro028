// function getData() {
//     return fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => {
//         return fetch(`https://api.example.com/details/${data.id}`)
//           .then(detailsResponse => detailsResponse.json())
//           .then(details => {
//             console.log(details);
//           });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }

async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();

    const detailsResponse = await fetch(
      `https://api.example.com/details/${data.id}`
    );
    const details = await detailsResponse.json();

    console.log(details);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
