function breakingBad(){
    const breakUrl= 'https://www.breakingbadapi.com/api/characters?limit=10' ;
    try {
        fetch(breakUrl).then(function(data){
            data.json().then(function(results){
                console.log(results[0].name);
            });
        });
    } catch (error) {
        
    }
}
breakingBad();