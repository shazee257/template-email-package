## HTML Template based Email

**Overview**
- Template Email is a Node.js package designed to simplify sending emails with HTML templates. It provides a convenient way to dynamically fill in template placeholders with specific data and send emails using the Nodemailer library.

**Features**
- Send emails with custom HTML templates.
- Replace placeholders in templates with dynamic data.
- Support for Gmail as the email service provider.
- Error handling for template loading and email sending..

**Installation**
- npm install template-email

**Usage**
- Import the EmailService class from the package.
- Initialize an instance of EmailService with your Gmail credentials and the directory path to your email templates.
- Use the sendMail method to send emails, providing necessary parameters such as recipient, subject, and template reference.


```javascript
const { EmailService } = require('template-email');

// Initialize EmailService
const emailService = new EmailService({
    emailUser: 'your.email@gmail.com',
    emailPassword: 'yourpassword',
    emailTemplatesDirectory: './utils/email-templates' // Path to email templates
});

// Send email without HTML template
emailService.sendMail({
    to: 'recipient@example.com',
    subject: 'Test Email',
    html: '<p>This is a test email.</p>'
});

// Send email with HTML template
emailService.sendMail({
    to: 'recipient@example.com',
    subject: 'Test Email',
    templateRef: 'login',   // Reference to HTML template file
    data: {
        email: 'test123@gmail.com',
        password: '123456',
        frontendUrl: 'http://example.com'
    }
});



// html code
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Credentials</title>
</head>

<body>
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>User Login Credentials - ABC System</h2>
        <p>Dear User,</p>
        <p>Your login credentials for ABC System are as follows:</p>
        <h1 style="color: #3498db; font-size: 1em;">email: {{email}}</h1>
        <h1 style="color: #3498db; font-size: 1em;">password: {{password}}</h1>

        <p>Use the above credentials to login at <a href="{{frontendUrl}}">ABC System</a></p>
        <p>Thank you for using our service!</p>
    </div>
</body>

</html>