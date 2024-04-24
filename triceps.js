//variabler:
const apiKey = '2xIvmDUVOpjG+4QgFWrHjg==7aIYVY0JpsxMQ8se';
const muscle = 'triceps'

//fetch:
fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
  headers: {
    'X-Api-Key': '2xIvmDUVOpjG+4QgFWrHjg==7aIYVY0JpsxMQ8se'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Request failed:', error);
});