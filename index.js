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
    json.forEach((conference, index) => {
        /* 
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
        */

        const newDiv = document.createElement("div")
        newDiv.id = `event-${index+1}`
        document.getElementById('container').appendChild(newDiv)
        newDiv.setAttribute("class","container bg-white mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300")
        /*
        const newDivInt = document.createElement("div")
        newDivInt.id = `event-${index+1}-int`
        newDivInt.setAttribute("class", "p-6")
        newDiv.appendChild(newDivInt)
        const h1 = document.createElement("h1")
        h1.setAttribute("class", "md:text-1xl text-xl hover:text-indigo-600 transition duration-200 font-bold text-gray-900")
        h1.innerText = conference.name
        newDivInt.appendChild(h1)
        */

        newDiv.innerHTML = `
        <div class="container bg-white mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
            <div class="p-6">
                <h1 class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200 font-bold text-gray-900 ">${conference.name}</h1>
                <div class="text-gray-700 my-2 hover-text-900 ">
                    ${new Date(conference.startDate).toLocaleDateString()} - ${conference.endDate}
                </div>
                <p class="text-gray-700 my-2 hover-text-900 ">City: </p>
                <p class="text-gray-700 my-2 hover-text-900 ">Country: </p>
                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">Site:        
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                </a>
                <p class="text-gray-700 my-2 hover-text-900 ">Twitter: </p>
            </div>
        </div>
        `
      
        


        
    })

}

window.onload = ()=>{
    const promise = fetch('https://raw.githubusercontent.com/tech-conferences/conference-data/main/conferences/2022/javascript.json')
    promise.then(response => {return response.json()})
    .then(json => eventList(json))
}