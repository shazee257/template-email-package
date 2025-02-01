## Template Email - HTML Template Based Email Service

**Overview**
- Template Email is a Node.js package that simplifies sending emails with HTML templates. It allows dynamic data binding within templates and uses Nodemailer for email delivery.

**Features**
- Send emails with custom HTML templates.
- Replace placeholders in templates with dynamic data.
- Support for Gmail as the email service provider.
- Error handling for template loading and email sending..

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
    subject: 'Login Credentials',
    templateRef: 'login', // Reference to the HTML template file eg. login.html
    data: {
        email: 'test123@gmail.com',
        password: '123456',
        frontendUrl: 'http://example.com'
    }
});
```
- Sending an Email Without a Template
```javascript
emailService.sendMail({
    to: 'recipient@example.com',
    subject: 'Test Email',
    html: '<p>This is a test email.</p>'
});
```

- Creating an Email Template
<p>Create an HTML file inside your emailTemplatesDirectory (e.g., ./utils/email-templates/login.html) with placeholders wrapped in {{ }}</p>
<strong>Example:</strong> login.html
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
        <h2>User Login Credentials</h2>
        <p>Dear User,</p>
        <p>Your login credentials are:</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Password:</strong> {{password}}</p>
        <p>Login at: <a href="{{frontendUrl}}">Click Here</a></p>
        <p>Thank you!</p>
    </div>
</body>
</html>
```
**License**
<p>This project is licensed under the MIT License.</p>
