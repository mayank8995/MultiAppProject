import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ARTICLE } from 'src/app/util/article';
import { BLOGDATA } from 'src/app/util/blog';

@Injectable({
  providedIn: 'root'
})
export class InmemorydataService  implements InMemoryDbService{

  blog:BLOGDATA[]=[];
  articles:ARTICLE[]=[
    { 
      id: '0',
      imageUrl:'../../../../../assets/logo/JavaScript-logo.png',
      alt:'Javascript Logo',
      date:'Thursday April 8,2021',
      heading:'Introduction to Javascript',
      content:'Let’s see what’s so special about JavaScript...',
      thumbsUpCount: 0
    },
    { 
      id: '1',
      imageUrl:'../../../../../assets/logo/Angular_full_color_logo.svg.png',
      alt:'Angular Logo',
      date:'Thursday April 8,2021',
      heading:'Introduction to Angular',
      content:'Let’s see what’s so special about Angular...',
      thumbsUpCount: 0
    },
    { 
      id: '2',
      imageUrl:'../../../../../assets/logo/1280px-React-icon.svg.png',
      alt:'React Logo',
      date:'Thursday April 8,2021',
      heading:'Introduction to React',
      content:'Let’s see what’s so special about React...',
      thumbsUpCount: 0
    }
  ];
  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    console.log("articles >>>",this.articles);
    let articles = this.articles;
    return {articles};
  }

  getArticleData(index: number): {} | Observable<{}> | Promise<{}>{

    let imageUrls = [];
    imageUrls.push('../../../../../assets/logo/JavaScript-logo.png');
    imageUrls.push('../../../../../assets/logo/Angular_full_color_logo.svg.png');
    imageUrls.push('../../../../../assets/logo/1280px-React-icon.svg.png');
    this.blog=[
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
        
        <p>The Web Console appears at the bottom of the browser window. Along the bottom of the console is an input line that you can use to enter JavaScript, and the output appears in the panel:</p>
        <img style="width:100%;margin-bottom: 15px;" src="../../../../../assets/images/developer_console.png" alt="Developer console image">
        <p>Here is another codepen example:</p>
        <iframe height="265" style="width: 100%;" scrolling="no" title="rNjYKNe" src="https://codepen.io/mayank8995/embed/preview/rNjYKNe?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href='https://codepen.io/mayank8995/pen/rNjYKNe'>rNjYKNe</a> by Mayank Gupta
             (<a href='https://codepen.io/mayank8995'>@mayank8995</a>) on <a href='https://codepen.io'>CodePen</a>.
         </iframe>
        <p>That's about javascript origin and history.</p>
        <p>To learn more about javascript visit <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Javascript</a></p>
        `,
        externalLinks: [''],
        imageUrls: imageUrls,
        date: 'Thursday April 8,2021',
        heading: 'Introduction to Javascript',
        thumbsUpCount: 0
      },
      {
        id: '1',
        content: `<h1>What is Angular?</h1>
        <p>Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
        <h1>What is AngularJS?</h1>
        <p>AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p>
        <ol>
          <li>Prerequisites</li>
            <ul>
              <li>Angular 6 requires Node.js version 8.x or 10.x.</li>
              <li>Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have a npm package manager, which is installed with Node.js by default.</li>
            </ul>
        </ol>
        `,
        externalLinks: [''],
        imageUrls: imageUrls,
        date: '',
        heading: 'Introduction to Angular',
        thumbsUpCount: 0
      },
      {
        id: '2',
        content: '',
        externalLinks:[''],
        imageUrls: imageUrls,
        date: '',
        heading: 'Introduction to React',
        thumbsUpCount: 0
      }
    ]
    let obj = this.blog[index];
    console.log(this.blog,"  ",obj);
    return obj
  }

  increaseThumbsUpCount(index: number){
   
    if(index!=null && index!=undefined){
      this.articles[index].thumbsUpCount += 1;
      console.log(index," ",this.articles[index]);
      this.setLocalStorage(index);

    }
    //  console.log(index);
  }
  decreaseThumbsUpCount(index: number){
    if(index!=null && index!=undefined){
      if(this.articles[index].thumbsUpCount > 0){
        this.articles[index].thumbsUpCount -= 1;
        this.removeLocalStorage(index);
      }
    }
  }
  private setLocalStorage(index: number){
    localStorage.setItem(index.toString(),this.articles[index].thumbsUpCount.toString());
  }
  private removeLocalStorage(index: number){
    localStorage.removeItem(index.toString());
  }
 
}
