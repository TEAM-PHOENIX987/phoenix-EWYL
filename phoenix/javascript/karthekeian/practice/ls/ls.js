fetch('https://reqres.in/api/users').then((str)=>{
   str.json().then((objData)=>{
      console.log(objData);
      let tableData="";
      objData.forEach(function(data){
       tableData+=`<div class="details">
            <h3>${data.id}</h3>
            <h3>${data.email}</h3>
            <h3>${data.first_name}</h3>
            <h3>${data.last_name}</h3>
           </div>`
   });
   document.querySelector(".new").innerHTML=tableData;
   });
})

