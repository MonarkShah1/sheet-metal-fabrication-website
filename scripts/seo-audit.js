// SEO Preservation Audit Script
const fs = require('fs');
const path = require('path');

class SEOAudit {
  constructor() {
    this.issues = [];
    this.warnings = [];
    this.passed = [];
  }

  findFiles(dir, extension, results = []) {
    if (\!fs.existsSync(dir)) return results;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && \!file.startsWith('.') && file \!== 'node_modules') {
        this.findFiles(fullPath, extension, results);
      } else if (file.endsWith(extension)) {
        results.push(fullPath);
      }
    }
    return results;
  }

  async auditMetaTags() {
    console.log('Auditing meta tags...');
    const pageFiles = this.findFiles('app', 'page.tsx');
    
    for (const file of pageFiles) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('generateMetadata')) {
        this.passed.push('✅ ' + file + ': Has metadata');
      } else if (\!content.includes('not-found')) {
        this.warnings.push('⚠️  ' + file + ': Missing metadata');
      }
    }
  }

  async run() {
    console.log('Starting SEO audit...');
    await this.auditMetaTags();
    
    console.log('\nSEO AUDIT REPORT');
    console.log('Passed: ' + this.passed.length);
    console.log('Warnings: ' + this.warnings.length);
    
    this.passed.forEach(item => console.log(item));
    this.warnings.forEach(item => console.log(item));
    
    return this.issues.length === 0;
  }
}

module.exports = { SEOAudit };
EOF < /dev/null
