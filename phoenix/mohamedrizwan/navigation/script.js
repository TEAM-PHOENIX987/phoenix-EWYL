function gotoPage(event) {
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    console.log("aaaa");
    constructPage();
}

const routes = {
    '/spotify': './phoenix-EWYL/phoenix/mohamedrizwan/19-5/index.html',
    '/aboutdhoni': './phoenix-EWYL/phoenix/mohamedrizwan/20-5/index.html',
    '/facebookclone': './phoenix-EWYL/phoenix/mohamedrizwan/21-5/index.html',
    '/loginpage': './phoenix-EWYL/phoenix/mohamedrizwan/26-5/index.html',
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

