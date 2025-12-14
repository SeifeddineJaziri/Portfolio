export const projects = [
  {
    id: "kff-gpt",
    title: "KFF GPT - RAG Chatbot",
    description:
      "Advanced Retrieval-Augmented Generation chatbot leveraging vector databases for intelligent information retrieval. Implemented semantic search using Qdrant for vector storage, BM25 for keyword matching, and Elasticsearch for full-text search capabilities. Utilized Model Context Protocol (MCP) for seamless context management and WebSockets for real-time bidirectional communication, enabling instant query responses and dynamic conversation flow.",
    tags: ["Qdrant", "Elasticsearch", "MCP", "WebSockets", "RAG", "LangChain"],
    videoPath: "/app/assets/kff-gpt-demo.mp4",
  },
  {
    id: "wildfire-detection",
    title: "Wildfire Detection System",
    description:
      "Real-time wildfire detection platform with Next.js frontend and FastAPI backend. Trained custom YOLO models for smoke and fire detection with 95% accuracy. Implemented OpenCV for image preprocessing and computer vision pipeline. Features real-time monitoring dashboard with instant alert notifications, geolocation mapping, and historical data analytics for early wildfire prevention and response.",
    tags: [
      "Next.js",
      "FastAPI",
      "YOLO",
      "Computer Vision",
      "OpenCV",
      "Real-time Alerts",
    ],
    videoPath: "/app/assets/wildfire-detection-demo.mp4",
  },
  {
    id: "coffee-shop",
    title: "Coffee Shop Management Platform",
    description:
      "Comprehensive point-of-sale and inventory management system with real-time object detection. Trained YOLO models to automatically recognize drinks, food items, and chicha products for quick checkout. Integrated OpenCV for image processing, WebSockets for live updates, FastAPI for high-performance backend, and Redis for caching frequently accessed data, reducing response times by 60%.",
    tags: [
      "YOLO",
      "FastAPI",
      "Redis",
      "Next.js",
      "WebSockets",
      "Object Detection",
    ],
    videoPath: "/app/assets/coffee-shop-demo.mkv",
  },
  {
    id: "ai-chatbot",
    title: "AI ChatBot with LangChain",
    description:
      "Intelligent conversational AI system implementing Model Context Protocol (MCP) for efficient API consumption and data retrieval. Utilized LangChain for natural language processing and understanding, LangGraph for managing complex conversation flows and state transitions, and WebSockets for real-time communication. Features context-aware responses, multi-turn conversations, and seamless integration with external data sources.",
    tags: ["LangChain", "LangGraph", "MCP", "WebSockets", "NLP", "AI"],
    videoPath: "/app/assets/ai-chatbot-demo.mp4",
  },
  {
    id: "cv-drawer",
    title: "Computer Vision Drawer",
    description:
      "Interactive hand gesture recognition system using Mediapipe for precise hand landmark detection. Developed virtual drawing application that tracks finger movements in real-time, allowing users to draw using gestures. Built AI-powered virtual mouse for hands-free computer control and created an engaging balloon-popping game using index finger recognition. Achieved 30 FPS performance with sub-50ms latency.",
    tags: [
      "Mediapipe",
      "OpenCV",
      "Hand Tracking",
      "Python",
      "Gesture Recognition",
    ],
    videoPath: "/app/assets/cv-drawer-demo.mp4",
  },
  {
    id: "sales-app",
    title: "Sales Management Mobile App",
    description:
      "Full-featured Flutter mobile application for comprehensive sales tracking and business management. Implemented Riverpod for efficient state management, ensuring reactive UI updates and optimal performance. Features include inventory management, customer relationship tracking, sales analytics with charts, invoice generation, and offline-first architecture with data synchronization.",
    tags: [
      "Flutter",
      "Riverpod",
      "Mobile Development",
      "Dart",
      "State Management",
    ],
    videoPath: "/app/assets/sales-app-demo.mp4",
  },
];

export type Project = (typeof projects)[0];
