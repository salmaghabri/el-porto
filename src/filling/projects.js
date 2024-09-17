export const projects = [
  {
    name: "YOLOv9 Alphapose Integration",
    description: [
      "Adapted the AlphaPose framework to replace its YOLOv3 detector with a pretrained YOLOv9 model optimized for tennis player detection.  ",
      "Implemented two integration methods—parallel detection file processing and direct detector replacement—while optimizing the framework's multithreaded pipeline ",
      "Method 1 involves generating detection files with YOLOv9 and feeding them into AlphaPose for subsequent pose estimation.",
      "Method 2 directly integrates YOLOv9 within AlphaPose, replacing YOLOv3 entirely, ensuring a seamless flow between detection and pose estimation stages.",
    ],
    image: "assets/projects/tennis.png",
    tools: ["OpenCV", "Pytorch"],
    links: {
      garden:
        "https://salmaghabri.github.io/PFA-wiki/Object-Detection-and-Pose-Ectimation/",
    },
  },
  {
    name: "Deep Learning for Change Detection in Satelite Images",
    description: [
      "During my fourth year as a software engineering student, I worked on an end-of-year project to enhance a deep learning model for detecting changes in multispectral satellite images over time. The project spanned the entire second semester, and we built upon the foundational work of the reference paper 'A Deep Learning Model for Change Detection on Satellite Images'. As part of this project, we conducted a comprehensive literature review on remote sensing indices and semantic segmentation in satellite imagery. By leveraging remote sensing indices for feature engineering, along with band selection techniques, we improved the model’s F1 score and global accuracy",
      "This marked my first exploration into the interesting intersection of remote sensing and machine learning",
    ],
    image: "assets/projects/fresunet.png",
    tools: ["Pandas", "Numpy", "Pytorch"],
    links: {
      kaggle: "https://www.kaggle.com/code/salmaghabri/pffa-change-detection",
      garden: "https://salmaghabri.github.io/PFA-wiki/Change-Detection/",
      read: "https://drive.google.com/file/d/1aJf0fKntRCBw5QlkbHJ0QZCTs57Eyi8p/view?usp=sharing",
    },
  },
  {
    name: "Big Data Weather Pipeline",
    description: [
      "This project was part of Big Data course where we were asked to design and implement a simplified, end-to-end big data pipeline for batch and streaming processing. ",
      "We based our solution on the Lambda architecture, simulating a data stream from a CSV file containing weather data. The CSV file represented both the data at rest and the stream of incoming data. For batch processing, we computed the average temperature for each capital, while the streaming component extracted the maximum average temperature in real-time for each capital. The data was stored in a NoSQL database and later visualized in real-time through a web application.",
    ],
    image: "assets/projects/ta9sn.png",
    tools: [" Hadoop", "Spark", "MongoDB", "Express", "React"],
    links: {
      github: "https://github.com/louaybadri/WeatherBigData",
    },
  },

  {
    name: "Second-hand Car Sales Analysis and Price Prediction",
    description: [
      "The workflow of this project mirrors the key phases of the CRISP-DM (Cross-Industry Standard Process for Data Mining) framework. We started by scraping data from various second-hand car sales websites. The core part of this project was data cleaning and preprocessing, which is crucial the next steps. We then conducted an in-depth data analysis and visualization to identify market trends. Next, we trained and evaluated a machine learning model to predict car prices based on the cleaned data. ",
      "We finally wrapped everything in PyQt app to allow users to input car attributes and receive price predictions, making the model usable in real-world scenarios.",
    ],
    image: "assets/projects/tayara.png",
    tools: ["Scikit-learn", "Pandas", "Seaborn", "Beautiful Soup"],
    links: {
      github:
        "https://github.com/MohamedAzizBellaaj/Data-Analysis-of-Second-hand-Car-Dealerships",
      read: "https://drive.google.com/file/d/1D3B7-xU2wu8xKfXIikLAXM83uHFRi2E0/view?usp=sharing",
    },
  },

  {
    name: "DB Synchronisation Application",
    description: [
      "This project was part of Distributed Systems course where we were asked to develop application for synchronizing sales data between a Head Office (HO) and two Branch Offices (BOs) (analogous to functionalities provided by Talend)",
      "The applciation  Supports CRUD operations for managing product information. It utilizes RabbitMQ message queues to to handle real-time messaging and updates and Tkinter for the GUI ",
      "This app implements message persistence and queue durability to handle system failures and ensure data integrity. ",
    ],
    image: "assets/projects/rabbit.png",
    tools: ["RabbitMQ", "Tkinter", "MySQL"],
    links: {
      github: "https://github.com/salmaghabri/DB-Synchronisation",
    },
  },
  {
    name: "Wikilinks To md toggler Obsidian Plugin",
    description: [
      "An Obsidian plugin that toggles highlighted text between wikilink and markdown formats.",
      "I love Obsidian (a lot) and I found myself searching for a plugin with this functionality, but came up empty-handed. So, I figured it was the perfect chance to build it myself and contribute something useful to the Obsidian community",
    ],
    image: "assets/projects/wikilinks.png",
    tools: ["Typescript"],
    links: {
      github: "https://github.com/salmaghabri/toggle-wikilinks-to-md",
    },
  },
  {
    name: "This website",
    description: [
      "A portfolio website where I can say everything I can’t fit into a CV ",
      "aaaaand creating a website where I make the rules (that explains the design quirks and the offbeat typography) doesn't happen very often.",
    ],
    image: "assets/projects/porto.png",
    tools: ["React", "TailwindCSS", "Framer Motion"],
    links: {
      github: "https://github.com/salmaghabri/el-porto-del-farina",
    },
  },
];
