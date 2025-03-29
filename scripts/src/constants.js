// Define the main categories
const PROMPT_CATEGORIES = {
  1: "dsa",
  2: "system-design",
  3: "java",
  4: "backend-concepts",
  5: "js-ts",
  6: "interview-questions",
};

const HEADERS = {
  dsa: [
    "topic",
    "problem",
    "difficulty",
    "description",
    "use-cases",
    "time-complexity",
    "space-complexity",
    "naive-approach",
    "optimal-approach",
  ],
  "system-design": ["Component", "Purpose", "Tech Stack", "Scalability"],
  java: ["Concept", "Example", "Use Cases", "Best Practices"],
  "backend-concepts": ["Topic", "Description", "Tools", "Common Issues"],
  "js-ts": ["Feature", "Example", "ES6+", "Performance"],
  "interview-questions": ["Question", "Difficulty", "Topics", "Optimal Answer"],
};

module.exports = {
  PROMPT_CATEGORIES,
  HEADERS,
};
