import React from 'react';
import ReactDOM from 'react-dom';
import Author from './index.js';
import articles from '../Data/your-articles.json';

const auth1 =  {
  "name": "Electric Literature",
  "image": "somethinghere.jpeg",
  "isMediumMember": false
};
const minutes = 8;
const publish_date = 'Mar 7';





it('Author component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Author author={auth1} month={publish_date} minutes={minutes}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
