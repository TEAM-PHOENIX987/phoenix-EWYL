function getpage(event){
    event.preventDefault();
    window.history.pushState({},'',event.target.href)
    constructPage()
}
    const routes={
        '/home':,
        '/contact':'C:\Users\ELCOT\phoenix-EWYL\phoenix\javascript\karthekeian\practice\link\contact.html',
        '/about':'C:\Users\ELCOT\phoenix-EWYL\phoenix\javascript\karthekeian\practice\link\about.html',
        '404':'C:\Users\ELCOT\phoenix-EWYL\phoenix\javascript\karthekeian\practice\link\404.html'
    }
function constructPage() {
    let path=window.location.pathname;
    let templateName=routes[path]?routes[path]:routes['404'];
    fetch(templateName).then(function (htmlContent) {
        htmlContent.text()
        .then(function(content) {
            document.querySelector('.page-container').innerHTML = content;
        });
    });
}