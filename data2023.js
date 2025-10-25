const quizData = [
  {
    assignment: "Assignment 1",
    week: 1,
    questions: [
      {
        id: "1.1_2023",
        question_text:
          "A teacher decided to conduct extra remedial lectures one week before the final exam for the students who failed in the mid-semester. What type of analytics is she doing?",
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
        id: "1.2_2023",
        question_text:
          "Using the mid-sem performance of the students in the class to anticipate students' performance in the final exam is",
        image_context: null,
        options: [
          { id: "a", text: "Descriptive Analytics", image: null },
          { id: "b", text: "Diagnostic Analytics", image: null },
          { id: "c", text: "Predictive Analytics", image: null },
          { id: "d", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.3_2023",
        question_text:
          "Which of the following sentence is NOT true about Educational Data Mining?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is the process of getting useful insight from Data.",
            image: null,
          },
          {
            id: "b",
            text: "It includes validating a learner model or a hypothesis about learning from learners, and data.",
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
        id: "1.4_2023",
        question_text:
          "Which of the below statement is least important for academic analytics?",
        image_context: null,
        options: [
          { id: "a", text: "Attendance of teachers", image: null },
          {
            id: "b",
            text: "Pass percentage of students in a course-X",
            image: null,
          },
          {
            id: "c",
            text: "Performance of School A in a city B",
            image: null,
          },
          {
            id: "d",
            text: "The graduation rate of students in a particular university.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.5_2023",
        question_text:
          "Which of the following sentence is NOT true about Academic analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "provides support to operational and financial decision-making for the stakeholders",
            image: null,
          },
          {
            id: "b",
            text: "The focus is on the business of the institution",
            image: null,
          },
          {
            id: "c",
            text: "The focus is on the student's learning",
            image: null,
          },
          {
            id: "d",
            text: "Stake-holders are management or executives of the institute",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.6_2023",
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
        id: "1.7_2023",
        question_text: "Pattern mining technique is used for",
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
        id: "1.8_2023",
        question_text:
          "Which of the following question does not belongs to the Predictive Analytics type",
        image_context: null,
        options: [
          {
            id: "a",
            text: "What is the average score of all students in the Maths Exam?",
            image: null,
          },
          {
            id: "b",
            text: "What will be the performance of a student in the end-semester exam?",
            image: null,
          },
          {
            id: "c",
            text: "In which courses will the student enroll in the next semester?",
            image: null,
          },
          {
            id: "d",
            text: "What is the average performance of the class over the semester?",
            image: null,
          },
        ],
        correct_answers: ["a", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "1.9_2023",
        question_text:
          "A maths teacher has data about students' mid-semester scores in his course. He then correlates the mid-semester scores with their final exam scores. He realizes that students who failed in mid-semester exams also failed in the final exam. What type of analytics is he doing?",
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
        id: "1.10_2023",
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
    ],
  },
  {
    assignment: "Assignment 2",
    week: 2,
    questions: [
      {
        id: "2.1_2023",
        question_text:
          "What is/are true about Technology Enhanced Open-Ended Learning Environments?",
        image_context: null,
        options: [
          { id: "a", text: "Technology acts as a scaffold.", image: null },
          {
            id: "b",
            text: "Shift the learning process from student to teacher-centric",
            image: null,
          },
          {
            id: "c",
            text: "Shift the learning process from teacher to learner-centric",
            image: null,
          },
          {
            id: "d",
            text: "There is no support provided by the tutor at all.",
            image: null,
          },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.2_2023",
        question_text:
          "What information must be provided to participants before conducting research studies?",
        image_context: null,
        options: [
          { id: "a", text: "What data is collected?", image: null },
          { id: "b", text: "Why and how is it collected?", image: null },
          { id: "c", text: "How the data is stored?", image: null },
          {
            id: "d",
            text: "In which journal will it be published?",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.3_2023",
        question_text:
          "As researcher/teacher Which of the following data will be collected in a classroom environment about students' performance",
        image_context: null,
        options: [
          { id: "a", text: "Students' mid-sem exam", image: null },
          { id: "b", text: "Score in Course- project", image: null },
          { id: "c", text: "Assignments completion", image: null },
          {
            id: "d",
            text: "Students extra co-curricular activity",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.4_2023",
        question_text:
          "The stage where raw data is converted into actions/events is called",
        image_context: null,
        options: [
          { id: "a", text: "Data pre-processing", image: null },
          { id: "b", text: "Data processing", image: null },
          { id: "c", text: "Data analysis", image: null },
          { id: "d", text: "Data reporting", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.5_2023",
        question_text:
          "Consider you are a researcher and wanted to collect data from any learning environment. What will be the primary steps to protect the ethics and data privacy of the learner?",
        image_context: null,
        options: [
          { id: "a", text: "Get consent from the participant", image: null },
          {
            id: "b",
            text: "Anonymize the data and classify it",
            image: null,
          },
          { id: "c", text: "Store the data in a secure place", image: null },
          { id: "d", text: "Share the data with participants", image: null },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.6_2023",
        question_text:
          "Which of the following features can be extracted from the MOOC platform-",
        image_context: null,
        options: [
          { id: "a", text: "Time spent on Discussion Forum", image: null },
          { id: "b", text: "Score in in-video Quizzes", image: null },
          { id: "c", text: "Number of videos watched", image: null },
          { id: "d", text: "Average session time", image: null },
        ],
        correct_answers: ["a", "b", "c", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.7_2023",
        question_text:
          "In MOOC data, what field is used to identify user location?",
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
      {
        id: "2.8_2023",
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
        id: "2.9_2023",
        question_text: "Which of the following is true about privacy-",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is someone's right to keep the information about themselves secret.",
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
        id: "2.10_2023",
        question_text:
          "Arrange the following sentences in the correct order of sequence: i Analyze data, ii Pre-process data, iii Collect data, iv Get approval from Ethics Committee to conduct research and collect data, v Get participants' consent",
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
    ],
  },
  {
    assignment: "Assignment 3",
    week: 3,
    questions: [
      {
        id: "3.1_2023",
        question_text: "What is 5-fold cross-validation?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The original sample is randomly partitioned into 5 equal sub-samples. Out of the 5 sub-samples, a single randomly chosen subsample is retained for testing the model and the remaining 4 are used as training data.",
            image: null,
          },
          {
            id: "b",
            text: "The original data set is randomly split into 20% testing data and 80% training the model. This process is repeated exactly 5 times, and the average is calculated to obtain an estimate.",
            image: null,
          },
          {
            id: "c",
            text: "The original sample is randomly partitioned into 5 equal sub-samples. Out of the 5 sub-samples, a single subsample is retained for testing the model and the remaining 4 are used as training data. This process is repeated 5 times with each sub-sample used exactly once as testing data. The results are then averaged.",
            image: null,
          },
          {
            id: "d",
            text: "The original data set is randomly split into 20% testing data and 80% training the model.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.2_2023",
        question_text:
          "For the above table calculate Precision Value. [Table of Roll no., Actual Values (Ya) and Predicted Values (Yp) provided in source text]",
        image_context: "images/img16.png",
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
        id: "3.3_2023",
        question_text:
          "For the above table, calculate the value of Recall. [Table of Roll no., Actual Values (Ya) and Predicted Values (Yp) provided in source text]",
        image_context: "images/img16.png",
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
        id: "3.4_2023",
        question_text:
          "For the above table, calculate the value of accuracy. [Table of Roll no., Actual Values (Ya) and Predicted Values (Yp) provided in source text]",
        image_context: "images/img16.png",
        options: [
          { id: "a", text: "0.25", image: null },
          { id: "b", text: "0.46", image: null },
          { id: "c", text: "0.75", image: null },
          { id: "d", text: "0.80", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.5_2023",
        question_text:
          "While conducting studies, Researcher wants to classify engaged and unengaged behavior from the collected data. He uses two classification techniques namely logistic regression and DT classifier, the value of characteristic parameters from these two classifiers are as follows [Table of Classifier 1 (LR) and Classifier 2 (DT) with Accuracy, TPR, TNR]. From the above data, we can conclude that:",
        image_context: "images/img17.png",
        options: [
          { id: "a", text: "Classifier 1(LR) is better", image: null },
          { id: "b", text: "Classier 2 (DT) is better", image: null },
          { id: "c", text: "Both will give the same results", image: null },
          { id: "d", text: "Data Insufficient", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.6_2023",
        question_text:
          "Two Raters 1 and 2 rates the student engagement of the students while they are working in a TELE. The following tables depict the observation made by them. Calculate the value of kappa: [Table with Rater-1/Rater-2 Confusion Matrix]",
        image_context: "images/img18.png",
        options: [
          { id: "a", text: "0.28", image: null },
          { id: "b", text: "0.43", image: null },
          { id: "c", text: "0.50", image: null },
          { id: "d", text: "0.17", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.7_2023",
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
        id: "3.8_2023",
        question_text:
          "ML is not required to be implemented in situations where",
        image_context: null,
        options: [
          {
            id: "a",
            text: "A personalized learning solution is required",
            image: null,
          },
          {
            id: "b",
            text: "Human expertise exists and automation is not required.",
            image: null,
          },
          { id: "c", text: "Rules are difficult to extract", image: null },
          {
            id: "d",
            text: "Learners' emotions must be predicted.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.9_2023",
        question_text:
          "For the below confusion matrix, the Accuracy value is (Report your answers correctly to two decimal places) [Confusion Matrix: Predicted A/Actual A=15, Predicted !A/Actual A=30, Predicted A/Actual !A=20, Predicted !A/Actual !A=10]",
        image_context: "images/img19.png",
        options: [
          { id: "a", text: "33%", image: null },
          { id: "b", text: "20%", image: null },
          { id: "c", text: "60%", image: null },
          { id: "d", text: "30%", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.10_2023",
        question_text:
          "For imbalanced datasets, which of the following performance metric is generally used?",
        image_context: null,
        options: [
          { id: "a", text: "Precision", image: null },
          { id: "b", text: "F-Score", image: null },
          { id: "c", text: "Recall", image: null },
          { id: "d", text: "Accuracy", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 4",
    week: 4,
    questions: [
      {
        id: "4.1_2023",
        question_text: "Which of the following is true in a Histogram?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Only used for the numerical type of data",
            image: null,
          },
          {
            id: "b",
            text: "Can be used for numerical, nominal, or categorical types.",
            image: null,
          },
          { id: "c", text: "Bin size should be equal.", image: null },
          { id: "d", text: "Bin size can be unequal.", image: null },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.2_2023",
        question_text:
          "Consider the following box plot. The above box plot represents the distribution of marks in the mid-semester examination. Consider the dark vertical line denoted by Y lying between 25 and 30 in the box plot. Then, what is the approximate percentage of students having marks between 27.5-31?",
        image_context: "images/img20.png",
        options: [
          { id: "a", text: "25%", image: null },
          { id: "b", text: "28%", image: null },
          { id: "c", text: "17%", image: null },
          { id: "d", text: "50%", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.3_2023",
        question_text:
          "To depict the visualization in Dashboard, the researcher can use different available charts or plots. For choosing the correct representational chart which of the following statements are correct about the visualization charts?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "3D pie charts do not provide any additional advantage as compared to 2D pie charts.",
            image: null,
          },
          {
            id: "b",
            text: "Histogram is generally used for quantitative data whereas bar charts are good for qualitative data",
            image: null,
          },
          {
            id: "c",
            text: "Histogram is generally used for qualitative data whereas a bar chart is used for quantitative data",
            image: null,
          },
          {
            id: "d",
            text: "Change in values of a variable best represented using a pie chart.",
            image: null,
          },
        ],
        correct_answers: ["a", "b"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.4_2023",
        question_text:
          "Dr. Arnab is a faculty at ITM. He wishes to visualize the difference in frequency of actions performed per week (on LMS) of male and female students across the semester, which visualization chart will he be using for this?",
        image_context: null,
        options: [
          { id: "a", text: "bar chart", image: null },
          { id: "b", text: "pie Chart", image: null },
          { id: "c", text: "Scatter Plot", image: null },
          { id: "d", text: "Heat maps", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.5_2023",
        question_text:
          "Match the following: 1. Bar chart, 2. Histogram, 3. Pie Chart, 4. Scatter plot | A. Correlation, B. Part to whole, C. Comparison, D. Distribution",
        image_context: "images/img21.png",
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
        id: "4.6_2023",
        question_text:
          "Which of the following statements is correct? [Question 4.6 and 4.7 are combined in source text but split here]",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The interquartile range is the difference between the 2nd quartile and the 1st quartile.",
            image: null,
          },
          {
            id: "b",
            text: "The interquartile range is the difference between the 3rd quartile and the 2nd quartile.",
            image: null,
          },
          {
            id: "c",
            text: "The interquartile range is the difference between the 3rd quartile and the 1st quartile.",
            image: null,
          },
          {
            id: "d",
            text: "The median is equal to the 2nd quartile value.",
            image: null,
          },
        ],
        correct_answers: ["c", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.7_2023",
        question_text:
          "Which of the following statements are correct? [Related to charts]",
        image_context: null,
        options: [
          {
            id: "a",
            text: "A scatterplot shows the relationship between two variables",
            image: null,
          },
          {
            id: "b",
            text: "A Scatter plot is used to show the distribution of numeric value",
            image: null,
          },
          {
            id: "c",
            text: "Line chart show variation of a variable only with time",
            image: null,
          },
          {
            id: "d",
            text: "Line charts show a variation of a variable with any other parameters",
            image: null,
          },
        ],
        correct_answers: ["a", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.8_2023",
        question_text:
          "Which of the following statements are correct for the Bar chart?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Bar charts are used to represent the correlation.",
            image: null,
          },
          {
            id: "b",
            text: "The bars can be plotted vertically or horizontally.",
            image: null,
          },
          {
            id: "c",
            text: "Bar graphs are usually used to represent 'continuous data'.",
            image: null,
          },
          {
            id: "d",
            text: "Bar graphs are usually used to represent 'categorical data'",
            image: null,
          },
        ],
        correct_answers: ["b", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.9_2023",
        question_text:
          "What are the considerations you need to make when using a visualization technique?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "What is the information you want to convey?",
            image: null,
          },
          { id: "b", text: "The kind of data you have", image: null },
          {
            id: "c",
            text: "The opinion of the participants in your study",
            image: null,
          },
          { id: "d", text: "Easy to interpret", image: null },
        ],
        correct_answers: ["a", "b", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.10_2023",
        question_text:
          "In the below figure, what is the relation between the two variables? ",
        image_context: "images/img22.png",
        options: [
          { id: "a", text: "Linear", image: null },
          { id: "b", text: "Negative", image: null },
          { id: "c", text: "Positive", image: null },
          { id: "d", text: "Non-linear", image: null },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 5",
    week: 5,
    questions: [
      {
        id: "5.1_2023",
        question_text:
          "Which of the following is NOT true about correlation coefficient(r)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "High correlation implies causation.",
            image: null,
          },
          {
            id: "b",
            text: "The sign of the r indicates the direction of the association.",
            image: null,
          },
          { id: "c", text: "r varies between -1 and 1.", image: null },
          {
            id: "d",
            text: "It is the measure of the strength of linear association between two numerical variables.",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.2_2023",
        question_text: "What is iSAT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "An interactive visual representation to highlight transitions in data.",
            image: null,
          },
          {
            id: "b",
            text: "A learning environment for teaching engineering estimation problems.",
            image: null,
          },
          { id: "c", text: "An algorithm for process mining", image: null },
          { id: "d", text: "A pattern mining tool", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.3_2023",
        question_text:
          "For correlation between variables, which of the following visualizations would suit?",
        image_context: null,
        options: [
          { id: "a", text: "Bar chart", image: null },
          { id: "b", text: "Histogram", image: null },
          { id: "c", text: "Scatter plot", image: null },
          { id: "d", text: "Pie chart", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.4_2023",
        question_text:
          "The class teacher of class 8 in school wants to find the correlation between the marks scored in maths and physics in the mid-term examination. Find the Spearman Rank Correlation Coefficient up to one decimal place. [Data provided in table]",
        image_context: "images/img23.png",
        options: [
          { id: "a", text: "0.6", image: null },
          { id: "b", text: "0.4", image: null },
          { id: "c", text: "0.9", image: null },
          { id: "d", text: "0.3", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.5_2023",
        question_text:
          "Choose the correct match between the given two columns: Column A: 1. Descriptive, 2. Diagnostic, 3. Predictive, 4. Prescriptive. Column B: i. What will happen, ii. How to make something happen, iii. Why did something happen, iv. What happened",
        image_context: "images/img24.png",
        options: [
          { id: "a", text: "1-iv, 2-iii, 3-i, 4-ii", image: null },
          { id: "b", text: "1-i, 2-ii, 3-iii, 4-iv", image: null },
          { id: "c", text: "1-ii, 2-iii, 3-iv, 4-i", image: null },
          { id: "d", text: "1-iv, 2-i, 3-ii, 4-iii", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.6_2023",
        question_text:
          "The strength of association between an independent variable X and a dependent variable Y is measured by:",
        image_context: null,
        options: [
          { id: "a", text: "Standard deviation", image: null },
          { id: "b", text: "Variance", image: null },
          { id: "c", text: "Correlation coefficient", image: null },
          { id: "d", text: "Interquartile range", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.7_2023",
        question_text:
          "The correlation coefficient, r=-0.5 would indicate a scatter plot in which",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The slope is upward and half of the points of the scatterplot sit on a straight line.",
            image: null,
          },
          {
            id: "b",
            text: "The slope is downward and half of the points of the scatterplot sit on a straight line.",
            image: null,
          },
          {
            id: "c",
            text: "The slope is downward and all of the points sit perfectly on a straight line",
            image: null,
          },
          {
            id: "d",
            text: "The slope is downward and there is a moderately good fit between the straight line and the points on the scatterplot",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.8_2023",
        question_text:
          "Which of the following behaviors has the highest state transition values? [Based on the provided learner interaction sequence], Learner sequence: read, video, quiz, read, read, quiz, video, video, quiz, video, read, read, quiz, read, video, video, read, quiz",
        image_context: null,
        options: [
          { id: "a", text: "Read->Read and Read->Quiz", image: null },
          { id: "b", text: "Read->Quiz and Quiz->Read", image: null },
          { id: "c", text: "Vide->Quiz and Quiz->Video", image: null },
          { id: "d", text: "Quiz->Read and Quiz->Video", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.9_2023",
        question_text:
          "The state transition value (up to two decimal places) of Read->Read is: [Based on the provided learner interaction sequence] Learner sequence: read, video, quiz, read, read, quiz, video, video, quiz, video, read, read, quiz, read, video, video, read, quiz",
        image_context: null,
        options: [
          { id: "a", text: "0.20", image: null },
          { id: "b", text: "0.28 to 0.29", image: null },
          { id: "c", text: "0.33", image: null },
          { id: "d", text: "0.50", image: null },
        ],
        correct_answers: ["b"],
        type: "Numerical Range Answer",
      },
      {
        id: "5.10_2023",
        question_text:
          "The state transition value (up to two decimal places) of Video->Video is: [Based on the provided learner interaction sequence], Learner sequence: read, video, quiz, read, read, quiz, video, video, quiz, video, read, read, quiz, read, video, video, read, quiz",
        image_context: null,
        options: [
          { id: "a", text: "0.5", image: null },
          { id: "b", text: "0.33", image: null },
          { id: "c", text: "0.43", image: null },
          { id: "d", text: "0.9", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 6",
    week: 6,
    questions: [
      {
        id: "6.1_2023",
        question_text:
          "Which of the following is not an algorithm for developing a process model?",
        image_context: null,
        options: [
          { id: "a", text: "ProM", image: null },
          { id: "b", text: "Alpha miner", image: null },
          { id: "c", text: "Heuristic Miner", image: null },
          { id: "d", text: "Fuzzy Miner", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.2_2023",
        question_text:
          "____ can be used for differentiating interaction behavior between two groups.",
        image_context: null,
        options: [
          { id: "a", text: "Differential Sequence Mining", image: null },
          { id: "b", text: "Sequential Pattern Mining", image: null },
          { id: "c", text: "Naive Bayes Classifier", image: null },
          { id: "d", text: "Pruning", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.3_2023",
        question_text: "What is meant by sequence support?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It indicates the frequency of occurrence of a pattern for each student",
            image: null,
          },
          {
            id: "b",
            text: "It indicates the number of students having a particular pattern",
            image: null,
          },
          {
            id: "c",
            text: "It indicates the number of students not having a particular pattern",
            image: null,
          },
          {
            id: "d",
            text: "It indicates the total number of patterns observed for a particular student",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.4_2023",
        question_text: "What is meant by instance support?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It indicates the frequency of occurrence of a pattern for each student",
            image: null,
          },
          {
            id: "b",
            text: "It indicates the number of students having a particular pattern",
            image: null,
          },
          {
            id: "c",
            text: "It indicates the number of students not having a particular pattern",
            image: null,
          },
          {
            id: "d",
            text: "It indicates the total number of patterns observed for a particular student",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.5_2023",
        question_text:
          "____ support captures the number of individual action sequences for a group where that sequence of actions occurs at least once.",
        image_context: null,
        options: [
          { id: "a", text: "Sequence", image: null },
          { id: "b", text: "Instance", image: null },
          { id: "c", text: "Frequency", image: null },
          { id: "d", text: "Significance", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.6_2023",
        question_text:
          "What is the i-freq mean in the sequence Quiz → Read? (correct to 2 decimal places) [Based on the provided three student action sequences]",
        image_context: "images/img25.png",
        options: [
          { id: "a", text: "2.3", image: null },
          { id: "b", text: "1.3", image: null },
          { id: "c", text: "0.3", image: null },
          { id: "d", text: "3.3", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.7_2023",
        question_text:
          "What is the s-support of the sequence Quiz → Read? (correct to 2 decimal places) [Based on the provided three student action sequences]",
        image_context: "images/img25.png",
        options: [
          { id: "a", text: "1", image: null },
          { id: "b", text: "0.5", image: null },
          { id: "c", text: "1.5", image: null },
          { id: "d", text: "2", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.8_2023",
        question_text:
          'What is the significance of action "Read" for Student 2? (correct to 2 decimal places) [Based on the provided three student action sequences]',
        image_context: "images/img25.png",
        options: [
          { id: "a", text: "0", image: null },
          { id: "b", text: "2", image: null },
          { id: "c", text: "0.66", image: null },
          { id: "d", text: "1", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.9_2023",
        question_text:
          "What is the state transition probability for the sequence Video → Quiz for Student 2? [Based on the provided three student action sequences]",
        image_context: "images/img25.png",
        options: [
          { id: "a", text: "0", image: null },
          { id: "b", text: "0.33", image: null },
          { id: "c", text: "0.66", image: null },
          { id: "d", text: "1", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.10_2023",
        question_text:
          'What is the significance of action "Quiz" for student 1? (correct to 2 decimal places) [Based on the provided three student action sequences]',
        image_context: "images/img25.png",
        options: [
          { id: "a", text: "0.33", image: null },
          { id: "b", text: "0.66", image: null },
          { id: "c", text: "0.99", image: null },
          { id: "d", text: "1", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 7",
    week: 7,
    questions: [
      {
        id: "7.1_2023",
        question_text:
          "In the given Dendrogram, how many clusters will be obtained if we chose the line across 0.6 to obtain the clusters? ",
        image_context: "images/img26.png",
        options: [
          { id: "a", text: "2", image: null },
          { id: "b", text: "3", image: null },
          { id: "c", text: "4", image: null },
          { id: "d", text: "6", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.2_2023",
        question_text:
          "What is the optimum value of K chosen from the below figure? ",
        image_context: "images/img27.png",
        options: [
          { id: "a", text: "2", image: null },
          { id: "b", text: "4", image: null },
          { id: "c", text: "6", image: null },
          { id: "d", text: "14", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.3_2023",
        question_text:
          "Choose the hierarchical clustering method(s) from the options given below.",
        image_context: null,
        options: [
          { id: "a", text: "Agglomerative nesting", image: null },
          { id: "b", text: "K-means clustering", image: null },
          { id: "c", text: "Divisive analysis", image: null },
          { id: "d", text: "Probabilistic clustering", image: null },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "7.4_2023",
        question_text: "What is/are true about the AGNES method of clustering?",
        image_context: null,
        options: [
          { id: "a", text: "Top-Down approach", image: null },
          {
            id: "b",
            text: "Each data point is considered as an individual cluster at the beginning of the first iteration.",
            image: null,
          },
          {
            id: "c",
            text: "All the data points are considered as a single cluster at the beginning of the first iteration.",
            image: null,
          },
          { id: "d", text: "Bottom-up approach.", image: null },
        ],
        correct_answers: ["b", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "7.5_2023",
        question_text:
          "What are the new centroid points after the first iteration? [K-Means Calculation based on provided figure/coordinates]",
        image_context: "images/img28.png",
        options: [
          { id: "a", text: "(4, 4) and (3.33, 2.67)", image: null },
          { id: "b", text: "(4, 2) and (2.33, 4.67)", image: null },
          { id: "c", text: "(2.33, 4) and (3.33, 2.67)", image: null },
          { id: "d", text: "(2.33, 3.67) and (4, 2)", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.6_2023",
        question_text:
          "What is/are the data point(s) clustered with centroid C1 after the first iteration? [K-Means Calculation based on provided figure/coordinates]",
        image_context: "images/img28.png",
        options: [
          { id: "a", text: "A1", image: null },
          { id: "b", text: "A2", image: null },
          { id: "c", text: "A3", image: null },
          { id: "d", text: "A4", image: null },
          { id: "e", text: "A5", image: null },
        ],
        correct_answers: ["b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "7.7_2023",
        question_text:
          "What are the new centroid points after the second iteration? [K-Means Calculation based on provided figure/coordinates]",
        image_context: "images/img28.png",
        options: [
          { id: "a", text: "(4.33, 3.33) and (3.33, 2.67)", image: null },
          { id: "b", text: "(4, 2) and (2, 4.67)", image: null },
          { id: "c", text: "(1.33, 3) and (2.33, 1.67)", image: null },
          { id: "d", text: "(4,2) and (2.33,4.67)", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.8_2023",
        question_text:
          "What is/are the data point(s) clustered with centroid C1 after the second iteration? [K-Means Calculation based on provided figure/coordinates]",
        image_context: "images/img28.png",
        options: [
          { id: "a", text: "A1", image: null },
          { id: "b", text: "A2", image: null },
          { id: "c", text: "A3", image: null },
          { id: "d", text: "A4", image: null },
          { id: "e", text: "A5", image: null },
        ],
        correct_answers: ["b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "7.9_2023",
        question_text:
          "In K-means clustering, the value of the error function is minimum when",
        image_context: null,
        options: [
          {
            id: "a",
            text: "the data points are grouped in two clusters.",
            image: null,
          },
          {
            id: "b",
            text: "the data points are grouped into three clusters.",
            image: null,
          },
          {
            id: "c",
            text: "the data points are grouped under one cluster.",
            image: null,
          },
          {
            id: "d",
            text: "the number of clusters and the number of data points are equal.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.10_2023",
        question_text: "Which is needed by K-means clustering?",
        image_context: null,
        options: [
          { id: "a", text: "defined distance metric", image: null },
          { id: "b", text: "number of clusters", image: null },
          {
            id: "c",
            text: "initial guess as to cluster centroids",
            image: null,
          },
          {
            id: "d",
            text: "A few points are fixed initially to a particular centroid throughout various iterations.",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 8",
    week: 8,
    questions: [
      {
        id: "8.1_2023",
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
        id: "8.2_2023",
        question_text:
          "Then find the value of the Y-intercept: [Based on the linear regression model Y=1.63+0.02x]",
        image_context: "images/img29.png",
        options: [
          { id: "a", text: "1.63", image: null },
          { id: "b", text: "0.02", image: null },
          { id: "c", text: "1.65", image: null },
          { id: "d", text: "0", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.3_2023",
        question_text:
          "What will be the sign of the correlation coefficient (Gate Score and GPA)? [Based on the linear regression model Y=1.63+0.02x]",
        image_context: "images/img29.png",
        options: [
          { id: "a", text: "Positive", image: null },
          { id: "b", text: "Negative", image: null },
          { id: "c", text: "Cannot be determined.", image: null },
          { id: "d", text: "Zero", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.4_2023",
        question_text:
          "Find the GPA obtained by a student having a Gate score of 80 (as per model). [Using the linear regression model Y=1.63+0.02x]",
        image_context: "images/img29.png",
        options: [
          { id: "a", text: "3.4", image: null },
          { id: "b", text: "3.41", image: null },
          { id: "c", text: "3.23", image: null },
          { id: "d", text: "3.33", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.5_2023",
        question_text:
          "Find the value of the mean squared error value [Based on the linear regression model Y=1.63+0.02x and provided data]",
        image_context: "images/img29.png",
        options: [
          { id: "a", text: "0.14", image: null },
          { id: "b", text: "4.01", image: null },
          { id: "c", text: "0.4", image: null },
          { id: "d", text: "0.04", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.6_2023",
        question_text:
          "Find the mean of the predicted value [Based on the linear regression model Y=1.63+0.02x and provided data]",
        image_context: "images/img29.png",
        options: [
          { id: "a", text: "2.9", image: null },
          { id: "b", text: "3.01", image: null },
          { id: "c", text: "3.3", image: null },
          { id: "d", text: "2.8", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.7_2023",
        question_text:
          "Predictive analytics in the education domain is helpful",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To the owners of the institutions to predict the rank of their institutions among the group of competing institutions",
            image: null,
          },
          {
            id: "b",
            text: "To the learning content developers to provide adaptive content to the learners",
            image: null,
          },
          {
            id: "c",
            text: "To the instructors to adapt their teaching strategies based on the student's performance",
            image: null,
          },
          {
            id: "d",
            text: "To the learners to provide feedback and suggestions to avoid failure in the learning goal",
            image: null,
          },
        ],
        correct_answers: ["b", "c", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "8.8_2023",
        question_text: "Regression is generally used",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To predict the performance of the learners",
            image: null,
          },
          {
            id: "b",
            text: "To evaluate the strength of the predictor model developed",
            image: null,
          },
          {
            id: "c",
            text: "To investigate the relationship between dependent and independent variables.",
            image: null,
          },
          {
            id: "d",
            text: "To exclusively perform cause and effect analysis",
            image: null,
          },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "8.9_2023",
        question_text:
          "Choose the correct option(s) that best describe(s) the different types of regression analysis.",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Multiple regression analysis has multiple dependent variables and multiple independent variables",
            image: null,
          },
          {
            id: "b",
            text: "The multivariate regression analysis has multiple dependent variables and multiple independent variables",
            image: null,
          },
          {
            id: "c",
            text: "Multiple regression analysis has one dependent variable and multiple independent variables",
            image: null,
          },
          {
            id: "d",
            text: "The multivariate regression analysis has one dependent variable and multiple independent variables",
            image: null,
          },
        ],
        correct_answers: ["b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "8.10_2023",
        question_text:
          "Which of the following is/are true about logistic regression?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Logistic regression is suitable to predict categorical values.",
            image: null,
          },
          {
            id: "b",
            text: "Logistic regression is suitable to predict continuous values.",
            image: null,
          },
          {
            id: "c",
            text: "Logistic regression uses maximum likelihood as the error-minimizing method.",
            image: null,
          },
          {
            id: "d",
            text: "Logistic regression uses the least mean squared error as the error-minimizing method.",
            image: null,
          },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 9",
    week: 9,
    questions: [
      {
        id: "9.1_2023",
        question_text:
          "Which of the following statements are correct about decision trees?",
        image_context: null,
        options: [
          { id: "A", text: "It requires normalization of data", image: null },
          {
            id: "B",
            text: "It does not require normalization of data",
            image: null,
          },
          { id: "C", text: "Missing Value are not important", image: null },
          {
            id: "D",
            text: "Decision tree does not need root node always",
            image: null,
          },
        ],
        correct_answers: ["B", "C"],
        type: "Multi-Select MCQ",
      },
      {
        id: "9.2_2023",
        question_text:
          "Consider the following statements- Statement 1: Naive Bayes assumes independence among predictors. Statement 2: Naive Bayes can perform multi-class prediction. Select correct option about following statements:",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Both, statement 1 and 2 are correct",
            image: null,
          },
          {
            id: "B",
            text: "Statement 1 is correct and statement 2 is wrong",
            image: null,
          },
          {
            id: "C",
            text: "Statement 1 is wrong and statement 2 is correct",
            image: null,
          },
          { id: "D", text: "Both, statement 1 and 2 are wrong", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.3.1_2023",
        question_text:
          "What is the probability of student failing the exam if the attendance is 40-60? [Using the provided table for Naive Bayes]",
        image_context: "images/img30.png",
        options: [
          { id: "A", text: "3/5", image: null },
          { id: "B", text: "4/5", image: null },
          { id: "C", text: "2/5", image: null },
          { id: "D", text: "1/5", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.3.2_2023",
        question_text:
          "What is the probability of student passing the exam if the attendance is 70-80? [Using the provided table for Naive Bayes]",
        image_context: "images/img30.png",
        options: [
          { id: "A", text: "1", image: null },
          { id: "B", text: "1/2", image: null },
          { id: "C", text: "2/3", image: null },
          { id: "D", text: "1/3", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.4_2023",
        question_text: "When to stop further constructing a decision tree?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "When there are no more conditions left",
            image: null,
          },
          {
            id: "B",
            text: "When all the conditions belong to one group",
            image: null,
          },
          {
            id: "C",
            text: "When most of the conditions are grouped leaving few ungrouped",
            image: null,
          },
          {
            id: "D",
            text: "When there are odd number of nodes remaining",
            image: null,
          },
        ],
        correct_answers: ["A", "B"],
        type: "Multi-Select MCQ",
      },
      {
        id: "9.5_2023",
        question_text: "Why is the Naive Bayes classifier called 'Naive'?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "The classifier can solve only a very limited number of problems, under multiple conditions.",
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
      {
        id: "9.6_2023",
        question_text: "Decision tree is a non-linear classifier.",
        image_context: null,
        options: [
          { id: "1", text: "True", image: null },
          { id: "2", text: "False", image: null },
        ],
        correct_answers: ["1"],
        type: "True/False",
      },
      {
        id: "9.7_2023",
        question_text:
          "Overfitting and increase in the tree complexity can be overcome through the process called as",
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
        id: "9.8_2023",
        question_text:
          "Which of the following is an advantage of Decision Tree algorithm?",
        image_context: null,
        options: [
          { id: "A", text: "It is an extremely fast algorithm", image: null },
          {
            id: "B",
            text: "It is easily interpretable and explainable",
            image: null,
          },
          {
            id: "C",
            text: "It can be used for classification, clustering as well as regression analysis.",
            image: null,
          },
          {
            id: "D",
            text: "It can also be used for sequence mining",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.9_2023",
        question_text:
          "Suppose you have given the following graph which shows the ROC curve for two different classification algorithms such as Random Forest(blue), Logistic Regression(orange) and KNN(green). Which of the following algorithms would you consider in your final model building on the basis of performance? ",
        image_context: "images/img31.png",
        options: [
          { id: "a", text: "Random Forest", image: null },
          { id: "b", text: "Logistic Regression", image: null },
          { id: "c", text: "KNN", image: null },
          { id: "d", text: "None of the above", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 10",
    week: 10,
    questions: [
      {
        id: "10.1_2023",
        question_text:
          "Which of the following is/are NOT the application(s) of the NLP?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Extraction of information from body posture",
            image: null,
          },
          { id: "B", text: "Automatic Sentence completion", image: null },
          {
            id: "C",
            text: "Information extraction from the paragraph",
            image: null,
          },
          {
            id: "D",
            text: "Summarizing news article in three lines",
            image: null,
          },
          {
            id: "E",
            text: "Summarizing the five different action done by learner while learning",
            image: null,
          },
          {
            id: "F",
            text: "Inferring sentiment from the social media post",
            image: null,
          },
        ],
        correct_answers: ["A", "E"],
        type: "Multi-Select MCQ",
      },
      {
        id: "10.2_2023",
        question_text:
          'In the following sentence "Shyaam went to the football field today, while his younger brother went to play badminton. Both went and came back". What is the probability of P(to/went)?',
        image_context: null,
        options: [
          { id: "A", text: "3/2", image: null },
          { id: "B", text: "2/3", image: null },
          { id: "C", text: "1", image: null },
          { id: "D", text: "3/4", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.3_2023",
        question_text:
          "What is the minimum edit distance between INTENTION and INTUITION?",
        image_context: null,
        options: [
          { id: "a", text: "4", image: null },
          { id: "b", text: "2", image: null },
          { id: "c", text: "3", image: null },
          { id: "d", text: "1", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.4_2023",
        question_text:
          "Select the correct set of operations which are required to calculate the minimum edit distance between two words",
        image_context: null,
        options: [
          { id: "A", text: "Insert, Delete, Create", image: null },
          { id: "B", text: "Substitute, Delete, Create", image: null },
          { id: "C", text: "Insert, Delete, Substitute", image: null },
          { id: "D", text: "Insert, Delete, Read", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.5_2023",
        question_text:
          "Which of the following is a tool for NLP applications developed by a team of Stanford University?",
        image_context: null,
        options: [
          { id: "a", text: "NLPrun", image: null },
          { id: "b", text: "CoreNLP", image: null },
          { id: "c", text: "Insta Text", image: null },
          { id: "d", text: "Semantica", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.6_2023",
        question_text:
          "The following pairs of words are stemmed to the same form by the Porter stemmer (a stemming algorithm). Which of the following pairs would you argue shouldn't be combined or compared by stemming?",
        image_context: null,
        options: [
          { id: "a", text: "abandon/abandonment", image: null },
          { id: "b", text: "absorbency/absorbent", image: null },
          { id: "c", text: "marketing/markets", image: null },
          { id: "d", text: "university/universe", image: null },
          { id: "e", text: "volume/volumes", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.7_2023",
        question_text:
          'Which of the below word can be obtained by minimum edits (If each operation has cost 1) from the word "Affect"',
        image_context: null,
        options: [
          { id: "A", text: "Effect", image: null },
          { id: "B", text: "Defect", image: null },
          { id: "C", text: "Perfect", image: null },
          { id: "D", text: "Suspect", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.8_2023",
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
        id: "10.9_2023",
        question_text:
          "Which of the following techniques can be used for the purpose of converting a keyword into its base form?",
        image_context: null,
        options: [
          { id: "1", text: "Lemmatization", image: null },
          { id: "2", text: "Levenshtein", image: null },
          { id: "3", text: "Stemming", image: null },
          { id: "4", text: "Soundex", image: null },
        ],
        correct_answers: ["1", "3"],
        type: "Multi-Select MCQ",
      },
      {
        id: "10.10_2023",
        question_text:
          "Statement1: Ram loves to watch movies. Statement2: Dev loves to watch cricket matches. What will be the length of the document vector?",
        image_context: null,
        options: [
          { id: "a", text: "11", image: null },
          { id: "b", text: "7", image: null },
          { id: "c", text: "9", image: null },
          { id: "d", text: "8", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 11",
    week: 11,
    questions: [
      {
        id: "11.1_2023",
        question_text: "Multimodal learning analytics is",
        image_context: null,
        options: [
          {
            id: "A",
            text: "A Method of collecting data from multiple channels and present it to user",
            image: null,
          },
          {
            id: "B",
            text: "A Way of analyzing data using different machine learning techniques and Al tools to ensure low errors in sophisticated manner",
            image: null,
          },
          {
            id: "C",
            text: "A set of techniques that can be used to collect multiple sources of data in high frequency, synchronize and code the data, and examine learning in realistic, ecologically valid, social, mixed-media learning environments.",
            image: null,
          },
          {
            id: "D",
            text: "A methodology in which a user has access to his own data through multiple modes and he/she can modify and analyze his/her own data for improvement.",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.2_2023",
        question_text:
          "According to Paulo Ekman's cross-cultural research in 1969, Which of the following is/are NOT basic emotions:",
        image_context: null,
        options: [
          { id: "A", text: "Anger", image: null },
          { id: "B", text: "Disgust", image: null },
          { id: "C", text: "Boredom", image: null },
          { id: "D", text: "Happiness", image: null },
          { id: "E", text: "Confusion", image: null },
        ],
        correct_answers: ["C", "E"],
        type: "Multi-Select MCQ",
      },
      {
        id: "11.3_2023",
        question_text:
          "According to facial action coding systems described in iMotions blog, identify the best emotion that suits the given sequence of facial expressions and corresponding action units. [Facial Expression: Inner Brow Raiser, Brow Lowerer, Lip Corner Depressor]",
        image_context: "images/img32.png",
        options: [
          { id: "a", text: "Sadness", image: null },
          { id: "b", text: "Surprise", image: null },
          { id: "c", text: "Fear", image: null },
          { id: "d", text: "Anger", image: null },
          { id: "e", text: "Disgust", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.4_2023",
        question_text:
          "What do the red, yellow, and green colors in the eye tracking heatmap represent? (Refer below figure)",
        image_context: "images/img33.png",
        options: [
          {
            id: "a",
            text: "Equal amount of gaze points directed towards parts of the image",
            image: null,
          },
          {
            id: "b",
            text: "Descending order of the amount of gaze points that were directed towards parts of the image.",
            image: null,
          },
          {
            id: "c",
            text: "Ascending order of the amount of gaze points that were directed towards parts of the image.",
            image: null,
          },
          { id: "d", text: "Random trace data", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.5_2023",
        question_text:
          "Select the correct sequence of actions which are needed to infer the affective state",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Detect action units from database -> predict the affective state -> detect face from video frames",
            image: null,
          },
          {
            id: "B",
            text: "Predict the affective state -> detect face from video frames -> Detect action units from database",
            image: null,
          },
          {
            id: "C",
            text: "Detect face from video frames -> Detect action units from database -> Predict the affective state",
            image: null,
          },
          {
            id: "D",
            text: "Detect face from video frames -> Predict the affective state -> Detect action units from database",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.6_2023",
        question_text:
          "Select which is NOT the challenge in human observations & self reporting for detecting affective states.",
        image_context: null,
        options: [
          { id: "A", text: "It's time consuming", image: null },
          {
            id: "B",
            text: "Authenticity of self-reported data is questionable",
            image: null,
          },
          { id: "C", text: "Accuracy will not be good always", image: null },
          {
            id: "D",
            text: "Human observation and self reporting is very costly process",
            image: null,
          },
          {
            id: "E",
            text: "Interobserver reliability score will be low most of the time",
            image: null,
          },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.7_2023",
        question_text:
          "Match the following with correct pairs: a. EEG signal, b. Microphone, c. GSR, d. Emotion | 1. Skin Conductance, 2. Facial expressions, 3. Brain waves, 4. Think aloud",
        image_context: "images/img34.png",
        options: [
          { id: "a", text: "1-c, 2-a, 3-d, 4-b", image: null },
          { id: "b", text: "1-b, 2-d, 3-a, 4-c", image: null },
          { id: "c", text: "1-d, 2-a, 3-b, 4-c", image: null },
          { id: "d", text: "1-c, 2-d, 3-a, 4-b", image: null },
          { id: "e", text: "1-d, 2-c, 3-b, 4-a", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.8_2023",
        question_text:
          "Which of the following data can be collected using an eye tracker?",
        image_context: null,
        options: [
          { id: "a", text: "Eye fixations", image: null },
          { id: "b", text: "Saccadic eye movements", image: null },
          {
            id: "c",
            text: "Raising and lowering of the eyebrow",
            image: null,
          },
          { id: "d", text: "Raising and lowering of eyelids", image: null },
          { id: "e", text: "Pupil dilation", image: null },
        ],
        correct_answers: ["a", "b", "e"],
        type: "Multi-Select MCQ",
      },
      {
        id: "11.9_2023",
        question_text:
          "Ajith, a grade 8 boy, was attending a biology class... What could be the possible sequence of his affective state according to the observed model of affective dynamics from D'Mello et al., 2012.",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Engaged - Frustrated - Confused - Bored",
            image: null,
          },
          {
            id: "b",
            text: "Engaged - Confused - Frustrated - Bored",
            image: null,
          },
          {
            id: "c",
            text: "Engaged - Bored - Confused - Frustrated",
            image: null,
          },
          {
            id: "d",
            text: "Engaged Confused - Bored - Frustrated",
            image: null,
          },
          {
            id: "e",
            text: "Engaged - Bored - Frustrated - Confused",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.10_2023",
        question_text:
          "In a research study, non-verbal cues were analyzed... Choose the option(s) which could be considered to make bounding boxes. ",
        image_context: "images/img35.png",
        options: [
          { id: "a", text: "Face", image: null },
          { id: "b", text: "Body posture", image: null },
          { id: "c", text: "Hand gesture", image: null },
          { id: "d", text: "Eye Pupils", image: null },
          { id: "e", text: "Micro Facial features", image: null },
        ],
        correct_answers: ["a", "b", "c"],
        type: "Multi-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 12",
    week: 12,
    questions: [
      {
        id: "12.1_2023",
        question_text:
          "Which curve in the figure shown below represents best ROC (Receiver Characteristic Curve): ",
        image_context: "images/img36.png",
        options: [
          { id: "A", text: "I", image: null },
          { id: "B", text: "II", image: null },
          { id: "C", text: "III", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.2_2023",
        question_text:
          "The research Ethics forms an important part of the research. Which of the following is/are false in light of research ethics?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Researchers cannot store the data beyond 5 years.",
            image: null,
          },
          {
            id: "B",
            text: "Students who have given consent can withdraw it afterwards.",
            image: null,
          },
          {
            id: "C",
            text: "Students can prevent others from participating in the study.",
            image: null,
          },
          {
            id: "D",
            text: "The consent form should inform the risk involved in the study.",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.3_2023",
        question_text:
          "The following picture suggests which type of Data Analytics? ",
        image_context: "images/img37.png",
        options: [
          { id: "A", text: "Descriptive", image: null },
          { id: "B", text: "Diagnostic", image: null },
          { id: "C", text: "Prescriptive", image: null },
          { id: "D", text: "Predictive", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.4_2023",
        question_text:
          "Which of the following sources were mentioned for obtaining data in the course:",
        image_context: null,
        options: [
          { id: "a", text: "DataShop", image: null },
          { id: "b", text: "DataStop", image: null },
          { id: "c", text: "Kaggle", image: null },
          { id: "d", text: "Statsistify", image: null },
        ],
        correct_answers: ["a", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "12.5_2023",
        question_text:
          "Select the research areas from the following list which does NOT belongs to LA research domain-",
        image_context: null,
        options: [
          { id: "a", text: "Modeling learners' engagement", image: null },
          {
            id: "b",
            text: "Privacy and ethics in Share market",
            image: null,
          },
          { id: "c", text: "Affective computing", image: null },
          { id: "d", text: "Increasing the sales of e-courses", image: null },
          {
            id: "e",
            text: "Resource allocation in academic institutions",
            image: null,
          },
        ],
        correct_answers: ["b", "d", "e"],
        type: "Multi-Select MCQ",
      },
      {
        id: "12.6_2023",
        question_text:
          "Given below are the names of some conferences and their abbreviations. Choose the one where the expansions (full form) are correct.",
        image_context: null,
        options: [
          {
            id: "a",
            text: "LAK - Learning Analytical Knowledge",
            image: null,
          },
          {
            id: "b",
            text: "LAK - Learning Analytics and Knowledge",
            image: null,
          },
          {
            id: "c",
            text: "AIED- Artificial Intelligence in Education",
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
        id: "12.7_2023",
        question_text:
          "Which of the following features can be extracted from MOOC platform-",
        image_context: null,
        options: [
          { id: "a", text: "Time spent on Discussion Forum.", image: null },
          { id: "b", text: "Number of videos watched.", image: null },
          { id: "c", text: "Their planning strategies.", image: null },
          { id: "d", text: "Average session time.", image: null },
          {
            id: "e",
            text: "Number of times a particular video is played and paused.",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "d", "e"],
        type: "Multi-Select MCQ",
      },
      {
        id: "12.8_2023",
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
        id: "12.9_2023",
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
        id: "12.10_2023",
        question_text:
          "Select the correct option about following statements- Statement 1: TensorFlow is ML model builder tool. Statement 2: Featuretools is open source tool for feature engineering and storage",
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
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
    ],
  },
];
