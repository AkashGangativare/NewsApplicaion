import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, urlToImage, url, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1}}>
                    {source}    </span>
                    <img src={urlToImage?urlToImage:"https://images.moneycontrol.com/static-mcnews/2021/04/software2-1-770x433.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unkonwn"} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
