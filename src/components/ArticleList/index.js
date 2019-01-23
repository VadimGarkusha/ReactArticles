import React, {PureComponent} from 'react';
import Article from '../Article';
import accordion from '../decorators/accordion';
import './style.css';

class ArticleList extends PureComponent{
    state = {
        openArticleId: null
    }

  render(){
      return(
        <ul>
            {this.props.articles.map((article, index) => 
                <li key = {article.id}>
                    <Article article = {article} 
                    isOpen={this.state.openArticleId === article.id} 
                    handleClick = {() => this.handleClick(article.id)}/>
                </li>
            )}
        </ul>
  )}

  handleClick = openArticleId => this.setState(
      {openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId}
      );
}

export default accordion(ArticleList);
