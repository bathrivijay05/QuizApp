// app.js (Updated: Free Navigation retained, Shuffling removed)

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let quizActive = false;
let quizState = []; // Stores state: { selectedIds: [], isAnswered: false, isCorrect: false }

// NOTE: The shuffleArray function is kept here but is no longer used in loadQuestion or startQuiz.
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // This function is now unused in the main flow.
};

// Assuming 'quizData' is loaded from data.js and contains ALL assignments/questions
const flattenedData = quizData.flatMap((assignment) =>
  assignment.questions.map((q) => ({
    ...q,
    week: assignment.week,
  }))
);

// --- SCREEN MANAGEMENT ---
const showScreen = (id) => {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
};

const generateWeekButtons = () => {
  const weekContainer = document.getElementById("week-selection");
  // Ensure all weeks from all years are covered
  const allAssignments = quizData.flatMap((year) => year);
  const uniqueWeeks = [...new Set(allAssignments.map((a) => a.week))].sort(
    (a, b) => a - b
  );

  uniqueWeeks.forEach((week) => {
    const button = document.createElement("button");
    button.textContent = `Week ${week}`;
    button.onclick = () => startQuiz(week);
    weekContainer.appendChild(button);
  });
};

// --- QUIZ FLOW ---

const startQuiz = (mode) => {
  // Determine the set of questions
  let selectedQuestions;
  if (mode === "full") {
    // Use all questions, but DO NOT shuffle the question order itself
    selectedQuestions = [...flattenedData];
  } else {
    // Filter questions by selected week, and DO NOT shuffle
    selectedQuestions = flattenedData.filter((q) => q.week === mode);
  }

  // Sort the questions by original ID to maintain a stable, non-shuffled sequence
  // This provides a stable, navigable list based on question ID.
  selectedQuestions.sort((a, b) => a.id.localeCompare(b.id));

  currentQuestions = selectedQuestions;

  if (currentQuestions.length === 0) {
    alert(`No questions found for the selected mode.`);
    return;
  }

  score = 0;
  currentQuestionIndex = 0;
  quizActive = true;

  // Initialize quiz state: an empty state for each question
  quizState = currentQuestions.map((q) => ({
    selectedIds: [],
    isAnswered: false,
    isCorrect: false,
    // The original order is used, no need for shuffledOptions state
    originalOptions: [...q.options],
  }));

  showScreen("quiz-screen");
  loadQuestion();
};

// Function to navigate to any question index
const goToQuestion = (index) => {
  if (index >= 0 && index < currentQuestions.length) {
    currentQuestionIndex = index;
    loadQuestion();
  }
};

const nextQuestion = () => {
  goToQuestion(currentQuestionIndex + 1);
};

const prevQuestion = () => {
  goToQuestion(currentQuestionIndex - 1);
};

const loadQuestion = () => {
  const q = currentQuestions[currentQuestionIndex];
  const qState = quizState[currentQuestionIndex];
  const isAnswered = qState.isAnswered;

  // 1. Reset Controls and Feedback
  document.getElementById("feedback-container").style.display = "none";
  document.getElementById("solution-text").textContent = "";
  document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
  document.getElementById("next-btn").disabled =
    currentQuestionIndex === currentQuestions.length - 1;

  // Disable Submit button until a new selection is made on an unanswered question
  document.getElementById("submit-btn").disabled = isAnswered;

  // 2. Update Header
  document.getElementById("question-header").textContent = `Week ${
    q.week
  } - Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

  // 3. Load Question Content (Text and Image)
  document.getElementById("question-text").textContent = q.question_text;
  const qImage = document.getElementById("question-image");
  if (q.image_context) {
    qImage.src = q.image_context;
    qImage.style.display = "block";
  } else {
    qImage.style.display = "none";
    qImage.src = "";
  }

  // 4. Load Options in ORIGINAL ORDER
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  // Use the original options array stored in the state
  const originalOptions = qState.originalOptions;

  const isMultiSelect = q.type === "Multi-Select MCQ";

  originalOptions.forEach((option) => {
    const item = document.createElement("div");
    item.className = "option-item";

    const inputType = isMultiSelect ? "checkbox" : "radio";
    const input = document.createElement("input");
    input.type = inputType;
    input.name = "quiz-option";
    input.value = option.id;

    // Check if this option was previously selected by the user
    input.checked = qState.selectedIds.includes(option.id);

    // Lock options if already answered
    input.disabled = isAnswered;

    // Enable submission button only if user changes selection/makes a selection
    input.onchange = () => {
      document.getElementById("submit-btn").disabled = false;
    };

    const label = document.createElement("label");
    label.textContent = option.text;

    if (option.image) {
      const optionImage = document.createElement("img");
      optionImage.src = option.image;
      optionImage.alt = "Option image";
      label.prepend(optionImage);
    }

    // Apply visual feedback if answered
    if (isAnswered) {
      const isCorrectOption = q.correct_answers.includes(option.id);
      const isSelected = qState.selectedIds.includes(option.id);

      if (isCorrectOption) {
        label.classList.add("correct-option");
      } else if (isSelected && !isCorrectOption) {
        label.classList.add("incorrect-selection");
      }
    }

    item.appendChild(input);
    item.appendChild(label);
    optionsContainer.appendChild(item);
  });

  // 5. Display Answered Feedback
  if (isAnswered) {
    // Display immediate feedback for answered questions
    document.getElementById("feedback-container").style.display = "block";
    const feedbackText = document.getElementById("feedback-text");
    feedbackText.textContent = qState.isCorrect
      ? "✅ Correct! (Reviewed)"
      : "❌ Incorrect. (Reviewed)";
    feedbackText.className = qState.isCorrect ? "correct" : "incorrect";
    document.getElementById(
      "solution-text"
    ).textContent = `Correct Answers: ${q.correct_answers.join(", ")}`;
  }

  updateQuizNavigationStatus();
};

const submitAnswer = () => {
  const q = currentQuestions[currentQuestionIndex];
  const qState = quizState[currentQuestionIndex];
  const options = document.querySelectorAll("#options-container input");

  // 1. Collect user selections
  const selectedIds = Array.from(options)
    .filter((input) => input.checked)
    .map((input) => input.value);

  // 2. Check correctness
  const correctIds = q.correct_answers;
  const isCorrect =
    correctIds.length === selectedIds.length &&
    correctIds.every((id) => selectedIds.includes(id));

  // 3. Update Quiz State (Crucial for free navigation)
  qState.selectedIds = selectedIds;
  qState.isAnswered = true;
  qState.isCorrect = isCorrect;

  // Recalculate score
  score = quizState.filter((s) => s.isCorrect).length;

  // 4. Provide Immediate Feedback and Highlight
  loadQuestion(); // Re-render to display locked options and colors

  // 5. Update UI Controls/Status
  document.getElementById("submit-btn").disabled = true;
  updateQuizNavigationStatus();
};

const showResults = () => {
  document.getElementById(
    "final-score"
  ).textContent = `Your Score: ${score}/${currentQuestions.length}`;
  showScreen("results-screen");
};

// Function to render status buttons for quick jumps
const updateQuizNavigationStatus = () => {
  const navContainer = document.getElementById("question-nav-status");
  navContainer.innerHTML = "";

  quizState.forEach((qState, index) => {
    const navButton = document.createElement("button");
    navButton.textContent = `${index + 1}`;
    navButton.onclick = () => goToQuestion(index);

    // Add visual cues based on state
    if (qState.isAnswered) {
      navButton.classList.add(
        qState.isCorrect ? "nav-correct" : "nav-incorrect"
      );
    }
    if (index === currentQuestionIndex) {
      navButton.classList.add("nav-current");
    }

    navContainer.appendChild(navButton);
  });
};

// Initialize the app when the window loads
window.onload = () => {
  generateWeekButtons();
  showScreen("start-screen");
};
