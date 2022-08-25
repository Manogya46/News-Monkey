import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, url, published, source } = props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imageUrl}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {new Date(published).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
