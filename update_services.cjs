const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'services.js');
let content = fs.readFileSync(filePath, 'utf8');

const tags = {
  'artificial-intelligence': ['AI Powered', 'Secure'],
  'saas-development': ['Cloud Native', 'Scalable'],
  'mobile-apps': ['iOS & Android', 'Fast UX'],
  'web-development': ['Responsive', 'Modern Tech'],
  'ui-ux-design': ['User-Centric', 'Pixel Perfect'],
  'automation': ['Efficient', 'Time Saving'],
  'cloud-solutions': ['High Uptime', 'Scalable'],
  'data-analytics': ['Data Driven', 'Insights'],
  'digital-marketing': ['High ROI', 'Targeted'],
  'branding': ['Creative', 'Memorable'],
  'it-consulting': ['Strategic', 'Expertise'],
  'cybersecurity': ['Protected', 'Encrypted']
};

for (const [id, [top, bottom]] of Object.entries(tags)) {
  const regex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?)(overviewTitle:)`, 'g');
  content = content.replace(regex, `$1floatingTop: '${top}',\n    floatingBottom: '${bottom}',\n    $2`);
}

fs.writeFileSync(filePath, content);
console.log('Done modifying services.js');
