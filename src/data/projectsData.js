export const projectsData = [
  {
    id: "healthflow",
    title: "HealthFlow",
    subtitle: "Real-Time Healthcare Triage & Resource Allocation System",
    category: "FULL STACK • HEALTHCARE • REAL-TIME",
    description: "Architected a real-time hospital triage and workflow engine designed to eliminate patient admission bottlenecks and optimize emergency room doctor/nurse assignments dynamically.",
    github: "https://github.com/AtharvaGahine11/HealthFlow",
    demo: "https://github.com/AtharvaGahine11/HealthFlow",
    isFeatured: true,
    badge: "Full Stack & Real-Time",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Socket.IO", "JavaScript", "HTML/CSS"],
    architecture: [
      { step: "Patient Arrival", detail: "Emergency intake data registered at triage station." },
      { step: "Triage Engine", detail: "Algorithmic ESI (Emergency Severity Index) priority scoring." },
      { step: "Socket.IO Stream", detail: "Low-latency WebSocket broadcast to connected hospital units." },
      { step: "Real-Time Dashboard", detail: "Instant dashboard re-render for Doctors, Nurses & ER Admins." },
      { step: "Resource Allocation", detail: "Automated bed & equipment assignment matrix." }
    ],
    features: [
      "Role-Based Dashboards (Admin, Nurse, Doctor)",
      "Real-Time WebSocket Sync via Socket.IO",
      "Dynamic Patient Severity Triage Queue",
      "Hospital Bed & Medical Equipment Tracking",
      "Instant Emergency Override Broadcasts",
      "Patient Medical History & Status Audit Logs"
    ],
    miniWorldType: "hospital"
  },
  {
    id: "configsync",
    title: "ConfigSync",
    subtitle: "Distributed Configuration Management System",
    category: "SYSTEM DESIGN • DISTRIBUTED SYSTEMS • DEVOPS",
    description: "Built a distributed configuration management platform featuring leader election, consensus replication, automated watcher notifications, and zero-downtime hot reloading across application nodes.",
    github: "https://github.com/AtharvaGahine11/ConfigSync",
    demo: "https://github.com/AtharvaGahine11/ConfigSync",
    isFeatured: true,
    badge: "Distributed System",
    techStack: ["Python", "SQL", "Docker", "Kubernetes", "Minikube", "Jenkins", "Prometheus", "Grafana", "Git/GitHub"],
    architecture: [
      { step: "API Gateway Layer", detail: "Client configuration updates sent via REST endpoint." },
      { step: "Leader Election", detail: "Dynamic cluster leader selected via heartbeat consensus." },
      { step: "Replication Protocol", detail: "Leader broadcasts updates synchronously to worker replicas." },
      { step: "Watcher Service", detail: "Service instances subscribe to hot-reload config channels." },
      { step: "Telemetry & Logs", detail: "Prometheus metrics & Grafana health tracking." }
    ],
    features: [
      "Distributed Leader-Follower Architecture",
      "Heartbeat Health Monitoring & Failover",
      "Consensus-Based Configuration Replication",
      "Real-Time Watcher Event Dispatching",
      "Containerized Minikube & Docker Deployment",
      "Prometheus & Grafana Cluster Monitoring"
    ],
    miniWorldType: "datacenter"
  },
  {
    id: "project-nova",
    title: "Project Nova",
    subtitle: "DevOps / Cloud Crypto Exchange Infrastructure Platform",
    category: "DEVOPS • CLOUD • CONTAINERIZATION",
    description: "Engineered an enterprise-grade DevOps infrastructure for a high-frequency crypto trading exchange platform with automated CI/CD pipelines, IaC provisioned environments, and observability.",
    github: "https://github.com/AtharvaGahine11/Project-Nova-Crypto-Exchange",
    demo: "https://github.com/AtharvaGahine11/Project-Nova-Crypto-Exchange",
    isFeatured: true,
    badge: "DevOps & IaC",
    techStack: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana", "Vault", "ELK Stack"],
    architecture: [
      { step: "Version Control", detail: "Git commit triggers webhooks to Jenkins CI controller." },
      { step: "Automated Build", detail: "Docker image compilation, linting & unit test execution." },
      { step: "IaC Provisioning", detail: "Terraform provisions cloud networks and K8s node pools." },
      { step: "K8s Deployment", detail: "Kubernetes rolling updates with zero downtime." },
      { step: "Observability", detail: "Prometheus metrics, Grafana dashboards, ELK log ingestion." }
    ],
    features: [
      "Automated Jenkins Declarative Pipelines",
      "Terraform Infrastructure as Code (IaC)",
      "Kubernetes Cluster Autoscaling & Microservices",
      "HashiCorp Vault Secret Management",
      "Prometheus Metric Alerts & Grafana Dashboards",
      "Zero-Downtime Rolling Releases"
    ],
    miniWorldType: "devops"
  },
  {
    id: "aws-api-platform",
    title: "AWS API Management Platform",
    subtitle: "Scalable Cloud Microservice & API Gateway Platform",
    category: "CLOUD ARCHITECTURE • AWS • MICROSERVICES",
    description: "Designed and deployed a cloud-native API management architecture leveraging AWS core services, securing endpoints with IAM roles, isolating compute inside private VPC subnets, and managing relational state.",
    github: "https://github.com/AtharvaGahine11/aws-api-management-platform",
    demo: "https://github.com/AtharvaGahine11/aws-api-management-platform",
    isFeatured: true,
    badge: "Cloud Architecture",
    techStack: ["AWS EC2", "AWS RDS MySQL", "AWS API Gateway", "CloudWatch", "AWS IAM", "AWS VPC", "Flask", "Python"],
    architecture: [
      { step: "User Request", detail: "API call routed through Amazon API Gateway." },
      { step: "IAM Authorization", detail: "Token verification and policy access evaluation." },
      { step: "VPC Private Subnet", detail: "EC2 Flask microservice instances execute domain logic." },
      { step: "RDS MySQL Engine", detail: "Encrypted relational database queries." },
      { step: "CloudWatch Telemetry", detail: "Real-time access logging & latency monitoring." }
    ],
    features: [
      "AWS API Gateway Request Routing & Throttling",
      "VPC Public/Private Subnet Architecture",
      "Relational Data Layer with AWS RDS MySQL",
      "Fine-Grained IAM Identity & Policy Rules",
      "CloudWatch Alarms & Access Telemetry",
      "Python Flask RESTful Endpoint Microservice"
    ],
    miniWorldType: "aws"
  },
  {
    id: "smart-traffic",
    title: "Smart Traffic Light Controller",
    subtitle: "IoT & Real-Time Smart City Traffic Management System",
    category: "REAL-TIME • IOT • SMART CITY",
    description: "Created an intelligent traffic signal optimization system that dynamically adjusts light timing based on real-time vehicle density queues and emergency vehicle priority overrides.",
    github: "https://github.com/AtharvaGahine11/Smart-Traffic-Light-Controller",
    demo: "https://github.com/AtharvaGahine11/Smart-Traffic-Light-Controller",
    isFeatured: true,
    badge: "Smart City IoT",
    techStack: ["HTML5", "CSS3", "JavaScript", "Firebase Firestore", "Firebase Realtime Database"],
    architecture: [
      { step: "Sensor Simulation", detail: "Vehicle density sensors feed lane traffic counts." },
      { step: "Priority Evaluation", detail: "Algorithmic decision tree calculates green light durations." },
      { step: "Emergency Override", detail: "Priority queue forces immediate green path for ambulances." },
      { step: "Firebase Sync", detail: "Real-time state sync across city traffic controller screens." }
    ],
    features: [
      "Dynamic Vehicle Density Signal Timing",
      "Emergency Vehicle Priority Corridor Override",
      "Automatic & Manual Control Modes",
      "Firebase Realtime Synchronization",
      "Interactive 2D/3D Traffic Grid Visualizer"
    ],
    miniWorldType: "smartcity"
  },
  {
    id: "discord-sharding",
    title: "Discord Sharding Simulation",
    subtitle: "Distributed WebSockets & Bot Connection Scalability Simulation",
    category: "SIMULATION • DISTRIBUTED SYSTEMS",
    description: "Simulated Discord's bot sharding architecture to demonstrate how massive WebSocket connections are distributed across CPU cores to prevent single-process event loop blocking.",
    github: "https://github.com/AtharvaGahine11/Discord-Sharding-Simulation",
    isFeatured: false,
    badge: "Distributed Simulation",
    techStack: ["Python", "WebSockets", "Multi-processing", "AsyncIO"],
    architecture: [
      { step: "Gateway Manager", detail: "Distributes incoming guild connections." },
      { step: "Shard Allocation", detail: "Modulo arithmetic routes guild ID to specific shard." },
      { step: "Process Isolation", detail: "Each shard runs on independent process loop." }
    ],
    features: [
      "Process-Isolated WebSocket Shards",
      "Guild ID Shard Hashing Algorithm",
      "Automatic Shard Re-connection & Failover",
      "Live Connection & Load Distribution Metrics"
    ],
    miniWorldType: "simulation"
  },
  {
    id: "robotic-packaging",
    title: "Robotic Packaging System Investment Analysis",
    subtitle: "Financial Modeling & Machine Learning Investment Decision Platform",
    category: "AI/ML • FINANCE • BUSINESS ANALYSIS",
    description: "Built an intelligent financial analysis system combining Machine Learning regression models with cash-flow projection algorithms to evaluate industrial robotic automation ROI.",
    github: "https://github.com/AtharvaGahine11/Robotic-Packaging-System-Investment-Analysis",
    isFeatured: false,
    badge: "ML & Finance",
    techStack: ["Python", "Machine Learning", "Financial Modeling", "Pandas", "Streamlit"],
    architecture: [
      { step: "Data Preprocessing", detail: "Operational costs & throughput metrics cleaned." },
      { step: "ML Prediction", detail: "Regression model predicts 5-year maintenance & output." },
      { step: "DCF Calculator", detail: "Discounted Cash Flow calculation yields Net Present Value (NPV)." }
    ],
    features: [
      "Machine Learning Efficiency Predictions",
      "Discounted Cash Flow (DCF) ROI Calculator",
      "CapEx vs OpEx Breakdown Visualizer",
      "Interactive Sensitivity Analysis Dashboard"
    ],
    miniWorldType: "factory"
  },
  {
    id: "urban-company",
    title: "Urban Company Clone - Business Analysis & Platform",
    subtitle: "Service Marketplace Platform & Financial Feasibility Study",
    category: "FULL STACK • BUSINESS MODELING",
    description: "Developed a service booking marketplace model alongside an end-to-end unit economics analysis (BabyCare Massage service break-even calculation).",
    github: "https://github.com/AtharvaGahine11/UrbanCompany_Clone",
    isFeatured: false,
    badge: "Product & Business",
    techStack: ["HTML", "CSS", "JavaScript", "Business Modeling"],
    architecture: [
      { step: "Service Selection", detail: "User chooses localized service package." },
      { step: "Provider Matching", detail: "Geographic assignment of qualified service professional." },
      { step: "Unit Economics", detail: "CapEx ~₹2.65L, OpEx ~₹1.76L/mo, Rev ~₹3.61L/mo (2-mo Break-even)." }
    ],
    features: [
      "Interactive Service Booking Flow",
      "Comprehensive Unit Economics Model",
      "Provider Schedule & Pricing Calculator",
      "Break-Even Financial Analysis Engine"
    ],
    miniWorldType: "marketplace"
  }
];
