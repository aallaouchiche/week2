import React from 'react';
import ReactDOM from 'react-dom';
import YourArticles from './index.js';
import articles from '../Data/your-articles.json';

const artc2 = {
    "title": "This Handy Chart Automatically Generates a Pitch for Your New Novel",
    "description": "Feeling stuck? We help you skip the writing and go straight to the press release",
    "image": "https://cdn-images-1.medium.com/max/800/1*KHs6OgOb7_aJhmQvOKj_dg.jpeg",
    "link": "https://electricliterature.com/how-to-write-elevator-pitch-novel-publicity-infographic-a8ec74ecf7ce",
    "author": {
        "name": "Electric Literature",
        "image": "https://cdn-images-1.medium.com/fit/c/80/80/1*bs47qwmiIR_bU01Jm6ZI9Q.jpeg",
        "isMediumMember": false
    },
    "postedDate": "2018-03-28T07:00:00.000Z",
    "minutesToRead": 2,
    "hasAudioAvailable": false,
    "memberPreview": false
};


it('Your articles component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YourArticles article={artc2} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
