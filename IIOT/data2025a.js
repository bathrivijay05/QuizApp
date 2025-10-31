window.quizData = [
  // Week 1
  {
    assignment: "Assignment 1",
    week: 1,
    questions: [
      {
        id: "1.1_2025_IIOT",
        question_text:
          "Which sensor system type is characterized by an output that oscillates before reaching steady state?",
        image_context: null,
        options: [
          { id: "a", text: "Zero order system.", image: null },
          { id: "b", text: "First order system", image: null },
          { id: "c", text: "Second order system", image: null },
          { id: "d", text: "Linear system", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.2_2025_IIOT",
        question_text:
          "Which of the following is NOT a correct example of a transducer?",
        image_context: null,
        options: [
          { id: "a", text: "Microphone", image: null },
          { id: "b", text: "Wire", image: null },
          { id: "c", text: "Speaker", image: null },
          { id: "d", text: "Antenna", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.3_2025_IIOT",
        question_text:
          "The response of which of the following sensors depends on the magnitude of the direction and orientation of input parameter?",
        image_context: null,
        options: [
          { id: "a", text: "Scalar sensor", image: null },
          { id: "b", text: "Passive sensor", image: null },
          { id: "c", text: "Analog sensor", image: null },
          { id: "d", text: "Vector sensor", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.4_2025_IIOT",
        question_text:
          "Which type of Zigbee node is responsible for network initialization and maintenance?",
        image_context: null,
        options: [
          { id: "a", text: "Router", image: null },
          { id: "b", text: "End Device", image: null },
          { id: "c", text: "Coordinator", image: null },
          { id: "d", text: "Sensor", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.5_2025_IIOT",
        question_text:
          "Which two layers does IEEE 802.15.4 provide a framework for?",
        image_context: null,
        options: [
          { id: "a", text: "MAC and PHY", image: null },
          { id: "b", text: "IP and TCP", image: null },
          { id: "c", text: "HTTP and SSL", image: null },
          { id: "d", text: "FTP and DNS", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.6_2025_IIOT",
        question_text: "How often are time slots allocated in Wireless HART?",
        image_context: null,
        options: [
          { id: "a", text: "1 per second", image: null },
          { id: "b", text: "10ms per slot", image: null },
          { id: "c", text: "100ms per slot", image: null },
          { id: "d", text: "1 second per device", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.7_2025_IIOT",
        question_text: "How do passive RFID tags operate?",
        image_context: null,
        options: [
          { id: "a", text: "Use an internal battery", image: null },
          { id: "b", text: "Use an external solar panel", image: null },
          {
            id: "c",
            text: "Are powered by the reader inductively",
            image: null,
          },
          { id: "d", text: "Are manually activated", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.8_2025_IIOT",
        question_text:
          "Bluetooth technology is based on which type of networking?",
        image_context: null,
        options: [
          { id: "a", text: "Mesh", image: null },
          { id: "b", text: "Piconet (Ad-hoc)", image: null },
          { id: "c", text: "Star", image: null },
          { id: "d", text: "Bus", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.9_2025_IIOT",
        question_text:
          "What process is used by Z-wave to bypass radio dead spots?",
        image_context: null,
        options: [
          { id: "a", text: "Network Slicing", image: null },
          { id: "b", text: "Subnetting", image: null },
          { id: "c", text: "Healing", image: null },
          { id: "d", text: "Network Partitioning", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.10_2025_IIOT",
        question_text:
          "Which of the following best represents the 'trunk' in the IoT analogy?",
        image_context: null,
        options: [
          { id: "a", text: "ARM (Architectural Reference Model)", image: null },
          { id: "b", text: "IoT applications", image: null },
          { id: "c", text: "Communication protocols", image: null },
          { id: "d", text: "End-user interfaces", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.11_2025_IIOT",
        question_text:
          "What is the function of the Registration Interface (RI) in CoRE?",
        image_context: null,
        options: [
          { id: "a", text: "Processes user login", image: null },
          { id: "b", text: "Assigns MAC addresses", image: null },
          { id: "c", text: "Encrypts transmitted data", image: null },
          {
            id: "d",
            text: "Registers IoT resources to the directory",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.12_2025_IIOT",
        question_text: "Which of the following is not a message type in CoAP?",
        image_context: null,
        options: [
          { id: "a", text: "CON", image: null },
          { id: "b", text: "NON", image: null },
          { id: "c", text: "RST", image: null },
          { id: "d", text: "ECHO", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.13_2025_IIOT",
        question_text:
          "Which of the following is an IP-based solution proposed by IETF for IoT?",
        image_context: null,
        options: [
          { id: "a", text: "Zigbee Alliance", image: null },
          { id: "b", text: "Bluetooth SIG", image: null },
          { id: "c", text: "CORE", image: null },
          { id: "d", text: "Wi-Fi Alliance", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "1.14_2025_IIOT",
        question_text:
          "State true or false. Sensor calibration is typically used for weeding-out repeatable errors in sensor readings.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "1.15_2025_IIOT",
        question_text:
          "Which of the following is NOT true about Wireless HART?",
        image_context: null,
        options: [
          { id: "a", text: "It is a license-free protocol", image: null },
          {
            id: "b",
            text: "It is not compatible with any legacy devices",
            image: null,
          },
          {
            id: "c",
            text: "WirelessHART uses the IEEE 802.15.4 standard for its protocols designing",
            image: null,
          },
          {
            id: "d",
            text: "WirelessHART makes device placements more accessible and cheaper",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 2
  {
    assignment: "Assignment 2",
    week: 2,
    questions: [
      {
        id: "2.1_2025_IIOT",
        question_text:
          "Which technological innovation drove the First Industrial Revolution?",
        image_context: null,
        options: [
          { id: "a", text: "Electricity and the assembly line", image: null },
          {
            id: "b",
            text: "Invention of steam engine and construction of railways",
            image: null,
          },
          {
            id: "c",
            text: "Semiconductor fabrication techniques",
            image: null,
          },
          {
            id: "d",
            text: "Artificial Intelligence and Cyber-Physical Systems",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.2_2025_IIOT",
        question_text:
          "Which of the following sectors is considered as the conventional application area for robots?",
        image_context: null,
        options: [
          { id: "a", text: "Automotive industry", image: null },
          { id: "b", text: "Precision agriculture", image: null },
          { id: "c", text: "Nursing", image: null },
          { id: "d", text: "Space exploration", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.3_2025_IIOT",
        question_text:
          "Fill in the blanks. A depression, compared to a recession, is characterized by",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Increased investment in manufacturing",
            image: null,
          },
          {
            id: "b",
            text: "Shorter duration of economic hardship",
            image: null,
          },
          { id: "c", text: "Lower unemployment rates", image: null },
          {
            id: "d",
            text: "Higher levels of economic damage and longer duration",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.4_2025_IIOT",
        question_text:
          'In a manufacturing industry, which system is described as the "main nervous system"?',
        image_context: null,
        options: [
          { id: "a", text: "Supply-Chain Management (SCM)", image: null },
          {
            id: "b",
            text: "Information and Communication Technology (ICT)",
            image: null,
          },
          { id: "c", text: "Energy-price monitoring", image: null },
          { id: "d", text: "Human-resources planning", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.5_2025_IIOT",
        question_text:
          "Fill in the blanks. Emerging markets are expected to be found primarily in",
        image_context: null,
        options: [
          { id: "a", text: "Developed countries", image: null },
          { id: "b", text: "Developing countries", image: null },
          { id: "c", text: "Polar regions", image: null },
          { id: "d", text: "Nations with zero population growth", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.6_2025_IIOT",
        question_text:
          "Which of the following is a key feature of Lean production approach?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It emphasizes automation over manual labor",
            image: null,
          },
          {
            id: "b",
            text: "It focuses solely on financial outcomes",
            image: null,
          },
          {
            id: "c",
            text: "It considers the customer's perspective",
            image: null,
          },
          {
            id: "d",
            text: "It aims to increase inventory levels",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.7_2025_IIOT",
        question_text:
          "Alongside Jidoka, Lean production is founded on which second pillar?",
        image_context: null,
        options: [
          { id: "a", text: "Kaizen", image: null },
          { id: "b", text: "Just-in-Time", image: null },
          { id: "c", text: "Kanban", image: null },
          { id: "d", text: "Total Productive Maintenance", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.8_2025_IIOT",
        question_text:
          'What is the first step in the "5 steps of walking a value stream"?',
        image_context: null,
        options: [
          { id: "a", text: "Build a leadership team", image: null },
          {
            id: "b",
            text: "Walk it discuss value and list ideas",
            image: null,
          },
          { id: "c", text: "Focus on a single value stream", image: null },
          { id: "d", text: "Schedule follow-up", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.9_2025_IIOT",
        question_text:
          "What is included among the fundamental building blocks of a smart business model?",
        image_context: null,
        options: [
          { id: "a", text: "Marketing campaigns", image: null },
          { id: "b", text: "Customer values and key processes", image: null },
          { id: "c", text: "Warehouse locations", image: null },
          { id: "d", text: "Stock exchange metrics", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.10_2025_IIOT",
        question_text:
          "Which of the following represents the key attributes of a smart business model?",
        image_context: null,
        options: [
          { id: "a", text: "Value proposition", image: null },
          { id: "b", text: "Revenue streams", image: null },
          { id: "c", text: "Technologies", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.11_2025_IIOT",
        question_text:
          "Fill in the blanks. Big Data analytics in smart factories can help with",
        image_context: null,
        options: [
          { id: "a", text: "Generating knowledge", image: null },
          { id: "b", text: "Reducing data storage", image: null },
          { id: "c", text: "Eliminating sensors", image: null },
          { id: "d", text: "Increasing manual paperwork", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.12_2025_IIOT",
        question_text:
          "Why are smart factories increasingly necessary in today's industry?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "They reduce the number of products needed",
            image: null,
          },
          {
            id: "b",
            text: "They support rigid, static manufacturing systems",
            image: null,
          },
          {
            id: "c",
            text: "They help achieve high production in less time with reduced risks of failure",
            image: null,
          },
          {
            id: "d",
            text: "They operate only in low-demand markets",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.13_2025_IIOT",
        question_text:
          "State True or False. Smart Grid is considered as a supporting technology for Smart Factories.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "2.14_2025_IIOT",
        question_text:
          "Timely delivery and reliability are highlighted within sustainability under which supply-related concept?",
        image_context: null,
        options: [
          { id: "a", text: "Supply-Chain Management loop", image: null },
          { id: "b", text: "Single-sourcing", image: null },
          { id: "c", text: "Random demand generation", image: null },
          { id: "d", text: "Personal mail delivery", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "2.15_2025_IIOT",
        question_text:
          "State True or False. Industry 4.0 is commonly referred to as the fourth industrial revolution pertaining to digitization in the manufacturing industry.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
    ],
  },

  // Week 3
  {
    assignment: "Assignment 3",
    week: 3,
    questions: [
      {
        id: "3.1_2025_IIOT",
        question_text:
          "What distinguishes CPS from traditional embedded systems?",
        image_context: null,
        options: [
          { id: "a", text: "CPS are always smaller in size", image: null },
          {
            id: "b",
            text: "CPS have limited computational power",
            image: null,
          },
          {
            id: "c",
            text: "CPS are networked set of embedded systems and not resource-constrained",
            image: null,
          },
          { id: "d", text: "CPS rely solely on manual controls", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.2_2025_IIOT",
        question_text:
          "Fill in the blanks. Reactive Computation, as a feature of Cyber-Physical Systems, primarily involves",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Performing computations only when explicitly commanded by a user.",
            image: null,
          },
          {
            id: "b",
            text: "Interacting with the environment in an ongoing manner through observed inputs and outputs.",
            image: null,
          },
          {
            id: "c",
            text: "Executing a fixed set of operations without external influence.",
            image: null,
          },
          {
            id: "d",
            text: "Storing large amounts of data for later analysis.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.3_2025_IIOT",
        question_text:
          "A smart traffic management system that monitors traffic signals and cameras in real-time to optimize traffic flow and provide transit signal priority for emergency vehicles is an example of CPS application in which domain?",
        image_context: null,
        options: [
          { id: "a", text: "Healthcare", image: null },
          { id: "b", text: "Smart Grid", image: null },
          { id: "c", text: "Transportation", image: null },
          { id: "d", text: "Industry", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.4_2025_IIOT",
        question_text:
          "Which of the following are the four key parts that enable collaboration productivity in Industry 4.0?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "IT Proliferation, Single Source of Truth, Industrialization, Coordination",
            image: null,
          },
          {
            id: "b",
            text: "Hardware, Software, Networks, People",
            image: null,
          },
          {
            id: "c",
            text: "Planning, Execution, Monitoring, Control",
            image: null,
          },
          {
            id: "d",
            text: "Design, Development, Testing, Deployment",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.5_2025_IIOT",
        question_text:
          "What is identified as a major challenge for PLM in Industry 4.0?",
        image_context: null,
        options: [
          { id: "a", text: "Lack of skilled workers", image: null },
          { id: "b", text: "High energy consumption", image: null },
          {
            id: "c",
            text: "Short product lifecycle and increasing outsourcing",
            image: null,
          },
          { id: "d", text: "Limited internet connectivity", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.6_2025_IIOT",
        question_text:
          "How does Augmented Reality (AR) function in a user's environment?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Replaces the real world with a fictional setting",
            image: null,
          },
          {
            id: "b",
            text: "Adds digital elements into the actual environment",
            image: null,
          },
          {
            id: "c",
            text: "Creates a full simulation with no real-world connection",
            image: null,
          },
          { id: "d", text: "Only uses audio input", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.7_2025_IIOT",
        question_text:
          "Which sensor modalities are supported by Augmented Reality?",
        image_context: null,
        options: [
          { id: "a", text: "Auditory only", image: null },
          { id: "b", text: "Tactile only", image: null },
          { id: "c", text: "Visual, auditory, and haptic", image: null },
          { id: "d", text: "Taste and smell", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.8_2025_IIOT",
        question_text:
          "According to Patterson, what is Artificial Intelligence (AI)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Deals with studying and creation of computer systems exhibiting some form of intelligent behavior",
            image: null,
          },
          {
            id: "b",
            text: "A method of transmitting wireless data",
            image: null,
          },
          {
            id: "c",
            text: "A system that replicates human hardware",
            image: null,
          },
          {
            id: "d",
            text: "A mechanical replacement for programming languages",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.9_2025_IIOT",
        question_text: "Which of the following is NOT listed as a scope of AI?",
        image_context: null,
        options: [
          { id: "a", text: "Games", image: null },
          { id: "b", text: "Data Entry", image: null },
          { id: "c", text: "Natural Language Processing (NLP)", image: null },
          { id: "d", text: "Robotics", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.10_2025_IIOT",
        question_text:
          "Which of the following is listed as a challenge of AI in IIOT?",
        image_context: null,
        options: [
          { id: "a", text: "Increasing efficiency", image: null },
          { id: "b", text: "Saving costs", image: null },
          { id: "c", text: "Understanding data", image: null },
          { id: "d", text: "Boosting resources", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.11_2025_IIOT",
        question_text:
          'The statement "Data whose meaning is constantly changing" best describes which characteristic of Big Data?',
        image_context: null,
        options: [
          { id: "a", text: "Variety", image: null },
          { id: "b", text: "Veracity", image: null },
          { id: "c", text: "Variability", image: null },
          { id: "d", text: "Visualization", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.12_2025_IIOT",
        question_text:
          "Which of the following is a notable distributed file system derived from the open-source codes of GFS, mentioned in the context of Big Data storage?",
        image_context: null,
        options: [
          { id: "a", text: "HDFS", image: null },
          { id: "b", text: "NoSQL", image: null },
          { id: "c", text: "SQL", image: null },
          { id: "d", text: "RDBMS", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.13_2025_IIOT",
        question_text:
          "Why are traditional Data Warehouse (DW) architectures generally not suitable for Big Data applications?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "They are designed for unstructured data.",
            image: null,
          },
          {
            id: "b",
            text: "They lack the ability to perform parallel processing.",
            image: null,
          },
          {
            id: "c",
            text: "They cannot handle the characteristics that Big Data possess, requiring distributed, parallel performing, scale-out frameworks",
            image: null,
          },
          {
            id: "d",
            text: "They are too expensive for Big Data.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.14_2025_IIOT",
        question_text:
          "Fill in the blanks. ______ acts as the interface for the different applications during the entire lifecycle management of the product.",
        image_context: null,
        options: [
          { id: "a", text: "Product Lifecycle Management", image: null },
          { id: "b", text: "Customer Relationship Management", image: null },
          { id: "c", text: "Enterprise Resource Planning", image: null },
          { id: "d", text: "Manufacturing Execution System", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "3.15_2025_IIOT",
        question_text:
          "Which of the following statements is incorrect about Big Data?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Big data analytics can process real-time data from IoT devices and store them using various storage schemes.",
            image: null,
          },
          {
            id: "b",
            text: "Big data consists only of structured datasets generated by IoT applications.",
            image: null,
          },
          {
            id: "c",
            text: "The classification of data as big data depends on characteristics such as volume, variety, value, velocity, and veracity.",
            image: null,
          },
          {
            id: "d",
            text: "Big data can be used to analyze patterns in network behavior, customer experiences, and connectivity issues.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 4
  {
    assignment: "Assignment 4",
    week: 4,
    questions: [
      {
        id: "4.1_2025_IIOT",
        question_text:
          "Which of the following components of cybersecurity focuses on maintaining the availability, integrity, and confidentiality of business data?",
        image_context: null,
        options: [
          { id: "a", text: "Network Security", image: null },
          { id: "b", text: "Operational Security", image: null },
          { id: "c", text: "Information Security", image: null },
          { id: "d", text: "End-user Education", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.2_2025_IIOT",
        question_text:
          "Network security combines multiple layers of defenses at which locations?",
        image_context: null,
        options: [
          { id: "a", text: "At the edge and in the network.", image: null },
          { id: "b", text: "Only within the network's core.", image: null },
          { id: "c", text: "Only at the edge of the network.", image: null },
          { id: "d", text: "At individual user devices only", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.3_2025_IIOT",
        question_text:
          "Why are IIoT Security Standards required, especially when diverse systems and equipment are integrated on a smart factory floor?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To reduce the cost of implementing IIoT.",
            image: null,
          },
          {
            id: "b",
            text: "Because leaving security to individual IIoT implementers is dangerous and every weak line puts the whole factory at risk.",
            image: null,
          },
          {
            id: "c",
            text: "To ensure that only new systems are implemented, not legacy ones.",
            image: null,
          },
          {
            id: "d",
            text: "To increase the complexity of the smart factory floor.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.4_2025_IIOT",
        question_text:
          "In IIoT, where are sensors and actuators primarily used compared to traditional automation?",
        image_context: null,
        options: [
          { id: "a", text: "Only for critical elements", image: null },
          {
            id: "b",
            text: "Almost everywhere to control, enhance, and optimize various functions",
            image: null,
          },
          { id: "c", text: "Exclusively for emergency systems", image: null },
          { id: "d", text: "To replace human operators entirely", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.5_2025_IIOT",
        question_text:
          "In the mining industry, how do sensor networks with gas sensors, strata monitoring devices, and RFID tags contribute to safety and efficiency?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "They only help in tracking miners' locations.",
            image: null,
          },
          {
            id: "b",
            text: "They are primarily used for communication between miners.",
            image: null,
          },
          {
            id: "c",
            text: "They replace the need for human inspection.",
            image: null,
          },
          {
            id: "d",
            text: "They provide early disaster warning, monitor working conditions, and help locate miners.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.6_2025_IIOT",
        question_text: 'Who coined the term "Industrial Internet"?',
        image_context: null,
        options: [
          { id: "a", text: "IBM", image: null },
          { id: "b", text: "General Electric (GE)", image: null },
          { id: "c", text: "Intel", image: null },
          { id: "d", text: "Siemens", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.7_2025_IIOT",
        question_text:
          "What are the three key elements of the Industrial Internet?",
        image_context: null,
        options: [
          { id: "a", text: "Big Data, Cloud, and AI", image: null },
          {
            id: "b",
            text: "Intelligent Machines, Advanced Analytics. People at Work",
            image: null,
          },
          { id: "c", text: "Sensors, Processors, and Actuators", image: null },
          { id: "d", text: "Software, Hardware, and Middleware", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.8_2025_IIOT",
        question_text: "In a milk packaging unit, how is flow measured?",
        image_context: null,
        options: [
          { id: "a", text: "Using a thermometer", image: null },
          {
            id: "b",
            text: "Via a spinning impeller that sends signals when milk flows",
            image: null,
          },
          { id: "c", text: "With a smart camera", image: null },
          { id: "d", text: "Using a GPS module", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.9_2025_IIOT",
        question_text:
          "Which component is responsible for converting analog data to digital data in a smart sensor node?",
        image_context: null,
        options: [
          { id: "a", text: "Processor", image: null },
          { id: "b", text: "Memory", image: null },
          { id: "c", text: "ADC", image: null },
          { id: "d", text: "DAC", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.10_2025_IIOT",
        question_text:
          "In the context of the agriculture industry, what is the primary use of smart sensors like soil and water sensors?",
        image_context: null,
        options: [
          { id: "a", text: "To track real-time objects.", image: null },
          { id: "b", text: "To predict driver destinations.", image: null },
          {
            id: "c",
            text: "To prevent patient falls in hospitals.",
            image: null,
          },
          {
            id: "d",
            text: "For accurate use of fertilizers and determining crop health.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.11_2025_IIOT",
        question_text:
          "Fill in the blanks. Thames Water's smart water management system, as an example of Industrial Process 4.0 operation efficiency, primarily benefits from",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Data monetization and pay-per-use models.",
            image: null,
          },
          {
            id: "b",
            text: "Sensor-based equipment status monitoring and failure detection.",
            image: null,
          },
          {
            id: "c",
            text: "Augmented Reality-based problem diagnosis.",
            image: null,
          },
          {
            id: "d",
            text: "Controlled power generation using weather forecasts.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.12_2025_IIOT",
        question_text:
          "Fill in the blanks. Interoperability in the design philosophy of IIoT for Industrial Processes refers to",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Empowering smart objects to reduce human intervention.",
            image: null,
          },
          {
            id: "b",
            text: "Facilitating communication between heterogeneous objects.",
            image: null,
          },
          {
            id: "c",
            text: "Virtualization of objects and digital models.",
            image: null,
          },
          {
            id: "d",
            text: "Enabling smart objects to take independent decisions.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.13_2025_IIOT",
        question_text:
          'In the 5C architecture of Cyber-Physical Systems, what does the "Conversion Layer" do?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "Interprets sensors data for information",
            image: null,
          },
          { id: "b", text: "Stores backup data", image: null },
          {
            id: "c",
            text: "Converts analog signal to mechanical action",
            image: null,
          },
          { id: "d", text: "Synchronizes robotic arms", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "4.14_2025_IIOT",
        question_text:
          "State true or false. In the case of spear phishing, the attackers send thousands of deceitful emails that resemble actual emails from credible sources while email phishing attacks are targeted to a specific person or organization to obtain sensitive information.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["b"],
        type: "True/False",
      },
      {
        id: "4.15_2025_IIOT",
        question_text:
          "Which of the following statements is incorrect about the CIA triad in network and computer system security?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Confidentiality ensures that information is concealed and protected from unauthorized access.",
            image: null,
          },
          {
            id: "b",
            text: "Integrity refers to maintaining the accuracy and consistency of data, and can always be violated by intentional attacks.",
            image: null,
          },
          {
            id: "c",
            text: "Availability is compromised when authorized users are denied access to information due to network attacks like DDoS.",
            image: null,
          },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 5
  {
    assignment: "Assignment 5",
    week: 5,
    questions: [
      {
        id: "5.1_2025_IIOT",
        question_text:
          'According to the ICP DAS framework for Industry 4.0, under which category does "System health diagnosis" fall?',
        image_context: null,
        options: [
          { id: "a", text: "Energy", image: null },
          { id: "b", text: "Safety", image: null },
          { id: "c", text: "M2M", image: null },
          { id: "d", text: "Manufacturing", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.2_2025_IIOT",
        question_text:
          "Kaeser Kompressoren coined a new term for their service-based business model, in which users pay per cubic meter of compressed air used. What is this model called?",
        image_context: null,
        options: [
          { id: "a", text: "Renting Model", image: null },
          { id: "b", text: "Selling Model", image: null },
          { id: "c", text: "Subscription Model", image: null },
          { id: "d", text: "Air-as-a-Service", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.3_2025_IIOT",
        question_text:
          "Which company is highlighted for its use of smart glasses for fault detection in its manufacturing process?",
        image_context: null,
        options: [
          { id: "a", text: "KUKA", image: null },
          { id: "b", text: "Maersk", image: null },
          { id: "c", text: "Boeing", image: null },
          { id: "d", text: "Cisco", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.4_2025_IIOT",
        question_text:
          'What is a business model as defined by the "Business Model Generation" book?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "The organizational and financial architecture of a business",
            image: null,
          },
          {
            id: "b",
            text: "The rationale of how an organization creates, delivers, and captures value",
            image: null,
          },
          {
            id: "c",
            text: "A description of how a business intends to earn profits",
            image: null,
          },
          {
            id: "d",
            text: "The network of suppliers and partners that optimize a business",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.5_2025_IIOT",
        question_text:
          'Which IoT business model relieves the customer from the responsibilities of ownership and maintenance, focusing on a "Pay-per-outcome" approach?',
        image_context: null,
        options: [
          { id: "a", text: "Subscription Model", image: null },
          { id: "b", text: "Asset-Sharing Model", image: null },
          { id: "c", text: "Outcome-Based Model", image: null },
          { id: "d", text: "IoT-as-a-Service", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.6_2025_IIOT",
        question_text:
          "In a Cloud-Based Business Model, how do customers typically access services?",
        image_context: null,
        options: [
          { id: "a", text: "By outright purchase", image: null },
          { id: "b", text: "By manual installation", image: null },
          { id: "c", text: "Via government funding", image: null },
          {
            id: "d",
            text: "Through temporary leasing of resources",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.7_2025_IIOT",
        question_text:
          "What is the primary purpose of the revenue model in Service-Oriented Business Models in IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "Only subscription fees", image: null },
          { id: "b", text: "Physical sales", image: null },
          { id: "c", text: "Monetization of collected data.", image: null },
          { id: "d", text: "Rental income", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.8_2025_IIOT",
        question_text:
          "Which type of Cloud-Based Business Model aims at providing the required hardware and software online in the cloud?",
        image_context: null,
        options: [
          { id: "a", text: "Software-as-a-Service (SaaS)", image: null },
          { id: "b", text: "Platform-as-a-Service (PaaS)", image: null },
          { id: "c", text: "Infrastructure-as-a-Service (IaaS)", image: null },
          { id: "d", text: "Business-as-a-Service (BaaS)", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.9_2025_IIOT",
        question_text:
          "What is the purpose of the Industrial Internet Reference Architecture (IIRA)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Allowing interoperability and guiding IIoT technologies",
            image: null,
          },
          { id: "b", text: "Reducing network speed", image: null },
          { id: "c", text: "Designing personal computer systems", image: null },
          { id: "d", text: "Building only mobile applications", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.10_2025_IIOT",
        question_text:
          "An IIoT product is being tested in different continents for performance, standardization, and interoperability before its release. Which organization is most likely facilitating this?",
        image_context: null,
        options: [
          { id: "a", text: "IEEE", image: null },
          {
            id: "b",
            text: "Industrial Internet Consortium (IIC)",
            image: null,
          },
          { id: "c", text: "ISO", image: null },
          { id: "d", text: "NIST", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.11_2025_IIOT",
        question_text:
          "Which of the following is an example of a Lagging KPI for OSH?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Frequency of observed unsafe behaviour",
            image: null,
          },
          { id: "b", text: "Number of OSH audits", image: null },
          {
            id: "c",
            text: "Number of lost-time incident frequency rate",
            image: null,
          },
          {
            id: "d",
            text: "Percentage of managers with adequate OSH training",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.12_2025_IIOT",
        question_text:
          "In the usage Viewpoint, which element of an Activity defines the conditions under which the activity is initiated?",
        image_context: null,
        options: [
          { id: "a", text: "Workflow", image: null },
          { id: "b", text: "Effects", image: null },
          { id: "c", text: "Constraints", image: null },
          { id: "d", text: "Trigger", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.13_2025_IIOT",
        question_text:
          "In the context of the Usage Viewpoint of the Industrial Internet Reference Architecture (IIRA), what is considered the basic unit of work?",
        image_context: null,
        options: [
          { id: "a", text: "System", image: null },
          { id: "b", text: "Network", image: null },
          { id: "c", text: "Component", image: null },
          { id: "d", text: "Task", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.14_2025_IIOT",
        question_text:
          "Which of the following represents key feature(s) of the process-oriented business model?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Execution of various business processes within the organization",
            image: null,
          },
          {
            id: "b",
            text: "Presence of process owners to supervise the processes",
            image: null,
          },
          { id: "c", text: "Evaluation of process performance", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "5.15_2025_IIOT",
        question_text:
          "Fill in the blanks. ______ is an electrical framework that provides two-way communication between the consumers and suppliers. With the help of smart meters, smart appliances, and energy-efficient resources, it efficiently delivers electricity to the consumers.",
        image_context: null,
        options: [
          { id: "a", text: "Smart grid", image: null },
          { id: "b", text: "Load Balancer", image: null },
          { id: "c", text: "Railway Signaling System", image: null },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 6
  {
    assignment: "Assignment 6",
    week: 6,
    questions: [
      {
        id: "6.1_2025_IIOT",
        question_text:
          'In the diagram for the manufacturing process, which unit comes immediately after the "Quality Testing Unit"?',
        image_context: null,
        options: [
          { id: "a", text: "Packaging Unit", image: null },
          { id: "b", text: "Production Unit", image: null },
          { id: "c", text: "Product Counting Unit", image: null },
          { id: "d", text: "Transporting Unit", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.2_2025_IIOT",
        question_text:
          "The analog temperature sensor LM35 generates an output voltage that is linearly proportional to what temperature scale?",
        image_context: null,
        options: [
          { id: "a", text: "Fahrenheit", image: null },
          { id: "b", text: "Kelvin", image: null },
          { id: "c", text: "Celsius", image: null },
          { id: "d", text: "Rankine", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.3_2025_IIOT",
        question_text:
          "The MQ-2 gas sensor is specifically mentioned to detect the concentration of which gases?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Oxygen, Nitrogen, and Carbon Dioxide",
            image: null,
          },
          { id: "b", text: "LPG, propane, and hydrogen", image: null },
          {
            id: "c",
            text: "Methane, Ammonia, and Carbon Monoxide",
            image: null,
          },
          {
            id: "d",
            text: "Ozone, Sulfur Dioxide, and Nitrous Oxide",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.4_2025_IIOT",
        question_text:
          "What happens to the resistance of an n-type MOS sensor when it is exposed to a reducing gas?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It increases with respect to the Baseline resistance",
            image: null,
          },
          {
            id: "b",
            text: "It decreases with respect to the Baseline resistance",
            image: null,
          },
          { id: "c", text: "It remains unchanged", image: null },
          { id: "d", text: "It fluctuates randomly", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.5_2025_IIOT",
        question_text:
          'According to the working principle of MOS gas sensors, what is the "Optimum Temperature"?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "The maximum temperature the sensor can withstand",
            image: null,
          },
          {
            id: "b",
            text: "The minimum temperature required for operation",
            image: null,
          },
          {
            id: "c",
            text: "The particular temperature at which the sensor gives the best response",
            image: null,
          },
          {
            id: "d",
            text: "The temperature of the surrounding environment",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.6_2025_IIOT",
        question_text:
          "ModBus-TCP uses which protocol suite for data transmission?",
        image_context: null,
        options: [
          { id: "a", text: "RS-232", image: null },
          { id: "b", text: "TCP/IP & Ethernet", image: null },
          { id: "c", text: "CAN", image: null },
          { id: "d", text: "IEEE 802.15.4", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.7_2025_IIOT",
        question_text: "What does the acronym EtherCAT stand for?",
        image_context: null,
        options: [
          { id: "a", text: "Ethernet Control and Transmission", image: null },
          {
            id: "b",
            text: "Ethernet Common Automation Technology",
            image: null,
          },
          {
            id: "c",
            text: "Ethernet Control Automation Technology",
            image: null,
          },
          {
            id: "d",
            text: "Ethernet Communication and Telemetry",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.8_2025_IIOT",
        question_text:
          "In the ModBus-TCP data frame, what is the name of the 7-byte header that identifies the Application Data Unit (ADU)?",
        image_context: null,
        options: [
          { id: "a", text: "TCP Header", image: null },
          { id: "b", text: "PDU Header", image: null },
          {
            id: "c",
            text: "MBAP (MODBUS Application Protocol) header",
            image: null,
          },
          { id: "d", text: "Ethernet Header", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.9_2025_IIOT",
        question_text:
          "Which variant of CC-Link offers the highest transmission rate of 1 Gbps?",
        image_context: null,
        options: [
          { id: "a", text: "Standard CC-Link", image: null },
          { id: "b", text: "CC-Link LT", image: null },
          { id: "c", text: "CC-Link Safety", image: null },
          { id: "d", text: "CC-Link IE (Industrial Ethernet)", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.10_2025_IIOT",
        question_text: "Profibus is based on which international standard?",
        image_context: null,
        options: [
          { id: "a", text: "IEC 61158", image: null },
          { id: "b", text: "IEEE 802.3", image: null },
          { id: "c", text: "ISO 9001", image: null },
          { id: "d", text: "IEC 61850", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.11_2025_IIOT",
        question_text: "What is the Availability requirement for URLLC?",
        image_context: null,
        options: [
          { id: "a", text: "90% availability", image: null },
          { id: "b", text: "99% availability", image: null },
          { id: "c", text: "$99.9999%$ availability (6-nines)", image: null },
          { id: "d", text: "50% availability", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.12_2025_IIOT",
        question_text:
          "What is the end-to-end round trip latency supported by the Tactile Internet?",
        image_context: null,
        options: [
          { id: "a", text: "$< 10$ ms", image: null },
          { id: "b", text: "$< 1$ ms", image: null },
          { id: "c", text: "$< 100$ ms", image: null },
          { id: "d", text: "$< 250$ ms", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.13_2025_IIOT",
        question_text: "Which frequency bands are used by 5G NR?",
        image_context: null,
        options: [
          { id: "a", text: "Only below 1 GHz", image: null },
          {
            id: "b",
            text: "Low band (<1 GHz), middle band (1-6 GHz), and high band (>24 GHz) millimeter wave",
            image: null,
          },
          { id: "c", text: "Only Wi-Fi bands", image: null },
          { id: "d", text: "Satellite communication bands", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "6.14_2025_IIOT",
        question_text:
          "State true or false. The PROFINet protocol handles data transmission of large packets between PLCs and PCs, as well as enable integration with the Internet and Intranet through Ethernet.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "6.15_2025_IIOT",
        question_text:
          "Fill in the blanks. DeviceNet was designed by Rockwell Automation to enable communications between ______, and ______.",
        image_context: null,
        options: [
          { id: "a", text: "PLCs, field devices", image: null },
          {
            id: "b",
            text: "PLCs, human-machine interfaces (HMIS)",
            image: null,
          },
          { id: "c", text: "Routers, enterprise servers", image: null },
          { id: "d", text: "SCADA systems, cloud platforms", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 7
  {
    assignment: "Assignment 7",
    week: 7,
    questions: [
      {
        id: "7.1_2025_IIOT",
        question_text: "Which modulation technique does LoRa use?",
        image_context: null,
        options: [
          { id: "a", text: "Amplitude Modulation", image: null },
          { id: "b", text: "Frequency Modulation", image: null },
          { id: "c", text: "Chirp Spread Spectrum", image: null },
          { id: "d", text: "Time Division Multiplexing", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.2_2025_IIOT",
        question_text:
          "Fill in the blanks. SIGFOX network give a performance of upto ______ messages per day with a payload of ______ bytes per message.",
        image_context: null,
        options: [
          { id: "a", text: "140, 12", image: null },
          { id: "b", text: "50, 2", image: null },
          { id: "c", text: "60, 3", image: null },
          { id: "d", text: "100, 10", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.3_2025_IIOT",
        question_text:
          "What is the key difference between a Zigbee Router and a Zigbee End Device?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "A router can relay information to other nodes, while an end device cannot.",
            image: null,
          },
          {
            id: "b",
            text: "An end device is the root of the network, while a router is not.",
            image: null,
          },
          {
            id: "c",
            text: "A router can only connect to a coordinator, while an end device can connect to any node.",
            image: null,
          },
          {
            id: "d",
            text: "There is no functional difference between them.",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.4_2025_IIOT",
        question_text:
          "What software tool is used to configure Xbee modules before communication?",
        image_context: null,
        options: [
          { id: "a", text: "Arduino IDE", image: null },
          { id: "b", text: "Python", image: null },
          { id: "c", text: "XCTU", image: null },
          { id: "d", text: "Wireshark", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.5_2025_IIOT",
        question_text:
          "Which characteristic of IIoT data refers to the fact that it comes from heterogeneous sensors with different metrics, precision, and formats?",
        image_context: null,
        options: [
          { id: "a", text: "Real-time", image: null },
          { id: "b", text: "Dynamic heterogeneity", image: null },
          { id: "c", text: "Polymorphism", image: null },
          { id: "d", text: "Correlation", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.6_2025_IIOT",
        question_text: "What is the role of middleware in an IIoT system?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is the physical hardware layer of sensors and actuators.",
            image: null,
          },
          {
            id: "b",
            text: "It is the final user-facing application.",
            image: null,
          },
          {
            id: "c",
            text: "It is the communication protocol for data transfer.",
            image: null,
          },
          {
            id: "d",
            text: "It is a software layer between the infrastructure and application layers that provides services and supports heterogeneity.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.7_2025_IIOT",
        question_text:
          'Which type of analytics answers the question, "What will happen and why?"',
        image_context: null,
        options: [
          { id: "a", text: "Predictive", image: null },
          { id: "b", text: "Descriptive", image: null },
          { id: "c", text: "Diagnostic", image: null },
          { id: "d", text: "Prescriptive", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.8_2025_IIOT",
        question_text:
          "Which type of analytics aims to determine the best possible business decision?",
        image_context: null,
        options: [
          { id: "a", text: "Predictive", image: null },
          { id: "b", text: "Descriptive", image: null },
          { id: "c", text: "Diagnostic", image: null },
          { id: "d", text: "Prescriptive", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.9_2025_IIOT",
        question_text: "What is the primary goal of the FarmBeats platform?",
        image_context: null,
        options: [
          { id: "a", text: "To manage smart city infrastructure", image: null },
          {
            id: "b",
            text: "To enable data-driven precision agriculture",
            image: null,
          },
          { id: "c", text: "To automate cognitive manufacturing", image: null },
          { id: "d", text: "To monitor the health of vineyards", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.10_2025_IIOT",
        question_text:
          "In the iRobot-Factory architecture, which component is responsible for cloud-based, high-performance, long-term data analytics using AI?",
        image_context: null,
        options: [
          { id: "a", text: "Intelligent Terminal", image: null },
          { id: "b", text: "Cognitive Engine", image: null },
          { id: "c", text: "Edge Computing Node", image: null },
          { id: "d", text: "Intelligent Device Unit", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.11_2025_IIOT",
        question_text:
          'In an Industrial Control System, what are the "Set Points"?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "The standard values of process parameters for controlled operation",
            image: null,
          },
          {
            id: "b",
            text: "The values of process parameters measured by sensors",
            image: null,
          },
          {
            id: "c",
            text: "The process variables that are modified by the controller",
            image: null,
          },
          {
            id: "d",
            text: "The final output of the industrial process",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.12_2025_IIOT",
        question_text:
          "Which of the following best describes a Closed Loop (Feedback) Control system?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The control decision is made without considering the process variable",
            image: null,
          },
          {
            id: "b",
            text: "It operates independently of the measured output",
            image: null,
          },
          {
            id: "c",
            text: "The control decision depends on the measured value of the process variable",
            image: null,
          },
          {
            id: "d",
            text: "It is not used in industrial automation",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.13_2025_IIOT",
        question_text:
          "Fill in the blanks. Programmable Logic Controllers (PLCs) comprises of",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Processor unit, memory unit, power supply and communication modules",
            image: null,
          },
          {
            id: "b",
            text: "Sensor array, signal generator, analog filter, and PLC terminal",
            image: null,
          },
          {
            id: "c",
            text: "Actuator controller, logic gate module, and cooling system",
            image: null,
          },
          {
            id: "d",
            text: "Voltage regulator, touchscreen unit, hard disk, and keyboard interface",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.14_2025_IIOT",
        question_text:
          "Which of the following statements about the DHT sensor in IoT applications is correct?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It measures only temperature and requires no external library.",
            image: null,
          },
          {
            id: "b",
            text: "It measures both humidity and temperature, and Adafruit provides a dedicated library for its use.",
            image: null,
          },
          {
            id: "c",
            text: "It measures pressure and temperature using built-in Python functions.",
            image: null,
          },
          {
            id: "d",
            text: "It measures humidity only and is used exclusively for industrial automation and does not need external support.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "7.15_2025_IIOT",
        question_text:
          "Which of the following best describes the role of a SCADA system in industrial processes?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is only a hardware-based system for controlling pumps and valves locally.",
            image: null,
          },
          {
            id: "b",
            text: "It enables real-time remote monitoring and control of industrial processes using sensors and actuators, with data visualization through HΜΙ.",
            image: null,
          },
          {
            id: "c",
            text: "It is a vendor-specific communication protocol designed only for power plants.",
            image: null,
          },
          {
            id: "d",
            text: "It functions as a replacement for PLCs without data logging or visualization features.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 8
  {
    assignment: "Assignment 8",
    week: 8,
    questions: [
      {
        id: "8.1_2025_IIOT",
        question_text: "What is the goal of prognostic analytics in IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "Identify root cause of an anomaly", image: null },
          {
            id: "b",
            text: "Inform about remaining useful life of an asset",
            image: null,
          },
          { id: "c", text: "Detect real-time behavior", image: null },
          { id: "d", text: "Filter low-quality data", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.2_2025_IIOT",
        question_text: "What are the three types of IIoT Analytics?",
        image_context: null,
        options: [
          { id: "a", text: "Logical, Statistical, and Neural", image: null },
          { id: "b", text: "Predictive, Adaptive, and Reactive", image: null },
          {
            id: "c",
            text: "Descriptive, Predictive, and Prescriptive",
            image: null,
          },
          { id: "d", text: "Linear, Non-linear, and Mixed", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.3_2025_IIOT",
        question_text:
          "What is a key difference between the process of Machine Learning and Deep Learning?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Machine Learning uses neural networks, while Deep Learning does not.",
            image: null,
          },
          {
            id: "b",
            text: 'Deep Learning requires the "Feature extraction" step, while Machine Learning does not.',
            image: null,
          },
          {
            id: "c",
            text: "Machine Learning requires manual feature extraction, while Deep Learning learns features automatically.",
            image: null,
          },
          {
            id: "d",
            text: "Deep Learning is a type of unsupervised learning only.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.4_2025_IIOT",
        question_text:
          "According to the Venn diagram, Data Science is the intersection of Computer Science, Domain Expertise, and what other field?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Mathematics and Statistical Research",
            image: null,
          },
          { id: "b", text: "Mechanical Engineering", image: null },
          { id: "c", text: "Business Management", image: null },
          { id: "d", text: "Psychology", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.5_2025_IIOT",
        question_text:
          "Supervised learning is divided into two main types of problems. What are they?",
        image_context: null,
        options: [
          { id: "a", text: "Clustering and Association", image: null },
          { id: "b", text: "K-Means and Fuzzy c-Means", image: null },
          { id: "c", text: "State and Action", image: null },
          { id: "d", text: "Regression and Classification", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.6_2025_IIOT",
        question_text:
          'In Reinforcement Learning, what does an "agent" learn from?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "An environment by taking actions and receiving rewards or penalties",
            image: null,
          },
          {
            id: "b",
            text: "An unlabeled dataset with hidden patterns",
            image: null,
          },
          {
            id: "c",
            text: "A labeled dataset provided by a supervisor",
            image: null,
          },
          { id: "d", text: "A set of predefined rules", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.7_2025_IIOT",
        question_text:
          "How does the performance of Deep Learning typically compare to traditional Machine Learning as the amount of data increases?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "The performance of both levels off at the same point.",
            image: null,
          },
          {
            id: "b",
            text: "Traditional ML performance continues to improve, while DL performance levels off.",
            image: null,
          },
          {
            id: "c",
            text: "DL performance often continues to improve with more data, while traditional ML performance may level off.",
            image: null,
          },
          {
            id: "d",
            text: "Both show decreased performance with more data.",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.8_2025_IIOT",
        question_text:
          "The deep learning concept of breaking a complex task into simpler tasks follows what principle?",
        image_context: null,
        options: [
          { id: "a", text: "A nested hierarchy of concepts", image: null },
          { id: "b", text: "A linear regression model", image: null },
          { id: "c", text: "Random decision making", image: null },
          { id: "d", text: "A last-in, first-out stack", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.9_2025_IIOT",
        question_text:
          "Which of the following statements about MindSphere is false?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "It is a cloud-based operating system platform for IoT.",
            image: null,
          },
          {
            id: "b",
            text: "It offers enterprise-oriented solutions.",
            image: null,
          },
          {
            id: "c",
            text: "It is an open platform-as-a-service that integrates with AWS.",
            image: null,
          },
          {
            id: "d",
            text: "It is a mobile app used only for home automation.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.10_2025_IIOT",
        question_text:
          "What is a major reason for needing cloud computing in IIoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To decrease the number of connected devices.",
            image: null,
          },
          {
            id: "b",
            text: "To handle the huge amount of unorganized and heterogeneous data, including data from M2M sensors.",
            image: null,
          },
          {
            id: "c",
            text: "To ensure all data has the same quality.",
            image: null,
          },
          { id: "d", text: "To reduce the need for networking.", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.11_2025_IIOT",
        question_text:
          "Which IIoT platform, offered by a software firm, provides a storage service called C3 Data Lake for unstructured data?",
        image_context: null,
        options: [
          { id: "a", text: "GE Predix", image: null },
          { id: "b", text: "Siemens MindSphere", image: null },
          { id: "c", text: "C3 IoT", image: null },
          { id: "d", text: "Uptake", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.12_2025_IIOT",
        question_text:
          "Which of the following is a characteristic of a good SLA?",
        image_context: null,
        options: [
          { id: "a", text: "Vague and unmeasurable", image: null },
          { id: "b", text: "Unachievable", image: null },
          { id: "c", text: "Uncontrollable", image: null },
          {
            id: "d",
            text: "Quantifiable and Mutually Acceptable",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.13_2025_IIOT",
        question_text:
          "Which of the following represents the characteristics of a good SLA?",
        image_context: null,
        options: [
          { id: "a", text: "Affordable", image: null },
          { id: "b", text: "Achievable", image: null },
          { id: "c", text: "Quantifiable", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "8.14_2025_IIOT",
        question_text:
          "State true or false. Based on the application type, two popular types of deep learning methods are convolutional neural networks (CNNs) and recurrent neural networks (RNNs).",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "8.15_2025_IIOT",
        question_text:
          "Which of the following are the key characteristics that classify data as Big Data in IoT applications?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Accuracy, redundancy, scalability, latency, security",
            image: null,
          },
          {
            id: "b",
            text: "Volume, variety, value, velocity, veracity",
            image: null,
          },
          {
            id: "c",
            text: "Throughput, delay, integrity, topology, clustering",
            image: null,
          },
          {
            id: "d",
            text: "Capacity, compatibility, complexity, connectivity, coverage",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 9
  {
    assignment: "Assignment 9",
    week: 9,
    questions: [
      {
        id: "9.1_2025_IIOT",
        question_text:
          "In the Fog Computing architecture for IIoT, where are the Fog Devices located?",
        image_context: null,
        options: [
          { id: "a", text: "Above the Cloud layer.", image: null },
          {
            id: "b",
            text: "Between the Cloud and the Industrial End Devices.",
            image: null,
          },
          {
            id: "c",
            text: "As part of the Industrial End Devices.",
            image: null,
          },
          { id: "d", text: "Inside the Cloud.", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.2_2025_IIOT",
        question_text: "Which of the following is not a fog platform provider?",
        image_context: null,
        options: [
          { id: "a", text: "FogHorn", image: null },
          { id: "b", text: "Nebbiolo Technologies", image: null },
          { id: "c", text: "Crosser", image: null },
          { id: "d", text: "Sony", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.3_2025_IIOT",
        question_text:
          'Which command in R programming is used to see the list of reserved words like "if", "else", "TRUE", and "NULL"?',
        image_context: null,
        options: [
          { id: "a", text: "?reserved", image: null },
          { id: "b", text: "list.reserved()", image: null },
          { id: "c", text: "show.words()", image: null },
          { id: "d", text: "getKeywords()", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.4_2025_IIOT",
        question_text:
          "What is the result of the following expression in R programming, if N is a vector containing integers from 1 to 10? 15 %in% N",
        image_context: null,
        options: [
          { id: "a", text: "TRUE", image: null },
          { id: "b", text: "1", image: null },
          { id: "c", text: "FALSE", image: null },
          { id: "d", text: "An error", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.5_2025_IIOT",
        question_text:
          "Which of the following is NOT a data structure in Julia programming?",
        image_context: null,
        options: [
          { id: "a", text: "Tuples", image: null },
          { id: "b", text: "Dictionary", image: null },
          { id: "c", text: "Coroutine", image: null },
          { id: "d", text: "Arrays", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.6_2025_IIOT",
        question_text:
          "Which of the following does NOT fall under the essential characteristics of cloud computing according to NIST?",
        image_context: null,
        options: [
          { id: "a", text: "On-demand self-service", image: null },
          { id: "b", text: "Broad network access", image: null },
          { id: "c", text: "Resource pooling", image: null },
          { id: "d", text: "Manual server configuration", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.7_2025_IIOT",
        question_text:
          "Which of the following does NOT represent a NoSQL database?",
        image_context: null,
        options: [
          { id: "a", text: "Key-value databases", image: null },
          { id: "b", text: "Column-oriented databases", image: null },
          { id: "c", text: "Document-oriented databases", image: null },
          { id: "d", text: "Relational databases", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.8_2025_IIOT",
        question_text:
          "State true or false. In Hadoop Distributed File System (HDFS), the Namenode stores the actual data blocks, while Datanodes maintain the metadata information about the files.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["b"],
        type: "True/False",
      },
      {
        id: "9.9_2025_IIOT",
        question_text:
          "Which property of a DCN refers to its ability to support any service on any server at any time?",
        image_context: null,
        options: [
          { id: "a", text: "Security", image: null },
          { id: "b", text: "Reliability", image: null },
          { id: "c", text: "Scalability", image: null },
          { id: "d", text: "Agility", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.10_2025_IIOT",
        question_text:
          "What is the main architectural difference between the DCell/BCube topologies and the traditional Three-Tier topology?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "DCell and BCube are server-centric, providing better scalability and fault tolerance.",
            image: null,
          },
          {
            id: "b",
            text: "DCell and BCube are switch-centric, while the Three-Tier topology is server-centric.",
            image: null,
          },
          {
            id: "c",
            text: "DCell and BCube use a single core switch, creating a single point of failure.",
            image: null,
          },
          {
            id: "d",
            text: "The Three-Tier topology provides better server-to-server bandwidth.",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.11_2025_IIOT",
        question_text:
          "What is the core principle of a Software-Defined Data Center (SDDC)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "All hardware must be from a single vendor.",
            image: null,
          },
          {
            id: "b",
            text: "The data center infrastructure is virtualized and abstracted from the underlying hardware.",
            image: null,
          },
          {
            id: "c",
            text: "The control and data planes are tightly coupled within the hardware.",
            image: null,
          },
          {
            id: "d",
            text: "It relies on manual configuration for all provisioning and operations.",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.12_2025_IIOT",
        question_text:
          "In the SDN architecture, which plane contains the physical forwarding devices (switches and routers)?",
        image_context: null,
        options: [
          { id: "a", text: "Data Plane", image: null },
          { id: "b", text: "Control Plane", image: null },
          { id: "c", text: "Application Plane", image: null },
          { id: "d", text: "Management Plane", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.13_2025_IIOT",
        question_text:
          "Which protocol is commonly used to facilitate communication between the SDN controller and the forwarding devices?",
        image_context: null,
        options: [
          { id: "a", text: "OpenFlow", image: null },
          { id: "b", text: "BGP", image: null },
          { id: "c", text: "TCP/IP", image: null },
          { id: "d", text: "HTTP", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.14_2025_IIOT",
        question_text:
          "Which of the following software platforms is commonly required to perform executions on semi-structured data such as JSON or NoSQL?",
        image_context: null,
        options: [
          { id: "a", text: "Oracle RDBMS", image: null },
          { id: "b", text: "Microsoft Excel", image: null },
          { id: "c", text: "Apache Hadoop", image: null },
          { id: "d", text: "PowerPoint", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "9.15_2025_IIOT",
        question_text:
          "In Industry 4.0, why is Big Data analytics essential for handling the huge amount of data generated by IoT devices and sensors?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To eliminate the use of IoT devices in operation",
            image: null,
          },
          {
            id: "b",
            text: "To store data only in traditional relational databases",
            image: null,
          },
          {
            id: "c",
            text: "To extract actionable insights for predictive maintenance, process optimization, and quality control",
            image: null,
          },
          {
            id: "d",
            text: "To eliminate the need for cloud and fog computing in smart factories",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 10
  {
    assignment: "Assignment 10",
    week: 10,
    questions: [
      {
        id: "10.1_2025_IIOT",
        question_text:
          "State true or false. The main role of $\\mu$SDN in the SD-6TiSCH protocol stack is to minimize control overhead.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "10.2_2025_IIOT",
        question_text:
          "In SD-IIoT (Software Defined Industrial IoT) Architecture, network monitoring is performed by which of the following component?",
        image_context: null,
        options: [
          { id: "a", text: "Application", image: null },
          { id: "b", text: "Data Plane", image: null },
          { id: "c", text: "Control Plane", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.3_2025_IIOT",
        question_text: "What are the basic goals of information security?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Facilitate Availability. Integrity, and Confidentiality",
            image: null,
          },
          {
            id: "b",
            text: "Increase production cost, and promote manual operations only",
            image: null,
          },
          {
            id: "c",
            text: "Decrease scalability, interoperability, and real-time performance",
            image: null,
          },
          {
            id: "d",
            text: "Increase latency, and minimize throughput",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.4_2025_IIOT",
        question_text:
          'Which of the following represents the "Resilience" aspect of a Trustworthy IIoT system?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "Safe operations of devices and people without risks and injury",
            image: null,
          },
          {
            id: "b",
            text: "Protecting the system from unauthorized access, modification, and destruction",
            image: null,
          },
          {
            id: "c",
            text: "Ability of the system to function correctly under dynamic adversarial conditions",
            image: null,
          },
          {
            id: "d",
            text: "Restriction on data access who can access and by whom it can be disclosed",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.5_2025_IIOT",
        question_text:
          "Which of the following is NOT a security requirement for Cloud Complied IIoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "OT infrastructure is controlled and managed at external networked cloud",
            image: null,
          },
          {
            id: "b",
            text: "Data from thousands of devices stored in the cloud",
            image: null,
          },
          {
            id: "c",
            text: "Third-party services with trust-boundaries for security and privacy",
            image: null,
          },
          {
            id: "d",
            text: "Completely eliminating the need to safeguard control systems from incoming cloud information flow",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.6_2025_IIOT",
        question_text:
          "Which of the following statements is incorrect about the protection of fog devices in IIoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Fog devices require the same security measures as end devices.",
            image: null,
          },
          {
            id: "b",
            text: "Standard cryptographic protocols are used for authentication between fog devices and the cloud.",
            image: null,
          },
          {
            id: "c",
            text: "Lightweight cryptography is recommended for authenticating end devices.",
            image: null,
          },
          {
            id: "d",
            text: "Fog devices serve only as storage units without computing capability.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.7_2025_IIOT",
        question_text:
          "Which of the following standards is specifically associated with industrial automation and control systems security (OT security)?",
        image_context: null,
        options: [
          { id: "a", text: "ISO/IEC 15408", image: null },
          { id: "b", text: "NIST SP 800-144", image: null },
          { id: "c", text: "IEC 62443", image: null },
          { id: "d", text: "ISO 27017", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.8_2025_IIOT",
        question_text:
          "Which of the following is incorrect about the security requirements in Healthcare IoT?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Device data protection can involve passwords, signatures, and digital certificates.",
            image: null,
          },
          {
            id: "b",
            text: "Communication data is secured using techniques like ciphering and hashing.",
            image: null,
          },
          {
            id: "c",
            text: "Data stored in the cloud may be protected with access control lists, signatures, and digital certificates.",
            image: null,
          },
          {
            id: "d",
            text: "Security management in Healthcare IoT completely avoids cloud involvement to minimize risks.",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.9_2025_IIOT",
        question_text:
          "Which company launched Construction Internet of Things to monitor large sites?",
        image_context: null,
        options: [
          { id: "a", text: "Kuka", image: null },
          { id: "b", text: "DeWalt", image: null },
          { id: "c", text: "Caterpillar", image: null },
          { id: "d", text: "ABB", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.10_2025_IIOT",
        question_text:
          "Which of the following is NOT a feature of a Smart Factory?",
        image_context: null,
        options: [
          { id: "a", text: "Continuous real-time data", image: null },
          { id: "b", text: "Maximize manual intervention", image: null },
          {
            id: "c",
            text: "Prediction of future outcomes for taking preventive actions",
            image: null,
          },
          { id: "d", text: "Flexibility and adaptability", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.11_2025_IIOT",
        question_text:
          "Fill in the blanks. The YuMi initiative by ABB focuses on",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Smart packaging with only Bluetooth-enabled systems",
            image: null,
          },
          { id: "b", text: "Human-robot collaboration", image: null },
          { id: "c", text: "Maximize human involvement", image: null },
          { id: "d", text: "Robotic shelves for warehouses", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.12_2025_IIOT",
        question_text:
          "What is the primary purpose of the SmartLabel initiative by the Grocery Manufacturers Association (GMA)?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To provide consumers with detailed product information such as ingredients and nutrition through QR codes",
            image: null,
          },
          {
            id: "b",
            text: "To control temperature settings of smart refrigerators remotely",
            image: null,
          },
          {
            id: "c",
            text: "To enable drone delivery of grocery items",
            image: null,
          },
          {
            id: "d",
            text: "To print manufacturing dates on food packaging",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.13_2025_IIOT",
        question_text: "What is the impact of IoT in food industry?",
        image_context: null,
        options: [
          { id: "a", text: "Increased wastage of food", image: null },
          { id: "b", text: "Longer production cycles", image: null },
          { id: "c", text: "Transparency of the supply chain", image: null },
          {
            id: "d",
            text: "Complete elimination of temperature monitoring",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.14_2025_IIOT",
        question_text:
          "Fill in the blanks. The BioRanger device developed by Diagenetix is primarily used for",
        image_context: null,
        options: [
          { id: "a", text: "Monitoring livestock health", image: null },
          {
            id: "b",
            text: "Detecting microbial diseases in food",
            image: null,
          },
          { id: "c", text: "Monitoring soil moisture", image: null },
          { id: "d", text: "Infusing flavors into beverages", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "10.15_2025_IIOT",
        question_text:
          "State true or false. SCADA is a system of hardware and software components, which enable remote control, monitoring, and maintenance of local and remote industrial processes in real-time.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
    ],
  },

  // Week 11
  {
    assignment: "Assignment 11",
    week: 11,
    questions: [
      {
        id: "11.1_2025_IIOT",
        question_text: "What is the utility of Dexcom?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "To monitor oxygen saturation in patients",
            image: null,
          },
          {
            id: "b",
            text: "To measure and track blood pressure remotely",
            image: null,
          },
          {
            id: "c",
            text: "To monitor glucose levels continuously and notify abnormalities",
            image: null,
          },
          {
            id: "d",
            text: "To detect asthma symptoms using inhalers",
            image: null,
          },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.2_2025_IIOT",
        question_text:
          "Which of the following represents an IoT-based blood pressure monitoring system?",
        image_context: null,
        options: [
          { id: "a", text: "iHealth BP5", image: null },
          { id: "b", text: "Manual mercury sphygmomanometer", image: null },
          { id: "c", text: "Analog wrist blood pressure cuff", image: null },
          { id: "d", text: "Traditional glass thermometer", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.3_2025_IIOT",
        question_text:
          "Which of the following is a key security requirement in IIoT healthcare?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Confidentiality, Integrity, Authentication, Availability",
            image: null,
          },
          {
            id: "b",
            text: "Scalability, Flexibility, Latency, Mobility",
            image: null,
          },
          {
            id: "c",
            text: "Cloud storage, Big Data, Sensors, Networks",
            image: null,
          },
          { id: "d", text: "None of these", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.4_2025_IIOT",
        question_text:
          "What is a major benefit of a digital power plant using IIoT?",
        image_context: null,
        options: [
          { id: "a", text: "More human supervision", image: null },
          { id: "b", text: "Higher energy cost", image: null },
          {
            id: "c",
            text: "Turbine's performance improvement and remote monitoring",
            image: null,
          },
          { id: "d", text: "Manual performance tracking", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.5_2025_IIOT",
        question_text:
          "Which network is primarily used for in-home IoT devices in a smart grid?",
        image_context: null,
        options: [
          { id: "a", text: "Wide Area Network (WAN)", image: null },
          { id: "b", text: "Home Area Network (HAN)", image: null },
          { id: "c", text: "Field Area Network (FAN)", image: null },
          { id: "d", text: "Neighborhood Area Network (NAN)", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.6_2025_IIOT",
        question_text:
          "Which component of the Advanced Metering Infrastructure (AMI) is responsible for analyzing the collected data?",
        image_context: null,
        options: [
          { id: "a", text: "Smart meters", image: null },
          { id: "b", text: "Meter data management system", image: null },
          { id: "c", text: "Programmable logic controllers", image: null },
          { id: "d", text: "Remote terminal units", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.7_2025_IIOT",
        question_text:
          "What type of RFID tag has an onboard battery but no active transmitter?",
        image_context: null,
        options: [
          { id: "a", text: "Passive", image: null },
          { id: "b", text: "Active", image: null },
          { id: "c", text: "Semi-passive", image: null },
          { id: "d", text: "Beacon-based", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.8_2025_IIOT",
        question_text:
          "Which of the following is not a key requirement for effective inventory management?",
        image_context: null,
        options: [
          { id: "a", text: "Meet anticipated demand", image: null },
          { id: "b", text: "Hedge against price increases", image: null },
          { id: "c", text: "Increase inventory management cost", image: null },
          { id: "d", text: "Smoothen the flow of operations", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.9_2025_IIOT",
        question_text:
          "Which of the following is a major limitation of barcodes compared to RFID tags?",
        image_context: null,
        options: [
          { id: "a", text: "Vulnerable to forgery", image: null },
          { id: "b", text: "Require line of sight", image: null },
          { id: "c", text: "Only one can be read at a time", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.10_2025_IIOT",
        question_text:
          "Which of the following does NOT represent a type of network security?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Detection of abnormal behavior by the network",
            image: null,
          },
          {
            id: "b",
            text: "Prevention of unauthorized sharing of sensitive data",
            image: null,
          },
          { id: "c", text: "Protection against phishing attack", image: null },
          {
            id: "d",
            text: "Predictive maintenance of HVAC systems",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.11_2025_IIOT",
        question_text: 'What does "Integrity" in software security ensure?',
        image_context: null,
        options: [
          {
            id: "a",
            text: "Assurance of data accuracy and consistency throughout its lifecycle",
            image: null,
          },
          {
            id: "b",
            text: "Verification of user credentials before granting access",
            image: null,
          },
          {
            id: "c",
            text: "Extent to which software remains available during component failures",
            image: null,
          },
          {
            id: "d",
            text: "Prevention of phishing attacks via email",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.12_2025_IIOT",
        question_text:
          "Which of the following is not a major risk associated with AR/VR in industrial applications?",
        image_context: null,
        options: [
          { id: "a", text: "Privacy and security issues", image: null },
          {
            id: "b",
            text: "Compromised content on the screen by hackers",
            image: null,
          },
          { id: "c", text: "Intellectual property concerns", image: null },
          {
            id: "d",
            text: "Reduced risk of accidents and improved worker safety",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.13_2025_IIOT",
        question_text:
          "Which of the following does not represent a typical application of analytics in facility management?",
        image_context: null,
        options: [
          { id: "a", text: "Managing energy consumption", image: null },
          {
            id: "b",
            text: "Determining exact square-foot utilization of office space",
            image: null,
          },
          {
            id: "c",
            text: "Enhancing real-time gameplay in virtual environments",
            image: null,
          },
          { id: "d", text: "Operational cost-optimization", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.14_2025_IIOT",
        question_text:
          "Which is a key benefit of IoT-based facility management?",
        image_context: null,
        options: [
          { id: "a", text: "Increase unauthorized access", image: null },
          {
            id: "b",
            text: "Real-time tracking and better customer experience",
            image: null,
          },
          { id: "c", text: "Increase all maintenance costs", image: null },
          { id: "d", text: "Make manual monitoring mandatory", image: null },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "11.15_2025_IIOT",
        question_text:
          "Fill in the blanks. ______ is one of the examples of the IoT-based body temperature monitoring device that takes into account the age, temperature, and symptoms of the patient to provide suggestions for the appropriate medicines or alert doctors.",
        image_context: null,
        options: [
          { id: "a", text: "Kinsa", image: null },
          { id: "b", text: "Dexcom", image: null },
          { id: "c", text: "iHealth", image: null },
          { id: "d", text: "QardioCore", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
    ],
  },

  // Week 12
  {
    assignment: "Assignment 12",
    week: 12,
    questions: [
      {
        id: "12.1_2025_IIOT",
        question_text:
          "Which of the following is not a benefit of using IoT in the oil and gas industry?",
        image_context: null,
        options: [
          { id: "a", text: "Increase production efficiency", image: null },
          { id: "b", text: "Save cost and time", image: null },
          { id: "c", text: "Improve asset maintenance", image: null },
          { id: "d", text: "Guarantee unlimited oil reserves", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.2_2025_IIOT",
        question_text:
          "Which of the following is not a direct benefit of predictive maintenance using IoT in chemical industries?",
        image_context: null,
        options: [
          { id: "a", text: "Increase in energy prices", image: null },
          { id: "b", text: "Reduced equipment breakdown", image: null },
          {
            id: "c",
            text: "Improve quality by efficient IoT analytics programs",
            image: null,
          },
          { id: "d", text: "Efficient and effective maintenance", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.3_2025_IIOT",
        question_text:
          "Which of the following is not a feature of IoT-enabled logistics improvement in the chemical industry?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Ensuring product location using sensors or RFID tags",
            image: null,
          },
          { id: "b", text: "Tracking assets to prevent loss", image: null },
          {
            id: "c",
            text: "Detecting contamination or possible attacks",
            image: null,
          },
          {
            id: "d",
            text: "Random manual checks without sensor support",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.4_2025_IIOT",
        question_text:
          "Which of the following best describes condition-based monitoring in IoT-based chemical industries?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Predicting quality by continuous monitoring and analyzing factors such as water, nutrients, and pesticides.",
            image: null,
          },
          {
            id: "b",
            text: "Running manual quality inspections once a year.",
            image: null,
          },
          {
            id: "c",
            text: "Ignoring environmental factors like weather and focusing only on sales data.",
            image: null,
          },
          {
            id: "d",
            text: "Setting random pricing models without data-driven insights.",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.5_2025_IIOT",
        question_text:
          "Which of the following is a way IoT helps minimize supply chain risks in the chemical industry?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Conducting only annual manual audits of warehouses",
            image: null,
          },
          {
            id: "b",
            text: "Real-time monitoring of equipment, materials, processes, environment, and workers",
            image: null,
          },
          {
            id: "c",
            text: "Ignoring process data and focusing only on final product delivery",
            image: null,
          },
          {
            id: "d",
            text: "Depending solely on human inspections without sensors",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.6_2025_IIOT",
        question_text:
          "What function does the IoT play in the pharmaceutical industry related to drug safety?",
        image_context: null,
        options: [
          { id: "a", text: "Automated surgery", image: null },
          { id: "b", text: "Developing vaccines", image: null },
          {
            id: "c",
            text: "Detecting adverse drug reactions and allergens",
            image: null,
          },
          { id: "d", text: "Building hospital infrastructure", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.7_2025_IIOT",
        question_text:
          "Which of the following represents the key features of sixth-generation drone technology?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Platform and payload adaptability, automated safety modes, intelligent piloting models and full autonomy, airspace awareness",
            image: null,
          },
          {
            id: "b",
            text: "Manual flight control with static camera mount and basic video recording",
            image: null,
          },
          {
            id: "c",
            text: "Single-axis gimbal with limited flight time and analog signal transmission",
            image: null,
          },
          {
            id: "d",
            text: "Pre-programmed routes with no adaptability and no safety protocols",
            image: null,
          },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.8_2025_IIOT",
        question_text:
          "State true or false - UAV-based light displays are generally more expensive than traditional firework displays and cannot be reused.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["b"],
        type: "True/False",
      },
      {
        id: "12.9_2025_IIOT",
        question_text:
          "How are UAVs primarily used in precision forestry applications?",
        image_context: null,
        options: [
          { id: "a", text: "To increase lumber pricing", image: null },
          {
            id: "b",
            text: "To measure canopy height, density and volume estimation",
            image: null,
          },
          { id: "c", text: "To stop monitoring wild life", image: null },
          {
            id: "d",
            text: "To increase cost of forest maintanace",
            image: null,
          },
        ],
        correct_answers: ["b"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.10_2025_IIOT",
        question_text:
          "State true or false. One of the applications of UAVs in telecommunication is to perform tower inspection.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
      {
        id: "12.11_2025_IIOT",
        question_text:
          "Which of the following is an application of UAVs in delivery and healthcare?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Transporting blood samples to laboratories",
            image: null,
          },
          {
            id: "b",
            text: "Conducting remote surgeries inside hospitals",
            image: null,
          },
          { id: "c", text: "Manufacturing medical syringes", image: null },
          { id: "d", text: "Hiring doctors for clinics", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.12_2025_IIOT",
        question_text:
          "Which of the following activities can be performed by using UAVs in the mining?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Regular surface survey for optimized blast design",
            image: null,
          },
          { id: "b", text: "Manage stockpiles", image: null },
          { id: "c", text: "Site exploration", image: null },
          { id: "d", text: "All of these", image: null },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.13_2025_IIOT",
        question_text:
          "Which of the following is not a reason why case studies are necessary?",
        image_context: null,
        options: [
          {
            id: "a",
            text: "Provide in-depth knowledge and clarity",
            image: null,
          },
          { id: "b", text: "Explore real-life phenomena", image: null },
          {
            id: "c",
            text: "Enable detailed quantitative and qualitative analysis",
            image: null,
          },
          {
            id: "d",
            text: "Guarantee faster industrial automation by themselves",
            image: null,
          },
        ],
        correct_answers: ["d"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.14_2025_IIOT",
        question_text:
          "Which of the following is not typically part of a case study subject matter?",
        image_context: null,
        options: [
          { id: "a", text: "A small geographical area", image: null },
          { id: "b", text: "A limited number of individuals", image: null },
          { id: "c", text: "National-level government policies", image: null },
          { id: "d", text: "Real-life related events", image: null },
        ],
        correct_answers: ["c"],
        type: "Single-Select MCQ",
      },
      {
        id: "12.15_2025_IIOT",
        question_text:
          "State true or false. Almost all mining industries rely on conveyer-belt based systems for loading/unloading of mined materials.",
        image_context: null,
        options: [
          { id: "a", text: "True", image: null },
          { id: "b", text: "False", image: null },
        ],
        correct_answers: ["a"],
        type: "True/False",
      },
    ],
  },
];
