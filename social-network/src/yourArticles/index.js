import React, { Component } from 'react';
import './your_articles.css';
import Author from '../author';
import PropTypes from 'prop-types';

const propTypes ={
  article: PropTypes.object.isrequired
}



class yourArticles extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        authr: null,
        month: null,
        minutes: null,
      };
    }

  render()
  {

    const {
      image,
      title,
      description,
      hasAudioAvailable,
      memberPreview,
      author,
      minutesToRead,
      publish_date,
      postedDate
    } = this.props.article;
    const date_publish = new Date(postedDate);
    const local = "en-us";
    const month1 = date_publish.toLocaleString(local,{month:"short"});
    const day = date_publish.toLocaleString(local,{day:"numeric"});
    const published_date = month1.concat(" ",day);

    return (


      <div className="col-1">
         <div className="main_pic float_text">
            <img src={image}/>
         </div>
         <div>
         <div id="audio_preview">
            {hasAudioAvailable ? (<div id="audio"><svg className="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><g strokeLinecap="round" strokeLinejoin="round"><path d="M17.4 7s2.64 3.562 0 6.876"></path><path d="M15 8.556s1.6 2.38 0 4.402"></path></g><path d="M11.896 3.01a.186.186 0 0 0-.184.037L6.467 7.701H3.213c-.092 0-.213.062-.213.143v5.28c0 .08.115.303.213.303h3.139L11.717 18h.185a.168.168 0 0 0 .098-.155V3.147a.14.14 0 0 0-.104-.137z"></path></svg> Audio Preview </div> ) :null}
         <div id="memberPreview">
            {memberPreview ? (<svg className="svgIcon-use" width="15" height="15" viewBox="0 0 15 15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path></svg>) :null}
         </div>
         </div>
            <h3 className="title_Article">
               {title}
            </h3>
            <p>
               {description}
            </p>

            <Author author={author} month={published_date} minutes={minutesToRead}/>

         </div>
      </div>

    );
  }
}





export default yourArticles;
