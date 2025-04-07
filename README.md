## Template Email - HTML Template Based Email Service for Node.js Backend

**Overview**
- Template Email is a Node.js package that simplifies sending emails with HTML templates. It allows dynamic data binding within templates.

**Features**
- Send emails with custom HTML templates.
- Attachments support.
- Replace placeholders in templates with dynamic data.
- Support for Gmail as the email service provider.
- Error handling for template loading and email sending.

**Installation**
- npm install template-email

**Usage**

- Import and Initialize EmailService
```javascript
import { EmailService } from 'template-email';

const emailService = new EmailService({
    emailUser: 'your.email@gmail.com',
    emailPassword: 'yourpassword',
    emailTemplatesDirectory: './utils/email-templates' // Path to email templates
});
```
- Sending an Email Using an HTML Template
```javascript
emailService.sendMail({
    to: 'recipient@example.com',
    subject: 'Welcome!',
    templateRef: 'welcome', // Reference to the HTML template file eg. welcome.html
    data: {
        username: "John Doe",
        frontendUrl: 'https://www.example.com'
    },
    attachments: [
        {
            filename: "report.png",
            path: "/public-accessable-file-path"
        }
    ]
});
```
- Sending an Email Without a Template
```javascript
emailService.sendMail({
    to: 'recipient@example.com',
    subject: 'Test Email',
    html: '<p>This is a test email.</p>',
    attachments: [
        {
            filename: "report.png",
            path: "/public-accessable-file-path"
        }
    ]
});
```

**Create an HTML Template**
- create an HTML file inside your emailTemplatesDirectory (e.g., ./utils/email-templates/welcome.html) with placeholders wrapped in {{ }} e.g: welcome.html
```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Credentials</title>
</head>
<body>
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <p>Welcome to ABC Portal!</p>
        <p>Dear {{Username}},</p>
        <p>Login to our portal: <a href="{{frontendUrl}}">{{frontendUrl}}</a></p>
        <p>Thank you!</p>
    </div>
</body>
</html>
```

**License**
- MIT