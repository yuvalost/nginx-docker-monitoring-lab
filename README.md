Nginx + Docker + Monitoring Lab

A hands-on **DevOps/System Administration lab** built on VirtualBox with 3 VMs, simulating a production-like environment with reverse proxy, Dockerized applications, and full observability.

📐 Architecture

[ VM1: Nginx Proxy ] (192.168.56.10)
- Reverse proxy / load balancer
- Health check endpoint (/ping)
│
▼
[ VM2: App Server ] (192.168.56.20)
- Docker Compose stack
- React frontend
- Node.js backend (Express)
- MySQL database
- API health: /api/health
│
▼
[ VM3: Monitoring ] (192.168.56.30)
- Prometheus
- Grafana
- Node Exporter (on all VMs)

markdown
Copy code

🌐 Endpoints

- Frontend:  
  http://192.168.56.10/  

- Backend API (via Nginx): 
  http://192.168.56.10/api/health  

- Nginx health check: 
  http://192.168.56.10/ping  

- Monitoring:
  - Prometheus: http://192.168.56.30:9090  
  - Grafana: http://192.168.56.30:3000  

## 🛠️ Tech Stack

- Nginx → Reverse proxy, static site hosting  
- Docker + Compose → App orchestration  
- MySQL 8 → Relational database  
- Node.js (Express) → Backend API  
- React + Vite → Frontend UI  
- Prometheus + Grafana → Monitoring and dashboards  
- Node Exporter → System metrics on each VM  

## 🚀 Usage

### On VM2 (App server)
```bash
# Start the app stack
docker compose up -d

# Check running services
docker compose ps
On VM1 (Proxy)
bash
Copy code
# Test health
curl http://192.168.56.10/ping
curl http://192.168.56.10/api/health
On VM3 (Monitoring)
bash
Copy code
# Prometheus targets
http://192.168.56.30:9090/targets

# Grafana login (default)
user: admin
pass: admin
📊 Grafana Dashboard
Data source: Prometheus (http://prometheus:9090)

Recommended dashboard: Node Exporter Full (ID 1860)

Shows CPU, memory, disk, network for all 3 VMs

🎯 Goals of this Lab
Practice Linux sysadmin tasks (networking, firewalls, reverse proxy)

Deploy containerized applications with Docker

Set up end-to-end monitoring (metrics + dashboards)
