var React = require('react');
var Post = require('./../components/Post.jsx');
var SideBarPost = require('./../components/SidebarPost.jsx');
module.exports = React.createClass({
    render: function () {
        return (
            <div>

            <div className="row">
                <div className="small-12 medium-6 columns">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <div className="medium-4 columns sidebar show-for-medium">
                    <div className="callout">
                        <h2 className="float-center">Dupa o luna in Vaslui</h2>
                    </div>
                    <SideBarPost/>
                    <SideBarPost/>
                    <SideBarPost/>
                    <SideBarPost/>
                    <SideBarPost/>
                    <SideBarPost/>

                    <div className="social">
                        <h3>Conecteaza-te cu Piftel!</h3>
                        <div className="fb-like" data-href="https://www.facebook.com/piftelro" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
                    </div>
                </div>

            </div>
                <div className="row">
                        <ul className="small-6 small-offset-3 medium-3 medium-offset-6 menu float-center">
                            <li><a href="#">Item One</a></li>
                            <li><a href="#">Item Two</a></li>
                            <li><a href="#">Item Three</a></li>
                        </ul>
                </div>
            </div>
        )
    }
});