# DevSecOps

# CI/CD Shift Left Security

##  Security Tools Used
ESLint ==> with security plugin, Static analysis of JS code to catch vulnerabilities 
Trivy ==>  Scan Docker image for OS/package vulnerabilities 

---

##  Configuration

- ESLint configured via `.eslintrc.json`
- Trivy scans built Docker image for known CVEs

---

##  Interpreting Results

- ESLint:
  - Appears under `ESLint SAST Check` job in GitHub Actions
  - Look for warnings like use of `eval`, insecure regex, etc.

- Trivy:
  - Appears under `Trivy Container Scan` job
  - Reports HIGH, MEDIUM, LOW vulnerabilities in OS and packages

---

## Run This Pipeline

1. Push code or open PR to `main`
2. View GitHub → Actions tab → `Security Checks`

---

## Customizations

- ESLint uses `eslint-plugin-security` for Node.js-focused issues
- Trivy configured to run on every PR and push to `main`

