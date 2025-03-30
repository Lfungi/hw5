const studentList = [
  { firstName: "Allan", lastName: "Able", scores: [95, 85, 92, 98] },
  { firstName: "Amy", lastName: "Alexander", scores: [80, 88, 100] },
  { firstName: "Betty", lastName: "Barns", scores: [70, 80, 90, 100] },
  { firstName: "Bob", lastName: "Bones", scores: [75, 85, 95, 85] },
  { firstName: "Cindy", lastName: "Chase", scores: [95, 90, 92, 98] },
  { firstName: "Charles", lastName: "Chips", scores: [88, 99, 90] }
];

// First loop: Update each score by adding 5 points (in-place update)
studentList.forEach(student => {
  student.scores = student.scores.map(score => score + 5);
});

// Second loop: Calculate average and add it to the same scores array
studentList.forEach(student => {
  const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
  const averageScore = totalScore / student.scores.length;
  student.scores.push(averageScore);
});

// Display results using console.log
studentList.forEach(student => {
  console.log(`${student.firstName} ${student.lastName}:`);
  console.log(`Updated Scores: ${student.scores.slice(0, -1).join(", ")}`);
  console.log(`Average Score: ${student.scores[student.scores.length - 1].toFixed(2)}`);
  console.log("------");
});