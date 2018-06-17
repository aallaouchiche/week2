import your_articles from './missed-articles.json';
import React, { Component } from 'react';
import './missed.css';
import Author from '../author';


class yourArticles extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        authr: null,
        month: null,
        minutes: null,
      };
    }


  get_article_data() {
  const articles = your_articles.map((article,index)=>article);
    return (
      articles
    );
}

isAudioAvailable(audio){
  const has_audio = '<svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><g stroke-linecap="round" stroke-linejoin="round"><path d="M17.4 7s2.64 3.562 0 6.876"></path><path d="M15 8.556s1.6 2.38 0 4.402"></path></g><path d="M11.896 3.01a.186.186 0 0 0-.184.037L6.467 7.701H3.213c-.092 0-.213.062-.213.143v5.28c0 .08.115.303.213.303h3.139L11.717 18h.185a.168.168 0 0 0 .098-.155V3.147a.14.14 0 0 0-.104-.137z"></path></svg>Audio available';
if (audio) return has_audio;
}

hasPreviw(preview){
  const has_preview = '<svg class="svgIcon-use" width="15" height="15" viewBox="0 0 15 15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0.26-.19l1.2-3.52z"></path></svg>Member preview';
  if (preview) {
    return has_preview;
  }
}


parseOneArticle(artc){


  const somethinghere = '<svg xmlns="http://www.w3.org/2000/svg" class="svgIcon-use" viewBox="0 0 25 25" width="25" height="25"><path fill-rule="evenodd" d="M 19 6 c 0 -1.1 -0.9 -2 -2 -2 H 8 c -1.1 0 -2 0.9 -2 2 v 14.66 h 0.012 c 0.01 0.103 0.045 0.204 0.12 0.285 a 0.5 0.5 0 0 0 0.706 0.03 L 12.5 16.85 l 5.662 4.126 a 0.508 0.508 0 0 0 0.708 -0.03 a 0.5 0.5 0 0 0 0.118 -0.285 H 19 V 6 Z m -6.838 9.97 L 7 19.636 V 6 c 0 -0.55 0.45 -1 1 -1 h 9 c 0.55 0 1 0.45 1 1 v 13.637 l -5.162 -3.668 a 0.49 0.49 0 0 0 -0.676 0 Z" /></svg>';
  const has_preview ='<svg class="svgIcon-use" width="15" height="15" viewBox="0 0 15 15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path></svg>';

const preview_member = this.hasPreviw(artc.memberPreview);
const star_preview = '<svg class="svgIcon-use" width="15" height="15" viewBox="0 0 15 15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path></svg>';
const hasAudio = this.isAudioAvailable(artc.hasAudioAvailable);
  return (
     <div class="col-1">
        <div class="main_pic float_text">
           <img src={artc.image}/>
        </div>
        <div>
           <h3 class="title_Article">
              {artc.title}
           </h3>
           <p>
              {artc.description}
           </p>
           <div>
              <div>{this.hasAudio}</div>
           </div>
           <Author author={artc.author} month={artc.postedDate} minutes={artc.minutesToRead}/>

        </div>
     </div>













  );
}
parse_all_articles(dataArticles) {
  const articles_ = dataArticles.map((artc,index)=>{
    return this.parseOneArticle(artc);
  });
  return articles_;

}



  render()
  {
    return (
      <div>{this.parse_all_articles(this.get_article_data())}</div>
    );
  }
}





export default yourArticles;
