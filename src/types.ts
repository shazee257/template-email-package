export interface bindEmailDataType {
    data: any;
    fileString: string;
}

export interface sendEmailType {
    to: string;
    subject: string;
    html?: string | undefined;
    templateRef?: string;
    data?: any;
}

export interface EmailServiceType {
    emailUser: string;
    emailPassword: string;
    emailTemplatesDirectory: string;
}