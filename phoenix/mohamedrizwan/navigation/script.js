function gotoPage(event) {
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    console.log("aaaa");
    constructPage();
}

const routes = {
    '/spotify': './phoenix-EWYL/phoenix/mohamedrizwan/spotify-page/index.html',
    '/aboutdhoni': './phoenix-EWYL/phoenix/mohamedrizwan/about-dhoni/index.html',
    '/facebookclone': './phoenix-EWYL/phoenix/mohamedrizwan/facebook-login/index.html',
    '/loginpage': './phoenix-EWYL/phoenix/mohamedrizwan/login-page/index.html',
}

function constructPage() {
    let path = window.location.pathname;
    let templateName = routes[path] ? routes[path] : routes['404'];
    fetch(templateName)
        .then(function (htmlContent) {
            htmlContent.text()
                .then(function (content) {
                    document.querySelector('.page-container').innerHTML = content;
                });
        });
}

