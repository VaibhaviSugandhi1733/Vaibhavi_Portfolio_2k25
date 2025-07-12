# GitHub Repository Setup Instructions

To make the "git clone" links work in your portfolio, you need to create these repositories on GitHub:

## Required Repositories

### 1. Web Scraper Project
- **Repository Name**: `web-scraper-project`
- **URL**: https://github.com/VaibhaviSugandhi1733/web-scraper-project
- **Description**: Python web scraper with Docker containerization

### 2. Ansible Cluster Setup
- **Repository Name**: `ansible-cluster-setup`
- **URL**: https://github.com/VaibhaviSugandhi1733/ansible-cluster-setup
- **Description**: Ansible cluster configuration with Docker and Kubernetes

### 3. File Management Tool
- **Repository Name**: `file-management-tool`
- **URL**: https://github.com/VaibhaviSugandhi1733/file-management-tool
- **Description**: Python CLI tool for file organization

## Steps to Create Repositories

1. Go to https://github.com/new
2. For each repository:
   - Set the repository name exactly as shown above
   - Make it public
   - Add a README.md file
   - Add appropriate .gitignore for the technology
   - Add a description matching the project

## Repository Content Suggestions

### web-scraper-project
- Python requirements.txt
- Dockerfile
- README with usage instructions
- Sample scraper code

### ansible-cluster-setup
- Kubernetes YAML files
- Ansible playbooks
- SSH configuration examples
- README with setup instructions

### file-management-tool
- Python script (file_manager.py)
- Requirements.txt
- README with CLI usage
- Example usage scenarios

## Alternative: Update Repository URLs

If you prefer to use different repository names, update the URLs in `src/components/Projects.tsx`:

```typescript
github: "https://github.com/VaibhaviSugandhi1733/your-actual-repo-name"
```

## Testing the Links

After creating the repositories, test each link to ensure they work:
1. Click the "git clone" button in your portfolio
2. Verify it opens the correct GitHub repository
3. Check that the repository contains relevant content 