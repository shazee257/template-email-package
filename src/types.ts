export interface bindEmailDataType {
    data: any;
    fileString: string;
}

export type AttachmentType = {
    filename?: string;
    path?: string;
    content?: Buffer | string;
    contentType?: string;
}

export type sendEmailType = {
    html?: string;
    templateRef?: string;
    data?: any;
    to: string;
    subject: string;
    attachments?: AttachmentType[];
}

export interface EmailServiceType {
    emailUser: string;
    emailPassword: string;
    emailTemplatesDirectory: string;
}