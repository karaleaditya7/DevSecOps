# DevSecOps

# CI/CD Shift Left Security

##  Security Tools Used
ESLint ==> with security plugin, Static analysis of JS code to catch vulnerabilities 
Trivy ==>  Scan Docker image for OS/package vulnerabilities 

## Proof of Concept

## Project Setup

GitHub repository created
Branch security-pipeline created for implementation
Basic Node.js application used for demonstration

Tool Integration
ESLint configured for Static Application Security Testing (SAST)
Trivy used for container vulnerability scanning

## Why ESLint  and Trivy  ?

ESLint
  Static Application Security Testing (SAST)
    - Catches insecure code patterns during development
    - Lightweight and easy to integrate
    - Supports plugins like eslint-plugin-security for security
    -specific rules
Trivy
  Container Image Vulnerability Scanning
    - Scans Docker images for OS/package CVEs
    - Fast and widely used in DevSecOps
    - Supports multiple formats (table, JSON)
    - Easy to automate in CI/CD


---

##  Configuration

- ESLint configured via `.eslintrc.json`
- Trivy scans built Docker image for known CVEs

---

## CI/CD Pipeline
   - GitHub Actions configured in .github/workflows/security.yml
   - Pipeline triggers on push and pull_request to main branch
   - Steps:
   - Checkout code
   - Install dependencies
   - Run ESLint
   - Build Docker image
   - Scan image using Trivy
   - Upload results as artifacts
   - ESLint and Trivy outputs saved as JSON files (eslint-report.json, trivy-report.json)
   - Artifacts downloadable from each workflow run for auditing and historical review


---

## Run This Pipeline

1. Push code or open PR to `main`
2. View GitHub → Actions tab → `Security Checks`

---

## Summary
  Shift Left helps identify issues early in development, reducing risk and cost.
  ESLint provides real-time feedback on insecure coding practices.
  Trivy ensures that the built Docker image does not contain known vulnerabilities.
  GitHub Actions offers a seamless and automated way to enforce these checks with every code change.
---

## Conclusion

  The PoC effectively demonstrates how shift-left practices can be implemented in a modern development workflow using open-source tools. Integrating security scans early   in the pipeline increases code quality and minimizes risk.

---
  
## Recommendation

  Point 1: Enforce Security Linting in Dev Workflows
  Integrate ESLint with eslint-plugin-security into developers’ local workflows and pull requests. This ensures insecure patterns like eval() are caught early and          consistently.
  
  Point 2: Run Container Scans on Every Commit
  Use Trivy to scan every Docker image build in CI to catch known CVEs in OS packages and dependencies before images are deployed.
  
  Point 3: Fail Builds on Critical Issues
  Configure your pipeline to fail builds when Trivy or ESLint detects critical 
  vulnerabilities, unless explicitly bypassed. This prevents insecure code from reaching production.
  
  Point 4: Store and Review Scan Artifacts
  Save scan reports (e.g., trivy-report.json) as GitHub Actions artifacts for traceability, audits, and historical comparison.
  
  Point 5: Add Secret and Dependency Scanning
  Extend the pipeline with tools like gitleaks for secret scanning and npm audit or OSV-Scanner for vulnerable dependencies.
  
  Point 6: Schedule Nightly or Weekly Security Scans
  Use scheduled workflows to scan even when there are no code changes, ensuring newly disclosed vulnerabilities in base images or dependencies are caught.

---

## Comments

  This PoC shows how easy and impactful it is to embed security early in the development cycle. While simple, it lays the foundation for broader DevSecOps practices       including secret scanning, dynamic analysis, and more sophisticated security gates.

