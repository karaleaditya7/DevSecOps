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

    - run: npx eslint . || true
    - Runs ESLint on your project.
    - || true makes sure that even if ESLint finds issues, the job doesn’t fail (optional — can remove if you want to fail on errors)

   

- Trivy:
  - Appears under `Trivy Container Scan` job
  - Reports HIGH, MEDIUM, LOW vulnerabilities in OS and packages
  - Uses format: 'table' to output clean, readable results 
  - exit-code: '0' ensures that even if vulnerabilities are found, the job doesn’t fail
  - Good for CI pipelines where you want to report but not block the build

---

## Run This Pipeline

1. Push code or open PR to `main`
2. View GitHub → Actions tab → `Security Checks`

---

## Customizations

- ESLint uses `eslint-plugin-security` for Node.js-focused issues
- Trivy configured to run on every PR and push to `main`

Useful for shift-left security — you scan before merge.
