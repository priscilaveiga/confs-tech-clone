/*
const options = {
	method: 'GET',
    //mode: 'no-cors',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

window.onload = () => {
    
    const promise = fetch('https://www.freetogame.com/api/games', options);
    promise.then(response => {
        return response.json()
    }).then(json => {
        console.log(json[0]);
    })

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
*/

function eventList (json){
    json.forEach((element, index) => {
        const newDiv = document.createElement("div");
        newDiv.id = `event-${index+1}`
        document.getElementById('container').appendChild(newDiv)
        const ul = document.createElement("ul")
        const name = document.createElement("li")
        name.innerHTML =  element.name
        ul.appendChild(name)
        const url = document.createElement("li")
        url.innerHTML =  element.url
        ul.appendChild(url)
        newDiv.appendChild(ul)
        newDiv.setAttribute("class", "container shadow rounded prose bg-blue-200")
        
    })

}

window.onload = ()=>{
    const promise = fetch('https://raw.githubusercontent.com/tech-conferences/conference-data/main/conferences/2022/javascript.json')
    promise.then(response => {return response.json()})
    .then(json => eventList(json))
}