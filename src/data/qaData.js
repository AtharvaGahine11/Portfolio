export const qaData = {
  healthflow: [
    {
      q: "What problem does HealthFlow solve?",
      a: "HealthFlow addresses emergency room bottlenecks by digitizing patient triage, calculating Emergency Severity Index (ESI) scores in real time, and instantaneously dispatching room/bed allocation updates to ER doctors and nurses via WebSockets, eliminating manual phone calls and delays."
    },
    {
      q: "Why did you choose this architecture?",
      a: "An event-driven architecture using Node.js, Express, and Socket.IO was selected because emergency healthcare demands sub-second latency state updates. HTTP polling would introduce unacceptable latency and server load."
    },
    {
      q: "Why these technologies (React, Node, Socket.IO, MongoDB)?",
      a: "React provides immediate state updates for fast-paced ER UI views. Node.js with non-blocking I/O handles hundreds of simultaneous socket connections efficiently. MongoDB Atlas provides flexible schema design for dynamic patient triage records."
    },
    {
      q: "What was the biggest technical challenge?",
      a: "Ensuring atomic state synchronization across multiple role-based dashboards (Admin, Doctor, Nurse) without race conditions when multiple nurses update patient priority or bed availability simultaneously."
    },
    {
      q: "How would you scale HealthFlow?",
      a: "Scale out Node.js instances horizontally using a Redis Pub/Sub adapter for Socket.IO, sharding MongoDB collections by hospital location ID, and introducing RabbitMQ for asynchronous notifications."
    },
    {
      q: "What would you improve next?",
      a: "Integrate HL7/FHIR medical data standards for seamless integration with legacy hospital EHR software, and add predictive ML patient flow modeling."
    },
    {
      q: "What did you learn from HealthFlow?",
      a: "Mastered real-time WebSocket state synchronization, role-based access control (RBAC), and high-reliability full-stack system architecture under urgent operational constraints."
    }
  ],
  configsync: [
    {
      q: "What problem does ConfigSync solve?",
      a: "ConfigSync provides a centralized, distributed configuration server that eliminates manual server restarts across microservice clusters when environment parameters or secret keys change."
    },
    {
      q: "Why did you choose this architecture?",
      a: "A distributed leader-follower pattern ensures high availability and consistency across cluster nodes. If the primary configuration leader fails, active nodes automatically elect a new leader."
    },
    {
      q: "Why these technologies (Python, Docker, K8s, Minikube, Jenkins, Prometheus)?",
      a: "Python enables clean socket communication and thread safety for consensus algorithms. Docker & Kubernetes isolate worker nodes. Prometheus and Grafana provide real-time cluster health and configuration audit metrics."
    },
    {
      q: "What was the biggest technical challenge?",
      a: "Implementing robust heartbeat failover logic and preventing split-brain scenarios during simulated network partitions."
    },
    {
      q: "How would you scale ConfigSync?",
      a: "Implement Raft or Paxos consensus protocol across multi-region Kubernetes clusters with gRPC streams for micro-second configuration propagation."
    },
    {
      q: "What would you improve next?",
      a: "Add encrypted secret storage integration with HashiCorp Vault and cryptographic signature verification for all distributed configuration payloads."
    },
    {
      q: "What did you learn from ConfigSync?",
      a: "Deepened system-design understanding of consensus protocols, leader election algorithms, container orchestration, and telemetry monitoring."
    }
  ],
  "project-nova": [
    {
      q: "What problem does Project Nova solve?",
      a: "Project Nova automates complex, multi-stage cloud infrastructure provisioning and code deployment for high-frequency crypto trading services, replacing brittle manual deployment steps."
    },
    {
      q: "Why did you choose this architecture?",
      a: "An Infrastructure-as-Code (IaC) pipeline backed by Terraform, Jenkins, and Kubernetes guarantees reproducible, versioned infrastructure with zero manual environment drift."
    },
    {
      q: "Why these technologies (Jenkins, Terraform, Docker, Kubernetes, Prometheus, ELK)?",
      a: "Terraform codifies cloud state, Jenkins handles declarative CI/CD build stages, Kubernetes maintains container resilience, and Prometheus/ELK deliver complete telemetry observability."
    },
    {
      q: "What was the biggest technical challenge?",
      a: "Achieving zero-downtime rolling updates for stateful crypto matching engine services while keeping ingress proxy routes active."
    },
    {
      q: "How would you scale Project Nova?",
      a: "Integrate Kubernetes Horizontal Pod Autoscaler (HPA) driven by Prometheus latency metrics and deploy multi-region active-active cloud clusters."
    },
    {
      q: "What would you improve next?",
      a: "Implement GitOps workflow using ArgoCD to automatically synchronize Git repository state with live Kubernetes deployments."
    },
    {
      q: "What did you learn from Project Nova?",
      a: "Gained hands-on mastery over production DevOps pipelines, declarative IaC patterns, secrets isolation, and infrastructure monitoring."
    }
  ],
  "aws-api-platform": [
    {
      q: "What problem does AWS API Management Platform solve?",
      a: "It provides a secure, monitored API proxy layer that isolates backend database infrastructure inside private subnets while exposing high-throughput REST APIs safely."
    },
    {
      q: "Why did you choose this architecture?",
      a: "Separating API Gateway routing from backend compute (EC2 Flask) and data store (RDS) enforces strict security boundaries (VPC subnets) and granular IAM access control."
    },
    {
      q: "Why these technologies (AWS API Gateway, EC2, RDS, VPC, CloudWatch)?",
      a: "API Gateway manages rate limiting and CORS natively. RDS MySQL delivers relational transactional reliability. CloudWatch aggregates error traces and latency metrics."
    },
    {
      q: "What was the biggest technical challenge?",
      a: "Configuring VPC routing tables, Internet Gateways, and NAT Gateways to grant EC2 instances private database connectivity without exposing them to public traffic."
    },
    {
      q: "How would you scale this platform?",
      a: "Place Flask application instances behind an AWS Application Load Balancer (ALB) inside an Auto Scaling Group, and implement ElastiCache Redis for query result caching."
    },
    {
      q: "What would you improve next?",
      a: "Migrate static routes to AWS Lambda serverless functions for zero idle infrastructure costs."
    },
    {
      q: "What did you learn from this platform?",
      a: "Built foundational expertise in AWS cloud security, VPC subnet isolation, IAM policy governance, and relational database provisioning."
    }
  ],
  "smart-traffic": [
    {
      q: "What problem does Smart Traffic Light Controller solve?",
      a: "It eliminates inefficient fixed-timer traffic lights by calculating real-time vehicle queue density and clearing emergency vehicle corridors automatically."
    },
    {
      q: "Why did you choose this architecture?",
      a: "A priority queue model combined with Firebase Realtime Database enables instant synchronization across traffic light displays and emergency dispatcher consoles."
    },
    {
      q: "Why these technologies (JavaScript, Firebase Realtime Database, Firestore)?",
      a: "Firebase's real-time WebSockets synchronization allows immediate data propagation to signal boards with minimal setup overhead."
    },
    {
      q: "What was the biggest technical challenge?",
      a: "Designing an emergency override algorithm that safely transitions intersecting green lights to red without creating sudden traffic collision risks."
    },
    {
      q: "How would you scale this controller?",
      a: "Connect computer vision camera feeds (OpenCV / YOLO) at intersections to stream live vehicle counts directly into an edge IoT device."
    },
    {
      q: "What would you improve next?",
      a: "Incorporate Machine Learning traffic flow forecasting to adjust signal timing proactively based on historical rush-hour patterns."
    },
    {
      q: "What did you learn from this project?",
      a: "Learned how real-time data streams can directly solve physical urban infrastructure challenges."
    }
  ]
};
