import nodemailer from 'nodemailer';
import fs from 'fs';
import { bindEmailDataType, sendEmailType, EmailServiceType } from './types';

export class EmailService {
    private emailUser: string;
    private emailPassword: string;
    private emailTemplatesDirectory: string;

    constructor({ emailUser, emailPassword, emailTemplatesDirectory = "" }: EmailServiceType) {
        this.emailUser = emailUser;
        this.emailPassword = emailPassword;
        this.emailTemplatesDirectory = emailTemplatesDirectory;
    }

    private bindEmailData({ data, fileString }: bindEmailDataType): string {
        // Iterate over each property in the data object
        for (const key in data) {
            // Replace all occurrences of the key in the fileString with the corresponding value
            fileString = this.replaceAll(fileString, `{{${key}}}`, data[key]);
        }
        // Return the modified fileString
        return fileString;
    }

    private replaceAll(str: string, find: string, replace: string): string {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    private generateHTMLString(type: string, data: any): string {
        let result = "";

        try {
            const files = fs.readFileSync(`${this.emailTemplatesDirectory}/${type}.html`);
            let fileString = files.toString('utf8');
            result = this.bindEmailData({ data, fileString });
        } catch (error) {
            console.log(error);
        }

        return result;
    }

    async sendMail({ html, templateRef = "", data, to, subject, attachments = [] }: sendEmailType): Promise<void> {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: this.emailUser, pass: this.emailPassword },
        });

        const mailOptions = {
            from: this.emailUser,
            to,
            subject,
            html: html || this.generateHTMLString(templateRef, data),
            attachments: attachments,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent: " + info.response);
        } catch (error) {
            console.log(error);
        }
    }
}