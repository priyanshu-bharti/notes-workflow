// Define the main categories
const PROMPT_CATEGORIES = {
  1: "dsa",
  2: "system-design",
  3: "java",
  4: "backend-concepts",
  5: "js-ts",
  6: "interview-questions",
  7: "dbms",
  8: "operating-systems",
  9: "networking",
};

const HEADERS = {
  dsa: [
    "topic",
    "problem",
    "difficulty",
    "description",
    "use-cases",
    "naive-approach",
    "time-complexity",
    "space-complexity",
    "optimal-approach",
  ],
  "system-design": [
    "component",
    "purpose",
    "examples",
    "practical Usage",
    "how-to-scale",
    "pros",
    "cons",
  ],
  java: [
    "syntax",
    "description",
    "example",
    "applications",
    "best-practices",
    "pros",
    "cons",
  ],
  "backend-concepts": [
    "topic",
    "description",
    "examples",
    "application"
  ],
  "js-ts": [
    "syntax",
    "description",
    "example",
    "applications",
    "best-practices",
    "pros",
    "cons",
  ],
  "interview-questions": [
    "question",
    "solution",
    "example",
    "pros",
    "cons"
  ],
  "dbms": [
    "question",
    "solution",
    "example",
    "pros",
    "cons"
  ],
  "operating-systems": [
    "question",
    "solution",
    "example",
    "pros",
    "cons"
  ],
  "networking": [
    "question",
    "solution",
    "example",
    "pros",
    "cons"
  ],
};

module.exports = {
  PROMPT_CATEGORIES,
  HEADERS,
};
