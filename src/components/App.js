import React, { PureComponent } from 'react';
import ArticleList from './ArticleList/index';
import articles from './fixtures';
import 'bootstrap/dist/css/bootstrap.css';

class App extends PureComponent{
    state = {
        reverted: false
    }

    revert = () =>{
        this.setState({reverted: !this.state.reverted});
    }

    render(){
        return(
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>App Name</h1>
                    <button onClick={this.revert} className='btn'>Revert</button>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        );
    }
}

export default App;