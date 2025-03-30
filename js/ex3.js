const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98],
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100],
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100],
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85],
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98],
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90],
  },
];

// Function to calculate min, max, and average
const calculateScores = (scores) => {
  const minScore = scores.reduce((min, score) => (score < min ? score : min), scores[0]);
  const maxScore = scores.reduce((max, score) => (score > max ? score : max), scores[0]);
  const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

  return { minScore, maxScore, avgScore };
};

// Filtering students with last name starting with 'C' and transforming data
const cLastNameResults = studentList
  .filter(student => student.lastName.charAt(0).toUpperCase() === 'C') // Filter students whose last name starts with 'C'
  .map(student => {
    const { minScore, maxScore, avgScore } = calculateScores(student.scores); // Get min, max, and avg scores
    return {
      firstName: student.firstName,
      lastName: student.lastName,
      minScore,
      maxScore,
      avgScore,
    };
  });

console.log(cLastNameResults);
