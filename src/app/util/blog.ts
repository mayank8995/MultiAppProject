import { SafeHtml } from "@angular/platform-browser";

export interface BLOGDATA{
    id: string;
    content: SafeHtml;
    externalLinks: string[];
    imageUrls: string[];
    date: string;
    heading: string;
    thumbsUpCount: number
}