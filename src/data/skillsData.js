export const skillsData = [
  {
    category: "LANGUAGES",
    icon: "Code2",
    description: "Core programming and scripting languages for systems, backend services, and interactive UIs.",
    items: [
      { name: "Python", level: 92, projects: ["ConfigSync", "Discord Sharding", "Robotic Packaging", "AWS API Platform"] },
      { name: "JavaScript (ES6+)", level: 95, projects: ["HealthFlow", "Smart Traffic", "Project Nova", "Urban Company Clone"] },
      { name: "SQL", level: 88, projects: ["ConfigSync", "AWS API Platform"] },
      { name: "Dart", level: 80, projects: ["Dart Assignment"] },
      { name: "HTML5 & CSS3", level: 95, projects: ["HealthFlow", "Smart Traffic", "Urban Company Clone"] }
    ]
  },
  {
    category: "FRONTEND",
    icon: "Layout",
    description: "Modern, responsive, and performance-optimized user interfaces built with React & modern web APIs.",
    items: [
      { name: "React.js", level: 92, projects: ["HealthFlow", "Portfolio 3D"] },
      { name: "JavaScript (Async/DOM)", level: 95, projects: ["HealthFlow", "Smart Traffic"] },
      { name: "HTML5 & CSS3", level: 95, projects: ["HealthFlow", "Smart Traffic"] },
      { name: "Responsive Web Design", level: 94, projects: ["All Web Apps"] },
      { name: "Three.js / WebGL", level: 88, projects: ["Portfolio 3D Experience"] }
    ]
  },
  {
    category: "BACKEND",
    icon: "Server",
    description: "Scalable server architectures, REST APIs, and microservices for high-concurrency workloads.",
    items: [
      { name: "Node.js", level: 92, projects: ["HealthFlow"] },
      { name: "Express.js", level: 90, projects: ["HealthFlow"] },
      { name: "RESTful API Architecture", level: 94, projects: ["HealthFlow", "AWS API Platform"] },
      { name: "Python Flask", level: 86, projects: ["AWS API Platform"] }
    ]
  },
  {
    category: "DATABASE",
    icon: "Database",
    description: "Relational, document, and real-time database management systems with indexing and optimization.",
    items: [
      { name: "MongoDB & Mongoose", level: 90, projects: ["HealthFlow"] },
      { name: "MongoDB Atlas", level: 88, projects: ["HealthFlow"] },
      { name: "MySQL / Relational DB", level: 86, projects: ["ConfigSync", "AWS API Platform"] },
      { name: "Firebase Firestore", level: 88, projects: ["Smart Traffic"] },
      { name: "Firebase Realtime DB", level: 90, projects: ["Smart Traffic"] }
    ]
  },
  {
    category: "AI / ML",
    icon: "Brain",
    description: "Machine Learning models, data preprocessing pipelines, regression, classification, and statistical evaluation.",
    items: [
      { name: "Machine Learning Algorithms", level: 85, projects: ["Robotic Packaging", "Logistic Regression x KNN"] },
      { name: "Logistic Regression", level: 88, projects: ["Logistic Regression x KNN"] },
      { name: "K-Nearest Neighbors (KNN)", level: 86, projects: ["Logistic Regression x KNN"] },
      { name: "Pandas & Data Cleaning", level: 90, projects: ["Robotic Packaging"] },
      { name: "Feature Scaling & Encoding", level: 88, projects: ["Breast Cancer Model"] },
      { name: "Model Evaluation Metrics", level: 86, projects: ["Breast Cancer Model"] }
    ]
  },
  {
    category: "CLOUD",
    icon: "Cloud",
    description: "Cloud-native compute, storage, networking, IAM security, and serverless architectures.",
    items: [
      { name: "AWS EC2", level: 88, projects: ["AWS API Platform"] },
      { name: "AWS RDS MySQL", level: 86, projects: ["AWS API Platform"] },
      { name: "AWS API Gateway", level: 88, projects: ["AWS API Platform"] },
      { name: "AWS IAM & Security", level: 86, projects: ["AWS API Platform"] },
      { name: "AWS VPC Subnets", level: 85, projects: ["AWS API Platform"] },
      { name: "AWS CloudWatch", level: 86, projects: ["AWS API Platform"] },
      { name: "Firebase Cloud Services", level: 90, projects: ["Smart Traffic"] }
    ]
  },
  {
    category: "DEVOPS",
    icon: "Cpu",
    description: "Containerization, orchestration, IaC provisioning, CI/CD automation pipelines, and cluster deployment.",
    items: [
      { name: "Docker & Containerization", level: 90, projects: ["ConfigSync", "Project Nova"] },
      { name: "Kubernetes Orchestration", level: 85, projects: ["ConfigSync", "Project Nova"] },
      { name: "Minikube Local Clusters", level: 88, projects: ["ConfigSync"] },
      { name: "Jenkins CI/CD Pipelines", level: 86, projects: ["ConfigSync", "Project Nova"] },
      { name: "Terraform IaC", level: 82, projects: ["Project Nova"] },
      { name: "CI/CD Pipeline Automation", level: 90, projects: ["Project Nova", "ConfigSync"] }
    ]
  },
  {
    category: "SYSTEM DESIGN",
    icon: "Network",
    description: "Architectural patterns for scalable, fault-tolerant, and high-availability distributed systems.",
    items: [
      { name: "Distributed Systems Architecture", level: 88, projects: ["ConfigSync", "Discord Sharding"] },
      { name: "Microservices Pattern", level: 90, projects: ["Project Nova", "AWS API Platform"] },
      { name: "Leader Election & Consensus", level: 86, projects: ["ConfigSync"] },
      { name: "Consensus & State Replication", level: 86, projects: ["ConfigSync"] },
      { name: "Fault Tolerance & Failover", level: 88, projects: ["ConfigSync"] },
      { name: "Heartbeat Health Monitoring", level: 90, projects: ["ConfigSync"] }
    ]
  },
  {
    category: "REAL-TIME",
    icon: "Zap",
    description: "Event-driven communication, bi-directional WebSockets, and low-latency state synchronization.",
    items: [
      { name: "Socket.IO WebSockets", level: 92, projects: ["HealthFlow"] },
      { name: "Real-Time State Sync", level: 94, projects: ["HealthFlow", "Smart Traffic"] },
      { name: "Event-Driven Communication", level: 90, projects: ["HealthFlow", "Smart Traffic"] },
      { name: "Firebase Realtime Stream", level: 90, projects: ["Smart Traffic"] }
    ]
  },
  {
    category: "MONITORING",
    icon: "Activity",
    description: "Observability, metric collection, alert rules, and visual telemetry dashboards.",
    items: [
      { name: "Prometheus Metric Collector", level: 86, projects: ["ConfigSync", "Project Nova"] },
      { name: "Grafana Telemetry Visualizer", level: 86, projects: ["ConfigSync", "Project Nova"] },
      { name: "AWS CloudWatch Metrics", level: 88, projects: ["AWS API Platform"] }
    ]
  },
  {
    category: "TOOLS",
    icon: "Wrench",
    description: "Developer tooling, version control, API testing, and container management workflows.",
    items: [
      { name: "Git & GitHub", level: 95, projects: ["All Repositories"] },
      { name: "VS Code", level: 95, projects: ["Development"] },
      { name: "Postman API Platform", level: 92, projects: ["HealthFlow", "AWS API Platform"] },
      { name: "Docker Desktop", level: 90, projects: ["ConfigSync", "Project Nova"] },
      { name: "kubectl CLI", level: 85, projects: ["ConfigSync", "Project Nova"] }
    ]
  }
];
