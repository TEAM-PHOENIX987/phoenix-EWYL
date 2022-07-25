function _getPokeMonInfo() {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=10`;

    try {
        fetch(pokemonUrl).then(function(data){
            data.json().then(function(results){
                console.log(results.results[0])
            })
        });
    } catch (err) {
        
    }
}
_getPokeMonInfo();