import React, { PureComponent } from "react";

class Article extends PureComponent {
  render() {
    const { article, isOpen, handleClick } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h2>{article.title}</h2>
          <button onClick={handleClick} className="btn btn-primary btn-md">
            {isOpen ? "Close" : "Open"}
          </button>
        </div>
        <div className="card-body">
          {isOpen && (
            <section className="card-text" style={{ marginBottom: "20px" }}>
              {article.text}
            </section>
          )}
          <h6 className="card-subtitle text-muted">
            Creation Date: {new Date(article.date).toDateString()}
          </h6>
        </div>
      </div>
    );
  }
}

export default Article;
