require('./sass/app.scss');
var Home = require('./pages/Home.jsx');
var FullPost = require('./pages/FullPost.jsx');
var ReactDom = require('react-dom');
window.fbAsyncInit = function () {
    FB.init({
        appId: '844711042321636',
        cookie: true,  // enable cookies to allow the server to access
        xfbml: true,  // parse social plugins on this page
        version: 'v2.4' // use graph api version 2.5
    });
};

function fbAuthUser() {
    setTimeout(()=> {
        FB.getLoginStatus((response)=> {
            if (response.status === 'connected') {
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                console.log('usr is connected');
                FB.api('/me', { locale: 'en_US', fields: 'name, email' },
                    function(response) {
                        console.log(response);
                    }
                );
            } else if (response.status === 'not_authorized') {
                FB.login(checkLoginStatus,{scope:'email'});
            } else {
                FB.login(checkLoginStatus,{scope:'email'});
            }
        });
    }, 10000)
}
fbAuthUser();

function checkLoginStatus(response) {
    console.log(response);
}
ReactDom.render(<Home/>, document.getElementById('piftel'));