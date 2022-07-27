fetch('https://fakestoreapi.com/products').then((data) => {
      return data.json();
}).then((objectData)=>{
         console.log(objectData[0].title);
      let tableData = "";
      //console.log(tableData);
      objectData.forEach((values) => {
         tableData+= `<tr>
       <td>${values.title}</td>
       <td>${values.description}</td>
       <td>${values.price}</td>
      <td><img src="${values.image}"></td>
      </tr>`;
       });
      document.getElementById("tab_body").innerHTML = tableData;
})
// fetch('https://fakestoreapi.com/products').then((data)=>{
//    data.json().then((objData)=>{
//       console.log(objData);
//    })
// })
