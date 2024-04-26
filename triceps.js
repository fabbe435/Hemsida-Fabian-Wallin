
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
  if (data){
    const exercises = data;
    displayResults(exercises)
  }
  else{
    console.error('Request failed:', error);
  }
})


function displayResults(exercises) {
  const resultsSection = document.getElementById('resultsSection');
  resultsSection.innerHTML = '';

  exercises.forEach(exercise => {
    const exerciseName = exercise.name || 'Namn saknas';
    const exerciseType = exercise.type || 'Namn saknas';
    const exerciseDescription = exercise.instructions || 'Ingen beskrivning tillagd';
    const exerciseEquipment = exercise.equipment || 'Ingen information given';
    const exerciseDifficulty = exercise.difficulty || 'Ingen information given';

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    resultDiv.innerHTML = `
    <h3>${exerciseName}</h3>
    <p>Type of exercise: ${exerciseType}</p>
    <p>Description: ${exerciseDescription}</p>
    <p>Equipment: ${exerciseEquipment}</p>
    <p>Difficulty: ${exerciseDifficulty}</p>
    `;

    resultsSection.appendChild(resultDiv);
  })
}