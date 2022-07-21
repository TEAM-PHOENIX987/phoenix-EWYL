function meal(){
    const mealurl='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    try {
        fetch(mealurl).then(function(data){
            data.json().then(function(res){
                console.log(res);
            })
        });
    } catch (error) {
        console.log("Error");
    }


}
meal();