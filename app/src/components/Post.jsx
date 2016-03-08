var React = require('react');
module.exports = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="small-12 medium-12 columns post">
                    <h2>Newton's f**king law</h2>
                    <div className="post-container">
                        <div className="image-container">
                            <img className="float-center" src="http://img-9gag-fun.9cache.com/photo/a3B0bX3_700b.jpg" alt="Newton's f**king law"/>
                        </div>
                        <div className="post-crop">
                            <div className="more-shadow"></div>
                            <div className="row">
                                <div className="small-12 columns">
                                    <i className="fa fa-link" style={{marginLeft:'20px',marginTop:'10px'}}></i>Vizualizeaza
                                    tot postul
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="post-info">10,0666 voturi si 61 comentarii</span>
                    <div className="callout clearfix">
                        <a className="icon-container"><i className="fa fa-chevron-up"></i></a>
                        <a className="icon-container"><i className="fa fa-chevron-down"></i></a>
                        <a className="icon-container"><i className="fa fa-comment-o"></i></a>
                        <div className="float-right fb-like" data-href="https://www.facebook.com/piftelro" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
                    </div>
                </div>
            </div>

        )
    }
});