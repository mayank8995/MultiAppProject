import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ARTICLE } from 'src/app/util/article';
import { BLOGDATA } from 'src/app/util/blog';

@Injectable({
  providedIn: 'root'
})
export class InmemorydataService  implements InMemoryDbService{

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const articles:ARTICLE[] = [
      { 
        id: '0',
        imageUrl:'../../../../../assets/logo/JavaScript-logo.png',
        alt:'Javascript Logo',
        date:'Thursday April 8,2021',
        heading:'Introduction to Javascript',
        content:'Let’s see what’s so special about JavaScript...'
      },
      { 
        id: '1',
        imageUrl:'../../../../../assets/logo/Angular_full_color_logo.svg.png',
        alt:'Angular Logo',
        date:'Thursday April 8,2021',
        heading:'Introduction to Angular',
        content:'Let’s see what’s so special about Angular...'
      },
      { 
        id: '2',
        imageUrl:'../../../../../assets/logo/1280px-React-icon.svg.png',
        alt:'React Logo',
        date:'Thursday April 8,2021',
        heading:'Introduction to React',
        content:'Let’s see what’s so special about React...'
      }
    ];
    return {articles};
  }

  getArticleData(index: number): {} | Observable<{}> | Promise<{}>{

    let imageUrls = [];
    imageUrls.push('../../../../../assets/logo/JavaScript-logo.png');
    imageUrls.push('../../../../../assets/logo/Angular_full_color_logo.svg.png');
    imageUrls.push('../../../../../assets/logo/1280px-React-icon.svg.png');
    const blog:BLOGDATA[]=[
      {
        id: '0',
        content: `<p>
        <h2>Origin and History</h2>
        JavaScript was initially created to “make web pages alive”.

        The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.</p>
        
        <p>Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
        
        In this aspect, JavaScript is very different from another language called Java.</p>
        
        <p>When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

        But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.</p>
        <p>Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

        The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

        <p>Different engines have different “codenames”. For example:<br>

        V8 – in Chrome and Opera.
        SpiderMonkey – in Firefox.
        …There are other codenames like “Chakra” for IE, “ChakraCore” for Microsoft Edge, “Nitro” and “SquirrelFish” for Safari, etc.</p>
        <h2>Getting started with Javascript</h2>
        <p>Getting started with JavaScript is easy: all you need is a modern Web browser. This guide includes some JavaScript features which are only currently available in the latest versions of Firefox, so using the most recent version of Firefox is recommended.</p>

        <p>The Web Console tool built into Firefox is useful for experimenting with JavaScript; you can use it into two modes: single-line input mode, and multi-line input mode.</p>
        <h2>Single-line input in the Web Console</h2>
        <p>The Web Console shows you information about the currently loaded Web page, and also includes a JavaScript interpreter that you can use to execute JavaScript expressions in the current page.</p>

        <p>To open the Web Console (Ctrl+Shift+I on Windows and Linux or Cmd-Option-K on Mac), open the Tools menu in Firefox, and select "Developer ▶ Web Console".</p> 
        
        <p>The Web Console appears at the bottom of the browser window. Along the bottom of the console is an input line that you can use to enter JavaScript, and the output appears in the panel above:</p>
        <img style="width:100%;margin-bottom: 15px;" src="../../../../../assets/images/developer_console.png" alt="Developer console image">
        <p>That's about javascript origin and history.</p>
        <p>Thank you.</p>
        <p>To learn more about javascript visit <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Javascript</a></p>
        `,
        externalLinks: [''],
        imageUrls: imageUrls,
        date: 'Thursday April 8,2021',
        heading: 'Introduction to Javascript'
      },
      {
        id: '1',
        content: '',
        externalLinks: [''],
        imageUrls: imageUrls,
        date: '',
        heading: 'Introduction to Angular'
      },
      {
        id: '2',
        content: '',
        externalLinks:[''],
        imageUrls: imageUrls,
        date: '',
        heading: 'Introduction to React'
      }
    ]
    let obj = blog[index];
    console.log(blog,"  ",obj);
    return obj
  }
}
