export interface bindEmailDataType {
    data: any;
    fileString: string;
}

export interface sendEmailType {
    html?: string | undefined;
    templateRef: string;
    data: any;
    to: string;
    subject: string;
}

export interface EmailServiceType {
    emailUser: string;
    emailPassword: string;
    emailTemplatesDirectory: string;

    bindEmailData({ data, fileString }: bindEmailDataType): string;
    generateHTMLString(type: string, data: any): string;
    sendMail({ html, templateRef, data, to, subject }: sendEmailType): Promise<void>;
    replaceAll(str: string, find: string, replace: string): string;
}