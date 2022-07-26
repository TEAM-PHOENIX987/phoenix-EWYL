fetch('https://fakestoreapi.com/products').then((data) => {
   return  data.json();
}).then((objectData) => {
        console.log(objectData[0].title);
        let tableData = "";
        localStorage.setItem("dataitem", JSON.stringify(objectData));
        data_string = localStorage.getItem("dataitem");
        dataitem = JSON.parse(data_string);
        console.log(dataitem);
    //     objectData.map(function (obj) {
    //         obj.increasedPrice = obj.price + 10;
    //         tableData += `<tr>
    //         <td>${values.increasedPrice}</td>
    //         </tr>`;
    //     });
    //     dataitem.map(function (obj) {
    //         obj.addedTitle = obj.title + "sece";
    //         tableData += `<tr>
    //         <td>${values.addedTitle}</td>
    //         </tr>`;
        objectData.forEach((values) => {
            tableData += `<tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}"></td>
            </tr>`;
        });
    document.getElementById("tab_body").innerHTML = tableData;
})