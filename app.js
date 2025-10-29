// Global state
let currentState = {
  subject: null,
  year: null,
  week: null,
  quizData: null,
  currentQuestionIndex: 0,
  userAnswers: {},
  checkedQuestions: {},
};

// Screen navigation functions
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

function showWelcome() {
  showScreen("welcome-screen");
  resetState();
}

function showSubjectSelection() {
  showScreen("subject-screen");
  renderSubjects();
}

function showYearSelection() {
  if (!currentState.subject) {
    showSubjectSelection();
    return;
  }
  showScreen("year-screen");
  renderYears();
}

function showWeekSelection() {
  if (!currentState.year || !currentState.quizData) {
    showYearSelection();
    return;
  }
  showScreen("week-screen");
  renderWeeks();
}

function showQuiz() {
  showScreen("quiz-screen");
  document.getElementById("results-container").classList.add("hidden");
  renderQuestion();
  updateNavigationButtons();
}

// Render functions
function renderSubjects() {
  const subjectList = document.getElementById("subject-list");
  subjectList.innerHTML = "";

  appConfig.subjects.forEach((subject) => {
    const hasYears = subject.years.length > 0;
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = `
            <div class="icon">${subject.icon}</div>
            <div class="title">${subject.shortName}</div>
            <div class="subtitle">${subject.name}</div>
        `;

    if (hasYears) {
      card.onclick = () => selectSubject(subject);
    } else {
      card.style.opacity = "0.5";
      card.style.cursor = "not-allowed";
      card.onclick = () => {
        alert(`${subject.name} content will be available soon!`);
      };
    }

    subjectList.appendChild(card);
  });
}

function renderYears() {
  const yearList = document.getElementById("year-list");
  const subject = appConfig.subjects.find((s) => s.id === currentState.subject);

  document.getElementById(
    "year-screen-title"
  ).textContent = `Select Year - ${subject.shortName}`;
  yearList.innerHTML = "";

  subject.years.forEach((yearData) => {
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = `
            <div class="icon">📅</div>
            <div class="title">${yearData.year}</div>
        `;
    card.onclick = () => selectYear(yearData);
    yearList.appendChild(card);
  });
}

function renderWeeks() {
  const weekList = document.getElementById("week-list");
  const subject = appConfig.subjects.find((s) => s.id === currentState.subject);

  document.getElementById(
    "week-screen-title"
  ).textContent = `${subject.shortName} ${currentState.year} - Select Assignment`;
  weekList.innerHTML = "";

  if (currentState.quizData && currentState.quizData.length > 0) {
    currentState.quizData.forEach((assignment) => {
      const card = document.createElement("button");
      card.className = "card";
      card.innerHTML = `
                <div class="icon">📝</div>
                <div class="title">Week ${assignment.week}</div>
                <div class="subtitle">${assignment.assignment}</div>
                <div class="subtitle">${assignment.questions.length} Questions</div>
            `;
      card.onclick = () => startWeek(assignment.week);
      weekList.appendChild(card);
    });
  } else {
    weekList.innerHTML =
      '<p style="text-align: center; color: #666;">No assignments available.</p>';
  }
}

function renderQuestion() {
  const assignment = currentState.quizData.find(
    (a) => a.week === currentState.week
  );
  if (!assignment || !assignment.questions) return;

  const question = assignment.questions[currentState.currentQuestionIndex];
  if (!question) return;

  // Update header
  const subject = appConfig.subjects.find((s) => s.id === currentState.subject);
  document.getElementById(
    "quiz-title"
  ).textContent = `${subject.shortName} ${currentState.year} - ${assignment.assignment}`;
  document.getElementById("current-question-num").textContent =
    currentState.currentQuestionIndex + 1;
  document.getElementById("total-questions").textContent =
    assignment.questions.length;

  // Update question type
  document.getElementById("question-type").textContent =
    question.type || "Single Select";

  // Update question text
  document.getElementById("question-text").textContent = question.question_text;

  // Update question image if exists
  const questionImageDiv = document.getElementById("question-image");
  if (question.image_context) {
    questionImageDiv.innerHTML = `<img src="${question.image_context}" alt="Question context">`;
  } else {
    questionImageDiv.innerHTML = "";
  }

  // Render options
  renderOptions(question);

  // Render pagination
  renderPagination(assignment.questions.length);

  // Show/hide feedback
  const feedbackContainer = document.getElementById("feedback-container");
  if (currentState.checkedQuestions[question.id]) {
    showFeedback(question);
  } else {
    feedbackContainer.classList.remove("show");
  }

  // Update check button
  updateCheckButton(question);
}

function renderOptions(question) {
  const container = document.getElementById("options-container");
  container.innerHTML = "";

  const isMultiSelect = question.type && question.type.includes("Multi");
  const isChecked = currentState.checkedQuestions[question.id];
  const userAnswer = currentState.userAnswers[question.id] || [];

  question.options.forEach((option) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";

    if (userAnswer.includes(option.id)) {
      optionDiv.classList.add("selected");
    }

    if (isChecked) {
      optionDiv.classList.add("disabled");
      if (question.correct_answers.includes(option.id)) {
        optionDiv.classList.add("correct");
      } else if (userAnswer.includes(option.id)) {
        optionDiv.classList.add("incorrect");
      }
    }

    const checkboxHtml = isMultiSelect
      ? '<div class="option-checkbox"></div>'
      : '<div class="option-radio"></div>';

    const imageHtml = option.image
      ? `<div class="option-image"><img src="${option.image}" alt="Option"></div>`
      : "";

    optionDiv.innerHTML = `
            ${checkboxHtml}
            <div class="option-content">
                <div class="option-text">${option.text}</div>
                ${imageHtml}
            </div>
        `;

    if (!isChecked) {
      optionDiv.onclick = () =>
        selectOption(question, option.id, isMultiSelect);
    }

    container.appendChild(optionDiv);
  });
}

function renderPagination(totalQuestions) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const assignment = currentState.quizData.find(
    (a) => a.week === currentState.week
  );

  for (let i = 0; i < totalQuestions; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn";
    btn.textContent = i + 1;

    if (i === currentState.currentQuestionIndex) {
      btn.classList.add("active");
    }

    const question = assignment.questions[i];
    if (currentState.userAnswers[question.id]) {
      btn.classList.add("answered");
    }

    if (currentState.checkedQuestions[question.id]) {
      const isCorrect = checkIfAnswerCorrect(
        question,
        currentState.userAnswers[question.id]
      );
      btn.classList.add(isCorrect ? "correct" : "incorrect");
    }

    btn.onclick = () => jumpToQuestion(i);
    pagination.appendChild(btn);
  }
}

// Selection functions
function selectSubject(subject) {
  currentState.subject = subject.id;
  showYearSelection();
}

async function selectYear(yearData) {
  currentState.year = yearData.year;
  const subject = appConfig.subjects.find((s) => s.id === currentState.subject);

  try {
    // Load the quiz data dynamically
    await loadQuizData(subject.folder, yearData.file);
    showWeekSelection();
  } catch (error) {
    console.error("Error loading quiz data:", error);
    alert("Failed to load quiz data. Please try again.");
  }
}

async function loadQuizData(folder, file) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${folder}/${file}`;
    script.onload = () => {
      if (typeof quizData !== "undefined") {
        currentState.quizData = quizData;
        resolve();
      } else {
        reject(new Error("Quiz data not found in file"));
      }
    };
    script.onerror = () => reject(new Error("Failed to load script"));
    document.head.appendChild(script);
  });
}

function startWeek(week) {
  currentState.week = week;
  currentState.currentQuestionIndex = 0;
  currentState.userAnswers = {};
  currentState.checkedQuestions = {};
  showQuiz();
}

// Answer handling
function selectOption(question, optionId, isMultiSelect) {
  if (!currentState.userAnswers[question.id]) {
    currentState.userAnswers[question.id] = [];
  }

  if (isMultiSelect) {
    const index = currentState.userAnswers[question.id].indexOf(optionId);
    if (index > -1) {
      currentState.userAnswers[question.id].splice(index, 1);
    } else {
      currentState.userAnswers[question.id].push(optionId);
    }
  } else {
    currentState.userAnswers[question.id] = [optionId];
  }

  renderQuestion();
}

function checkAnswer() {
  const assignment = currentState.quizData.find(
    (a) => a.week === currentState.week
  );
  const question = assignment.questions[currentState.currentQuestionIndex];

  if (
    !currentState.userAnswers[question.id] ||
    currentState.userAnswers[question.id].length === 0
  ) {
    alert("Please select an answer before checking!");
    return;
  }

  currentState.checkedQuestions[question.id] = true;
  renderQuestion();
  updateNavigationButtons();
}

function checkIfAnswerCorrect(question, userAnswer) {
  if (!userAnswer || userAnswer.length === 0) return false;

  const correctAnswers = question.correct_answers.sort();
  const sortedUserAnswer = [...userAnswer].sort();

  return JSON.stringify(correctAnswers) === JSON.stringify(sortedUserAnswer);
}

function showFeedback(question) {
  const feedbackContainer = document.getElementById("feedback-container");
  const userAnswer = currentState.userAnswers[question.id] || [];
  const isCorrect = checkIfAnswerCorrect(question, userAnswer);

  feedbackContainer.className =
    "feedback-container show " + (isCorrect ? "correct" : "incorrect");

  if (isCorrect) {
    feedbackContainer.innerHTML = "<strong>✓ Correct!</strong> Well done!";
  } else {
    const correctOptions = question.options
      .filter((opt) => question.correct_answers.includes(opt.id))
      .map((opt) => opt.text)
      .join(", ");
    feedbackContainer.innerHTML = `
            <strong>✗ Incorrect</strong>
            <div>Correct answer: ${correctOptions}</div>
        `;
  }
}

function updateCheckButton(question) {
  const checkBtn = document.getElementById("check-btn");
  const isChecked = currentState.checkedQuestions[question.id];

  if (isChecked) {
    checkBtn.disabled = true;
    checkBtn.textContent = "Checked ✓";
  } else {
    checkBtn.disabled = false;
    checkBtn.textContent = "Check Answer";
  }
}

// Navigation
function navigateQuestion(direction) {
  const assignment = currentState.quizData.find(
    (a) => a.week === currentState.week
  );
  const newIndex = currentState.currentQuestionIndex + direction;

  if (newIndex >= 0 && newIndex < assignment.questions.length) {
    currentState.currentQuestionIndex = newIndex;
    renderQuestion();
    updateNavigationButtons();
  } else if (newIndex >= assignment.questions.length) {
    showResults();
  }
}

function jumpToQuestion(index) {
  currentState.currentQuestionIndex = index;
  renderQuestion();
  updateNavigationButtons();
}

function updateNavigationButtons() {
  const assignment = currentState.quizData.find(
    (a) => a.week === currentState.week
  );
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  prevBtn.disabled = currentState.currentQuestionIndex === 0;

  if (currentState.currentQuestionIndex === assignment.questions.length - 1) {
    nextBtn.textContent = "Finish Quiz";
  } else {
    nextBtn.textContent = "Next →";
  }
}

function exitQuiz() {
  if (
    confirm(
      "Are you sure you want to exit the quiz? Your progress will be saved."
    )
  ) {
    showWeekSelection();
  }
}

// Results
function showResults() {
  const assignment = currentState.quizData.find(
    (a) => a.week === currentState.week
  );
  let correctCount = 0;

  assignment.questions.forEach((question) => {
    if (checkIfAnswerCorrect(question, currentState.userAnswers[question.id])) {
      correctCount++;
    }
  });

  const totalCount = assignment.questions.length;
  const percentage = Math.round((correctCount / totalCount) * 100);

  document.getElementById("score-percentage").textContent = percentage + "%";
  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("total-count").textContent = totalCount;

  document.getElementById("results-container").classList.remove("hidden");

  // Scroll to results
  document
    .getElementById("results-container")
    .scrollIntoView({ behavior: "smooth" });
}

function restartQuiz() {
  currentState.currentQuestionIndex = 0;
  currentState.userAnswers = {};
  currentState.checkedQuestions = {};
  document.getElementById("results-container").classList.add("hidden");
  showQuiz();
}

// Utility functions
function resetState() {
  currentState = {
    subject: null,
    year: null,
    week: null,
    quizData: null,
    currentQuestionIndex: 0,
    userAnswers: {},
    checkedQuestions: {},
  };
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  showWelcome();
});
