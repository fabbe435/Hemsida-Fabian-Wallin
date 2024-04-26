
//variabler:
const apiKey = '2xIvmDUVOpjG+4QgFWrHjg==7aIYVY0JpsxMQ8se';
const muscle = 'chest'

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

function displayText(){
  var text = document.getElementById("textField");
  text.style.display = "block";
  if (text.style.display ="block"){
  }
}

function hideText(){
  var text = document.getElementById("TextField");
  text.style.display = "none";
}

function displayResults(exercises) {
  const resultsSection = document.getElementById('resultsSection');
  resultsSection.innerHTML = '';

  exercises.forEach(exercise => {
    const exerciseName = exercise.name || 'Namn saknas';
    const exerciseType = exercise.type || 'Namn saknas';
    const exerciseInstructions = exercise.instructions || 'Ingen beskrivning tillagd';
    const exerciseEquipment = exercise.equipment || 'Ingen information given';
    const exerciseDifficulty = exercise.difficulty || 'Ingen information given';

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    resultDiv.innerHTML = `
    <h3>${exerciseName}</h3>
    <p>Difficulty: ${exerciseDifficulty}</p>
    <p>Type of exercise: ${exerciseType}</p>
    <p>Equipment: ${exerciseEquipment}</p>
    <button id="DisplayInstructions" onclick="displayText()">Show/Hide Instructions</button>
    <div id="textField">Instructions: ${exerciseInstructions}</div>
    `;

    resultsSection.appendChild(resultDiv);
  })
}