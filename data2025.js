// data.js

// 🚨 PASTE YOUR ENTIRE JSON ARRAY HERE
const quizData = [
  {
    assignment: "Week 1 Assignment",
    week: 1,
    questions: [
      {
        id: "1.1_2025",
        question_text:
          "Which of the following statements correctly differentiates Learning Analytics from Academic Analytics?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Learning Analytics supports operational and financial decision-making at the institution level.",
            image: null,
          },
          {
            id: "B",
            text: "Academic Analytics focuses on helping students achieve specific learning goals.",
            image: null,
          },
          {
            id: "C",
            text: "Learning Analytics is used mainly by management and executives for business purposes.",
            image: null,
          },
          {
            id: "D",
            text: "Learning Analytics focuses on students' learning, while Academic Analytics supports institutional business decisions.",
            image: null,
          },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.2_2025",
        question_text:
          "Which of the following best distinguishes Descriptive Analytics from Diagnostic Analytics in the context of learning?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Descriptive analytics identifies the causes of student behavior, while diagnostic analytics only presents raw data.",
            image: null,
          },
          {
            id: "B",
            text: "Descriptive analytics predicts future student performance, while diagnostic analytics recommends specific actions.",
            image: null,
          },
          {
            id: "C",
            text: "Descriptive analytics summarizes what has happened (e.g., grades, attendance), while diagnostic analytics explains why it happened (e.g., lack of engagement).",
            image: null,
          },
          {
            id: "D",
            text: "Descriptive analytics is used by instructors, while diagnostic analytics is only used by students.",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.3_2025",
        question_text:
          "How does Predictive Analytics differ from Prescriptive Analytics in education?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Predictive analytics explains past student behavior, while prescriptive analytics focuses only on raw scores.",
            image: null,
          },
          {
            id: "B",
            text: "Predictive analytics forecasts student outcomes, while prescriptive analytics suggests actions to improve those outcomes.",
            image: null,
          },
          {
            id: "C",
            text: "Predictive analytics is used only for reporting, while prescriptive analytics is used only for grading.",
            image: null,
          },
          {
            id: "D",
            text: "Predictive analytics shows student satisfaction, while prescriptive analytics identifies historical trends.",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.4_2025",
        question_text:
          "What is the main difference between Diagnostic Analytics and Predictive Analytics in learning analytics?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Diagnostic analytics determines what is likely to happen in the future, while predictive analytics explains why it happened.",
            image: null,
          },
          {
            id: "B",
            text: "Diagnostic analytics focuses on understanding causes of past outcomes, while predictive analytics estimates what might happen next.",
            image: null,
          },
          {
            id: "C",
            text: "Diagnostic analytics is used for recommendation systems, while predictive analytics generates summaries.",
            image: null,
          },
          {
            id: "D",
            text: "Diagnostic analytics is less useful in education, while predictive analytics is used only for financial purposes.",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.5_2025",
        question_text:
          "A dashboard shows the number of assignments submitted by students and their average quiz scores over the last month. What type of learning analytics is being used?",
        image_context: null,
        options: [
          { id: "A", text: "Diagnostic Analytics", image: null },
          { id: "B", text: "Predictive Analytics", image: null },
          { id: "C", text: "Descriptive Analytics", image: null },
          { id: "D", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.6_2025",
        question_text:
          "An analysis is done to find out that students who do not participate in weekly discussion forums tend to score lower in final exams. What type of learning analytics is being used?",
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
        id: "1.7_2025",
        question_text:
          "A system warns the instructor that a student is likely to fail the course based on their activity and assessment data from the first half of the semester. What type of learning analytics is being used?",
        image_context: null,
        options: [
          { id: "A", text: "Descriptive Analytics", image: null },
          { id: "B", text: "Diagnostic Analytics", image: null },
          { id: "C", text: "Predictive Analytics", image: null },
          { id: "D", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.8_2025",
        question_text:
          "An automated tool recommends that a student who struggles with quizzes should attend extra tutorial sessions and use a specific set of learning resources. What type of learning analytics is being used?",
        image_context: null,
        options: [
          { id: "A", text: "Descriptive Analytics", image: null },
          { id: "B", text: "Predictive Analytics", image: null },
          { id: "C", text: "Diagnostic Analytics", image: null },
          { id: "D", text: "Prescriptive Analytics", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.9_2025",
        question_text:
          "In a MOOC, data from 200 students revealed the following group averages: Average quiz attempts per student: 4, Average number of forum posts: 6. Students with fewer than 2 quiz attempts and 1 or fewer forum posts typically fail the final test. Student A attempted 1 quiz and made 1 forum post. What can be reasonably inferred about Student A?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Student A has strong peer interaction",
            image: null,
          },
          {
            id: "B",
            text: "Student A has medium risk of failure",
            image: null,
          },
          {
            id: "C",
            text: "Student A is at high risk of failure",
            image: null,
          },
          {
            id: "D",
            text: "Student A's activity cannot be judged from this data",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.10_2025",
        question_text:
          "An instructor notices that students who watched less than 40% of the video content had an average test score of 42%, whereas those who watched more than 80% scored 78% on average. If a new student has watched only 35% of the videos so far and scored 45% in the midterm, what intervention is most data-aligned?",
        image_context: null,
        options: [
          { id: "A", text: "Offer a remedial test", image: null },
          {
            id: "B",
            text: "Encourage the student to increase video engagement",
            image: null,
          },
          {
            id: "C",
            text: "Suggest the student skip upcoming videos",
            image: null,
          },
          { id: "D", text: "Assign peer grading tasks", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Week 2 Assignment",
    week: 2,
    questions: [
      {
        id: "2.1_2025",
        question_text:
          "Which of the following data is most useful for understanding a learner's page view behavior on an educational platform?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Learner's profile picture and preferred language",
            image: null,
          },
          {
            id: "B",
            text: "Course completion certificate and final grade",
            image: null,
          },
          {
            id: "C",
            text: "Feedback rating and discussion forum activity",
            image: null,
          },
          { id: "D", text: "Time stamp information and page URL", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.2_2025",
        question_text:
          "Which of the following are valid sources of data collection in a Technology-Enhanced Learning (TEL) environment? (Select all that apply)",
        image_context: null,
        options: [
          { id: "A", text: "Log data", image: null },
          { id: "B", text: "Sensory data", image: null },
          { id: "C", text: "Survey data", image: null },
          { id: "D", text: "Course title and duration", image: null },
        ],
        correct_answers: ["A", "B", "C"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.3_2025",
        question_text:
          "Which of the following should be included in a consent form for Learning Analytics (LA) research? (Select all that apply)",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Introduction and Project Description - Who you are, purpose of the study, and study design",
            image: null,
          },
          {
            id: "B",
            text: "Participation and Risks Involved - Selection criteria and possible risks to participants",
            image: null,
          },
          {
            id: "C",
            text: "Data Confidentiality and Contact Information - How data will be stored, who can access it, and how to reach the research team",
            image: null,
          },
          {
            id: "D",
            text: "Payment methods and discount offers for participants",
            image: null,
          },
        ],
        correct_answers: ["A", "B", "C"],
        type: "Multi-Select MCQ",
      },
      {
        id: "2.4_2025",
        question_text:
          "Which of the following is not a recognized type of outlier?",
        image_context: null,
        options: [
          { id: "A", text: "Global (or Point) Outlier", image: null },
          { id: "B", text: "Collective Outlier", image: null },
          { id: "C", text: "Contextual (or Conditional) Outlier", image: null },
          { id: "D", text: "Statistical Outlier", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.5_2025",
        question_text:
          "You are building a machine learning model to predict customer churn. The dataset contains a column Subscription_Type with values: ['Free', 'Basic', 'Premium']. You decide to use One-Hot Encoding on this column. After applying One-Hot Encoding, which of the following correctly represents the transformed row for a customer with Subscription_Type = 'Basic'?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "[1, 0, 0] labeled as ['Free', 'Basic', 'Premium']",
            image: null,
          },
          {
            id: "B",
            text: "[0, 1, 0] labeled as ['Free', 'Basic', 'Premium']",
            image: null,
          },
          {
            id: "C",
            text: "[0, 0, 1] labeled as ['Basic', 'Premium', 'Free']",
            image: null,
          },
          {
            id: "D",
            text: "['Basic'] because text data doesn't need encoding",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.6_2025",
        question_text:
          "Which of the following is not a commonly used method for imputing missing values in a dataset?",
        image_context: null,
        options: [
          { id: "A", text: "Replace with the next value", image: null },
          { id: "B", text: "Replacing with Mean", image: null },
          { id: "C", text: "Replacing with Mode", image: null },
          { id: "D", text: "Replacing with Median Frequency", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.7_2025",
        question_text:
          "From the given datasets find out which one contains an outlier? (You can use box-plot to do this). a. Data=[0,1,2,3,4,5,5], b. Data=[0,1,2,3,6,6], c. Data=[0,1,2,3,4,5,10], d. Data=[1,2,3,4,5,6,7]",
        image_context: null,
        options: [
          { id: "A", text: "Data=[0,1,2,3,4,5,5]", image: null },
          { id: "B", text: "Data=[0,1,2,3,6,6]", image: null },
          { id: "C", text: "Data=[0,1,2,3,4,5,10]", image: null },
          { id: "D", text: "Data=[1,2,3,4,5,6,7]", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.8_2025",
        question_text:
          "Which of the following correctly matches the technique with the value used for imputing missing data in time series?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Forward Fill - Uses next value, Backward Fill - Uses previous value",
            image: null,
          },
          {
            id: "B",
            text: "Forward Fill - Uses mean value, Backward Fill - Uses mode value",
            image: null,
          },
          {
            id: "C",
            text: "Forward Fill - Uses previous value, Backward Fill - Uses next value",
            image: null,
          },
          {
            id: "D",
            text: "Forward Fill - Uses zero, Backward Fill - Uses most frequent value",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.9_2025",
        question_text:
          "Arrange the following sentences in the correct order of sequence: I. Analyze data, II. Anonymise the data, III. Collect data, IV. Get approval from the Ethics Committee to conduct research and collect data, V. Get participants' consent",
        image_context: null,
        options: [
          { id: "A", text: "iv, v, iii, ii, i", image: null },
          { id: "B", text: "v, iv, iii, ii, i", image: null },
          { id: "C", text: "iv, iii, v, ii, i", image: null },
          { id: "D", text: "iii, iv, v, ii, i", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.10_2025",
        question_text:
          "Choose the correct option about the type of outlier matching to it image. [Image shows three charts A, B, C over time]",
        image_context:
          "Image with three charts A, B, C illustrating different outlier types over a time axis (Feb to Dec) is required.",
        options: [
          {
            id: "a",
            text: "A-1 (Collective Outlier), B-2 (Contextual Outlier), C-3 (Global Outlier)",
            image: null,
          },
          {
            id: "b",
            text: "A-3 (Global Outlier), B-2 (Contextual Outlier), C-3 (Global Outlier)",
            image: null,
          },
          {
            id: "c",
            text: "A-3 (Global Outlier), B-1 (Collective Outlier), C-2 (Contextual Outlier)",
            image: null,
          },
          {
            id: "d",
            text: "A-1 (Collective Outlier), B-3 (Global Outlier), C-2 (Contextual Outlier)",
            image: null,
          },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Week 3 Assignment",
    week: 3,
    questions: [
      {
        id: "3.1_2025",
        question_text:
          "Based on the given diagram showing the relationship among Artificial Intelligence, Machine Learning, and Deep Learning, which of the following statements are correct? (Select all that apply)",
        image_context:
          "Diagram illustrating the relationship between AI, ML, and Deep Learning as nested subsets is required.",
        options: [
          {
            id: "A",
            text: "Deep Learning is a subset of Machine Learning.",
            image: null,
          },
          {
            id: "B",
            text: "Machine Learning is a subset of Artificial Intelligence.",
            image: null,
          },
          {
            id: "C",
            text: "Artificial Intelligence is a subset of Deep Learning.",
            image: null,
          },
          {
            id: "D",
            text: "Deep Learning is also a subset of Artificial Intelligence.",
            image: null,
          },
        ],
        correct_answers: ["A", "B", "D"],
        type: "Multi-Select MCQ",
      },
      {
        id: "3.2_2025",
        question_text:
          "Which of the following is not a typical use of Machine Learning in Learning Analytics (LA)?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "To model learners' interaction behaviour",
            image: null,
          },
          {
            id: "B",
            text: "To predict learners' academic outcomes",
            image: null,
          },
          {
            id: "C",
            text: "To recommend personalized learning resources",
            image: null,
          },
          {
            id: "D",
            text: "To evaluate teachers' salaries based on student feedback",
            image: null,
          },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.3_2025",
        question_text:
          "Which of the following best distinguishes supervised learning from unsupervised learning?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Supervised learning uses labelled data, while unsupervised learning uses unlabeled data.",
            image: null,
          },
          {
            id: "B",
            text: "Supervised learning finds hidden patterns in data without any guidance.",
            image: null,
          },
          {
            id: "C",
            text: "Supervised learning does not require a target variable, while unsupervised learning does.",
            image: null,
          },
          {
            id: "D",
            text: "Supervised learning is only used for image classification, while unsupervised learning is used for all other tasks.",
            image: null,
          },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.4_2025",
        question_text:
          "For the below confusion matrix, the Accuracy value is: [Confusion Matrix: Predicted A/Actual A=20, Predicted !A/Actual A=20, Predicted A/Actual !A=10, Predicted !A/Actual !A=20]",
        image_context:
          "Confusion Matrix Table is required for calculation: TP=20, FN=20, FP=10, TN=20.",
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
        id: "3.5_2025",
        question_text:
          "In a 4-fold cross-validation where the dataset is split into 4 equal parts (each 25% of the data), which of the following statements is correct?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Each fold uses the same test set for all iterations to ensure consistency.",
            image: null,
          },
          {
            id: "B",
            text: "In every fold, one distinct set is used as the test set and the remaining three sets are used for training.",
            image: null,
          },
          {
            id: "C",
            text: "Each iteration trains on 25% of the data and tests on 75%.",
            image: null,
          },
          {
            id: "D",
            text: "The same set of data is used for both training and testing in every fold.",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.6_2025",
        question_text:
          "In a classification task, the following outcomes are observed: ID 1: Yi=1, YPredicted=1; ID 2: Yi=1, YPredicted=0; ID 3: Yi=0, YPredicted=1; ID 4: Yi=1, YPredicted=0; ID 5: Yi=0, YPredicted=0; ID 6: Yi=1, YPredicted=1. What is the value of precision in this case?",
        image_context:
          "List of actual (Yi) and predicted (YPredicted) binary outcomes is required for calculation.",
        options: [
          { id: "A", text: "0.40", image: null },
          { id: "B", text: "0.67", image: null },
          { id: "C", text: "0.50", image: null },
          { id: "D", text: "0.75", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.7_2025",
        question_text:
          "A medical image classification model is tested by two radiologists independently classifying images as either positive (disease) or negative (no disease). What is the Cohen's Kappa value for the agreement between the two radiologists? [Confusion Matrix: R-A:Pos/R-B:Pos=50, R-A:Pos/R-B:Neg=10, R-A:Neg/R-B:Pos=5, R-A:Neg/R-B:Neg=35, Total=100]",
        image_context:
          "Confusion Matrix table for Kappa calculation is required.",
        options: [
          { id: "A", text: "0.60", image: null },
          { id: "B", text: "0.70", image: null },
          { id: "C", text: "0.75", image: null },
          { id: "D", text: "0.85", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.8_2025",
        question_text:
          "A binary classification model was evaluated on a test set of six samples. The performance of the model is summarized in the following confusion matrix: Using this information, what is the value of the F1-score? [Confusion Matrix: Actual 1/Predicted 1=2, Actual 1/Predicted 0=2, Actual 0/Predicted 1=1, Actual 0/Predicted 0=1]",
        image_context:
          "Confusion Matrix table for F1-score calculation is required: TP=2, FN=2, FP=1, TN=1.",
        options: [
          { id: "A", text: "0.67", image: null },
          { id: "B", text: "0.60", image: null },
          { id: "C", text: "0.50", image: null },
          { id: "D", text: "0.72", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Week 4 Assignment",
    week: 4,
    questions: [
      {
        id: "4.1_2025",
        question_text:
          "A teacher wants to compare the number of students enrolled in different programming courses (Python, Java, C++, and SQL). Which chart is most appropriate for this?",
        image_context: null,
        options: [
          { id: "A", text: "Pie Chart", image: null },
          { id: "B", text: "Histogram", image: null },
          { id: "C", text: "Bar Chart", image: null },
          { id: "D", text: "Scatter Plot", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.2_2025",
        question_text:
          "A retail company wants to show the total sales for each quarter and how much each product category (Electronics, Clothing, Furniture) contributed to that total. Which chart is most appropriate?",
        image_context: null,
        options: [
          { id: "A", text: "Stacked Bar Chart", image: null },
          { id: "B", text: "Pie Chart", image: null },
          { id: "C", text: "Box Plot", image: null },
          { id: "D", text: "Line Chart", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.3_2025",
        question_text:
          "A box plot represents the distribution of marks obtained by students in a test. The key statistics shown are: Minimum=20, Q1=35, Median=50, Q3=65, Maximum=90. Based on this box plot, what is the Interquartile Range (IQR)?",
        image_context: null,
        options: [
          { id: "A", text: "15", image: null },
          { id: "B", text: "25", image: null },
          { id: "C", text: "30", image: null },
          { id: "D", text: "70", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.4_2025",
        question_text:
          "In an online programming course, three instructors' classes have the following median/IQR scores: A (Median=75, IQR=30), B (Median=72, IQR=10), C (Median=74, IQR=5). Which instructor is most likely teaching a group with diverse levels of understanding, and should therefore consider using differentiated instructional strategies?",
        image_context:
          "Table/list of Median and IQR for Instructors A, B, and C is required for context.",
        options: [
          {
            id: "A",
            text: "Instructor A, because a higher IQR reflects more varied student performance",
            image: null,
          },
          {
            id: "B",
            text: "Instructor B, because a narrow IQR means some students are disengaged",
            image: null,
          },
          {
            id: "C",
            text: "Instructor C, because the low IQR shows students are not being challenged enough",
            image: null,
          },
          {
            id: "D",
            text: "Instructor A, because the median is the highest and indicates poor performance",
            image: null,
          },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.5_2025",
        question_text:
          "You are given the following data set: data [2, 3, 4, 5, 6, 7, 8]. Using this data, draw or identify the correct box plot. The box plot must reflect the correct minimum, Q1, median, Q3, and maximum values. ",
        image_context:
          "Images of four box plots (A, B, C, D) are required. Correct plot should show Min=2, Q1=3, Median=5, Q3=7, Max=8.",
        options: [
          { id: "A", text: "Option A ", image: "Box Plot A" },
          { id: "B", text: "Option B ", image: "Box Plot B" },
          { id: "C", text: "Option C ", image: "Box Plot C" },
          { id: "D", text: "Option D ", image: "Box Plot D" },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.6_2025",
        question_text:
          "A line chart tracks weekly logins of four student cohorts (A-D). Cohort B starts strong but drops by 60% after week 3. If you must predict dropout likelihood and design targeted surveys before Week 5, which cohort should be treated as high-risk for disengagement, and what strategy should be applied?",
        image_context:
          "Description of Line Chart trends for Cohorts A, B, C, D is required.",
        options: [
          {
            id: "A",
            text: "Cohort A - Send reminder emails about final exam",
            image: null,
          },
          {
            id: "B",
            text: "Cohort B - Deploy a motivation-loss survey and offer re-engagement content",
            image: null,
          },
          {
            id: "C",
            text: "Cohort C - Offer advanced materials to match growing interest",
            image: null,
          },
          {
            id: "D",
            text: "Cohort D - No action needed since engagement is peaking frequently",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.7_2025",
        question_text:
          "A scientist is studying the relationship between hours of sleep and productivity score among employees. Which chart is best suited for observing patterns or correlations?",
        image_context: null,
        options: [
          { id: "A", text: "Bar Chart", image: null },
          { id: "B", text: "Scatter Plot", image: null },
          { id: "C", text: "Line Chart", image: null },
          { id: "D", text: "Histogram", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.8_2025",
        question_text:
          "You are provided with a Histogram of Transaction Amounts (Chart A: bins 0-500, 501-1000, 1001-1500, 1501-2000) and a Line Chart Showing Weekly Total Revenue (Chart B: Week 1-4). Assuming that the distribution of transaction values is consistent across all weeks and that each customer makes one purchase per week, estimate the approximate number of customers in Week 4 (Choose the closest option).",
        image_context:
          "Chart A (Histogram of Transaction Amounts) and Chart B (Weekly Total Revenue Line Chart) are required for calculation.",
        options: [
          { id: "A", text: "55", image: null },
          { id: "B", text: "60", image: null },
          { id: "C", text: "70", image: null },
          { id: "D", text: "75", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.9_2025",
        question_text:
          "A box plot shows the final project scores of students from three campuses: Campus A (low variance, Q2=82), Campus B (wider IQR, Q2=65), Campus C (outliers below 40, Q2=58). If the department wants to allocate limited mentoring resources to the group where support would maximize impact across a broad range of learners, which campus should be prioritized?",
        image_context:
          "Summary statistics for Campus A, B, and C scores are required for context.",
        options: [
          {
            id: "A",
            text: "Campus A, because its high median indicates success",
            image: null,
          },
          {
            id: "B",
            text: "Campus B, due to high variability around a passing median",
            image: null,
          },
          {
            id: "C",
            text: "Campus C, because of severe underperformance by outliers",
            image: null,
          },
          {
            id: "D",
            text: "Campus B and C should be equally prioritized as both have lower medians",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 5",
    week: 5,
    questions: [
      {
        id: "5.1_2025",
        question_text:
          "Which of the following is true about the Pearson correlation coefficient (r)?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "It can be used to establish a causal relationship between two variables.",
            image: null,
          },
          {
            id: "B",
            text: "It measures the strength and direction of a linear association between two numerical variables.",
            image: null,
          },
          {
            id: "C",
            text: "Its value ranges from 0 to 1, indicating only positive relationships.",
            image: null,
          },
          {
            id: "D",
            text: "It is primarily used for categorical data analysis.",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.2_2025",
        question_text:
          "For analyzing the linear relationship between two numerical variables and performing a preliminary diagnostic analysis of their association, which of the following visualizations would be most suitable?",
        image_context: null,
        options: [
          { id: "A", text: "Bar chart", image: null },
          { id: "B", text: "Histogram", image: null },
          { id: "C", text: "Scatter plot", image: null },
          { id: "D", text: "Pie chart", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.3_2025",
        question_text:
          "If a scatter plot shows data points clustered closely around a straight line that slopes downwards from left to right, the Pearson correlation coefficient (r) would most likely be:",
        image_context: null,
        options: [
          { id: "A", text: "Close to 0", image: null },
          { id: "B", text: "Close to +1", image: null },
          { id: "C", text: "Close to -1", image: null },
          { id: "D", text: "Undefined", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.4_2025",
        question_text:
          "Given a sequence of states ABABABAABBB, what is the transition probability from state B to state A, based on the example in the provided material?",
        image_context:
          "State sequence: ABABABAABBB is required for calculation.",
        options: [
          { id: "A", text: "5/3", image: null },
          { id: "B", text: "3/5", image: null },
          { id: "C", text: "3/6", image: null },
          { id: "D", text: "6/3", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.5_2025",
        question_text: "What is not an iSAT?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "An interactive visual representation to highlight transitions in data.",
            image: null,
          },
          {
            id: "B",
            text: "A learning environment for teaching engineering estimation problems.",
            image: null,
          },
          { id: "C", text: "An algorithm for process mining.", image: null },
          { id: "D", text: "A pattern mining tool.", image: null },
        ],
        correct_answers: ["B", "C", "D"],
        type: "Multi-Select MCQ",
      },
      {
        id: "5.6_2025",
        question_text:
          "What is the primary difference between Pearson's correlation and Spearman's rank correlation regarding the data they analyze?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Pearson analyzes linear relationships between raw data, Spearman analyzes monotonic relationships between ranks.",
            image: null,
          },
          {
            id: "B",
            text: "Pearson analyzes nominal data, Spearman analyzes interval data.",
            image: null,
          },
          {
            id: "C",
            text: "Pearson is for large datasets, Spearman is for small datasets.",
            image: null,
          },
          {
            id: "D",
            text: "Pearson can handle outliers, Spearman is sensitive to outliers.",
            image: null,
          },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.7_2025",
        question_text:
          "The interaction of a learner with a tutoring system is as follows: read, video, quiz, read, read, quiz, video, video, quiz, video, read, read, quiz, read, video, video, read, quiz. Choose the correct match between Column A and Column B for the behaviours and their state transition values. ",
        image_context:
          "State transition plot (Re, Vid, Qui nodes) and the list of interaction sequences is required for calculation.",
        options: [
          {
            id: "A",
            text: "1-iv (Read->Read: 0.40, Read->Quiz: 0.60), 2-i (Read->Quiz: 0.33, Quiz->Read: 0.60), 3-iii (Video->Quiz: 0.43, Quiz->Video: 0.4), and 4-ii (Quiz->Read: 0.43, Quiz->Video: 0.43)",
            image: null,
          },
          {
            id: "B",
            text: "1-ii (Read->Read: 0.43, Read->Quiz: 0.43), 2-iii (Read->Quiz: 0.43, Quiz->Read: 0.4), 3-i (Video->Quiz: 0.33, Quiz->Video: 0.60), and 4-iv (Quiz->Read: 0.40, Quiz->Video: 0.60)",
            image: null,
          },
          {
            id: "C",
            text: "1-iii (Read->Read: 0.43, Read->Quiz: 0.4), 2-ii (Read->Quiz: 0.43, Quiz->Read: 0.43), 3-i (Video->Quiz: 0.33, Quiz->Video: 0.60), and 4-iv (Quiz->Read: 0.40, Quiz->Video: 0.60)",
            image: null,
          },
          {
            id: "D",
            text: "1-iii (Read->Read: 0.43, Read->Quiz: 0.4), 2-ii (Read->Quiz: 0.43, Quiz->Read: 0.43), 3-iv (Video->Quiz: 0.40, Quiz->Video: 0.60), and 4-i (Quiz->Read: 0.33, Quiz->Video: 0.60)",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.8_2025",
        question_text:
          "A researcher finds a strong positive correlation between 'time spent studying' and 'exam scores'. Which of the following is a valid conclusion?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "More study time causes higher exam scores.",
            image: null,
          },
          {
            id: "B",
            text: "There is a tendency for higher study time to be associated with higher exam scores.",
            image: null,
          },
          {
            id: "C",
            text: "Students who study less will always fail.",
            image: null,
          },
          {
            id: "D",
            text: "The relationship is definitely non-linear.",
            image: null,
          },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 6",
    week: 6,
    questions: [
      {
        id: "6.1_2025",
        question_text:
          "Which type of data is primarily analyzed by Sequential Pattern Mining (SPM)?",
        image_context: null,
        options: [
          { id: "A", text: "Cross-sectional data", image: null },
          { id: "B", text: "Time series data", image: null },
          { id: "C", text: "Categorical data", image: null },
          { id: "D", text: "Numerical data", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.2_2025",
        question_text:
          "In Process Mining, what are the two key metrics used to develop an abstract process model?",
        image_context: null,
        options: [
          { id: "A", text: "Frequency and Duration", image: null },
          { id: "B", text: "Precision and Recall", image: null },
          { id: "C", text: "Support and Confidence", image: null },
          { id: "D", text: "Significance and Correlation", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.3_2025",
        question_text:
          "What is the primary purpose of Differential Sequence Mining (DSM)?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "To find the most frequent patterns in a single group.",
            image: null,
          },
          {
            id: "B",
            text: "To predict future student performance.",
            image: null,
          },
          {
            id: "C",
            text: "To differentiate interaction behavior between two distinct groups.",
            image: null,
          },
          { id: "D", text: "To visualize complex process flows.", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.4_2025",
        question_text:
          "In Fuzzy Miner, what happens to less significant nodes that have low correlation with other nodes?",
        image_context: null,
        options: [
          { id: "A", text: "They are preserved.", image: null },
          { id: "B", text: "They are aggregated into clusters.", image: null },
          { id: "C", text: "They are dropped.", image: null },
          { id: "D", text: "Their significance is increased.", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.5_2025",
        question_text:
          "What is meant by instance support in the context of Sequential Pattern Mining?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "It indicates the number of students having a particular pattern.",
            image: null,
          },
          {
            id: "B",
            text: "It indicates the number of students not having a particular pattern.",
            image: null,
          },
          {
            id: "C",
            text: "It indicates the total number of patterns observed for a particular student.",
            image: null,
          },
          {
            id: "D",
            text: "It indicates the frequency of occurrence of a pattern for each student.",
            image: null,
          },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.6_2025",
        question_text:
          "Consider the following student action sequences: Student 1: Video, Forum, Video, Quiz, Read, Read, Quiz, Forum, Read, Video. Student 2: Forum, Video, Read, Quiz, Read, Forum, Read, Video. Student 3: Video, Quiz, Read, Forum, Quiz, Read, Video, Video, Read, Quiz. What is the s-support for the pattern V→Q→R?",
        image_context:
          "Three student action sequences are required for calculation.",
        options: [
          { id: "A", text: "0", image: null },
          { id: "B", text: "1", image: null },
          { id: "C", text: "2", image: null },
          { id: "D", text: "3", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.7_2025",
        question_text:
          'Consider two groups, Group X and Group Y. For the pattern "Quiz -> Forum," Group X has an i-freq of 15 and Group Y has an i-freq of 3. For the pattern "Read -> Quiz," Group X has an i-freq of 5 and Group Y has an i-freq of 12. Which pattern is more dominant in Group Y?',
        image_context:
          "Table of i-freq data for two patterns across Group X and Group Y is required for context.",
        options: [
          { id: "A", text: "Read -> Quiz", image: null },
          { id: "B", text: "Quiz -> Forum", image: null },
          { id: "C", text: "Both are equally dominant.", image: null },
          { id: "D", text: "Neither pattern is dominant.", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.8_2025",
        question_text:
          "Consider the following values for a pattern: I-freq mean = 4, I-freq Std = 6, S-support = 0.5 and N = 12. How many students have performed that action?",
        image_context: null,
        options: [
          { id: "A", text: "6", image: null },
          { id: "B", text: "7", image: null },
          { id: "C", text: "9", image: null },
          { id: "D", text: "3", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 7",
    week: 7,
    questions: [
      {
        id: "7.1_2025",
        question_text:
          "In the given Dendrogram, how many clusters will be obtained if we choose the line across 0.6 to obtain the clusters? ",
        image_context:
          "Dendrogram image with a horizontal line at 0.6 on the y-axis is required.",
        options: [
          { id: "A", text: "2", image: null },
          { id: "B", text: "3", image: null },
          { id: "C", text: "4", image: null },
          { id: "D", text: "6", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.2_2025",
        question_text:
          "Choose the hierarchical clustering method(s) from the options given below.",
        image_context: null,
        options: [
          { id: "A", text: "Agglomerative nesting", image: null },
          { id: "B", text: "Divisive analysis", image: null },
          { id: "C", text: "Both A and B", image: null },
          { id: "D", text: "None of the above", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.3_2025",
        question_text: "What is/are true about the AGNES method of clustering?",
        image_context: null,
        options: [
          { id: "A", text: "Top-Down approach", image: null },
          {
            id: "B",
            text: "Each data point is considered as an individual cluster at the beginning of the first iteration.",
            image: null,
          },
          {
            id: "C",
            text: "All the data points are considered as a single cluster at the beginning of the first iteration.",
            image: null,
          },
          { id: "D", text: "Bottom-up approach.", image: null },
        ],
        correct_answers: ["B", "D"],
        type: "Multi-Select MCQ",
      },
      {
        id: "7.4_2025",
        question_text:
          "In K-Means clustering, how are the initial centroids typically assigned?",
        image_context: null,
        options: [
          { id: "A", text: "Randomly.", image: null },
          {
            id: "B",
            text: "Based on the mean of the entire dataset.",
            image: null,
          },
          {
            id: "C",
            text: "By selecting the data points with the highest variance.",
            image: null,
          },
          { id: "D", text: "Through a predefined grid.", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.5_2025",
        question_text:
          "Given the following data points: (1, 2), (2, 1), (4, 5), (7, 8), and (8, 9), if the initial cluster centers are (1, 2) and (7, 8), which of the following are the correct cluster assignments after the first iteration? (Euclidean distance is implicit)",
        image_context:
          "List of 5 data points and 2 initial cluster centers for K-Means problem is required for context.",
        options: [
          {
            id: "A",
            text: "Cluster 1: (1, 2), (2, 1); Cluster 2: (4, 5), (7, 8), (8, 9);",
            image: null,
          },
          {
            id: "B",
            text: "Cluster 1: (1, 2), (2, 1), (7, 8); Cluster 2: (4, 5), (8, 9);",
            image: null,
          },
          {
            id: "C",
            text: "Cluster 1: (2, 3), (6, 5); Cluster 2: (3, 3), (8, 8), (9, 10)",
            image: null,
          },
          {
            id: "D",
            text: "Cluster 1: (1, 2), (2, 1), (4, 5); Cluster 2: (7, 8), (8, 9);",
            image: null,
          },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.6_2025",
        question_text:
          "You have 6 data points in a 2-dimensional space: (0, 1), (1, 0), (3, 4), (4, 3), (7, 8), and (8, 7). You are using K-means clustering with K=3. The initial cluster centers are: (0, 1), (3, 4), and (8, 7). After the first iteration, what is the total within-cluster sum of squares (WCSS)?",
        image_context:
          "List of 6 data points and 3 initial cluster centers for WCSS calculation is required for context.",
        options: [
          { id: "A", text: "7.5", image: null },
          { id: "B", text: "6.5", image: null },
          { id: "C", text: "9.0", image: null },
          { id: "D", text: "6", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.7_2025",
        question_text:
          "A learning analytics system uses K-Means to cluster students based on their quiz scores and video watch times from MOOC course. If a student consistently reads all the content and accesses all the video lectures, into which type of cluster are they most likely to fall?",
        image_context: null,
        options: [
          { id: "A", text: "Dropout learner", image: null },
          { id: "B", text: "Ideal learner", image: null },
          { id: "C", text: "Social learner", image: null },
          { id: "D", text: "None of the above", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.8_2025",
        question_text:
          "You are given five data points: (0, 0), (1, 0), (3, 2), (4, 3), and (8, 7). After performing agglomerative hierarchical clustering using average linkage, the first two points to be merged are (0,0) and (1, 0). What is the new cluster center?",
        image_context:
          "List of 5 data points for Agglomerative Clustering is required for context.",
        options: [
          { id: "A", text: "(0.5, 0)", image: null },
          { id: "B", text: "(1, 0.5)", image: null },
          { id: "C", text: "(0, 1)", image: null },
          { id: "D", text: "(1.5, 1)", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 8",
    week: 8,
    questions: [
      {
        id: "8.1_2025",
        question_text: "Which of the following is used for prediction?",
        image_context: null,
        options: [
          { id: "A", text: "K-means clustering", image: null },
          { id: "B", text: "Sequence pattern mining", image: null },
          { id: "C", text: "Multivariate regression", image: null },
          { id: "D", text: "Spearman's correlation", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.2_2025",
        question_text:
          "Regression is generally used for: (Select all that apply)",
        image_context: null,
        options: [
          {
            id: "A",
            text: "To predict the performance of the learners.",
            image: null,
          },
          {
            id: "B",
            text: "To evaluate the strength of the predictor model developed.",
            image: null,
          },
          {
            id: "C",
            text: "To investigate the relationship between dependent and independent variables.",
            image: null,
          },
          {
            id: "D",
            text: "To exclusively perform cause and effect analysis.",
            image: null,
          },
        ],
        correct_answers: ["A", "B", "C"],
        type: "Multi-Select MCQ",
      },
      {
        id: "8.3_2025",
        question_text: "Which tools are commonly used in predictive analytics?",
        image_context: null,
        options: [
          {
            id: "A",
            text: "Descriptive statistics and visualization",
            image: null,
          },
          { id: "B", text: "Machine Learning and Data Mining", image: null },
          { id: "C", text: "Process mining and cluster analysis", image: null },
          { id: "D", text: "Qualitative analysis and interviews", image: null },
        ],
        correct_answers: ["B"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.4_2025",
        question_text:
          "If enough data is not available from a learner, what approach is suggested?",
        image_context: null,
        options: [
          { id: "A", text: "Discard the analysis.", image: null },
          { id: "B", text: "Use only theoretical models.", image: null },
          { id: "C", text: "Reduce the scope of prediction.", image: null },
          {
            id: "D",
            text: "Consider historical data from similar learners",
            image: null,
          },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.5_2025",
        question_text:
          "The following table shows the Gate score and GPA of students. By using the linear regression model, the best-fit line is obtained as Y=1.63+0.02x. Then find the value of the Y-intercept:",
        image_context:
          "Table showing Gate Score and GPA for 10 students is provided for context.",
        options: [
          { id: "A", text: "0", image: null },
          { id: "B", text: "1.65", image: null },
          { id: "C", text: "0.02", image: null },
          { id: "D", text: "1.63", image: null },
        ],
        correct_answers: ["D"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.6_2025",
        question_text:
          "What will be the sign of the correlation coefficient (Gate Score and GPA) based on the table in Question 5? [Using model Y=1.63+0.02x]",
        image_context:
          "Linear regression model Y=1.63+0.02x is provided for context.",
        options: [
          { id: "A", text: "Positive", image: null },
          { id: "B", text: "Negative", image: null },
          { id: "C", text: "Cannot be determined.", image: null },
          { id: "D", text: "Zero", image: null },
        ],
        correct_answers: ["A"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.7_2025",
        question_text:
          "Find the GPA obtained by a student having a Gate score of 80 (as per the model Y=1.63+0.02x from Question 5).",
        image_context:
          "Linear regression model Y=1.63+0.02x is provided for calculation.",
        options: [
          { id: "a", text: "3.4", image: null },
          { id: "b", text: "3.41", image: null },
          { id: "c", text: "3.23", image: null },
          { id: "d", text: "3.63", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.8_2025",
        question_text:
          "A teacher wants to predict if a student will pass or fail a course based on their current engagement. Which type of regression is most appropriate?",
        image_context: null,
        options: [
          { id: "A", text: "Simple Linear Regression", image: null },
          { id: "B", text: "Multiple Linear Regression", image: null },
          { id: "C", text: "Logistic Regression", image: null },
          { id: "D", text: "Polynomial Regression", image: null },
        ],
        correct_answers: ["C"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 9",
    week: 9,
    questions: [
      {
        id: "9.1_2025",
        question_text:
          "According to the sources, what type of classifier is the Naive Bayes algorithm?",
        image_context: null,
        options: [
          { id: "a", text: "Deterministic", image: null },
          { id: "b", text: "Probabilistic", image: null },
          { id: "c", text: "Non-parametric", image: null },
          { id: "d", text: "Instance-based", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.2_2025",
        question_text:
          "What is the key 'naive' assumption made by the Naive Bayes classifier?",
        image_context: null,
        options: [
          { id: "a", text: "Features are correlated", image: null },
          { id: "b", text: "Features are independent", image: null },
          { id: "c", text: "Data follows a normal distribution", image: null },
          { id: "d", text: "Classes are linearly separable", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.3_2025",
        question_text:
          "A student takes an exam in two subjects. Given that he has passed one of the subjects, what is the probability that he has passed both subjects?",
        image_context: null,
        options: [
          { id: "a", text: "0.75", image: null },
          { id: "b", text: "0.50", image: null },
          { id: "c", text: "0.25", image: null },
          { id: "d", text: "0.33", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.4_2025",
        question_text:
          "In the Naive Bayes classifier, how is the probability of multiple independent features (A1...An) occurring given a class (Ci) typically calculated?",
        image_context: null,
        options: [
          { id: "a", text: "Sum of P(Ai | Ci)", image: null },
          { id: "b", text: "Average of P(Ai | Ci)", image: null },
          { id: "c", text: "Product of P(Ai | Ci)", image: null },
          { id: "d", text: "Difference of P(Ai | Ci)", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.5_2025",
        question_text:
          "An ensemble classifier method using many Decision Trees instead of just one is called?",
        image_context: null,
        options: [
          { id: "a", text: "Boosting", image: null },
          { id: "b", text: "Bagging", image: null },
          { id: "c", text: "Random Forest", image: null },
          { id: "d", text: "Support Vector Machine", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.6_2025",
        question_text:
          "You are given the following dataset of students. The goal is to predict whether a student will Pass or Fail. Based on the dataset, which feature should the decision tree algorithm (e.g., ID3) use at the root node to make the split? [Table of S1-S4 with Attendance, Assignment, Quiz Score, Result]",
        image_context:
          "Table of student features and results for decision tree split calculation is required.",
        options: [
          { id: "a", text: "Assignment", image: null },
          { id: "b", text: "Quiz Score", image: null },
          { id: "c", text: "Attendance", image: null },
          { id: "d", text: "Result", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.7_2025",
        question_text:
          "In the context of Decision Trees, what does Entropy measure in the data?",
        image_context: null,
        options: [
          { id: "a", text: "Certainty", image: null },
          { id: "b", text: "Complexity", image: null },
          { id: "c", text: "Feature Importance", image: null },
          { id: "d", text: "Uncertainty", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.8_2025",
        question_text:
          "For a binary classification problem, when is Entropy at its maximum value?",
        image_context: null,
        options: [
          { id: "a", text: "When one class probability is 0", image: null },
          { id: "b", text: "When one class probability is 1", image: null },
          {
            id: "c",
            text: "When both class probabilities are equal (0.5)",
            image: null,
          },
          {
            id: "d",
            text: "When probabilities are close to 0 or 1",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.9_2025",
        question_text:
          "How is Information Gain used in building a Decision Tree?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To measure the complexity of the tree",
            image: null,
          },
          {
            id: "b",
            text: "To determine when to stop building the tree",
            image: null,
          },
          {
            id: "c",
            text: "To select the feature that provides the highest gain",
            image: null,
          },
          {
            id: "d",
            text: "To calculate the final prediction probability",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.10_2025",
        question_text:
          "Which of the following is mentioned as a major drawback of Decision Tree learning that can be addressed by pruning?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Inability to handle categorical variables",
            image: null,
          },
          {
            id: "b",
            text: "Requires extensive data normalization",
            image: null,
          },
          { id: "c", text: "Over-fitting", image: null },
          { id: "d", text: "Slow training time", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 10",
    week: 10,
    questions: [
      {
        id: "10.1_2025",
        question_text:
          "Which of the following strategies reflect effective learning behaviors as suggested in the video when encountering a new topic like Natural Language Processing (NLP)? (Select all that apply)",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Activating prior knowledge by reflecting on what you already know about NLP",
            image: null,
          },
          {
            id: "b",
            text: "Writing down your thoughts before continuing the video",
            image: null,
          },
          {
            id: "c",
            text: "Skipping the reflection activity to save time",
            image: null,
          },
          {
            id: "d",
            text: "Making connections between NLP applications and real-world tools like Siri or Alexa",
            image: null,
          },
          {
            id: "e",
            text: "Watching the video passively without interacting with the content",
            image: null,
          },
        ],
        correct_answers: ["a", "b", "d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "10.2_2025",
        question_text:
          "The instructor mentions multiple NLP applications such as summarization, translation, and Q&A generation. Based on this, how might NLP support personalized learning in a diverse classroom? (Select all that apply)",
        image_context: null,
        options: [
          {
            id: "a",
            text: "By clustering students into ability groups",
            image: null,
          },
          {
            id: "b",
            text: "By tailoring content summaries based on individual reading levels",
            image: null,
          },
          {
            id: "c",
            text: "By translating assessments into local languages for multilingual learners",
            image: null,
          },
          {
            id: "d",
            text: "By automatically evaluating students' emotions from essays",
            image: null,
          },
        ],
        correct_answers: ["b", "c"],
        type: "Multi-Select MCQ",
      },
      {
        id: "10.3_2025",
        question_text:
          "Given the examples of content analytics and NLP applications mentioned, which of the following best represents a limitation of applying NLP in educational data mining?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "NLP works poorly with speech-to-text technology",
            image: null,
          },
          {
            id: "b",
            text: "NLP can struggle with understanding context in short forum posts",
            image: null,
          },
          {
            id: "c",
            text: "NLP is only applicable to video content, not text",
            image: null,
          },
          {
            id: "d",
            text: "NLP eliminates the need for human instructors",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.4_2025",
        question_text:
          'In the following sentence "Shyaam went to the football field today, while his younger brother went to play badminton. Both went and came back". What is the probability of P(to/went)?',
        image_context:
          "Sentence for transition probability calculation is required for context.",
        options: [
          { id: "a", text: "3/2", image: null },
          { id: "b", text: "2/3", image: null },
          { id: "c", text: "1", image: null },
          { id: "d", text: "3/4", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.5_2025",
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
        id: "10.6_2025",
        question_text:
          "According to the sources, what is text analytics in the context of learning analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is a type of predictive analytics.",
            image: null,
          },
          {
            id: "b",
            text: "It is an application of natural language processing on educational data.",
            image: null,
          },
          {
            id: "c",
            text: "It focuses solely on analyzing numerical data from student interactions.",
            image: null,
          },
          {
            id: "d",
            text: "It replaces descriptive, diagnostics, and predictive analytics.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.7_2025",
        question_text:
          "Why is Natural Language Processing (NLP) considered important for learning analytics, according to the sources?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Because educational content is primarily delivered through video format.",
            image: null,
          },
          {
            id: "b",
            text: "Because it helps analyze log data like clicks and traces.",
            image: null,
          },
          {
            id: "c",
            text: "Because the content given to students is often in text or video format, allowing for content analysis.",
            image: null,
          },
          {
            id: "d",
            text: "Because it is a newly developed technique specifically for education.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.8_2025",
        question_text:
          "What is the basic concept of the Bag of Words approach as described in the sources?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It measures the sentiment (positive or negative) of text.",
            image: null,
          },
          {
            id: "b",
            text: "It represents text by counting the frequency of words, ignoring the order of words.",
            image: null,
          },
          {
            id: "c",
            text: "It represents words as numerical vectors that capture semantic relationships.",
            image: null,
          },
          {
            id: "d",
            text: "It involves correcting spelling mistakes and identifying similar words before analysis.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.9_2025",
        question_text:
          "According to the lecture video, what educational application was discussed as using the Bag of Words approach for automated systems?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Generating natural language reports for students.",
            image: null,
          },
          {
            id: "b",
            text: "Detecting plagiarism in student submissions.",
            image: null,
          },
          {
            id: "c",
            text: "Automatically grading essays or student assignments.",
            image: null,
          },
          {
            id: "d",
            text: "Providing real-time translation of educational materials.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.10_2025",
        question_text:
          "Which approach, described as representing words as numerical vectors and capturing relationships or similarities between words, would be most suitable for identifying these semantically similar discussions?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Using a Bag of Words approach to count keyword frequencies in each post and finding posts with similar word counts.",
            image: null,
          },
          {
            id: "b",
            text: "Applying Sentiment Analysis to determine the emotional tone of the posts and grouping posts with similar sentiment.",
            image: null,
          },
          {
            id: "c",
            text: "Using Information Extraction to pull out specific facts or entities mentioned in the posts, and grouping posts that share entities.",
            image: null,
          },
          {
            id: "d",
            text: "Employing Word Embedding to represent the words (or combination of words) in each post as vectors and finding posts with vectors that are close to each other in the vector space.",
            image: null,
          },
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
        id: "11.1_2025",
        question_text:
          "What is the main motivation for moving towards Multimodal Learning Analytics beyond collecting traditional log data from learning environments?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Log data is too difficult to collect from most learning platforms.",
            image: null,
          },
          {
            id: "b",
            text: "Traditional log data is not sufficient to provide a holistic approach to understanding learner's behavior.",
            image: null,
          },
          {
            id: "c",
            text: "Multimodal data is always easier and cheaper to acquire than log data.",
            image: null,
          },
          {
            id: "d",
            text: "Log data can only be used for predictive analytics, not descriptive or diagnostic.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.2_2025",
        question_text:
          "Which of the following is listed as a physiological sensor that can be used to collect data on a learner's attention or cognition by measuring skin conductance?",
        image_context: null,
        options: [
          { id: "a", text: "EEG signal analysis", image: null },
          { id: "b", text: "Eye-Gaze data", image: null },
          { id: "c", text: "GSR", image: null },
          { id: "d", text: "Kinect devices", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.3_2025",
        question_text:
          "What is the primary goal or focus of Affective Computing?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To develop Al agents that can simulate human emotions.",
            image: null,
          },
          {
            id: "b",
            text: "To improve the IQ of artificial intelligence systems.",
            image: null,
          },
          {
            id: "c",
            text: "To recognize, interpret, analyze, and potentially simulate emotions of human participants.",
            image: null,
          },
          {
            id: "d",
            text: "To replace human teachers with emotional robots.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.4_2025",
        question_text:
          "Paul Ekman's research identified six basic emotions recognizable from facial expressions. Which of the following is NOT one of the six basic emotions explicitly listed in the sources as identified by Ekman?",
        image_context: null,
        options: [
          { id: "a", text: "Fear", image: null },
          { id: "b", text: "Happiness", image: null },
          { id: "c", text: "Confusion", image: null },
          { id: "d", text: "Disgust", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.5_2025",
        question_text:
          "What system, developed by Paul Ekman, provides a method for categorizing human facial movements into discrete units to analyze emotions?",
        image_context: null,
        options: [
          { id: "a", text: "The BROMP protocol", image: null },
          {
            id: "b",
            text: "The Facial Action Coding System (FACS)",
            image: null,
          },
          { id: "c", text: "The Multimodal Data Synchronizer", image: null },
          { id: "d", text: "The Affectiva Emotion Classifier", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.6_2025",
        question_text:
          "When discussing automated facial emotion detection systems like those using action units, what is highlighted as a significant limitation when applying them in complex learning environments compared to controlled lab settings?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "They are generally too expensive for educational use.",
            image: null,
          },
          {
            id: "b",
            text: "They are often based on detecting basic emotions (like anger, fear), while learning environments require detection of learner-centric emotions (like boredom, confusion, frustration, engagement).",
            image: null,
          },
          {
            id: "c",
            text: "They cannot process video data in real-time.",
            image: null,
          },
          {
            id: "d",
            text: "They are only accurate for specific age groups of learners.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.7_2025",
        question_text:
          "What is the main drawback or challenge associated with using human observation or self-reporting as methods to obtain labels for training automatic emotion detectors in learning analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The data collected is often irrelevant to learning.",
            image: null,
          },
          {
            id: "b",
            text: "They rely on expensive physiological sensors which are hard to access.",
            image: null,
          },
          {
            id: "c",
            text: "They are time-consuming and may have issues with accuracy (e.g., self-reporting may not be true, and human observer training for high inter-rater reliability and fine-grained emotions is difficult).",
            image: null,
          },
          {
            id: "d",
            text: "The data is only useful for descriptive analysis, not prediction.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.8_2025",
        question_text:
          "What is the average fixation duration (in milliseconds) based on the data on ROA1? [Table of Fixation/Saccade Start/End Times and AOI]",
        image_context:
          "Table of eye-tracking fixation/saccade data (timestamps and AOI) is required for calculation.",
        options: [
          { id: "a", text: "200.00", image: null },
          { id: "b", text: "166.67", image: null },
          { id: "c", text: "175.00", image: null },
          { id: "d", text: "150.00", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.9_2025",
        question_text:
          "In the context of analyzing eye gaze data from reading behavior, what term is used to describe the rapid eye movement that occurs as the eye moves from one fixation point to the next?",
        image_context: null,
        options: [
          { id: "a", text: "Fixation", image: null },
          { id: "b", text: "Heatmap", image: null },
          { id: "c", text: "AOI (Area Of Interest)", image: null },
          { id: "d", text: "Saccade", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.10_2025",
        question_text:
          "What are some key challenges mentioned when using webcam-based eye trackers compared to more sophisticated external eye tracking devices like those from Tobii for research? (Select all that apply)",
        image_context: null,
        options: [
          {
            id: "a",
            text: "They require specific, proper lighting conditions.",
            image: null,
          },
          {
            id: "b",
            text: "Their accuracy is lower, especially when looking at the edges or corners of the screen.",
            image: null,
          },
          {
            id: "c",
            text: "Their sample rate (Hertz) is typically lower.",
            image: null,
          },
          {
            id: "d",
            text: "They are generally much more expensive than dedicated external eye trackers.",
            image: null,
          },
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
        id: "12.1_2025",
        question_text:
          "What is the primary purpose of collecting contextual data in Learning Analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To record every student activity regardless of its relevance",
            image: null,
          },
          {
            id: "b",
            text: "To limit data collection to quizzes and test scores only",
            image: null,
          },
          {
            id: "c",
            text: "To add depth and meaning to students' major actions by analyzing the surrounding context",
            image: null,
          },
          {
            id: "d",
            text: "To reduce the storage requirements for learning data",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.2_2025",
        question_text:
          "Which of the following is considered a dynamic feature in Learning Analytics?",
        image_context: null,
        options: [
          { id: "a", text: "Student's name and age", image: null },
          { id: "b", text: "Time spent reading before a quiz", image: null },
          { id: "c", text: "Initial login ID", image: null },
          { id: "d", text: "Assigned student number", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.3_2025",
        question_text:
          "Which tool is specifically highlighted for model interpretation in industry applications?",
        image_context: null,
        options: [
          { id: "a", text: "Orange", image: null },
          { id: "b", text: "Tableau", image: null },
          { id: "c", text: "InterpretML", image: null },
          { id: "d", text: "WEKA", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.4_2025",
        question_text:
          "Why is domain knowledge important in feature extraction for Learning Analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It allows automatic extraction of features from any dataset",
            image: null,
          },
          {
            id: "b",
            text: "It helps identify meaningful features based on context and educational expertise",
            image: null,
          },
          {
            id: "c",
            text: "It eliminates the need for data pre-processing",
            image: null,
          },
          {
            id: "d",
            text: "It allows bypassing the need for raw data collection",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.5_2025",
        question_text:
          "What is the suggested minimum Cohen's Kappa score to ensure inter-rater reliability during human observation?",
        image_context: null,
        options: [
          { id: "a", text: "0.5", image: null },
          { id: "b", text: "0.6", image: null },
          { id: "c", text: "0.8", image: null },
          { id: "d", text: "1.0", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.6_2025",
        question_text:
          'Which of the following actions is not typically considered a "major action" in a learning environment?',
        image_context: null,
        options: [
          { id: "a", text: "Watching a video", image: null },
          { id: "b", text: "Drag and drop interactions", image: null },
          { id: "c", text: "Scrolling through a page", image: null },
          { id: "d", text: "Taking a quiz", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.7_2025",
        question_text:
          "What is a recommended starting point for students to gain practical experience in Learning Analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Read all journal articles before starting any hands-on work",
            image: null,
          },
          {
            id: "b",
            text: "Memorize machine learning algorithms",
            image: null,
          },
          {
            id: "c",
            text: "Create a system to collect data and answer their own research questions",
            image: null,
          },
          {
            id: "d",
            text: "Use only pre-existing datasets from Kaggle or DataShop",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.8_2025",
        question_text:
          "Which of the following tools is not a part of industry-relevant ML infrastructure?",
        image_context: null,
        options: [
          { id: "a", text: "Power BI", image: null },
          { id: "b", text: "Dash", image: null },
          { id: "c", text: "TensorFlow", image: null },
          { id: "d", text: "Scikit-learn", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.9_2025",
        question_text:
          "Which conferences are recommended for understanding the current trends in Learning Analytics research?",
        image_context: null,
        options: [
          { id: "a", text: "NeurIPS and CVPR", image: null },
          { id: "b", text: "EDM and LAK", image: null },
          { id: "c", text: "CHI and ICML", image: null },
          { id: "d", text: "ACL and IJCAI", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.10_2025",
        question_text: "What is the main goal of Learning Analytics?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To create the most complex predictive models",
            image: null,
          },
          {
            id: "b",
            text: "To generate revenue through educational technology",
            image: null,
          },
          {
            id: "c",
            text: "To improve student learning by analyzing and acting upon data",
            image: null,
          },
          { id: "d", text: "To replace teachers with Al systems", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
    ],
  },
];
