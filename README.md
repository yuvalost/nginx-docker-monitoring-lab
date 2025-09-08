# Nginx + Docker + Monitoring Lab

This project is a **3-VM DevOps lab** built in VirtualBox.

- **VM1 (192.168.56.10)** → Nginx reverse proxy  
- **VM2 (192.168.56.20)** → Docker Compose app (React frontend + Node.js backend + MySQL)  
- **VM3 (192.168.56.30)** → Prometheus + Grafana (with Node Exporter on all VMs)  

## Endpoints
- Frontend → http://192.168.56.10/  
- API Health → http://192.168.56.10/api/health  
- Nginx Ping → http://192.168.56.10/ping  
- Prometheus → http://192.168.56.30:9090  
- Grafana → http://192.168.56.30:3000  

## Purpose
This lab shows:
- Reverse proxy setup with **Nginx**  
- Running apps in **Docker Compose**  
- Monitoring with **Prometheus + Grafana**  



<img width="892" height="468" alt="2" src="https://github.com/user-attachments/assets/f63dabda-3284-4810-99de-767ad87c5b69" />
<img width="1847" height="937" alt="3" src="https://github.com/user-attachments/assets/56e5b88c-623a-4926-b669-d5a7225bf071" />
<img width="874" height="864" alt="1" src="https://github.com/user-attachments/assets/7eb1f88b-e4e5-40b8-8825-15ec94ab787e" />
<img width="508" height="218" alt="4" src="https://github.com/user-attachments/assets/689bd3f9-e04c-48cb-b536-7bde0ab51cae" />
