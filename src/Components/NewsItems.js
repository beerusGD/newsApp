import React, { Component } from 'react'

export class NewsItems extends Component { 
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl? "https://static.toiimg.com/thumb/msid-92398228,width-1070,height-580,imgsize-22766,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg": imageUrl } className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%" , zIndex: "1"}}>{source}</span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-success">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>

            {/* target="_blank" => it will open article in new tab */}
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div> 
        </div>
      </div>
    )
  }
}

export default NewsItems