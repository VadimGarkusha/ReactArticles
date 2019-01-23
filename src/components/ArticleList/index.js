import React, {PureComponent} from 'react';
import Article from '../Article';
import accordion from '../decorators/accordion';
import './style.css';

class ArticleList extends PureComponent{

  render(){
    const {toggleOpenItem,  openItemId, articles} = this.props;

      return(
        <ul>
            {articles.map((article, index) => 
                <li key = {article.id}>
                    <Article article = {article} 
                    isOpen={openItemId === article.id} 
                    handleClick = {() => toggleOpenItem(article.id)}/>
                </li>
            )}
        </ul>
  )}
}

export default accordion(ArticleList);
