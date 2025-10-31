window.quizData = [
  {
    assignment: "Assignment 1",
    week: 1,
    questions: [
      {
        id: "1.1_2025_IIOT",
        question_text:
          "Fill in the blank space designated by the question mark. \nInput Signal -> Sensor -> (?) -> Actuator -> Output Signal\n(The boxes for Sensor, ?, and Actuator are enclosed in a dashed box labeled Transducer. The box for Sensor is enclosed in a dashed box labeled Transducer's input. The boxes for Actuator and ? are enclosed in a dashed box labeled Transducer's output.)",
        image_context: "",
        options: [
          { id: "a", text: "Snubber", image: null },
          { id: "b", text: "Repeater", image: null },
          { id: "c", text: "Processor", image: null },
          { id: "d", text: "Amplifier", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.2_2025_IIOT",
        question_text:
          "What is the maximum data rate of Z-Wave communication technology?",
        image_context: null,
        options: [
          { id: "a", text: "100 kbps", image: null },
          { id: "b", text: "250 kbps", image: null },
          { id: "c", text: "500 kbps", image: null },
          { id: "d", text: "1 Mbps", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.3_2025_IIOT",
        question_text:
          "Which device converts electromagnetic energy into electricity and vice versa?",
        image_context: null,
        options: [
          { id: "a", text: "Speaker", image: null },
          { id: "b", text: "Antenna", image: null },
          { id: "c", text: "Microphone", image: null },
          { id: "d", text: "Strain gauge", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.4_2025_IIOT",
        question_text: "What does 'Range' indicate in a sensor?",
        image_context: null,
        options: [
          { id: "a", text: "The correctness of the output", image: null },
          {
            id: "b",
            text: "The smallest change in input that can be detected",
            image: null,
          },
          {
            id: "c",
            text: "The difference between the standard value and the value produced by the sensor",
            image: null,
          },
          {
            id: "d",
            text: "The highest and the lowest value of the physical quantity within which the sensor can actually sense",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.5_2025_IIOT",
        question_text:
          "Which coding scheme is used by the IEEE 802.15.4 standard for transmitting information?",
        image_context: null,
        options: [
          { id: "a", text: "CSS", image: null },
          { id: "b", text: "THSS", image: null },
          { id: "c", text: "OFDM", image: null },
          { id: "d", text: "DSSS", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.6_2025_IIOT",
        question_text:
          "What is the standard transmission range of IEEE 802.15.4?",
        image_context: null,
        options: [
          { id: "a", text: "10 m to 75 m", image: null },
          { id: "b", text: "1 m to 9m", image: null },
          { id: "c", text: "15 cm to 60 cm", image: null },
          { id: "d", text: "1 cm to 10 km", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.7_2025_IIOT",
        question_text:
          "Which low power radio communication technology was designed as a simpler and cheaper alternative to Zigbee for small to medium range connectivity?",
        image_context: null,
        options: [
          { id: "a", text: "Bluetooth", image: null },
          { id: "b", text: "Z-Wave", image: null },
          { id: "c", text: "RFID", image: null },
          { id: "d", text: "NFC", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.8_2025_IIOT",
        question_text:
          "Which organization has developed the ISA 100.11a standard?",
        image_context: null,
        options: [
          { id: "a", text: "Instrument Society of America", image: null },
          { id: "b", text: "International Society of Automation", image: null },
          { id: "c", text: "International Studies Association", image: null },
          { id: "d", text: "International Solar Alliance", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.9_2025_IIOT",
        question_text:
          "What communication modes are supported between two NFC devices?",
        image_context: null,
        options: [
          { id: "a", text: "Broadcast-Multicast", image: null },
          { id: "b", text: "Master-Slave", image: null },
          { id: "c", text: "Active-Active or Active-Passive", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.10_2025_IIOT",
        question_text:
          "Which of the following is/are the drawbacks of proprietary non-IP-based solutions?",
        image_context: null,
        options: [
          { id: "a", text: "Limited flexibility to end users", image: null },
          { id: "b", text: "Interoperability", image: null },
          { id: "c", text: "Limited last-mile connectivity", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "1.11_2025_IIOT",
        question_text:
          'Which MQTT QoS Level is also known as "at most once" delivery?',
        image_context: null,
        options: [
          { id: "a", text: "QoS 0", image: null },
          { id: "b", text: "QoS 1", image: null },
          { id: "c", text: "QoS 2", image: null },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.12_2025_IIOT",
        question_text:
          "Fill in the blank. In CoRE the IoT client uses ______ for the discovery of IoT devices.",
        image_context: null,
        options: [
          { id: "a", text: "Lookup interface", image: null },
          { id: "b", text: "Resource Directory", image: null },
          { id: "c", text: "Registration Interface", image: null },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.13_2025_IIOT",
        question_text:
          "Apart from MQTT, which IoT networking protocol supports the publish/subscribe framework?",
        image_context: null,
        options: [
          { id: "a", text: "XMPP", image: null },
          { id: "b", text: "AMQP", image: null },
          { id: "c", text: "DDS RTPS", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "1.14_2025_IIOT",
        question_text:
          "Which of the following IoT protocols is based on the session layer of the OSI model?",
        image_context: null,
        options: [
          { id: "a", text: "MQTT", image: null },
          { id: "b", text: "CoAP", image: null },
          { id: "c", text: "AMQP", image: null },
          { id: "d", text: "DTLS", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.15_2025_IIOT",
        question_text: "Which of the following is not a component of RFID?",
        image_context: null,
        options: [
          { id: "a", text: "RFID Tag", image: null },
          { id: "b", text: "RFID reader", image: null },
          { id: "c", text: "Antenna", image: null },
          { id: "d", text: "Router", image: null },
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
        id: "2.1_2025_IIOT",
        question_text:
          "In the context of Industry 4.0, what is the full form of CPS?",
        image_context: null,
        options: [
          { id: "a", text: "Controlled Power System", image: null },
          { id: "b", text: "Customer Provisioning Service", image: null },
          { id: "c", text: "Cloud Processing Service", image: null },
          { id: "d", text: "Cyber Physical Systems", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.2_2025_IIOT",
        question_text:
          "State True or False. Business, providing information goods, has virtually zero transportation and replication cost.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "2.3_2025_IIOT",
        question_text:
          "Which of the following technologies is used by research scientists to selectively modify the DNA of living organisms?",
        image_context: null,
        options: [
          { id: "a", text: "3D Printing", image: null },
          { id: "b", text: "Nanomedicine", image: null },
          { id: "c", text: "Liquid Biopsy", image: null },
          { id: "d", text: "Genetic Engineering", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.4_2025_IIOT",
        question_text:
          "Which of the following statements is true about addressing an economic crisis or recession?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Observing an increase in prices of major commodities is a key indicator.",
            image: null,
          },
          {
            id: "b",
            text: "Increasing productivity and reducing costs can help recover from a recession.",
            image: null,
          },
          {
            id: "c",
            text: "The main economy of manufacturing location should always be based on only one resource to avoid crisis",
            image: null,
          },
          {
            id: "d",
            text: "Recovery from a depression is faster than recovery from a recession when the same solution is applied",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.5_2025_IIOT",
        question_text: "What does ERP stand for in the context of ICT?",
        image_context: null,
        options: [
          { id: "a", text: "Enterprise Resource Planning", image: null },
          { id: "b", text: "Electronic Resource Platform", image: null },
          { id: "c", text: "Enhanced Reporting Protocol", image: null },
          { id: "d", text: "Economic Resource Planning", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.6_2025_IIOT",
        question_text:
          "How can enterprises improve sustainability with respect to energy consumption?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Increasing usage on non-renewable energy sources",
            image: null,
          },
          {
            id: "b",
            text: "Reducing energy consumption from non-renewable sources and increasing use of renewable energy",
            image: null,
          },
          {
            id: "c",
            text: "Focusing solely on reducing renewable energy costs",
            image: null,
          },
          { id: "d", text: "Ignoring energy price fluctuations", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.7_2025_IIOT",
        question_text:
          'What is the primary goal of "Just-In-Time" in a Lean Production System?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "Ensuring each process produces what is needed by the next process in a continuous flow",
            image: null,
          },
          {
            id: "b",
            text: "Producing in advance to meet potential future demand",
            image: null,
          },
          {
            id: "c",
            text: "Reducing production costs by purchasing cheap materials",
            image: null,
          },
          {
            id: "d",
            text: "Increasing inventory to minimize disruptions",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.8_2025_IIOT",
        question_text: "What is a 'value stream' in a Lean Production System?",
        image_context: null,
        options: [
          { id: "a", text: "A set of tools for production", image: null },
          {
            id: "b",
            text: "All the actions required for a product from order to delivery",
            image: null,
          },
          { id: "c", text: "A method of employee training", image: null },
          { id: "d", text: "A type of waste reduction", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.9_2025_IIOT",
        question_text:
          "Which of the following is an objective of Lean Production in Industry 4.0?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Increasing waste in processes to improve flexibility",
            image: null,
          },
          {
            id: "b",
            text: "Focusing on non-value-added activities to reduce costs",
            image: null,
          },
          {
            id: "c",
            text: "Identifying waste in processes and eliminating it",
            image: null,
          },
          {
            id: "d",
            text: "Eliminating continuous improvement efforts",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.10_2025_IIOT",
        question_text:
          "Which of the following technologies is a medium for achieving smart and connected systems?",
        image_context: null,
        options: [
          { id: "a", text: "Embedded Systems", image: null },
          { id: "b", text: "Traditional Mechanical Systems", image: null },
          { id: "c", text: "Manual Control Systems", image: null },
          { id: "d", text: "Non-Interactive Devices", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.11_2025_IIOT",
        question_text:
          "Which of the following are key attributes of a smart business model?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Manual processes, cost reduction, and labor dependency",
            image: null,
          },
          {
            id: "b",
            text: "Value proposition, revenue streams, and technologies",
            image: null,
          },
          {
            id: "c",
            text: "Traditional marketing, fixed costs, and limited innovation",
            image: null,
          },
          {
            id: "d",
            text: "Centralized control, non-digital strategies, and fixed processes",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.12_2025_IIOT",
        question_text:
          "Which of the following is not a component of a Smart Factory?",
        image_context: null,
        options: [
          { id: "a", text: "Smart machines", image: null },
          { id: "b", text: "Smart manufacturing processes", image: null },
          { id: "c", text: "Information Technology", image: null },
          { id: "d", text: "Physical ledgers", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.13_2025_IIOT",
        question_text:
          "In the Automation Pyramid of a Smart Factory, which level is just above the Device Level?",
        image_context: null,
        options: [
          { id: "a", text: "Control Level", image: null },
          { id: "b", text: "ERP Level", image: null },
          {
            id: "c",
            text: "Manufacturing execution system level",
            image: null,
          },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.14_2025_IIOT",
        question_text:
          "Which of the following is not a prerequisite of the Industrial Internet of Things?",
        image_context: null,
        options: [
          { id: "a", text: "Security", image: null },
          { id: "b", text: "Incompatibility", image: null },
          { id: "c", text: "Interoperability", image: null },
          { id: "d", text: "Scalability", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.15_2025_IIOT",
        question_text:
          "In which format is healthcare data transmitted to maintain data uniformity and interoperability?",
        image_context: null,
        options: [
          { id: "a", text: "HL-7", image: null },
          { id: "b", text: "LH-5", image: null },
          { id: "c", text: "HD-7", image: null },
          { id: "d", text: "None of these", image: null },
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
        id: "3.1_2025_IIOT",
        question_text:
          "What is the main difference between Embedded Systems and Cyber-Physical Systems (CPS)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Embedded systems are standalone devices, whereas CPS are networked systems.",
            image: null,
          },
          {
            id: "b",
            text: "CPS have limited resources, while embedded systems are not resource constrained.",
            image: null,
          },
          {
            id: "c",
            text: "Main issues of Embedded Systems are timing and concurrency while the main issues of CPS are real-time response and reliability",
            image: null,
          },
          {
            id: "d",
            text: "CPS lack physical components, while embedded systems include them.",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.2_2025_IIOT",
        question_text: 'What does "reactive computation" in CPS signify?',
        image_context: null,
        options: [
          { id: "a", text: "Systems with zero response time", image: null },
          {
            id: "b",
            text: "Interaction with the environment in an ongoing manner",
            image: null,
          },
          { id: "c", text: "Predefined computation processes", image: null },
          {
            id: "d",
            text: "Complete isolation from physical feedback",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.3_2025_IIOT",
        question_text:
          "Fill in the blanks. In healthcare applications, CPS is used for _____.",
        image_context: null,
        options: [
          { id: "a", text: "Image-guided surgery and therapy", image: null },
          { id: "b", text: "Manual monitoring of vitals", image: null },
          { id: "c", text: "Static hospital management systems", image: null },
          { id: "d", text: "Front desk management", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.4_2025_IIOT",
        question_text:
          "Which programming language developed in 1958 aided the evolution of Artificial Intelligence?",
        image_context: null,
        options: [
          { id: "a", text: "Python", image: null },
          { id: "b", text: "Lisp", image: null },
          { id: "c", text: "Java", image: null },
          { id: "d", text: "Prolog", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.5_2025_IIOT",
        question_text:
          'Which level in the "5C Architecture" ensures the gathering of precise status information of machines?',
        image_context: null,
        options: [
          { id: "a", text: "Conversion", image: null },
          { id: "b", text: "Cognition", image: null },
          { id: "c", text: "Cyber", image: null },
          { id: "d", text: "Configuration", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.6_2025_IIOT",
        question_text:
          "Fill in the blanks. Intelligent sensors are capable of _____.",
        image_context: null,
        options: [
          { id: "a", text: "Only sensing data", image: null },
          {
            id: "b",
            text: "Processing sensed data and managing external sensors/devices",
            image: null,
          },
          { id: "c", text: "Limited communication", image: null },
          { id: "d", text: "Basic analog-to-digital conversion", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.7_2025_IIOT",
        question_text:
          "What are the five phases of product lifecycle as per PLM in Industry 4.0?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Visualize, Explain, Perceive, Support, Retire",
            image: null,
          },
          {
            id: "b",
            text: "Research, Design, Marketing, Distribution, Recycling",
            image: null,
          },
          {
            id: "c",
            text: "Ideation, Manufacturing, Expansion, Customer Feedback, Upgradation",
            image: null,
          },
          {
            id: "d",
            text: "Requirement Analysis, Development, Testing, Deployment, Maintenance",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.8_2025_IIOT",
        question_text:
          "How many steps are there in the PLM solution approach in Industry 4.0?",
        image_context: null,
        options: [
          { id: "a", text: "8", image: null },
          { id: "b", text: "9", image: null },
          { id: "c", text: "10", image: null },
          { id: "d", text: "12", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.9_2025_IIOT",
        question_text:
          "Which of the following is not a key component of an AR Device?",
        image_context: null,
        options: [
          { id: "a", text: "Sensors", image: null },
          { id: "b", text: "Cameras", image: null },
          { id: "c", text: "Projection Screen", image: null },
          { id: "d", text: "Remote Control", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.10_2025_IIOT",
        question_text: "Which of the following statements is incorrect?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Deep Learning is a subset of Machine Learning",
            image: null,
          },
          {
            id: "b",
            text: "Deep Learning is a subset of Artificial Intelligence",
            image: null,
          },
          {
            id: "c",
            text: "Machine Learning is a superset of Artificial Intelligence",
            image: null,
          },
          {
            id: "d",
            text: "Artificial Intelligence is a superset of Machine Learning",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.11_2025_IIOT",
        question_text:
          "Which of the following is NOT a challenge of AI in IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "Connecting devices", image: null },
          { id: "b", text: "Understanding data", image: null },
          { id: "c", text: "Training AI models", image: null },
          { id: "d", text: "Lack of available data", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.12_2025_IIOT",
        question_text:
          "What is the primary purpose of data preprocessing in Big Data analytics?",
        image_context: null,
        options: [
          { id: "a", text: "To store data without modification", image: null },
          {
            id: "b",
            text: "To remove noises and redundancies before analysis",
            image: null,
          },
          {
            id: "c",
            text: "To generate fake data for testing purposes",
            image: null,
          },
          {
            id: "d",
            text: "To visualize trends before collection",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.13_2025_IIOT",
        question_text:
          "What type of analytics is used to predict future trends based on historical data patterns?",
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
        id: "3.14_2025_IIOT",
        question_text:
          "Which of the following is not one of the primary constraints of mobile CPS?",
        image_context: null,
        options: [
          { id: "a", text: "Stability of the network", image: null },
          { id: "b", text: "Power requirement", image: null },
          { id: "c", text: "Security", image: null },
          { id: "d", text: "Design aesthetics", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.15_2025_IIOT",
        question_text:
          "What are the components of the 5C architecture for CPS?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Connection, Conversion, Cyber, Cognition, Configuration",
            image: null,
          },
          {
            id: "b",
            text: "Creation, Controlling, Continuation, Convergence, Compatibility",
            image: null,
          },
          {
            id: "c",
            text: "Calculation, Catalysis, Convergence, Convenience, Cognizance",
            image: null,
          },
          { id: "d", text: "None of these", image: null },
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
        id: "4.1_2025_IIOT",
        question_text:
          "What is the primary purpose of SCADA in industrial applications?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Control and monitoring of physical processes",
            image: null,
          },
          { id: "b", text: "Designing sensors for manufacturing", image: null },
          {
            id: "c",
            text: "Manual intervention in industrial processes",
            image: null,
          },
          { id: "d", text: "Eliminating all automation", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.2_2025_IIOT",
        question_text: "What is the function of WSANs in industrial processes?",
        image_context: null,
        options: [
          { id: "a", text: "Manual sensor installation", image: null },
          {
            id: "b",
            text: "Integration of sensors and actuators with wireless networks",
            image: null,
          },
          { id: "c", text: "Replacing traditional data systems", image: null },
          { id: "d", text: "Eliminating automated controls", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.3_2025_IIOT",
        question_text: "What does cybersecurity primarily aim to protect?",
        image_context: null,
        options: [
          { id: "a", text: "Physical security", image: null },
          {
            id: "b",
            text: "Internet-connected systems, including hardware, software, and data",
            image: null,
          },
          { id: "c", text: "Standalone software applications", image: null },
          { id: "d", text: "Manual data handling systems", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.4_2025_IIOT",
        question_text:
          "Which industrial sector benefits from advanced analytics using the Industrial Internet?",
        image_context: null,
        options: [
          { id: "a", text: "Healthcare", image: null },
          { id: "b", text: "Oil and Gas", image: null },
          { id: "c", text: "Rail Transportation", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.5_2025_IIOT",
        question_text:
          "Cyber Physical systems comprises which of the following layers?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Control Layer, Cognitive Layer, Cyber Layer, Conversion Layer and Connection Layer",
            image: null,
          },
          {
            id: "b",
            text: "Sensing Layer, Edge Computing Layer, Cloud Layer, Decision-Making Layer, and Execution Layer",
            image: null,
          },
          {
            id: "c",
            text: "Detection Layer, Data Processing Layer, Connectivity Layer, Automation Layer, and User Interaction Layer",
            image: null,
          },
          {
            id: "d",
            text: "Edge Computing Layer, Automation Layer, Detection Layer, Decision-Making Layer, and Device Layer",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.6_2025_IIOT",
        question_text:
          "Which of the following is not a differentiator between IIoT and Automation?",
        image_context: null,
        options: [
          { id: "a", text: "Ubiquitous sensing", image: null },
          { id: "b", text: "Advanced analytics", image: null },
          { id: "c", text: "IT tools and methodologies", image: null },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.7_2025_IIOT",
        question_text:
          "In the context of Cybersecurity for Industry 4.0, what does SDCMA stand for?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Secure Data and Cloud Management Architecture",
            image: null,
          },
          {
            id: "b",
            text: "Secure Data and Cloud Management Architecture",
            image: null,
          },
          {
            id: "c",
            text: "Software-Defined Cloud Manufacturing Architecture",
            image: null,
          },
          {
            id: "d",
            text: "Smart Digital Cloud Monitoring Algorithm",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.8_2025_IIOT",
        question_text:
          'Fill in the blank. According to GE, ______ can be defined as "the association of the global industrial system with low-cost sensing, interconnectivity through internet, high-level computing and analytics".',
        image_context: null,
        options: [
          { id: "a", text: "Industrial Internet", image: null },
          { id: "b", text: "Internet of Things", image: null },
          { id: "c", text: "M2M Communication", image: null },
          { id: "d", text: "SCADA", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.9_2025_IIOT",
        question_text:
          "What are the three key elements of the Industrial Internet?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Connected Devices, Ubiquitous Sensing, and Cloud Computing",
            image: null,
          },
          {
            id: "b",
            text: "Intelligent Machines, Advanced Analytics, and People at work",
            image: null,
          },
          {
            id: "c",
            text: "5G Networks, Quantum Computing, and Virtual Reality",
            image: null,
          },
          {
            id: "d",
            text: "Autonomous Robots, Blockchain, and Cloud Gaming",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.10_2025_IIOT",
        question_text: "What is Multisensing?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Ability to sense multiple parameters at a single sensor node",
            image: null,
          },
          {
            id: "b",
            text: "Using multiple sensors to measure a single parameter",
            image: null,
          },
          {
            id: "c",
            text: "A network of distributed sensors communicating wirelessly",
            image: null,
          },
          {
            id: "d",
            text: "Ability to process sensor data using artificial intelligence",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.11_2025_IIOT",
        question_text: "Which of the following is not an advantage of WSANs?",
        image_context: null,
        options: [
          { id: "a", text: "Preinstalled infrastructure", image: null },
          { id: "b", text: "Network self-organization", image: null },
          { id: "c", text: "Easy sensor & Actuator deployment", image: null },
          {
            id: "d",
            text: "Does not require any power source to operate",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.12_2025_IIOT",
        question_text:
          "Which of the following is a major challenge for industrial processes in Industry 4.0?",
        image_context: null,
        options: [
          { id: "a", text: "Decreasing demand for automation", image: null },
          {
            id: "b",
            text: "Unlimited availability of skilled workers",
            image: null,
          },
          {
            id: "c",
            text: "Constrained workforce and resource utilization",
            image: null,
          },
          {
            id: "d",
            text: "Reduced need for supply chain management",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.13_2025_IIOT",
        question_text:
          "What is a key benefit of an autonomous pull economy in Industrial Process 4.0?",
        image_context: null,
        options: [
          { id: "a", text: "High waste generation", image: null },
          { id: "b", text: "Complete manual supervision", image: null },
          { id: "c", text: "End-to-end automation facility", image: null },
          { id: "d", text: "Lack of updated demand information", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.14_2025_IIOT",
        question_text:
          "Which of the following represents the basic components of a SCADA system?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Programmable Logic Controllers (PLC) and Remote Terminal Units (RTU)",
            image: null,
          },
          { id: "b", text: "Supervisory System", image: null },
          { id: "c", text: "Communication Infrastructure", image: null },
          { id: "d", text: "All of the above", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "4.15_2025_IIOT",
        question_text:
          "According to IEEE 1451 standards, how is a smart sensor defined?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Sensor with limited memory and no communication capabilities",
            image: null,
          },
          {
            id: "b",
            text: "Sensor with small memory and standardized physical connection to enable communication with the processor and data network",
            image: null,
          },
          {
            id: "c",
            text: "A basic sensor without processing or networking capabilities",
            image: null,
          },
          {
            id: "d",
            text: "Sensor that only works in standalone mode without network integration",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 5",
    week: 5,
    questions: [
      {
        id: "5.1_2025_IIOT",
        question_text:
          "Which of the following is NOT a key sector of Industry 4.0?",
        image_context: null,
        options: [
          { id: "a", text: "Smart robotics", image: null },
          { id: "b", text: "Smart Warehousing", image: null },
          { id: "c", text: "Intelligent manufacturing", image: null },
          { id: "d", text: "Paper-Based Inventory Management", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.2_2025_IIOT",
        question_text:
          "What is a key advantage of the Outcome-Based Model in IoT business?",
        image_context: null,
        options: [
          { id: "a", text: "Decreased profit margin", image: null },
          { id: "b", text: "Increased negotiation cycle", image: null },
          { id: "c", text: "Higher customer satisfaction", image: null },
          { id: "d", text: "Increased risks", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.3_2025_IIOT",
        question_text:
          "Which layer in the Industrial Internet Reference Architecture (IIRA) implements domain-specific applications and decision support systems and provides interfaces to end-users?",
        image_context: null,
        options: [
          { id: "a", text: "Edge Layer", image: null },
          { id: "b", text: "Enterprise Layer", image: null },
          { id: "c", text: "Platform Layer", image: null },
          { id: "d", text: "Gateway Layer", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.4_2025_IIOT",
        question_text:
          "Which of the following is NOT a component of IIoT business models?",
        image_context: null,
        options: [
          { id: "a", text: "Value Proposition", image: null },
          { id: "b", text: "Value Capturing Mechanism", image: null },
          { id: "c", text: "Value Extraction Model", image: null },
          { id: "d", text: "Value Communication", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.5_2025_IIOT",
        question_text:
          "What is the primary purpose of a Cloud-Based Business Model in IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "Selling software licenses", image: null },
          {
            id: "b",
            text: "Leasing cloud computing resources temporarily",
            image: null,
          },
          { id: "c", text: "Manufacturing industrial equipment", image: null },
          {
            id: "d",
            text: "Increasing industrial workforce requirements",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.6_2025_IIOT",
        question_text:
          "Fill in the blanks. Based on the leading and lagging Occupational Safety and Health (OSH) indicators, Key Performance Indicators (KPIs) are also categorized into Leading KPI and ______.",
        image_context: null,
        options: [
          { id: "a", text: "Lagging KPI", image: null },
          { id: "b", text: "Low KPI", image: null },
          { id: "c", text: "Level KPI", image: null },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.7_2025_IIOT",
        question_text:
          "Which of the following is NOT one of the four viewpoints in the Industrial Internet Reference Architecture (IIRA)?",
        image_context: null,
        options: [
          { id: "a", text: "Business viewpoint", image: null },
          { id: "b", text: "Usage viewpoint", image: null },
          { id: "c", text: "Functional viewpoint", image: null },
          { id: "d", text: "Financial viewpoint", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.8_2025_IIOT",
        question_text:
          'State true or false. In the Usage Viewpoint of IIRA, "Task" is a basic unit of work carried out by a party assuming a role.',
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "5.9_2025_IIOT",
        question_text:
          "Which of the following is a challenge uniquely associated with asset-sharing IoT business models?",
        image_context: null,
        options: [
          { id: "a", text: "Profit margin", image: null },
          { id: "b", text: "Asset configuration", image: null },
          { id: "c", text: "Scalability", image: null },
          { id: "d", text: "Resource utilization", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.10_2025_IIOT",
        question_text:
          "What are the key revenue models in a Cloud-Based Business Model?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Direct product sales, Leasing. Licensing",
            image: null,
          },
          {
            id: "b",
            text: "Pay-per-use, Subscription fees, Advertisement",
            image: null,
          },
          {
            id: "c",
            text: "One-time installation charges, Maintenance fees, Donations",
            image: null,
          },
          {
            id: "d",
            text: "Mass production, Bulk discounts, Customer referrals",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.11_2025_IIOT",
        question_text:
          "Which of the following is an advantage of the subscription-based IoT business model?",
        image_context: null,
        options: [
          { id: "a", text: "Reduced operational complexity", image: null },
          {
            id: "b",
            text: "Predictable, recurring revenue streams",
            image: null,
          },
          { id: "c", text: "Lack of customer interaction", image: null },
          { id: "d", text: "Fixed pricing for all customers", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.12_2025_IIOT",
        question_text:
          "Which of the following is/are types of business models for IoT?",
        image_context: null,
        options: [
          { id: "a", text: "Subscription Model", image: null },
          { id: "b", text: "Outcome-Based Model", image: null },
          { id: "c", text: "Asset-Sharing Model", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "5.13_2025_IIOT",
        question_text:
          "What is a major benefit of the layered databus pattern in IIRA?",
        image_context: null,
        options: [
          { id: "a", text: "Increased data redundancy", image: null },
          {
            id: "b",
            text: "Rapid device-to-device integration with minimal response time",
            image: null,
          },
          {
            id: "c",
            text: "Elimination of automation in industrial systems",
            image: null,
          },
          {
            id: "d",
            text: "Decentralized data storage without communication",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.14_2025_IIOT",
        question_text:
          "State true or false. Lack of interoperability, data privacy, security issues, and authentication of data at the organizational level are some of the major challenges of IIoT-based business models.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "5.15_2025_IIOT",
        question_text:
          "Which of the following is NOT a standard IIoT reference architecture?",
        image_context: null,
        options: [
          { id: "a", text: "Three-tier IIoT architecture", image: null },
          { id: "b", text: "Gateway-based IoT architecture", image: null },
          { id: "c", text: "Layered Databus IIoT architecture", image: null },
          { id: "d", text: "Sixty four-tier IIoT architecture", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 6",
    week: 6,
    questions: [
      {
        id: "6.1_2025_IIOT",
        question_text:
          "Which industrial communication technology is suitable for hazardous environments?",
        image_context: null,
        options: [
          { id: "a", text: "ModBus-TCP", image: null },
          { id: "b", text: "EtherCat", image: null },
          { id: "c", text: "Profibus PA", image: null },
          { id: "d", text: "TSN", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.2_2025_IIOT",
        question_text:
          "Which type of modem allows simultaneous bi-directional communication?",
        image_context: null,
        options: [
          { id: "a", text: "Simplex", image: null },
          { id: "b", text: "Half-duplex", image: null },
          { id: "c", text: "Duplex", image: null },
          { id: "d", text: "Synchronous", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.3_2025_IIOT",
        question_text:
          "Which of the following industrial communication protocols follow a client-server architecture?",
        image_context: null,
        options: [
          { id: "a", text: "MECHATROLINK", image: null },
          { id: "b", text: "ModBus-TCP", image: null },
          { id: "c", text: "Hostlink", image: null },
          { id: "d", text: "DeviceNet", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.4_2025_IIOT",
        question_text:
          "What type of tasks is enabled by Smallcell Deployment in cellular networks?",
        image_context: null,
        options: [
          { id: "a", text: "Increasing dead zones", image: null },
          {
            id: "b",
            text: "Alleviating backhaul burden and reducing latency",
            image: null,
          },
          { id: "c", text: "Limiting energy efficiency", image: null },
          { id: "d", text: "Eliminating spectrum flexibility", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.5_2025_IIOT",
        question_text:
          "The DS1621 temperature sensor generates how many bits of temperature data?",
        image_context: null,
        options: [
          { id: "a", text: "8 bits", image: null },
          { id: "b", text: "9 bits", image: null },
          { id: "c", text: "10 bits", image: null },
          { id: "d", text: "12 bits", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.6_2025_IIOT",
        question_text:
          "Which of the following sensors is used to measure acceleration and provides 3-axis (X, Y, Z) values?",
        image_context: null,
        options: [
          { id: "a", text: "TCS3200", image: null },
          { id: "b", text: "LM35", image: null },
          { id: "c", text: "MQ-2", image: null },
          { id: "d", text: "ADXL335", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.7_2025_IIOT",
        question_text:
          "Which sensor is used for detecting human presence based on infrared radiation?",
        image_context: null,
        options: [
          { id: "a", text: "Image sensor", image: null },
          { id: "b", text: "Ultrasonic sensor", image: null },
          { id: "c", text: "PIR sensor", image: null },
          { id: "d", text: "Magnetostrictive sensor", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.8_2025_IIOT",
        question_text:
          "In an MOS gas sensor, what happens to the resistance in an n-type sensor when exposed to a reducing gas?",
        image_context: null,
        options: [
          { id: "a", text: "Resistance remains the same", image: null },
          { id: "b", text: "Resistance decreases", image: null },
          { id: "c", text: "Resistance increases", image: null },
          { id: "d", text: "Resistance fluctuates randomly", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.9_2025_IIOT",
        question_text:
          "Which of the following characteristics describes a gas sensor's ability to detect a specific gas in the presence of other gases?",
        image_context: null,
        options: [
          { id: "a", text: "Sensitivity", image: null },
          { id: "b", text: "Stability", image: null },
          { id: "c", text: "Selectivity", image: null },
          { id: "d", text: "Reversibility", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.10_2025_IIOT",
        question_text:
          "What is the maximum data transmission range for EtherCat using optical waveguides?",
        image_context: null,
        options: [
          { id: "a", text: "100 meters", image: null },
          { id: "b", text: "500 meters", image: null },
          { id: "c", text: "10 kilometers", image: null },
          { id: "d", text: "20 kilometers", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.11_2025_IIOT",
        question_text:
          "Which communication protocol uses Common Industrial Protocol (CIP) over Ethernet?",
        image_context: null,
        options: [
          { id: "a", text: "EtherNet/IP", image: null },
          { id: "b", text: "Profinet", image: null },
          { id: "c", text: "EtherCat", image: null },
          { id: "d", text: "Modbus-TCP", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.12_2025_IIOT",
        question_text: "What is the total bus length supported by Interbus?",
        image_context: null,
        options: [
          { id: "a", text: "7 kilometers", image: null },
          { id: "b", text: "10 kilometers", image: null },
          { id: "c", text: "13 kilometers", image: null },
          {
            id: "d",
            text: "$2^{4n-2}$ meters, where n is the number of slaves",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.13_2025_IIOT",
        question_text:
          "Which of the following is a key requirement for Industrial communication?",
        image_context: null,
        options: [
          { id: "a", text: "High latency communication", image: null },
          { id: "b", text: "Manual device control", image: null },
          { id: "c", text: "Single-band connectivity", image: null },
          { id: "d", text: "Very low latency", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.14_2025_IIOT",
        question_text:
          "How are sensors categorized based on their power requirements?",
        image_context: null,
        options: [
          { id: "a", text: "Active and Passive", image: null },
          { id: "b", text: "Analog and Digital", image: null },
          { id: "c", text: "Load Resistive and Load Reactive", image: null },
          { id: "d", text: "Battery-Powered and Line-Powered", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.15_2025_IIOT",
        question_text:
          "Modbus is an industrial communication protocol for Fieldbuses that follows a master-slave architecture. What is the maximum number of slave devices supported by the master node in this protocol?",
        image_context: null,
        options: [
          { id: "a", text: "128", image: null },
          { id: "b", text: "247", image: null },
          { id: "c", text: "256", image: null },
          { id: "d", text: "494", image: null },
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
        id: "7.1_2025_IIOT",
        question_text:
          "Which of the following topologies is NOT supported by Zigbee?",
        image_context: null,
        options: [
          { id: "a", text: "Tree", image: null },
          { id: "b", text: "Bus", image: null },
          { id: "c", text: "Mesh", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.2_2025_IIOT",
        question_text:
          "What is a key benefit of Distributed Control Systems (DCS)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Increased complexity in control mechanism",
            image: null,
          },
          {
            id: "b",
            text: "Improved reliability through distributed control",
            image: null,
          },
          { id: "c", text: "Increased manual interventions", image: null },
          {
            id: "d",
            text: "Reduced communication between devices",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.3_2025_IIOT",
        question_text: "In which frequency bands do LoRa operate?",
        image_context: null,
        options: [
          { id: "a", text: "2.4 GHz", image: null },
          {
            id: "b",
            text: "868 MHz (Europe), 915 MHz (North America)",
            image: null,
          },
          { id: "c", text: "5 GHz", image: null },
          { id: "d", text: "1.8 MHz", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.4_2025_IIOT",
        question_text: "Which library is required to work with the LoRa?",
        image_context: null,
        options: [
          { id: "a", text: "Radiohead", image: null },
          { id: "b", text: "Xbee", image: null },
          { id: "c", text: "Zigbee", image: null },
          { id: "d", text: "XCTU", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.5_2025_IIOT",
        question_text:
          "State true or false. Machine-to-Machine Interface (M2MI) is one of the major components of Supervisory control and Data Acquisition that is used for enabling control and operations of the remote processes by human operators.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["b"],
        type: "True/False",
      },
      {
        id: "7.6_2025_IIOT",
        question_text:
          "Fill in the blanks. Zigbee uses the ______ standard for defining its physical and medium access control (layers 1 and 2 of the OSI stack).",
        image_context: null,
        options: [
          { id: "a", text: "IEEE 802.16.6", image: null },
          { id: "b", text: "IEEE 802.15.4", image: null },
          { id: "c", text: "IEEE 502.15.4", image: null },
          { id: "d", text: "IEEE 502.16.6", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.7_2025_IIOT",
        question_text:
          "State True or False. The SIGFOX network can transmit up to 140 messages per day with a payload of 12 bytes per message.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "7.8_2025_IIOT",
        question_text:
          "Which of the following is/are false about the rule-based engine?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Extract causal and temporal patterns using predefined rules",
            image: null,
          },
          {
            id: "b",
            text: "Handles multiple data streams and correlates them to provide meaningful output",
            image: null,
          },
          {
            id: "c",
            text: "Cannot process data in near real-time",
            image: null,
          },
          { id: "d", text: "All of the above", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.9_2025_IIOT",
        question_text: "Which of the following is NOT a Zigbee device type?",
        image_context: null,
        options: [
          { id: "a", text: "Coordinator", image: null },
          { id: "b", text: "Router", image: null },
          { id: "c", text: "End device", image: null },
          { id: "d", text: "Hub", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.10_2025_IIOT",
        question_text:
          "What is the role of message brokers like MQTT and Apache Kafka in real-time IoT processing systems?",
        image_context: null,
        options: [
          { id: "a", text: "They store IoT data permanently", image: null },
          {
            id: "b",
            text: "They transfer data to analytical pipelines",
            image: null,
          },
          {
            id: "c",
            text: "They eliminate the need for data analysis",
            image: null,
          },
          {
            id: "d",
            text: "They reduce data complexity by deleting unnecessary events",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.11_2025_IIOT",
        question_text:
          "Which type of analytics in IIoT focuses on forecasting future conditions?",
        image_context: null,
        options: [
          { id: "a", text: "Descriptive Analytics", image: null },
          { id: "b", text: "Predictive Analytics", image: null },
          { id: "c", text: "Prescriptive Analytics", image: null },
          { id: "d", text: "Business Processing Analytics", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.12_2025_IIOT",
        question_text:
          "Which of the following is NOT a key component of the Smart Water Management Platform (SWAMP)?",
        image_context: null,
        options: [
          { id: "a", text: "Sensors", image: null },
          { id: "b", text: "Virtual entity", image: null },
          { id: "c", text: "ERP", image: null },
          { id: "d", text: "Data management", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.13_2025_IIOT",
        question_text:
          "Which of the following is NOT a phase of Industrial Manufacturing workflow?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Collection of service offerings and infrastructure",
            image: null,
          },
          {
            id: "b",
            text: "Virtualization, allocation, and management of services",
            image: null,
          },
          { id: "c", text: "On-demand service provisioning", image: null },
          {
            id: "d",
            text: "Reallocation of deployed infrastructure",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.14_2025_IIOT",
        question_text:
          "Which of the following is NOT a key component of SCADA?",
        image_context: null,
        options: [
          { id: "a", text: "Sensors and Control Relays", image: null },
          { id: "b", text: "Remote Telemetry Units (RTUS)", image: null },
          { id: "c", text: "Inventory Databases", image: null },
          { id: "d", text: "Human-Machine Interface (HMI)", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.15_2025_IIOT",
        question_text:
          "Which of the following is NOT a major component of an Industrial Control System?",
        image_context: null,
        options: [
          { id: "a", text: "Process Variables", image: null },
          { id: "b", text: "Set Points", image: null },
          { id: "c", text: "Industrial Internet", image: null },
          { id: "d", text: "Manipulating Variables", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 8",
    week: 8,
    questions: [
      {
        id: "8.1_2025_IIOT",
        question_text:
          "Which of the following is NOT a key characteristic of Big Data Analytics in IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "Volume", image: null },
          { id: "b", text: "Velocity", image: null },
          { id: "c", text: "Veracity", image: null },
          { id: "d", text: "Validation", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.2_2025_IIOT",
        question_text:
          "Which software is commonly used for batch-oriented analytics?",
        image_context: null,
        options: [
          { id: "a", text: "C++ and Java", image: null },
          { id: "b", text: "Apache Hadoop and Apache Spark", image: null },
          { id: "c", text: "Pandas and Numpy", image: null },
          { id: "d", text: "MongoDB and MySQL", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.3_2025_IIOT",
        question_text:
          "Which of the following is NOT a fundamental type of IIoT Analytics?",
        image_context: null,
        options: [
          { id: "a", text: "Descriptive Analytics", image: null },
          { id: "b", text: "Predictive Analytics", image: null },
          { id: "c", text: "Prescriptive Analytics", image: null },
          { id: "d", text: "Structural Analytics", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.4_2025_IIOT",
        question_text:
          "Which machine learning algorithm enables machines to improve their performance by automatically learning the ideal behaviors for a specific environment?",
        image_context: null,
        options: [
          { id: "a", text: "Supervised Learning", image: null },
          { id: "b", text: "Unsupervised Learning", image: null },
          { id: "c", text: "Reinforcement Learning", image: null },
          { id: "d", text: "Regression", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.5_2025_IIOT",
        question_text:
          "Which of the following represents a key feature of Fuzzy c-Means clustering?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "A data point can belong to more than one cluster",
            image: null,
          },
          {
            id: "b",
            text: "A data point belongs strictly to only one cluster",
            image: null,
          },
          { id: "c", text: "Extremely slower than K-Means", image: null },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.6_2025_IIOT",
        question_text:
          "Which of the following is TRUE about the Thing Worx platform?",
        image_context: null,
        options: [
          { id: "a", text: "Perform complex analytical process", image: null },
          { id: "b", text: "Deliver real-time perception", image: null },
          {
            id: "c",
            text: "Has the ability to monitor the condition",
            image: null,
          },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "8.7_2025_IIOT",
        question_text:
          'State True or False. Deep learning is an "end-to-end learning", which extracts features on its own. On the contrary, in machine learning, features are to be explicitly mentioned.',
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "8.8_2025_IIOT",
        question_text:
          "Which of the following statements is TRUE about machine learning (ML)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "ML is the subset of AI that can learn automatically from the object features",
            image: null,
          },
          {
            id: "b",
            text: "ML is the subset of DL which can learn automatically by finding the features of the object on its own",
            image: null,
          },
          {
            id: "c",
            text: "ML always performs better than Deep Learning models",
            image: null,
          },
          {
            id: "d",
            text: "ML can only be used for image recognition tasks",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.9_2025_IIOT",
        question_text:
          "Which of the following statements about MindSphere is incorrect?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Cloud-based operating system platform for IoT",
            image: null,
          },
          { id: "b", text: "Open safety-as-a-service", image: null },
          {
            id: "c",
            text: "Bring together IoT data from products, factories, machines, and systems to exploit its prosperity",
            image: null,
          },
          { id: "d", text: "Enterprise oriented solutions", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.10_2025_IIOT",
        question_text:
          "Which of the following is/are key characteristic(s) of a Consumer IoT cloud platform?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Provide very specific applications for end users",
            image: null,
          },
          { id: "b", text: "Provide modest security", image: null },
          { id: "c", text: "Generally cost-sensitive", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "8.11_2025_IIOT",
        question_text:
          "Which of the following is NOT a fundamental cloud computing service?",
        image_context: null,
        options: [
          { id: "a", text: "Software-as-a-Service", image: null },
          { id: "b", text: "Platform-as-a-Service", image: null },
          { id: "c", text: "ERP-as-a-Service", image: null },
          { id: "d", text: "Infrastructure-as-a-Service", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.12_2025_IIOT",
        question_text:
          "Which of the following services is NOT provided by C3 IoT?",
        image_context: null,
        options: [
          { id: "a", text: "Predictive Maintenance", image: null },
          { id: "b", text: "Inventory Optimization", image: null },
          { id: "c", text: "IoT Hardware Analysis", image: null },
          { id: "d", text: "Fraud Detection", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.13_2025_IIOT",
        question_text:
          "Which of the following cloud platform providers does not offer IIoT device management services?",
        image_context: null,
        options: [
          { id: "a", text: "Bosch IoT Remote Manager", image: null },
          { id: "b", text: "Facebook Cloud Services", image: null },
          { id: "c", text: "AWS's IoT Device Management", image: null },
          { id: "d", text: "ICP DAS's IoTstar", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.14_2025_IIOT",
        question_text:
          'What does "Variety" refer to in the context of data generation?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "The speed at which data is generated",
            image: null,
          },
          { id: "b", text: "The amount of data generated", image: null },
          {
            id: "c",
            text: "The format of data generated, such as structured, semi-structured, or unstructured",
            image: null,
          },
          {
            id: "d",
            text: "The accuracy and reliability of data generated",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.15_2025_IIOT",
        question_text: "What does the 'K' in K-means clustering represent?",
        image_context: null,
        options: [
          { id: "a", text: "Number of features in the dataset", image: null },
          { id: "b", text: "Number of clusters to be identified", image: null },
          {
            id: "c",
            text: "Maximum iterations allowed in the process",
            image: null,
          },
          {
            id: "d",
            text: "Number of data points in each cluster",
            image: null,
          },
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
        id: "9.1_2025_IIOT",
        question_text:
          "Which of the following can be rendered by the fog-enabled IIoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Real-time monitoring and visualization",
            image: null,
          },
          { id: "b", text: "End-to-end security", image: null },
          { id: "c", text: "Scalability and flexibility", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "9.2_2025_IIOT",
        question_text:
          "Which of the following is a Fog Computing platform provider?",
        image_context: null,
        options: [
          { id: "a", text: "Netflix", image: null },
          { id: "b", text: "FogHorn", image: null },
          { id: "c", text: "Google Search", image: null },
          { id: "d", text: "Twitter Analytics", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.3_2025_IIOT",
        question_text: "What is the primary use of the R programming language?",
        image_context: null,
        options: [
          { id: "a", text: "ERP data handling", image: null },
          {
            id: "b",
            text: "Statistical analysis and data visualization",
            image: null,
          },
          { id: "c", text: "SDN security provisioning", image: null },
          { id: "d", text: "Mobile application development", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.4_2025_IIOT",
        question_text:
          "Which operator in R is used to obtain the remainder of a division?",
        image_context: null,
        options: [
          { id: "a", text: "/", image: null },
          { id: "b", text: "%/%", image: null },
          { id: "c", text: "%%", image: null },
          { id: "d", text: "^", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.5_2025_IIOT",
        question_text: "Which of the following is NOT a data type in R?",
        image_context: null,
        options: [
          { id: "a", text: "Logical", image: null },
          { id: "b", text: "Integer", image: null },
          { id: "c", text: "Binary", image: null },
          { id: "d", text: "Complex", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.6_2025_IIOT",
        question_text: "What is the function of the 'caret' package in R?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Provides functions for network security",
            image: null,
          },
          {
            id: "b",
            text: "Provides functions for creating predictive models",
            image: null,
          },
          { id: "c", text: "Manages file system operations", image: null },
          { id: "d", text: "Helps in game development", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.7_2025_IIOT",
        question_text:
          "In Julia programming language, which of the following is used for string interpolation?",
        image_context: null,
        options: [
          { id: "a", text: "&", image: null },
          { id: "b", text: "%", image: null },
          { id: "c", text: "$", image: null },
          { id: "d", text: "@", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.8_2025_IIOT",
        question_text:
          "Which of the following is NOT a basic service model of cloud computing?",
        image_context: null,
        options: [
          { id: "a", text: "Infrastructure-as-a-Service (IaaS)", image: null },
          { id: "b", text: "Platform-as-a-Service (PaaS)", image: null },
          { id: "c", text: "Software-as-a-Service (SaaS)", image: null },
          { id: "d", text: "Analytics-as-a-Service (AaaS)", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.9_2025_IIOT",
        question_text:
          "What is the primary purpose of data pre-processing in IIoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To always append 50% randomly generated data with the existing dataset",
            image: null,
          },
          {
            id: "b",
            text: "To clean, integrate, and filter data before analysis",
            image: null,
          },
          {
            id: "c",
            text: "To always delete 50% of the existing data randomly",
            image: null,
          },
          {
            id: "d",
            text: "To transfer data directly to users without modification",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.10_2025_IIOT",
        question_text:
          "State true or false. Hadoop Distributed File System (HDFS) and Kosmosfs are notable file systems derived from the open source codes of Google File System (GFS).",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "9.11_2025_IIOT",
        question_text:
          "Which of the following is NOT a key requirement for a Data Center Network?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "VM migration without changing IP addresses",
            image: null,
          },
          { id: "b", text: "Fast detection of failure", image: null },
          { id: "c", text: "In-house power plant", image: null },
          { id: "d", text: "Efficient repair of failure", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.12_2025_IIOT",
        question_text:
          "Edge, Aggregation, and Core are the components of which Data Center Network topology?",
        image_context: null,
        options: [
          { id: "a", text: "DCell", image: null },
          { id: "b", text: "Fat-Tree DCN", image: null },
          { id: "c", text: "BCube", image: null },
          { id: "d", text: "Hybrid Cloud Network", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.13_2025_IIOT",
        question_text:
          "Which of the following statements about the Data Center Network topology- BCube is incorrect?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Server-centric approach, rather than the switch-oriented practice",
            image: null,
          },
          {
            id: "b",
            text: "Places intelligence on modular data center (MDC) servers",
            image: null,
          },
          {
            id: "c",
            text: "Provides single serial short paths between any pair of servers",
            image: null,
          },
          {
            id: "d",
            text: "Runs a source routing protocol called BSR (Bcube Source Routing)",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.14_2025_IIOT",
        question_text: "What is the role of the SDN controller in a network?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It modifies data packets before forwarding to end users",
            image: null,
          },
          {
            id: "b",
            text: "It defines and manages flow rules for forwarding devices",
            image: null,
          },
          {
            id: "c",
            text: "It directly replaces physical network switches",
            image: null,
          },
          {
            id: "d",
            text: "It completely eliminates the need for network security",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.15_2025_IIOT",
        question_text:
          "Which of the following statements is FALSE about fog computing?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The fog layer analyzes a huge volume of real-time data generated from industrial devices and machines.",
            image: null,
          },
          {
            id: "b",
            text: "The fog layer simultaneously collects data from various interconnected industrial machines, smart sensors, devices, and robots.",
            image: null,
          },
          {
            id: "c",
            text: "The fog layer generates the decisions from the sensed data and delivers them to the actuators with minimum latency.",
            image: null,
          },
          {
            id: "d",
            text: "The fog layer increases unnecessary data transmission to the cloud and server by bypassing data filtering and restructuring.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 10",
    week: 10,
    questions: [
      {
        id: "10.1_2025_IIOT",
        question_text:
          "Which of the following is NOT a component of the SDIIoT architecture?",
        image_context: null,
        options: [
          { id: "a", text: "SDIIoT-WSN", image: null },
          { id: "b", text: "SDIIoT - Industrial Bus & Network", image: null },
          { id: "c", text: "SDIIOT - ERP Framework", image: null },
          { id: "d", text: "SDIIoT - Industrial Cloud", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.2_2025_IIOT",
        question_text:
          "Which of the following is NOT a component of SD-Edge IIoT Architecture?",
        image_context: null,
        options: [
          { id: "a", text: "Cluster Head", image: null },
          { id: "b", text: "Industrial Cloud", image: null },
          { id: "c", text: "Edge Network", image: null },
          { id: "d", text: "Standalone Firewall", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.3_2025_IIOT",
        question_text:
          "Which of the following is NOT a key attribute of trustworthy IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "Reliability", image: null },
          { id: "b", text: "Security", image: null },
          { id: "c", text: "Unlimited network access", image: null },
          { id: "d", text: "Privacy", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.4_2025_IIOT",
        question_text:
          "Which of the following is an example of an IIoT attack at the physical layer?",
        image_context: null,
        options: [
          { id: "a", text: "SQL injection", image: null },
          { id: "b", text: "Device tampering", image: null },
          { id: "c", text: "Traffic flooding", image: null },
          { id: "d", text: "Man-in-the-middle attack", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.5_2025_IIOT",
        question_text:
          "What does the STRIDE threat model in IIoT security stand for?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
            image: null,
          },
          {
            id: "b",
            text: "Secure Transmission, Reliable Data, Industrial Deployment, Encryption",
            image: null,
          },
          {
            id: "c",
            text: "Software, Tracking, Response, Integration, Data, Encryption",
            image: null,
          },
          {
            id: "d",
            text: "Security Threats, Risk Identification, Detection, Evaluation",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.6_2025_IIOT",
        question_text:
          "Which of the following is an attack vector in the network layer of IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "SQL injection", image: null },
          { id: "b", text: "Traffic flooding", image: null },
          { id: "c", text: "Jamming attack", image: null },
          { id: "d", text: "Data spoofing", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.7_2025_IIOT",
        question_text:
          "Which of the following is NOT a building block of IIoT security?",
        image_context: null,
        options: [
          { id: "a", text: "Cloud security", image: null },
          { id: "b", text: "Data protection", image: null },
          { id: "c", text: "Physical network topologies", image: null },
          { id: "d", text: "Communication Protection", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.8_2025_IIOT",
        question_text:
          "Which of the following standards is related to Industrial automation and control systems security?",
        image_context: null,
        options: [
          { id: "a", text: "ISO/IEC 154083", image: null },
          { id: "b", text: "IEC 62443", image: null },
          { id: "c", text: "ISO 27017", image: null },
          { id: "d", text: "NIST SP 800-144", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.9_2025_IIOT",
        question_text:
          "Which of the following is NOT a key principle of data protection in IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "Confidentiality", image: null },
          { id: "b", text: "Integrity", image: null },
          { id: "c", text: "Availability", image: null },
          { id: "d", text: "Unrestricted access", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.10_2025_IIOT",
        question_text:
          "State true or false. Caterpillar's AR app generates an end-to-end view of the factory floor, enabling machine operators to detect tool replacement needs and send instructions for replacement.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "10.11_2025_IIOT",
        question_text:
          "Which of the following is NOT a key feature of a Smart Factory?",
        image_context: null,
        options: [
          { id: "a", text: "Continuous real-time data", image: null },
          {
            id: "b",
            text: "Prediction of future outcomes for taking preventive actions",
            image: null,
          },
          { id: "c", text: "High manual operation", image: null },
          { id: "d", text: "Flexibility and adaptability", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.12_2025_IIOT",
        question_text:
          "Which of the following statements is INCORRECT about Fanuc - Zero Downtime System?",
        image_context: null,
        options: [
          { id: "a", text: "Is a robot maker", image: null },
          {
            id: "b",
            text: "Uses predictive maintenance to reduce downtime",
            image: null,
          },
          { id: "c", text: "Does not predict component failure", image: null },
          {
            id: "d",
            text: "Performs cloud-based analytics with the help of in-built sensors",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.13_2025_IIOT",
        question_text:
          "What is the purpose of SmartLabel in the food industry?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To provide consumers with product-related information via QR codes",
            image: null,
          },
          {
            id: "b",
            text: "To remove ingredient details from food packaging",
            image: null,
          },
          {
            id: "c",
            text: "To eliminate allergen warnings for consumers",
            image: null,
          },
          {
            id: "d",
            text: "To prevent transparency in the food supply chain",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.14_2025_IIOT",
        question_text:
          "Which of the following devices is primarily used to detect the presence of microbial disease in food?",
        image_context: null,
        options: [
          { id: "a", text: "Diagenetix-BioRanger", image: null },
          { id: "b", text: "Eskesso-The Cooking Sorcery", image: null },
          { id: "c", text: "Intellicup-Smart Cups", image: null },
          { id: "d", text: "Intellicup-The Cooking Sorcery", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.15_2025_IIOT",
        question_text:
          "What is the unique feature of Spinn Inc.'s smart coffee machines?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "They connect with Amazon Echo and have an auto-order feature",
            image: null,
          },
          {
            id: "b",
            text: "They remove automation from coffee brewing",
            image: null,
          },
          {
            id: "c",
            text: "They require manual input for all brewing processes",
            image: null,
          },
          {
            id: "d",
            text: "They prevent connectivity with IoT platforms",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 11",
    week: 11,
    questions: [
      {
        id: "11.1_2025_IIOT",
        question_text:
          "What is one of the primary benefits of IIoT in healthcare?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Increasing the number of hospital visits",
            image: null,
          },
          {
            id: "b",
            text: "Remote monitoring of patient health conditions",
            image: null,
          },
          {
            id: "c",
            text: "Limiting the use of wearable healthcare devices",
            image: null,
          },
          {
            id: "d",
            text: "Reducing the need for medical data storage",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.2_2025_IIOT",
        question_text:
          "Which IoT-enabled device is used for continuous glucose level monitoring?",
        image_context: null,
        options: [
          { id: "a", text: "QardioCore", image: null },
          { id: "b", text: "Dexcom Glucose Sensor", image: null },
          { id: "c", text: "iHealth BP5", image: null },
          { id: "d", text: "Kinsa Smart Thermometer", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.3_2025_IIOT",
        question_text:
          "Which IIoT device monitors body temperature using wearable sensors?",
        image_context: null,
        options: [
          { id: "a", text: "Kinsa Smart Thermometer", image: null },
          { id: "b", text: "Dexcom Glucose Sensor", image: null },
          { id: "c", text: "iHealth BP5", image: null },
          { id: "d", text: "ADAMM Intelligent Asthma Monitor", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.4_2025_IIOT",
        question_text:
          "Which of the following ensures that medical data is not accessible by unauthorized users?",
        image_context: null,
        options: [
          { id: "a", text: "Integrity", image: null },
          { id: "b", text: "Authentication", image: null },
          { id: "c", text: "Confidentiality", image: null },
          { id: "d", text: "Availability", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.5_2025_IIOT",
        question_text: "What is a major benefit of smart metering in IIoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Reduces operational costs by enabling remote management",
            image: null,
          },
          { id: "b", text: "Increases the chance of energy loss", image: null },
          {
            id: "c",
            text: "Eliminates the need for grid optimization",
            image: null,
          },
          {
            id: "d",
            text: "Limits data collection from power systems",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.6_2025_IIOT",
        question_text:
          "What is a key advantage of Advanced Metering Infrastructure (AMI)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Prevents broadband and radio frequency communications",
            image: null,
          },
          {
            id: "b",
            text: "Enables smart meters to collect and transmit energy consumption data",
            image: null,
          },
          {
            id: "c",
            text: "Eliminates the need for automated power distribution",
            image: null,
          },
          {
            id: "d",
            text: "Reduces the effectiveness of metering data management",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.7_2025_IIOT",
        question_text: "How does IIoT benefit the wind energy sector?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Predicts turbine issues before large-scale damage occurs",
            image: null,
          },
          {
            id: "b",
            text: "Prevents automation in remote power plants",
            image: null,
          },
          {
            id: "c",
            text: "Increases the difficulty of maintaining remote turbines",
            image: null,
          },
          {
            id: "d",
            text: "Disables predictive maintenance in wind farms",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.8_2025_IIOT",
        question_text:
          "Which of the following is NOT a key function of Inventory Management?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Decouple components of the production-distribution system",
            image: null,
          },
          {
            id: "b",
            text: "Hedge against price increases or take advantage of quantity discounts",
            image: null,
          },
          { id: "c", text: "Eliminating stock monitoring", image: null },
          { id: "d", text: "Smoothen the flow of operations", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.9_2025_IIOT",
        question_text:
          "What type of RFID tag has an onboard battery but no active transmitter?",
        image_context: null,
        options: [
          { id: "a", text: "Active RFID Tag", image: null },
          { id: "b", text: "Passive RFID Tag", image: null },
          { id: "c", text: "Semi-Passive RFID Tag", image: null },
          { id: "d", text: "Dynamic RFID Tag", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.10_2025_IIOT",
        question_text: "Which of the following is NOT true about RFID tags?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "RFID tags can store additional information like temperature and damage status.",
            image: null,
          },
          {
            id: "b",
            text: "RFID tags require a line-of-sight for data reading.",
            image: null,
          },
          {
            id: "c",
            text: "RFID tags are used for product identification and visibility.",
            image: null,
          },
          {
            id: "d",
            text: "RFID tags have better security compared to barcodes.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.11_2025_IIOT",
        question_text:
          "Which network security measure is used to detect and prevent malware?",
        image_context: null,
        options: [
          { id: "a", text: "Access control", image: null },
          { id: "b", text: "Antivirus and antimalware software", image: null },
          { id: "c", text: "Virtual Private Network", image: null },
          { id: "d", text: "Data encryption", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.12_2025_IIOT",
        question_text: "Which of the following is not a key feature of AR?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "AR creates the perception of a mixed reality spectrum.",
            image: null,
          },
          {
            id: "b",
            text: "AR produces an enhanced view of the real world using multiple sensory modalities auditory, haptic, somatosensory, olfactory, and visual.",
            image: null,
          },
          {
            id: "c",
            text: "AR completely replaces the real-world environment with a fully virtual space.",
            image: null,
          },
          {
            id: "d",
            text: "AR utilizes the existing physical environment and overlays additional useful information on top of it.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.13_2025_IIOT",
        question_text: "How does IoT enhance security in facility management?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "By monitoring alarms, smoke detectors, and life safety systems remotely",
            image: null,
          },
          {
            id: "b",
            text: "By disconnecting emergency response systems",
            image: null,
          },
          {
            id: "c",
            text: "By preventing real-time access to security alerts",
            image: null,
          },
          {
            id: "d",
            text: "By limiting surveillance capabilities in buildings",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.14_2025_IIOT",
        question_text:
          "Which of the following is NOT a type of network security?",
        image_context: null,
        options: [
          { id: "a", text: "Intrusion prevention systems", image: null },
          { id: "b", text: "Firewalls", image: null },
          { id: "c", text: "Mobile device security", image: null },
          { id: "d", text: "Manual error tracking", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.15_2025_IIOT",
        question_text:
          "Which of the following is NOT a component of an RFID system?",
        image_context: null,
        options: [
          { id: "a", text: "RFID reader", image: null },
          { id: "b", text: "Antenna", image: null },
          { id: "c", text: "Integrated Circuit Card (ICC)", image: null },
          { id: "d", text: "RFID tag or smart label", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
    ],
  },
  {
    assignment: "Assignment 12",
    week: 12,
    questions: [
      {
        id: "12.1_2025_IIOT",
        question_text:
          "Which of the following is NOT a benefit of IoT in the oil and gas industry?",
        image_context: null,
        options: [
          { id: "a", text: "Improving work safety", image: null },
          { id: "b", text: "Enhancing production efficiency", image: null },
          { id: "c", text: "Eliminating equipment maintenance", image: null },
          { id: "d", text: "Saving cost and time", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.2_2025_IIOT",
        question_text:
          "What is a key application of IoT sensors in the pharmaceutical industry?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Detecting adverse drug reactions (ADR)",
            image: null,
          },
          { id: "b", text: "Eliminate utilization of equipment", image: null },
          {
            id: "c",
            text: "Increasing production costs intentionally",
            image: null,
          },
          {
            id: "d",
            text: "Avoiding remote control of equipment",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.3_2025_IIOT",
        question_text:
          "Which of the following cannot be achieved by performing condition-based monitoring using IoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Predicting quality through continuous monitoring",
            image: null,
          },
          {
            id: "b",
            text: "Analytics-based weather prediction and its impact on farming",
            image: null,
          },
          {
            id: "c",
            text: "Adjust the amount of required material",
            image: null,
          },
          { id: "d", text: "Eliminating pricing models entirely", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.4_2025_IIOT",
        question_text: "How does IoT improve logistics for industries?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Preventing product location tracking with sensors or RFID tags",
            image: null,
          },
          {
            id: "b",
            text: "Ensuring contamination detection and alert notifications",
            image: null,
          },
          {
            id: "c",
            text: "Avoiding warehouse monitoring altogether",
            image: null,
          },
          {
            id: "d",
            text: "Ignoring asset tracking to prevent loss",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.5_2025_IIOT",
        question_text:
          "How does IoT contribute to reducing energy expenses in industries?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "By analyzing real-time data to identify inefficiencies",
            image: null,
          },
          {
            id: "b",
            text: "By increasing regulatory control burdens",
            image: null,
          },
          { id: "c", text: "By avoiding usage pattern analysis", image: null },
          {
            id: "d",
            text: "By ignoring energy usage optimization",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.6_2025_IIOT",
        question_text:
          "Which of the following can be achieved by using IoT in the chemical industry?",
        image_context: null,
        options: [
          { id: "a", text: "Reduction in Energy Expenses", image: null },
          { id: "b", text: "Predictive Maintenance", image: null },
          { id: "c", text: "Improve Logistics", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "12.7_2025_IIOT",
        question_text:
          "Which generation of UAVs introduced transformable designs, 1080 HD video, and three-axis gimbals?",
        image_context: null,
        options: [
          { id: "a", text: "Second Generation", image: null },
          { id: "b", text: "Fourth Generation", image: null },
          { id: "c", text: "Fifth Generation", image: null },
          { id: "d", text: "Sixth Generation", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.8_2025_IIOT",
        question_text: "How do UAVs help in the mining industry?",
        image_context: null,
        options: [
          { id: "a", text: "Digging entire tunnels", image: null },
          {
            id: "b",
            text: "Managing stockpiles and grading control",
            image: null,
          },
          { id: "c", text: "Operating drilling machinery", image: null },
          { id: "d", text: "Refining extracted minerals", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.9_2025_IIOT",
        question_text: "How do UAVs help in agriculture?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Monitor crop stress factors like over-fertilization or drought",
            image: null,
          },
          { id: "b", text: "Reduce human labor completely", image: null },
          { id: "c", text: "Eliminate the need for fertilizers", image: null },
          { id: "d", text: "Increase soil erosion", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.10_2025_IIOT",
        question_text:
          "What is a major advantage(s) of UAVs in telecommunication?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Monitor towers from any angle and height",
            image: null,
          },
          { id: "b", text: "Covers wide areas with less cost", image: null },
          { id: "c", text: "Broadcasting live events", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Multi-Select MCQ",
      },
      {
        id: "12.11_2025_IIOT",
        question_text:
          "Which of the following is most suitable for scanning a huge number of items in a warehouse, checking the missing items, and monitoring full inventory?",
        image_context: null,
        options: [
          { id: "a", text: "Unmanned Aerial Vehicle (UAV)", image: null },
          { id: "b", text: "Automated Guided Vehicle (AGV)", image: null },
          { id: "c", text: "Autonomous Underwater Vehicle (AUV)", image: null },
          { id: "d", text: "Segway", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.12_2025_IIOT",
        question_text:
          "Which generation of UAVs introduced transformable designs with $360^{\\circ}$ gimbals and high-quality video instrumentation?",
        image_context: null,
        options: [
          { id: "a", text: "Third Generation", image: null },
          { id: "b", text: "Fourth Generation", image: null },
          { id: "c", text: "Fifth Generation", image: null },
          { id: "d", text: "Sixth Generation", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.13_2025_IIOT",
        question_text:
          "Which of the following is NOT an application of UAVs in forestry?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Conducting forestry surveys to show information about forest species, including the humans around the forest",
            image: null,
          },
          {
            id: "b",
            text: "Precision forestry and canopy mapping for measuring canopy height, density, and volume estimation",
            image: null,
          },
          { id: "c", text: "Tracking wildland fires", image: null },
          { id: "d", text: "Eradicating endangered species", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.14_2025_IIOT",
        question_text:
          "What is one of the primary applications of UAVs in construction sites?",
        image_context: null,
        options: [
          { id: "a", text: "Painting buildings", image: null },
          { id: "b", text: "Monitoring job sites", image: null },
          { id: "c", text: "Replacing construction workers", image: null },
          {
            id: "d",
            text: "Manufacturing construction materials",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.15_2025_IIOT",
        question_text:
          "Which of the following is/are FALSE about the necessity of case studies?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The case study investigates real-life phenomena through a detailed analysis of related events.",
            image: null,
          },
          {
            id: "b",
            text: "The case study generally selects a vast geographical area or a large number of individuals as the subject matter.",
            image: null,
          },
          { id: "c", text: "Both (a) and (b)", image: null },
          { id: "d", text: "Neither (a) nor (b)", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },
];
