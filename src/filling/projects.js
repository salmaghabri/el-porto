export const projects = [
  {
    name: "YOLOv9 Integration",
    description: [
      "Adapted the AlphaPose framework to replace its YOLOv3 detector with a pretrained YOLOv9 model optimized for tennis player detection.  ",
      "Implemented two integration methods—parallel detection file processing and direct detector replacement—while optimizing the framework's multithreaded pipeline ",
      "Method 1 involves generating detection files with YOLOv9 and feeding them into AlphaPose for subsequent pose estimation.",
      "Method 2 directly integrates YOLOv9 within AlphaPose, replacing YOLOv3 entirely, ensuring a seamless flow between detection and pose estimation stages.",
    ],
    image: "assets/projects/tennis.png",
    tools: [" OpenCV", " Pytorch"],
    links: {
      garden: "https://www.kaggle.com/username/car-sales-analysis",
    },
  },
  {
    name: "Change Detection",
    description: [
      "Conducted an extensive literature review on deep learning techniques for change detection in multispectral satellite images.",
      "Enhanced a deep learning model to detect changes in multispectral satellite images over time.",
      "Improved the model's F1 score through feature engineering and dimensionality reduction techniques, focusing on significant alterations in geographical features and land use patterns.",
      "Achieved a score of 90% for this project.",
    ],
    image: "assets/projects/fresunet.png",
    tools: ["Pandas", " Numpy", " Pytorch"],
    links: {
      github: "https://github.com/username/car-sales-analysis",
      kaggle: "https://www.kaggle.com/username/car-sales-analysis",
      garden: "https://www.kaggle.com/username/car-sales-analysis",
    },
  },
  {
    name: "Big Data Weather Pipeline",
    description: [
      "Designed and implemented a Lambda architecture to perform batch processing and streaming processing by simulating a stream using a weather dataset, and handled the visualization layer.",
      "Designed and implemented a Lambda architecture to perform batch processing and streaming processing by simulating a stream using a weather dataset, and handled the visualization layer.",
      "Designed and implemented a Lambda architecture to perform batch processing and streaming processing by simulating a stream using a weather dataset, and handled the visualization layer.",
    ],
    image: "assets/projects/ta9sn.png",
    tools: ["  Hadoop", " Spark", " Kafka", " MongoDB", " Express", " React"],
    links: {
      github: "https://github.com/username/car-sales-analysis",
      kaggle: "https://www.kaggle.com/username/car-sales-analysis",
      garden: "https://www.kaggle.com/username/car-sales-analysis",
    },
  },

  {
    name: "Second-hand Car Sales Analysis and Price Prediction",
    description: [
      "Scraped and collected data from various second-hand car sales websites.",
      "Conducted in-depth data analysis and visualization to identify market trends and patterns.",
      "Trained a machine learning model to predict car prices based on the collected data.",
    ],
    image: "assets/projects/tayara.png",
    tools: ["Beautiful Soup", "Selenium", "Scikit-learn", "Pandas", "Seaborn"],
    links: {
      github: "https://github.com/username/car-sales-analysis",
      kaggle: "https://www.kaggle.com/username/car-sales-analysis",
    },
  },

  {
    name: "DB Synchronisation Application",
    description: [
      "This project was part of Distributed Systems course where we were asked to develop application for synchronizing sales data between a Head Office (HO) and two Branch Offices (BOs) (analogous to functionalities provided by Talend)",
      " The applciation  Supports CRUD operations for managing product information. It utilizes RabbitMQ message queues to to handle real-time messaging and updates and Tkinter for the GUI ",
      " This app implements message persistence and queue durability to handle system failures and ensure data integrity. ",
    ],
    image: "assets/projects/rabbit.png",
    tools: ["RabbitMQ", " Tkinter", "MySQL"],
    links: {
      github: "https://github.com/salmaghabri/DB-Synchronisation",
    },
  },
  {
    name: "DB Synchronisation Application",
    description: [
      "This project was part of Distributed Systems course where we were asked to develop application for synchronizing sales data between a Head Office (HO) and two Branch Offices (BOs) (analogous to functionalities provided by Talend)",
      " The applciation  Supports CRUD operations for managing product information. It utilizes RabbitMQ message queues to to handle real-time messaging and updates and Tkinter for the GUI ",
      " This app implements message persistence and queue durability to handle system failures and ensure data integrity. ",
    ],
    image: "assets/projects/rabbit.png",
    tools: ["RabbitMQ", " Tkinter", "MySQL"],
    links: {
      github: "https://github.com/salmaghabri/DB-Synchronisation",
    },
  },
];
