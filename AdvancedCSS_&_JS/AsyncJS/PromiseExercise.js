function getMostFollowers(...arr){
    var baseUrl = `https://api.github.com/users/`;
    var pros = arr.map(value => $.getJSON(baseUrl + value + `/followers`));

    return Promise.all(pros)
    .then((ar) => {
        return ar.sort((a,b) => a.length < b.length)[0].length;
    })
    .catch((err) => {
        console.log(err);
    })
}

function starWarsString(num){
    var url = `https://swapi.py4e.com/api/people/${num}`;
    var str = "";
    return $.getJSON(url).then((data) => {
        str += `${data.name} first featured in `;
        return $.getJSON(data.films[0]);
    })
    .then((data) => {
        str += `${data.title} which took place in`;
        return $.getJSON(data.planets[0]);
    })
    .then((data) => {
        str += data.name;
        return str;
    })
}