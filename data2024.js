// data.js

// 🚨 PASTE YOUR ENTIRE JSON ARRAY HERE
const quizData = [
  {
    assignment: "Assignment 1",
    week: 1,
    questions: [
      {
        id: "1.1_2024",
        question_text:
          "An instructor analyzes student interactions within an online learning platform, tracking discussion forum participation, video viewing times, and quiz attempts. Then the instructor correlates this data with student performance in the course. He realizes that students who score more than 90%, also have more than 75% in the quizzes. What type of analytics is she doing?",
        image_context: null,
        options: [
          { id: "a", text: "Descriptive Analytics", image: null },
          { id: "b", text: "Diagnostic Analytics", image: null },
          { id: "c", text: "Predictive Analytics", image: null },
          { id: "d", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.2_2024",
        question_text:
          "In the image given below depicting the four levels of Analytics, the smallest circle (green) depicts which type of analytics? ",
        image_context: "images/img1.png",
        options: [
          { id: "a", text: "Descriptive Analytics", image: null },
          { id: "b", text: "Diagnostic Analytics", image: null },
          { id: "c", text: "Predictive Analytics", image: null },
          { id: "d", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.3_2024",
        question_text:
          "Which of the following is NOT true about Educational Data Mining?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is the process of getting useful insight from Data.",
            image: null,
          },
          {
            id: "b",
            text: "It includes validating a learner model or a hypothesis about learning from learners' data.",
            image: null,
          },
          {
            id: "c",
            text: "It helps to make recommendations to the learner by analyzing the data.",
            image: null,
          },
          {
            id: "d",
            text: "It is only a branch of Artificial intelligence.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.4_2024",
        question_text:
          "Mid-semester exams are over, and the course teacher plotted the histogram of students' scores to check how normally the scores are distributed. What kind of analytics is this?",
        image_context: null,
        options: [
          { id: "a", text: "Demonstrative analytics", image: null },
          { id: "b", text: "Descriptive analytics", image: null },
          { id: "c", text: "Predictive analytics", image: null },
          { id: "d", text: "Diagnostic analytics", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.5_2024",
        question_text:
          '"Scaffolding students to achieve their learning goal" and "Personalization in an Intelligent Tutoring Systems" are examples of-',
        image_context: null,
        options: [
          { id: "a", text: "Descriptive Analytics", image: null },
          { id: "b", text: "Diagnostic Analytics", image: null },
          { id: "c", text: "Predictive Analytics", image: null },
          { id: "d", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.6_2024",
        question_text:
          "Which of the following questions is a type of Predictive Analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "What is the average score of all students in the CBSE 10th Maths Exam?",
            image: null,
          },
          {
            id: "b",
            text: "What will be the performance of a student in the next question?",
            image: null,
          },
          {
            id: "c",
            text: "Which courses will the student take in the next semester?",
            image: null,
          },
          {
            id: "d",
            text: "What is the average attendance of the class over the semester?",
            image: null,
          },
        ],
        correct_answers: ["b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "1.7_2024",
        question_text:
          "Which of the following is NOT true about Educational Data Mining?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is the process of getting valuable insight from Data.",
            image: null,
          },
          {
            id: "b",
            text: "Educational data mining includes validating a learner model or a hypothesis about learning",
            image: null,
          },
          {
            id: "c",
            text: "It helps to make recommendations to the learner by analyzing the data.",
            image: null,
          },
          {
            id: "d",
            text: "The major use of Educational Data mining is to improve marketing strategy.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.8_2024",
        question_text:
          "A maths teacher decided to conduct extra lectures (remedial content) before the final exam for the students who got less than 30% in the mid-semester. What type of analytics is she using?",
        image_context: null,
        options: [
          { id: "a", text: "Descriptive Analytics", image: null },
          { id: "b", text: "Diagnostic Analytics", image: null },
          { id: "c", text: "Predictive Analytics", image: null },
          { id: "d", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.9_2024",
        question_text:
          "Fill in the blanks: ______ is concerned with the institution's business, whereas ______ deals with the students. (Note that the answer should have a particular order)",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Learning Analytics, Individual Intelligence",
            image: null,
          },
          {
            id: "b",
            text: "Business Intelligence, Learning Analytics",
            image: null,
          },
          {
            id: "c",
            text: "Academic Analytics, Learning Analytics",
            image: null,
          },
          {
            id: "d",
            text: "Learning Analytics, Academic Analytics",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.10_2024",
        question_text:
          "Which of the following is/are used in Descriptive analytics?",
        image_context: null,
        options: [
          { id: "a", text: "Bar charts", image: null },
          { id: "b", text: "Regression analysis", image: null },
          { id: "c", text: "Pattern mining", image: null },
          { id: "d", text: "Line graphs", image: null },
        ],
        correct_answers: ["a", "d"],
        type: "Multi-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 2",
    week: 2,
    questions: [
      {
        id: "2.1_2024",
        question_text:
          "In a classroom setting, what data can researchers and teachers collect to inform instructional decisions and assess student achievement?",
        image_context: null,
        options: [
          { id: "a", text: "Students' mid-sem exam", image: null },
          { id: "b", text: "Score in Course- project", image: null },
          { id: "c", text: "Assignments completion", image: null },
          { id: "d", text: "Students co-curricular activity", image: null },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.2_2024",
        question_text:
          "Considering you are a researcher and want to collect data from any learning environment. What will be the primary steps to protect the ethics and data privacy of the learner?",
        image_context: null,
        options: [
          { id: "a", text: "Get consent from the participant", image: null },
          { id: "b", text: "Anonymize the data and classify it", image: null },
          { id: "c", text: "Store the data in a secure place", image: null },
          { id: "d", text: "Share the data with participants", image: null },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.3_2024",
        question_text:
          "While designing a study to collect data from class 4 students, which of the following factors is the most important in data collection?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Record all the interactions with student",
            image: null,
          },
          { id: "b", text: "Get student's and parent's consent", image: null },
          { id: "c", text: "Students' parents' information", image: null },
          { id: "d", text: "None of the above is important", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.4_2024",
        question_text: "Which of the following is part of Data Preprocessing?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Identifying other sources of data required for analysis.",
            image: null,
          },
          { id: "b", text: "Flagging erroneous data.", image: null },
          { id: "c", text: "Dealing with missing data.", image: null },
          { id: "d", text: "Removing irrelevant attributes.", image: null },
        ],
        correct_answers: ["b", "c", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.5_2024",
        question_text:
          "Which of the following are the true statements about privacy and ethics in research?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is someone's right to keep information about themselves secret.",
            image: null,
          },
          { id: "b", text: "It is a basic human right", image: null },
          { id: "c", text: "Privacy has social benefits", image: null },
          {
            id: "d",
            text: "Person privacy can be exploited for the sake of scientific advancement",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.6_2024",
        question_text:
          "Arrange the following sentences in the correct order of sequence: i. Analyze data, ii. Pre-process data, iii. Collect data, iv. Get approval from the Ethics Committee to conduct research and collect data, v. Get participants' consent",
        image_context: null,
        options: [
          { id: "a", text: "iv, v, iii, ii, i", image: null },
          { id: "b", text: "v, iv, iii, ii, i", image: null },
          { id: "c", text: "iv, iii, v, ii, i", image: null },
          { id: "d", text: "iii, iv, v, ii, i", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.7_2024",
        question_text:
          "Which of the following features can be extracted from the MOOC platform-",
        image_context: null,
        options: [
          { id: "a", text: "Time spent on Discussion Forum", image: null },
          { id: "b", text: "Score in in-video Quizzes", image: null },
          { id: "c", text: "Number of videos watched", image: null },
          { id: "d", text: "Extra curriculum activities", image: null },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.8_2024",
        question_text:
          "Before conducting research studies with participants, which of the following information has to be provided to participants",
        image_context: null,
        options: [
          { id: "a", text: "What data will be collected", image: null },
          {
            id: "b",
            text: "Why and how the data will be collected",
            image: null,
          },
          { id: "c", text: "How the data will be stored", image: null },
          {
            id: "d",
            text: "Information about other participants",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.9_2024",
        question_text:
          "The stage where raw data is converted into actions/events is called",
        image_context: null,
        options: [
          { id: "a", text: "Data analysis", image: null },
          { id: "b", text: "Data logging", image: null },
          { id: "c", text: "Data pre-processing", image: null },
          { id: "d", text: "Data reporting", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.10_2024",
        question_text:
          "In MOOC data, what field in the data is used to identify user location?",
        image_context: null,
        options: [
          { id: "a", text: "UserID", image: null },
          { id: "b", text: "Timestamp", image: null },
          { id: "c", text: "IP address", image: null },
          { id: "d", text: "Session ID", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 3",
    week: 3,
    questions: [
      {
        id: "3.1_2024",
        question_text:
          "Arrange the following processes of ML in the correct sequence according to their time of occurrence from the first step. 1. Choosing the model, 2. Training, 3. Data collection and processing, 4. Testing",
        image_context: null,
        options: [
          { id: "a", text: "3-1-2-4", image: null },
          { id: "b", text: "2-3-1-4", image: null },
          { id: "c", text: "3-2-4-1", image: null },
          { id: "d", text: "3-4-1-2", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.2_2024",
        question_text:
          "For imbalanced datasets, which of the following performance metrics is generally used?",
        image_context: null,
        options: [
          { id: "a", text: "Precision", image: null },
          { id: "b", text: "Recall", image: null },
          { id: "c", text: "F-Score", image: null },
          { id: "d", text: "Accuracy", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.3_2024",
        question_text:
          "For the below confusion matrix, the Accuracy value is (Report your answers correct to two decimal places). [Confusion Matrix: Predicted A/Actual A=20, Predicted !A/Actual A=10, Predicted A/Actual !A=20, Predicted !A/Actual !A=20]",
        image_context: "images/img2.png",
        options: [
          { id: "a", text: "57%", image: null },
          { id: "b", text: "20%", image: null },
          { id: "c", text: "60%", image: null },
          { id: "d", text: "30%", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.4_2024",
        question_text:
          "Two Raters rate the engagement of the group of students in an aviation project. The following tables depict the observation made by them, Calculate the value of kappa: [Rater-1 Engaged/Rater-2 Engaged=40, Rater-1 not Engaged/Rater-2 Engaged=10, Rater-1 Engaged/Rater-2 not Engaged=20, Rater-1 not Engaged/Rater-2 not Engaged=30]",
        image_context: "images/img3.png",
        options: [
          { id: "a", text: "0.6", image: null },
          { id: "b", text: "0.40", image: null },
          { id: "c", text: "0.43", image: null },
          { id: "d", text: "0.10", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.5_2024",
        question_text: "ROC is generated by plotting",
        image_context: null,
        options: [
          {
            id: "a",
            text: "True Positive Rate (y-axis) against the False Positive Rate (x-axis)",
            image: null,
          },
          {
            id: "b",
            text: "True Positive Rate (x-axis) against the False Positive Rate (y-axis)",
            image: null,
          },
          {
            id: "c",
            text: "True Positive Rate (x-axis) against the True Negative Rate (y-axis)",
            image: null,
          },
          {
            id: "d",
            text: "True Positive Rate (x-axis) against the False Negative Rate (y-axis)",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.6_2024",
        question_text:
          "The harmonic mean of Precision and Recall is another performance metric known as",
        image_context: null,
        options: [
          { id: "a", text: "Cohen's Kappa", image: null },
          { id: "b", text: "F1-score", image: null },
          { id: "c", text: "Sensitivity", image: null },
          { id: "d", text: "Specificity", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.7_2024",
        question_text:
          "For the above table, calculate Precision Value. [Table of Roll no., Actual Values (Ya) and Predicted Values (Yp) provided in source text]",
        image_context: "images/img4.png",
        options: [
          { id: "a", text: "0.4", image: null },
          { id: "b", text: "0.75", image: null },
          { id: "c", text: "0.57", image: null },
          { id: "d", text: "0.25", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.8_2024",
        question_text:
          "For the above table, calculate the value of Recall. [Table of Roll no., Actual Values (Ya) and Predicted Values (Yp) provided in source text]",
        image_context: "images/img4.png",
        options: [
          { id: "a", text: "0.25", image: null },
          { id: "b", text: "0.50", image: null },
          { id: "c", text: "0.44", image: null },
          { id: "d", text: "0.80", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.9_2024",
        question_text:
          "For the above table, calculate the value of accuracy. [Table of Roll no., Actual Values (Ya) and Predicted Values (Yp) provided in source text]",
        image_context: "images/img4.png",
        options: [
          { id: "a", text: "0.25", image: null },
          { id: "b", text: "0.47", image: null },
          { id: "c", text: "0.75", image: null },
          { id: "d", text: "0.80", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.10_2024",
        question_text:
          "Which of the following algorithms can be used with labeled data?",
        image_context: null,
        options: [
          { id: "a", text: "Regression algorithm", image: null },
          { id: "b", text: "Clustering algorithm", image: null },
          { id: "c", text: "Association algorithm", image: null },
          { id: "d", text: "Both a. and b.", image: null },
          { id: "e", text: "Both b. and c.", image: null },
          { id: "f", text: "Both a. and c.", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 4",
    week: 4,
    questions: [
      {
        id: "4.1_2024",
        question_text:
          "Consider the following box plot. The box plot represents the distribution of marks in the mid-semester examination. What percentage of students obtained marks between 24-31? ",
        image_context: "images/img5.png",
        options: [
          { id: "a", text: "50%", image: null },
          { id: "b", text: "25%", image: null },
          { id: "c", text: "75%", image: null },
          { id: "d", text: "100%", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.2_2024",
        question_text: "Which of the following is true Histogram?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Only used for the numerical type of data",
            image: null,
          },
          {
            id: "b",
            text: "Can be used for numerical, nominal or categorical types.",
            image: null,
          },
          {
            id: "c",
            text: "Different bin sizes lead to different histograms.",
            image: null,
          },
          {
            id: "d",
            text: "Different bin sizes lead to the same histograms.",
            image: null,
          },
          { id: "e", text: "Bin size should be equal.", image: null },
          {
            id: "f",
            text: "Bin size can be unequal depending on research questions.",
            image: null,
          },
        ],
        correct_answers: ["a", "c", "e"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.3_2024",
        question_text:
          "In the figure below, what is the relation between the two variables represented on two axes? ",
        image_context: "images/img6.png",
        options: [
          { id: "a", text: "Linear", image: null },
          { id: "b", text: "Negative", image: null },
          { id: "c", text: "Positive", image: null },
          { id: "d", text: "Non-linear", image: null },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.4_2024",
        question_text:
          "What are the considerations you need to make when using a visualization technique?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "What is the information you want to convey",
            image: null,
          },
          { id: "b", text: "The kind of data you have", image: null },
          {
            id: "c",
            text: "The opinion of the participants in your study",
            image: null,
          },
          {
            id: "d",
            text: "The possible interpretation of your audience",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.5_2024",
        question_text:
          "Which of the following statements are true for Box-plot?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It can be drawn only for numerical data",
            image: null,
          },
          {
            id: "b",
            text: "It can be drawn for numerical as well as categorical data.",
            image: null,
          },
          {
            id: "c",
            text: "It shows min, max, median value for a given data set.",
            image: null,
          },
          {
            id: "d",
            text: "It shows min, max, median as the mean value of the given data sets.",
            image: null,
          },
          { id: "e", text: "It shows the outliers.", image: null },
        ],
        correct_answers: ["a", "c", "e"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.6_2024",
        question_text: "Which of the following statements are correct",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Scatter plot can be plot only to show relationship between two variables",
            image: null,
          },
          {
            id: "b",
            text: "Scatter plot can be drawn to show relationship between two or more than two variables",
            image: null,
          },
          {
            id: "c",
            text: "Line chart show variation of variable only with time",
            image: null,
          },
          {
            id: "d",
            text: "Line charts shows variation of a variable with any other parameters",
            image: null,
          },
        ],
        correct_answers: ["b", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.7_2024",
        question_text:
          "In the below graph, what is the relation between the two variables? ",
        image_context: "images/img7.png",
        options: [
          { id: "a", text: "Linear", image: null },
          { id: "b", text: "Non-linear", image: null },
          { id: "c", text: "High positive (r=1)", image: null },
          { id: "d", text: "Negative", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.8_2024",
        question_text:
          "Match the following: 1. Bar chart, 2. Histogram, 3. Pie Chart, 4. Scatter plot | A. Correlation, B. Part to whole, C. Comparison, D. Distribution",
        image_context: "images/img8.png",
        options: [
          { id: "a", text: "1-B, 2-C, 3-A, 4-D", image: null },
          { id: "b", text: "1-C, 2-D, 3-B, 4-A", image: null },
          { id: "c", text: "1-D, 2-A, 3-C, 4-B", image: null },
          { id: "d", text: "1-C, 2-D, 3-A, 4-B", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.9_2024",
        question_text:
          "From the box plot shown below, find the interquartile range with the help of box plot. ",
        image_context: "images/img10.png",
        options: [{ id: "a", text: "50", image: null }],
        correct_answers: ["50"],
        type: "Numerical Answer",
      },
      {
        id: "4.10_2024",
        question_text:
          "From the box plot shown below, what percentage of students obtained marks between 30-80? ",
        image_context: "images/img10.png",
        options: [{ id: "a", text: "50%", image: null }],
        correct_answers: ["50"],
        type: "Numerical Answer",
      },
    ],
  },
  {
    assignment: "Assignment 5",
    week: 5,
    questions: [
      {
        id: "5.1_2024",
        question_text: "What is the purpose of diagnostic analytics?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "To understand patterns from educational data",
            image: null,
          },
          {
            id: "B",
            text: "To find out reasons behind data patterns",
            image: null,
          },
          {
            id: "C",
            text: "To provide recommendations to respective stakeholders",
            image: null,
          },
          {
            id: "D",
            text: "To predict what will happen next based on existing data",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.2_2024",
        question_text:
          "Consider the following scenario: An instructor has kept a record of the last five years record of his class in an Excel sheet. The fields he maintained for every year are Attendance, Marks in mid-term exams, marks in end-semester exams, and a package of their campus placement. If instructor wants to know which year students got highest average package then analysis at what level needs to be performed?",
        image_context: null,
        options: [
          { id: "A", text: "Descriptive Analytics", image: null },
          { id: "B", text: "Diagnostic Analytics", image: null },
          { id: "C", text: "Prescriptive Analytics", image: null },
          { id: "D", text: "Predictive Analytics", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.3_2024",
        question_text:
          "Consider the following set of values for attendance and marks. Attendance%: 80, 90, 75, 60, 85 Marks%: 85, 88, 70, 65, 90. Find out the Pearson's Correlation coefficient.",
        image_context: null,
        options: [
          { id: "A", text: "0.967", image: null },
          { id: "B", text: "0.782", image: null },
          { id: "C", text: "0.889", image: null },
          { id: "D", text: "0.705", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.4_2024",
        question_text: "What are the limitations of Pearson's correlation?",
        image_context: null,
        options: [
          { id: "A", text: "It is sensitive to outliers", image: null },
          {
            id: "B",
            text: "It can not detect non-linear relationships",
            image: null,
          },
          {
            id: "C",
            text: "Its slope can't detect the intensity of correlation",
            image: null,
          },
          {
            id: "D",
            text: "It can't detect inverse relationship",
            image: null,
          },
        ],
        correct_answers: ["A", "B"],
        type: "Multi-Select MCQ",
      },
      {
        id: "5.5_2024",
        question_text:
          "Numerically what is the maximum possible range of Pearson's correlation coefficient?",
        image_context: null,
        options: [
          { id: "A", text: "0 to 1", image: null },
          { id: "B", text: "-1 to 0", image: null },
          { id: "C", text: "-1 to 1", image: null },
          { id: "D", text: "1 to 10", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.6_2024",
        question_text:
          "In week 5 lecture 32 in example of correlation matrix which two variable have highest value of correlation coefficient?",
        image_context:
          "Requires knowledge of a specific example from a course lecture (Correlation Matrix).",
        options: [
          { id: "A", text: "Mid-term marks and Final Marks", image: null },
          { id: "B", text: "Attendance and Final Marks", image: null },
          { id: "C", text: "Attendance and mid-term marks", image: null },
          { id: "D", text: "Student Id and attendance", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.7_2024",
        question_text:
          "In week 5 lecture 33, how rank of a variable is assigned in case if it has two identical values in the example of Spearman's Correlation?",
        image_context:
          "Requires knowledge of a specific example from a course lecture (Spearman's Correlation).",
        options: [
          {
            id: "A",
            text: "Next consecutive number is assigned to second value in list",
            image: null,
          },
          {
            id: "B",
            text: "Same rank is assigned to both values",
            image: null,
          },
          {
            id: "C",
            text: "Rank is assigned to only first value",
            image: null,
          },
          {
            id: "D",
            text: "Rank is divided e.g. 7 rank is assigned as 6.5 to both values",
            image: null,
          },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.8_2024",
        question_text:
          "What is the advantage of adding the concept of rank in Spearman's correlation?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "It has made it insensitive to outliers",
            image: null,
          },
          {
            id: "B",
            text: "It made it capable for non-linear relationships also",
            image: null,
          },
          {
            id: "C",
            text: "It has increased the accuracy of correlation",
            image: null,
          },
          {
            id: "D",
            text: "It has made slope to be capable of detecting intensity of correlation",
            image: null,
          },
        ],
        correct_answers: ["A", "B"],
        type: "Multi-Select MCQ",
      },
      {
        id: "5.9_2024",
        question_text:
          "Consider the following sequence of actions: ABCCBAВСАСАВВАС. What is the probability of A->C transition?",
        image_context: null,
        options: [
          { id: "A", text: "2/5", image: null },
          { id: "B", text: "3/5", image: null },
          { id: "C", text: "4/5", image: null },
          { id: "D", text: "3/4", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.10_2024",
        question_text:
          "Choose the most relevant option that can't be inferred from a transition state diagram of a student given that actions performed by students are: Read, Watch Video, Seek, Take Quiz, Review Page.",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Did the student go on a certain webpage or not",
            image: null,
          },
          {
            id: "B",
            text: "Did student access the quiz just after watching the video",
            image: null,
          },
          {
            id: "C",
            text: "Did student watch the complete video or not",
            image: null,
          },
          {
            id: "D",
            text: "Did the student watch the video or not",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 6",
    week: 6,
    questions: [
      {
        id: "6.1_2024",
        question_text:
          "The s-support definition given in the video is: The number of individual action sequences for a group where that sequence of actions occurs at least once. What is the simplistic meaning of this definition?",
        image_context: null,
        options: [
          { id: "1", text: "What are the most frequent actions", image: null },
          {
            id: "2",
            text: "Count of students who perform that action",
            image: null,
          },
          {
            id: "3",
            text: "Total count on how many times that action is performed",
            image: null,
          },
          {
            id: "4",
            text: "Average count of a particular action performed",
            image: null,
          },
        ],
        correct_answers: ["2"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.2_2024",
        question_text:
          "The i-support definition given in the video is: The number of individual action sequences for a group where that sequence of actions occurs at least once. What is the simplistic meaning of this definition?",
        image_context: null,
        options: [
          {
            id: "1",
            text: "How many times does the pattern occur for every individual student",
            image: null,
          },
          {
            id: "2",
            text: "How may times does the pattern occur by all students",
            image: null,
          },
          {
            id: "3",
            text: "How many times does the pattern occur by at least one student",
            image: null,
          },
          {
            id: "4",
            text: "How many times does the pattern occur on average",
            image: null,
          },
        ],
        correct_answers: ["3"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.3_2024",
        question_text:
          "What is the meaning of i-frequency for a particular action?",
        image_context: null,
        options: [
          {
            id: "1",
            text: "The average count of how many times that action was performed",
            image: null,
          },
          { id: "2", text: "Total count of actions performed", image: null },
          {
            id: "3",
            text: "Total number of students who performed that action",
            image: null,
          },
          {
            id: "4",
            text: "Maximum number of students who performed that action together",
            image: null,
          },
        ],
        correct_answers: ["1"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.4_2024",
        question_text:
          "Consider the following values for a pattern: I-freq mean = 6, I-freq Std = 7.5, S-support = 0.6 and N = 10 than how many students have performed that action?",
        image_context: null,
        options: [
          { id: "1", text: "4", image: null },
          { id: "2", text: "5", image: null },
          { id: "3", text: "6", image: null },
          { id: "4", text: "7", image: null },
        ],
        correct_answers: ["3"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.5_2024",
        question_text:
          "What can be the effective use of node cutoff and edge cutoff?",
        image_context: null,
        options: [
          {
            id: "1",
            text: "It helps to filter very less frequent actions",
            image: null,
          },
          {
            id: "2",
            text: "It helps to filter very less frequent students",
            image: null,
          },
          {
            id: "3",
            text: "It helps to filter very frequent actions",
            image: null,
          },
          {
            id: "4",
            text: "It helps to filter very frequent students",
            image: null,
          },
        ],
        correct_answers: ["1"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.6_2024",
        question_text:
          "From the given options which set of operations is not possible with SPM?",
        image_context: null,
        options: [
          {
            id: "1",
            text: "Understanding which set of actions is performed",
            image: null,
          },
          {
            id: "2",
            text: "Comparing actions of high-performing and low-performing groups",
            image: null,
          },
          {
            id: "3",
            text: "Understanding which set of actions is not performed by students",
            image: null,
          },
          {
            id: "4",
            text: "Understanding how many students have not performed a certain action",
            image: null,
          },
        ],
        correct_answers: ["3"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.7_2024",
        question_text:
          "Consider the following actions: ABBAABBBABBA. What is the significance of action A?",
        image_context: null,
        options: [
          { id: "1", text: "0.81", image: null },
          { id: "2", text: "0.91", image: null },
          { id: "3", text: "0.71", image: null },
          { id: "4", text: "0.61", image: null },
        ],
        correct_answers: ["4"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.8_2024",
        question_text:
          "Consider the following actions: ABBAABBBABBA. Find the correlation of the sequence of action A->B?",
        image_context: null,
        options: [
          { id: "1", text: "0.75", image: null },
          { id: "2", text: "0.85", image: null },
          { id: "3", text: "0.65", image: null },
          { id: "4", text: "0.78", image: null },
        ],
        correct_answers: ["3"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.9_2024",
        question_text: "A high correlation value indicates that",
        image_context: null,
        options: [
          {
            id: "1",
            text: "Two nodes are more likely to occur together",
            image: null,
          },
          {
            id: "2",
            text: "Two nodes are less likely to occur together",
            image: null,
          },
          {
            id: "3",
            text: "Two nodes will always occur together",
            image: null,
          },
          { id: "4", text: "Two nodes are unrelated", image: null },
        ],
        correct_answers: ["1"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.10_2024",
        question_text:
          "Select the correct statement for calculating utility value of an edge.",
        image_context: null,
        options: [
          {
            id: "1",
            text: "ur sig of edge+(1-ur) corr value of edge",
            image: null,
          },
          {
            id: "2",
            text: "urxcorr value of edge+(1-ur) sig of edge",
            image: null,
          },
          {
            id: "3",
            text: "ur+sig of edge (1-ur)+corr value of edge",
            image: null,
          },
          { id: "4", text: "urx(sig of edge+corr value of edge)", image: null },
        ],
        correct_answers: ["2"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 7",
    week: 7,
    questions: [
      {
        id: "7.1_2024",
        question_text: "What is the primary goal of K-means clustering?",
        image_context: null,
        options: [
          {
            id: "(a)",
            text: "To minimize the distance within each cluster;",
            image: null,
          },
          {
            id: "(b)",
            text: "To maximize the distance between different clusters;",
            image: null,
          },
          {
            id: "(c)",
            text: "To assign each point to its nearest cluster center;",
            image: null,
          },
          {
            id: "(d)",
            text: "To increase the number of clusters until all points are isolated",
            image: null,
          },
        ],
        correct_answers: ["(a)", "(c)"],
        type: "Multi-Select MCQ",
      },
      {
        id: "7.2_2024",
        question_text:
          "Which of the following is a limitation of K-means clustering?",
        image_context: null,
        options: [
          {
            id: "(a)",
            text: "It is insensitive to the initial placement of cluster centers;",
            image: null,
          },
          {
            id: "(b)",
            text: "It always finds the global optimum solution;",
            image: null,
          },
          {
            id: "(c)",
            text: "It can only handle numerical data;",
            image: null,
          },
          {
            id: "(d)",
            text: "It requires the number of clusters to be specified in advance;",
            image: null,
          },
        ],
        correct_answers: ["(c)", "(d)"],
        type: "Multi-Select MCQ",
      },
      {
        id: "7.3_2024",
        question_text:
          "In K-means clustering, how are the new cluster centers determined after assigning points to clusters?",
        image_context: null,
        options: [
          {
            id: "(a)",
            text: "By randomly selecting new points as cluster centers;",
            image: null,
          },
          {
            id: "(b)",
            text: "By calculating the median of all points in each cluster;",
            image: null,
          },
          {
            id: "(c)",
            text: "By calculating the mean of all points in each cluster;",
            image: null,
          },
          {
            id: "(d)",
            text: "By selecting the farthest point from the current cluster center",
            image: null,
          },
        ],
        correct_answers: ["(c)"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.4_2024",
        question_text:
          "Given the following data points: (2, 3), (3, 3), (6, 5), (8, 8), and (9, 10), if the initial cluster centers are (2, 3) and (8, 8), which of the following are the correct cluster assignments after the first iteration?",
        image_context: null,
        options: [
          {
            id: "(a)",
            text: "Cluster 1: (2, 3), (3, 3), (6, 5); Cluster 2: (8, 8), (9, 10);",
            image: null,
          },
          {
            id: "(b)",
            text: "Cluster 1: (2, 3), (3, 3); Cluster 2: (6, 5), (8, 8), (9, 10);",
            image: null,
          },
          {
            id: "(c)",
            text: "Cluster 1: (2, 3), (3, 3), (9, 10); Cluster 2: (6, 5), (8, 8);",
            image: null,
          },
          {
            id: "(d)",
            text: "Cluster 1: (2, 3), (6, 5); Cluster 2: (3, 3), (8, 8), (9, 10)",
            image: null,
          },
        ],
        correct_answers: ["(b)"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.5_2024",
        question_text:
          "You have the following data points: (1, 1), (2, 2), (4, 4), and (5, 5). If the initial cluster centers are (1, 1) and (5, 5), what will the new cluster centers be after the first iteration?",
        image_context: null,
        options: [
          { id: "(a)", text: "(1.5, 1.5) and (4.5, 4.5);", image: null },
          { id: "(b)", text: "(2, 2) and (5, 5);", image: null },
          { id: "(c)", text: "(1, 1) and (4, 4);", image: null },
          { id: "(d)", text: "(1, 1) and (5.5, 5.5)", image: null },
        ],
        correct_answers: ["(a)"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.6_2024",
        question_text:
          "You have 6 data points in a 2-dimensional space: (1, 2), (2, 1), (4, 5), (5, 4), (8, 9), and (9, 8). You are using K-means clustering with k=3. The initial cluster centers are (1, 2), (4, 5), and (9, 8). After the first iteration, what is the total within-cluster sum of squares (WCSS)?",
        image_context: null,
        options: [
          { id: "(a)", text: "20.5;", image: null },
          { id: "(b)", text: "17.0;", image: null },
          { id: "(c)", text: "15.5;", image: null },
          { id: "(d)", text: "18.0;", image: null },
        ],
        correct_answers: ["(d)"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.7_2024",
        question_text:
          "Which of the following statements best describes hierarchical clustering?",
        image_context: null,
        options: [
          {
            id: "(a)",
            text: "It divides the dataset into a predetermined number of clusters;",
            image: null,
          },
          {
            id: "(b)",
            text: "It creates a nested sequence of clusters through a series of merges or splits;",
            image: null,
          },
          {
            id: "(c)",
            text: "It assigns data points to the nearest cluster center iteratively;",
            image: null,
          },
          {
            id: "(d)",
            text: "It requires the number of clusters to be specified in advance.",
            image: null,
          },
        ],
        correct_answers: ["(b)"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.8_2024",
        question_text:
          "In hierarchical clustering, what is the difference between agglomerative and divisive approaches?",
        image_context: null,
        options: [
          {
            id: "(a)",
            text: "Agglomerative starts with one cluster and splits it, while divisive starts with individual points and merges them;",
            image: null,
          },
          {
            id: "(b)",
            text: "Agglomerative is a bottom-up approach, and divisive is a top-down approach;",
            image: null,
          },
          {
            id: "(c)",
            text: "Agglomerative uses centroids, while divisive uses medoids;",
            image: null,
          },
          {
            id: "(d)",
            text: "Agglomerative clustering requires the number of clusters in advance, while divisive does not",
            image: null,
          },
        ],
        correct_answers: ["(b)"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.9_2024",
        question_text:
          "Given the following data points: (1, 2), (2, 3), (5, 6), (8, 8). Using single-linkage (nearest neighbor) agglomerative hierarchical clustering, what is the distance between the first two clusters that will be merged?",
        image_context: null,
        options: [
          { id: "(a)", text: "1.0;", image: null },
          { id: "(b)", text: "1.41;", image: null },
          { id: "(c)", text: "5.0;", image: null },
          { id: "(d)", text: "3.0", image: null },
        ],
        correct_answers: ["(b)"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.10_2024",
        question_text:
          "You are given five data points: (1, 1), (2, 1), (4, 3), (5, 4), and (9, 8). After performing agglomerative hierarchical clustering using average linkage, the first two points to be merged are (1, 1) and (2, 1). What is the new cluster center?",
        image_context: null,
        options: [
          { id: "(a)", text: "(1.5, 1);", image: null },
          { id: "(b)", text: "(1, 2);", image: null },
          { id: "(c)", text: "(2, 2);", image: null },
          { id: "(d)", text: "(1, 1.5)", image: null },
        ],
        correct_answers: ["(a)"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 8",
    week: 8,
    questions: [
      {
        id: "8.1_2024",
        question_text:
          "In the context of educational data, which of the following need not to be similar to perform predictive analytics? Choose the most appropriate answer. (You can refer Lecture 44 Week 8).",
        image_context: null,
        options: [
          { id: "a", text: "Domain", image: null },
          { id: "b", text: "Interaction behaviour", image: null },
          { id: "c", text: "Interaction time", image: null },
          { id: "d", text: "Number of Students", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.2_2024",
        question_text:
          "How is Predictive Analytics different from Descriptive and Diagnostic Analytics? (Choose the most appropriate answer).",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Predictive Analytics focuses on summarizing past data, while Descriptive Analytics focuses on predicting future trends.",
            image: null,
          },
          {
            id: "b",
            text: "Predictive Analytics identifies the root causes of past events, whereas Diagnostic Analytics forecasts potential outcomes.",
            image: null,
          },
          {
            id: "c",
            text: "Predictive Analytics focuses on using past data to forecast future outcomes, while Descriptive and Diagnostic Analytics focus on understanding and explaining past events.",
            image: null,
          },
          {
            id: "d",
            text: "Predictive Analytics is concerned with real-time data analysis, while Descriptive and Diagnostic Analytics are only concerned with historical data.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.3_2024",
        question_text:
          "What is the primary difference between Simple Linear Regression and Multiple Linear Regression?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Simple Linear Regression can only model non-linear relationships, while Multiple Linear Regression can model linear relationships.",
            image: null,
          },
          {
            id: "b",
            text: "Simple Linear Regression uses one dependent variable, while Multiple Linear Regression uses multiple dependent variables.",
            image: null,
          },
          {
            id: "c",
            text: "Simple Linear Regression uses one independent variable, while Multiple Linear Regression uses two or more independent variables.",
            image: null,
          },
          {
            id: "d",
            text: "Simple Linear Regression and Multiple Linear Regression are identical techniques with different names.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.4_2024",
        question_text:
          "In which scenario is Multivariate Regression preferred over Multiple Linear Regression?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "When there are multiple independent variables and only one dependent variable.",
            image: null,
          },
          {
            id: "b",
            text: "When the relationship between the variables is non-linear.",
            image: null,
          },
          {
            id: "c",
            text: "When there are multiple dependent variables being predicted simultaneously.",
            image: null,
          },
          {
            id: "d",
            text: "When the dataset is very large and needs to be reduced.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.5_2024",
        question_text:
          "How does Logistic Regression differ from Linear Regression?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Logistic Regression is used for predicting continuous outcomes, while Linear Regression is used for categorical outcomes.",
            image: null,
          },
          {
            id: "b",
            text: "Logistic Regression uses a logistic function to model binary outcomes, while Linear Regression models continuous outcomes.",
            image: null,
          },
          {
            id: "c",
            text: "Logistic Regression requires multiple independent variables, while Linear Regression only requires one.",
            image: null,
          },
          {
            id: "d",
            text: "Logistic Regression is more accurate than Linear Regression for all types of data.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.6_2024",
        question_text:
          "If you have multiple linear regression models for the given data, how can you find out which model is best out of the given models? (Choose the most appropriate answer).",
        image_context: null,
        options: [
          {
            id: "a",
            text: "By manually looking at points and finding out which line is closest to the maximum number of points.",
            image: null,
          },
          {
            id: "b",
            text: "By comparing the mean square value for each model and selecting whose mean square value is minimum.",
            image: null,
          },
          {
            id: "c",
            text: "By comparing the mean square value for each model and selecting whose least mean square value is maximum.",
            image: null,
          },
          {
            id: "d",
            text: "By calculating the slope of all lines and comparing them.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.7_2024",
        question_text:
          "In educational settings, what is the meaning of the intercept in linear regression? (Choose the most appropriate answer).",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It specifies the minimum value of the dependent variable.",
            image: null,
          },
          {
            id: "b",
            text: "It specifies the minimum value of the independent variable.",
            image: null,
          },
          {
            id: "c",
            text: "It is not recommended to find out the exact meaning of intercept in educational settings.",
            image: null,
          },
          {
            id: "d",
            text: "It specifies exactly at what is the scale of the relationship between independent and dependent variables.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.8_2024",
        question_text:
          "Which of the following is a correct use case for Logistic Regression in an educational setting?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Predicting a student's exact score on a final exam based on study hours.",
            image: null,
          },
          {
            id: "b",
            text: "Classifying whether a student will pass or fail a course based on their attendance and assignment scores.",
            image: null,
          },
          {
            id: "c",
            text: "Estimating the number of students who will attend a workshop based on previous attendance rates.",
            image: null,
          },
          {
            id: "d",
            text: "Modeling the relationship between study hours and final exam scores in a continuous scale.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.9_2024",
        question_text:
          "Consider the equation: Y=c+X1W1+X2W2. Here, what is the significance of W1 and W2? (Choose the most appropriate answer).",
        image_context: null,
        options: [
          {
            id: "a",
            text: "W1 specifies the relation between X1 and Y keeping all other values constant.",
            image: null,
          },
          {
            id: "b",
            text: "W2 specifies the relation between X1 and Y keeping all other values constant.",
            image: null,
          },
          {
            id: "c",
            text: "W2 specifies the relation between X2 and Y keeping all other values constant.",
            image: null,
          },
          {
            id: "d",
            text: "W1 specifies the relation between X2 and Y keeping all other values constant.",
            image: null,
          },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "8.10_2024",
        question_text:
          "A Linear Regression model is used to predict a student's final exam score based on the number of hours they study. The model is given by the equation: Final Exam Score=40+5×(Study Hours). If a student studies for 8 hours, what is their predicted final exam score?",
        image_context: null,
        options: [
          { id: "a", text: "60", image: null },
          { id: "b", text: "80", image: null },
          { id: "c", text: "90", image: null },
          { id: "d", text: "100", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 9",
    week: 9,
    questions: [
      {
        id: "9.1_2024",
        question_text:
          "A student takes an exam in two subjects. Given that he has passed one of the subjects, what is the probability that he has passed both subjects?",
        image_context: null,
        options: [{ id: "a", text: "0.33-0.35", image: null }],
        correct_answers: ["0.33-0.35"],
        type: "Numerical Range Answer",
      },
      {
        id: "9.2_2024",
        question_text:
          "Which of the following statements about decision trees are correct? 1. It requires the normalization of data, 2. It does not require the normalization of data, 3. Missing Values are not important, 4. A decision tree does not need a root node always",
        image_context: null,
        options: [
          {
            id: "A",
            text: "It requires the normalization of data",
            image: null,
          },
          {
            id: "B",
            text: "It does not require the normalization of data",
            image: null,
          },
          { id: "C", text: "Missing Values are not important", image: null },
          {
            id: "D",
            text: "A decision tree does not need a root node always",
            image: null,
          },
        ],
        correct_answers: ["B", "C"],
        type: "Multi-Select MCQ",
      },
      {
        id: "9.3_2024",
        question_text: '"The Decision tree is a non-linear classifier."',
        image_context: null,
        options: [
          { id: "1", text: "True", image: null },
          { id: "2", text: "False", image: null },
        ],
        correct_answers: ["1"],
        type: "True/False",
      },
      {
        id: "9.4_2024",
        question_text:
          "Overfitting and increase in the tree complexity can be overcome through the process called",
        image_context: null,
        options: [
          { id: "a", text: "Normalization", image: null },
          { id: "b", text: "Branching", image: null },
          { id: "c", text: "Pruning", image: null },
          { id: "d", text: "Classification", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.5_2024",
        question_text:
          "Consider the following statements- a. Naive Bayes assumes independence among predictors. b. Naive Bayes can perform multi-class prediction. Which of the following statements is correct?",
        image_context: null,
        options: [
          { id: "a", text: "Both a and b", image: null },
          { id: "b", text: "Only a", image: null },
          { id: "c", text: "Only b", image: null },
          { id: "d", text: "Neither a nor b", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.6_2024",
        question_text:
          "What is the probability that a student with 41-60% attendance will pass the exam? [Using the provided table for Naive Bayes]",
        image_context: "images/img11.png",
        options: [
          { id: "A", text: "2/5", image: null },
          { id: "B", text: "4/5", image: null },
          { id: "C", text: "3/5", image: null },
          { id: "D", text: "1/5", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.7_2024",
        question_text:
          "What is the probability that a 71-80% attendance student will fail the exam? [Using the provided table for Naive Bayes]",
        image_context: "images/img11.png",
        options: [
          { id: "A", text: "0", image: null },
          { id: "B", text: "1/2", image: null },
          { id: "C", text: "2/3", image: null },
          { id: "D", text: "1/3", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.8_2024",
        question_text:
          "Find the entropy of the target column. [Based on the provided table for Decision Tree/Information Gain]",
        image_context: "images/img12.png",
        options: [
          { id: "a", text: "0.92", image: null },
          { id: "b", text: "0.82", image: null },
          { id: "c", text: "0.72", image: null },
          { id: "d", text: "0.6", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.9_2024",
        question_text:
          "Calculate the 'information gain' for the parameter 'Attendance in %'. [Based on the provided table for Decision Tree/Information Gain]",
        image_context: "images/img12.png",
        options: [
          { id: "a", text: "1", image: null },
          { id: "b", text: "0.75", image: null },
          { id: "c", text: "0.5", image: null },
          { id: "d", text: "0.25", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.10_2024",
        question_text: "Why is the Naive Bayes classifier called 'Naive'?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "The classifier can solve only a very limited number of problems under multiple conditions.",
            image: null,
          },
          {
            id: "B",
            text: "Its use is limited to the domains of Natural Language Processing and Learning Analytics.",
            image: null,
          },
          {
            id: "C",
            text: "It assumes that the features of input space are strongly independent.",
            image: null,
          },
          {
            id: "D",
            text: "It assumes that the features of input space are strongly dependent.",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 10",
    week: 10,
    questions: [
      {
        id: "10.1_2024",
        question_text:
          'N-grams are defined as the combination of N keywords together. How many bi-grams can be generated from a given sentence: "Learners\' engagement in class and their interaction with peers impact their assessment performance."',
        image_context: null,
        options: [
          { id: "A", text: "10", image: null },
          { id: "B", text: "14", image: null },
          { id: "C", text: "12", image: null },
          { id: "D", text: "13", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.2_2024",
        question_text:
          "The Word2Vec model is a machine-learning model that creates vector notations of text objects. (Enter your answer as 1 or 2)",
        image_context: null,
        options: [
          { id: "1", text: "True", image: null },
          { id: "2", text: "False", image: null },
        ],
        correct_answers: ["1"],
        type: "True/False",
      },
      {
        id: "10.3_2024",
        question_text:
          "Given the following dictionary of words- {1: Sun, 2: Moon, 3: Stars, 4: east, 5: west, 6: north, 7: south, 8: rises, 9: sets, 10: and, 11: the, 12: in }. Which of the following sentences does the index {1, 9, 12, 11, 4} represent?",
        image_context: null,
        options: [
          { id: "a", text: "Sun rises in the east.", image: null },
          { id: "b", text: "Sun sets in the west.", image: null },
          { id: "c", text: "Sun rises in the west.", image: null },
          { id: "d", text: "Sun sets in the east.", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.4_2024",
        question_text:
          "What is the minimum edit distance between INTENTION and EXECUTION?",
        image_context: null,
        options: [
          { id: "a", text: "4", image: null },
          { id: "b", text: "5", image: null },
          { id: "c", text: "6", image: null },
          { id: "d", text: "7", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.5_2024",
        question_text:
          "Which of the following statements best describes the Markov assumption?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "The occurrence of the current word X depends on the previous word Y.",
            image: null,
          },
          {
            id: "B",
            text: "The occurrence of the current word X depends on the future word Y.",
            image: null,
          },
          {
            id: "C",
            text: "Anything that can go wrong will go wrong.",
            image: null,
          },
          {
            id: "D",
            text: "The occurrence of the previous word X depends on the current word Y.",
            image: null,
          },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.6_2024",
        question_text:
          "Consider the following two statements: Statement 1: Ram loves to watch movies. Statement 2: Dev loves to watch cricket matches. What is the length of the document vector formed by these two statements?",
        image_context: null,
        options: [
          { id: "A", text: "11", image: null },
          { id: "B", text: "7", image: null },
          { id: "C", text: "9", image: null },
          { id: "D", text: "8", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.7_2024",
        question_text: "Which of the following is an application of NLP?",
        image_context: null,
        options: [
          { id: "a", text: "Quality Assessment.", image: null },
          { id: "b", text: "Body posture detection.", image: null },
          { id: "c", text: "Sentiment analysis.", image: null },
          { id: "d", text: "Creating a Q&A database.", image: null },
        ],
        correct_answers: ["a", "c", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "10.8_2024",
        question_text:
          "Which of the following set of operations transforms one string into another using the Levenshtein distance?",
        image_context: null,
        options: [
          { id: "A", text: "Insert, Delete, Append", image: null },
          { id: "B", text: "Insert, Delete, Substitute", image: null },
          { id: "C", text: "Insert, Copy, Delete", image: null },
          { id: "D", text: "Insert, Substitute, Merge", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.9_2024",
        question_text:
          'Which of the following words can be obtained from the word "Crane" with the minimum number of edits, assuming each edit operation (insertion, deletion, or substitution) costs 1?',
        image_context: null,
        options: [
          { id: "A", text: "Crayon", image: null },
          { id: "B", text: "Grain", image: null },
          { id: "C", text: "Crate", image: null },
          { id: "D", text: "Chain", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.10_2024",
        question_text:
          "Which of the following techniques are used to convert a keyword into its base form?",
        image_context: null,
        options: [
          { id: "A", text: "Lemmatization", image: null },
          { id: "B", text: "Levenshtein", image: null },
          { id: "C", text: "Stemming", image: null },
          { id: "D", text: "Soundex", image: null },
        ],
        correct_answers: ["A", "C"],
        type: "Multi-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 11",
    week: 11,
    questions: [
      {
        id: "11.1_2024",
        question_text:
          "Which of the following data can be collected using an eye tracker?",
        image_context: "images/img13.png",
        options: [
          { id: "1", text: "Eye fixations", image: null },
          { id: "2", text: "Saccadic eye movements", image: null },
          { id: "3", text: "Raising and lowering of the eyebrow", image: null },
          { id: "4", text: "Raising and lowering of eyelids", image: null },
          { id: "5", text: "Pupil dilation", image: null },
        ],
        correct_answers: ["1", "2", "5"],
        type: "Multi-Select MCQ",
      },
      {
        id: "11.2_2024",
        question_text:
          "Which of the following feature(s) can be extracted from data collected using an eye tracker?",
        image_context: "images/img13.png",
        options: [
          { id: "1", text: "Areas of interest", image: null },
          { id: "2", text: "Time to first fixate", image: null },
          { id: "3", text: "Fixation sequence", image: null },
          { id: "4", text: "Dwell time", image: null },
          { id: "5", text: "Average fixation duration", image: null },
        ],
        correct_answers: ["1", "2", "3", "4", "5"],
        type: "Multi-Select MCQ",
      },
      {
        id: "11.3_2024",
        question_text:
          "From the given table, long saccadic movement occurred between",
        image_context: "images/img13.png",
        options: [
          { id: "1", text: "(0.2, 2.4) and (1.4, 2.4)", image: null },
          { id: "2", text: "(2.6, 1.3) and (3.9, 1.3)", image: null },
          { id: "3", text: "(2.7, 2.4) and (4.2, 2.4)", image: null },
          { id: "4", text: "(5.8, 2.4) and (0.3, 1.3)", image: null },
        ],
        correct_answers: ["4"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.4_2024",
        question_text:
          "From the given table, what could be the possible action performed by the user?",
        image_context: "images/img13.png",
        options: [
          { id: "1", text: "Watching a video.", image: null },
          { id: "2", text: "Reading", image: null },
          { id: "3", text: "Random watching,", image: null },
          { id: "4", text: "Observing a point in a design", image: null },
        ],
        correct_answers: ["2"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.5_2024",
        question_text:
          "Why are sensors used instead of human observers or self-report questionnaires to analyze learners' behavior, as well as their cognitive and emotional states?",
        image_context: null,
        options: [
          {
            id: "1",
            text: "The data provided by the sensors are in real-time and not biased",
            image: null,
          },
          {
            id: "2",
            text: "Self-reporting of participants may not be true",
            image: null,
          },
          {
            id: "3",
            text: "The information from human observers may not be accurate",
            image: null,
          },
          {
            id: "4",
            text: "A high level of agreement (e.g., a high kappa score) is needed for reliability.",
            image: null,
          },
        ],
        correct_answers: ["1", "2", "3", "4"],
        type: "Multi-Select MCQ",
      },
      {
        id: "11.6_2024",
        question_text:
          "What is affective computing? Choose the correct one from the below.",
        image_context: null,
        options: [
          { id: "1", text: "Recognizing basic emotions in human", image: null },
          {
            id: "2",
            text: "Analyze basic human emotions and simulate them",
            image: null,
          },
          {
            id: "3",
            text: "Recognize, analyze and simulate basic emotions in human",
            image: null,
          },
          { id: "4", text: "Busy doing something", image: null },
        ],
        correct_answers: ["3"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.7_2024",
        question_text:
          "What is a major challenge while collecting data from different sources?",
        image_context: null,
        options: [
          { id: "1", text: "Analyzing data from each channel", image: null },
          {
            id: "2",
            text: "Combining and syncing information from different modes",
            image: null,
          },
          {
            id: "3",
            text: "Pre-processing the data from different sources",
            image: null,
          },
          { id: "4", text: "Getting consent from participants", image: null },
        ],
        correct_answers: ["2"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.8_2024",
        question_text:
          "Why is affective computing needed in learning analytics?",
        image_context: null,
        options: [
          {
            id: "1",
            text: "Emotions are related to moods such as motivation, attitudes, interest.",
            image: null,
          },
          {
            id: "2",
            text: "Emotions play an important role in learning",
            image: null,
          },
          {
            id: "3",
            text: "To predict learner's performance, emotions should be measured",
            image: null,
          },
          {
            id: "4",
            text: "Emotions are not related to learning",
            image: null,
          },
        ],
        correct_answers: ["1", "2"],
        type: "Multi-Select MCQ",
      },
      {
        id: "11.9_2024",
        question_text:
          "Which of the following features can be obtained only from Eye Gaze data?",
        image_context: null,
        options: [
          { id: "1", text: "Action units", image: null },
          { id: "2", text: "Fixation", image: null },
          { id: "3", text: "Saccade", image: null },
          { id: "4", text: "Number of session per week", image: null },
        ],
        correct_answers: ["2", "3"],
        type: "Multi-Select MCQ",
      },
      {
        id: "11.10_2024",
        question_text:
          "According to facial action coding systems described in iMotions blog, identify the best emotion that suits the given sequence of facial expressions and corresponding action units. [Facial Expression: Inner Brow Raiser (AU 1), Outer Brow Raiser (AU 2), Upper Lid Raiser (AU 5), Jaw Drop (AU 26)]",
        image_context: "images/img14.png",
        options: [
          { id: "1", text: "Happiness", image: null },
          { id: "2", text: "Sadness", image: null },
          { id: "3", text: "Surprise", image: null },
          { id: "4", text: "Fear", image: null },
          { id: "5", text: "Anger", image: null },
          { id: "6", text: "Disgust", image: null },
        ],
        correct_answers: ["3"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 12",
    week: 12,
    questions: [
      {
        id: "12.1_2024",
        question_text:
          "Which of the following feature tools have been mentioned in the course that are used in industry-",
        image_context: null,
        options: [
          { id: "a", text: "H2O.ai", image: null },
          { id: "b", text: "DataRobot", image: null },
          { id: "c", text: "DataBot", image: null },
          { id: "d", text: "Transform.ai", image: null },
        ],
        correct_answers: ["a", "b"],
        type: "Multi-Select MCQ",
      },
      {
        id: "12.2_2024",
        question_text:
          "Given below are the names of some conferences and their abbreviations. Choose the one where the expansions (full form) are correct.",
        image_context: null,
        options: [
          { id: "a", text: "LAK - Learning Analytical Knowledge", image: null },
          {
            id: "b",
            text: "LAK - Learning Analytics and Knowledge",
            image: null,
          },
          {
            id: "c",
            text: "AIED-Artificial Intelligence in Education",
            image: null,
          },
          {
            id: "d",
            text: "ICCE - International Conference on Computers in Education",
            image: null,
          },
          {
            id: "e",
            text: "ICCE - International Conference for Computing Education",
            image: null,
          },
        ],
        correct_answers: ["b", "c", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "12.3_2024",
        question_text:
          "Select the correct option about following statements- Statement 1: One can use Python and R programming language to perform learning analytics. Statement 2: Plotly is learning analytics tool used for clearing of raw data",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Statement 1 is correct and statement 2 is wrong",
            image: null,
          },
          {
            id: "B",
            text: "Statement 1 is wrong and statement 2 is correct",
            image: null,
          },
          { id: "C", text: "Both statements are correct", image: null },
          { id: "D", text: "Both statements are wrong", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.4_2024",
        question_text: "Which of the following is used for prediction?",
        image_context: null,
        options: [
          { id: "a", text: "K-means clustering", image: null },
          { id: "b", text: "Sequence pattern mining", image: null },
          { id: "c", text: "Multivariate regression", image: null },
          { id: "d", text: "Spearman's correlation", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.5_2024",
        question_text:
          "Which of the following is NOT part of Data Pre-processing?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Identifying other sources of data required for analysis.",
            image: null,
          },
          { id: "B", text: "Flagging erroneous data.", image: null },
          { id: "C", text: "Dealing with missing data.", image: null },
          { id: "D", text: "Removing irrelevant attributes.", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.6_2024",
        question_text:
          "Consider we have students' attendance, mid-term and end-term marks and we want to know why some students have scored less than 40 marks in the end-term. For the given scenario, which type of analysis is more appropriate.",
        image_context: null,
        options: [
          { id: "A", text: "Descriptive Analytics", image: null },
          { id: "B", text: "Diagnostic Analytics", image: null },
          { id: "C", text: "Predictive Analytics", image: null },
          { id: "D", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.7_2024",
        question_text:
          "Consider the following box plot. The above box pot represents the distribution of marks in the mid-semester examination. What percentage of students have marks less than the dark vertical line lying between 25 and 30. ",
        image_context: "images/img15.png",
        options: [
          { id: "A", text: "50%", image: null },
          { id: "B", text: "25%", image: null },
          { id: "C", text: "28%", image: null },
          { id: "D", text: "17%", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.8_2024",
        question_text: "The purpose of the prescriptive analysis is:",
        image_context: null,
        options: [
          { id: "A", text: "To predict the outcome.", image: null },
          { id: "B", text: "To provide a recommendation.", image: null },
          {
            id: "C",
            text: "To provide visualization of the collected data.",
            image: null,
          },
          {
            id: "D",
            text: "To figure out why something happened.",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.9_2024",
        question_text: "What is an outlier in the context of data analysis?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "A data point that is closest to the average.",
            image: null,
          },
          {
            id: "B",
            text: "A data point that repeats the most often.",
            image: null,
          },
          {
            id: "C",
            text: "A data point that significantly differs from other observations.",
            image: null,
          },
          {
            id: "D",
            text: "A data point that is exactly in the middle of the dataset.",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.10_2024",
        question_text:
          "What is the minimum edit distance between EVALUATE and ELEVATE?",
        image_context: null,
        options: [
          { id: "A", text: "5", image: null },
          { id: "B", text: "4", image: null },
          { id: "C", text: "6", image: null },
          { id: "D", text: "3", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
    ],
  },
];

// After pasting the full data, make sure to flatten the structure for easy access.
// We'll process this data in app.js
