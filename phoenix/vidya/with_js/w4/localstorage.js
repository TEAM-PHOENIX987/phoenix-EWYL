function getDetails(){
    let name,dept,place;
    name=document.querySelector(".name").value;
    dept=document.querySelector(".department").value;
    place=document.querySelector(".place").value;
    let user_details=new Array();
    user_details=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    user_details.push({
        "name":name,
        "department":dept,
        "place":place
    })
    localStorage.setItem("users",JSON.stringify(user_details));

};
