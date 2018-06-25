import React from 'react';

class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      news: null
    };
  }
  renderNews(){
    
  }
  render() {
    if(this.state.news) {
      return(
        <div>
          {this.renderNews()}
        </div>
      );
    } else {
      return(
        <div id="msg-app-loading"> 
          Loading...
        </div>
      );
    }
  }
}

export default NewsPanel;