/**
 * Quiz Data Template
 *
 * Use this template to create new quiz data files.
 * Copy this file and rename it according to your subject and year.
 * Example: data2026.js, data2024.js, etc.
 *
 * Guidelines:
 * - Each file should have exactly 12 assignments (weeks)
 * - Each week can have any number of questions
 * - Question IDs should be unique: "{week}.{number}_{year}_{subject}"
 * - Types: "Single-Select MCQ" or "Multi-Select MCQ" or "True/False"
 * - For images: provide URL or use null
 */

window.quizData = [
  // Week 1
  {
    assignment: "Assignment 1",
    week: 1,
    questions: [
      // Example: Single-Select MCQ
      {
        id: "1.1_YEAR_SUBJECT",
        question_text: "What is the capital of France?",
        image_context: null, // Set to image URL if needed
        options: [
          { id: "a", text: "London", image: null },
          { id: "b", text: "Paris", image: null },
          { id: "c", text: "Berlin", image: null },
          { id: "d", text: "Madrid", image: null },
        ],
        correct_answers: ["b"], // Array with one item for single-select
        type: "Single-Select MCQ",
      },

      // Example: Multi-Select MCQ
      {
        id: "1.2_YEAR_SUBJECT",
        question_text:
          "Which of the following are programming languages? (Select all that apply)",
        image_context: null,
        options: [
          { id: "a", text: "Python", image: null },
          { id: "b", text: "HTML", image: null },
          { id: "c", text: "JavaScript", image: null },
          { id: "d", text: "CSS", image: null },
        ],
        correct_answers: ["a", "c"], // Array with multiple items
        type: "Multi-Select MCQ",
      },

      // Example: True/False
      {
        id: "1.3_YEAR_SUBJECT",
        question_text: "The sky is blue.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },

      // Example: Question with image context
      {
        id: "1.4_YEAR_SUBJECT",
        question_text: "What does this diagram represent?",
        image_context: "path/to/image.png", // Can be URL or relative path
        options: [
          { id: "a", text: "Flowchart", image: null },
          { id: "b", text: "UML Diagram", image: null },
          { id: "c", text: "ERD", image: null },
          { id: "d", text: "Data Flow Diagram", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },

      // Example: Options with images
      {
        id: "1.5_YEAR_SUBJECT",
        question_text: "Which icon represents 'Save'?",
        image_context: null,
        options: [
          { id: "a", text: "Option A", image: "path/to/icon1.png" },
          { id: "b", text: "Option B", image: "path/to/icon2.png" },
          { id: "c", text: "Option C", image: "path/to/icon3.png" },
          { id: "d", text: "Option D", image: "path/to/icon4.png" },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },

      // Add more questions for Week 1...
    ],
  },

  // Week 2
  {
    assignment: "Assignment 2",
    week: 2,
    questions: [
      {
        id: "2.1_YEAR_SUBJECT",
        question_text: "Your question here?",
        image_context: null,
        options: [
          { id: "a", text: "Option A", image: null },
          { id: "b", text: "Option B", image: null },
          { id: "c", text: "Option C", image: null },
          { id: "d", text: "Option D", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      // Add more questions...
    ],
  },

  // Week 3
  {
    assignment: "Assignment 3",
    week: 3,
    questions: [
      // Add questions...
    ],
  },

  // Week 4
  {
    assignment: "Assignment 4",
    week: 4,
    questions: [
      // Add questions...
    ],
  },

  // Week 5
  {
    assignment: "Assignment 5",
    week: 5,
    questions: [
      // Add questions...
    ],
  },

  // Week 6
  {
    assignment: "Assignment 6",
    week: 6,
    questions: [
      // Add questions...
    ],
  },

  // Week 7
  {
    assignment: "Assignment 7",
    week: 7,
    questions: [
      // Add questions...
    ],
  },

  // Week 8
  {
    assignment: "Assignment 8",
    week: 8,
    questions: [
      // Add questions...
    ],
  },

  // Week 9
  {
    assignment: "Assignment 9",
    week: 9,
    questions: [
      // Add questions...
    ],
  },

  // Week 10
  {
    assignment: "Assignment 10",
    week: 10,
    questions: [
      // Add questions...
    ],
  },

  // Week 11
  {
    assignment: "Assignment 11",
    week: 11,
    questions: [
      // Add questions...
    ],
  },

  // Week 12
  {
    assignment: "Assignment 12",
    week: 12,
    questions: [
      // Add questions...
    ],
  },
];

/**
 * CHECKLIST BEFORE USING:
 *
 * ✅ Replace YEAR with actual year (e.g., 2025)
 * ✅ Replace SUBJECT with subject code (e.g., HCI, IIOT)
 * ✅ Add all 12 weeks
 * ✅ Ensure all question IDs are unique
 * ✅ Verify correct_answers array has correct IDs
 * ✅ Set proper question type
 * ✅ Test in browser before committing
 * ✅ Update config.js to include this file
 */

// Export note: The variable name MUST be 'quizData'
// This is required for the app to load the data correctly
