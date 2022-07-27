let detailsInfo=document.querySelector(".details-info");
const container=document.querySelector(".info");
localStorage.setItem("newStr",JSON.stringify(detailsInfo));
    detailsData=localStorage.getItems("newStr");
    newStr=JSON.parse(detailsData);
    let tableData="";
    const personname=document.querySelector(".name").value;
  const deptName=document.querySelector(".dept").value;
  const placeName=document.querySelector(".place").value;
    
function getItemss(event){  
  event.preventDefault();
  const NN=personname.value;
  const DN=deptName.value;
  const PN=placeName.value;
 console.log(newStr);
};
getItemss.forEach(element => {
  
});