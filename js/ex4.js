// Declare student list array
const studentList = [
  { 
    firstName: "Allan", 
    lastName: "Able", 
    scores: [95, 85, 92, 98] 
  },
  { 
    firstName: "Amy", 
    lastName: "Alexander", 
    scores: [80, 88, 100] 
  },
  { 
    firstName: "Betty", 
    lastName: "Barns", 
    scores: [70, 80, 90, 100] 
  },
  { 
    firstName: "Bob", 
    lastName: "Bones", 
    scores: [75, 85, 95, 85] 
  },
  { 
    firstName: "Cindy", 
    lastName: "Chase", 
    scores: [95, 90, 92, 98] 
  },
  { 
    firstName: "Charles", 
    lastName: "Chips", 
    scores: [88, 99, 90] 
  }
];

// Step 1: Update each score by adding 5 points to the existing scores.
studentList.forEach(student => {
  student.scores = student.scores.map(score => score + 5);
});

// Step 2: Calculate the average exam score for each student and add that score to the array.
studentList.forEach(student => {
  const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
  const averageScore = totalScore / student.scores.length;
  student.scores.push(averageScore);
});

// Step 3: Display results per the required format in HTML.
const resultsDiv = document.getElementById('results');

studentList.forEach(student => {
  const result = `
    <h2>${student.firstName} ${student.lastName}:</h2>
    <p>Updated Scores: ${student.scores.slice(0, -1).join(", ")}</p>
    <p>Average Score: ${student.scores[student.scores.length - 1].toFixed(2)}</p>
    <hr>
  `;
  resultsDiv.innerHTML += result;
});
