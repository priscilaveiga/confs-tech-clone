/*

Study examples of reading api using fetch()

    console.log("BEFORE ONLOAD");

    // V1

    const callback = () => {
        console.log('> BEFORE FETCH');
        const promise = fetch('https://raw.githubusercontent.com/tech-conferences/conference-data/main/conferences/2022/javascript.json');
            
        promise.then((response)=>{

            response.json().then((json) => {
                console.log(json[0].name);
            });
        })
        console.log('> AFTER FETCH');
    }; 
    
    window.onload = callback;
    

    // V2
    
    window.onload = () => {  
        const promise = fetch('https://raw.githubusercontent.com/tech-conferences/conference-data/main/conferences/2022/javascript.json');
        promise.then((response)=>{
            return response.json()
        }).then( (json) => {
            console.log(json[0].name)
        })
        

        fetch('https://raw.githubusercontent.com/tech-conferences/conference-data/main/conferences/2022/javascript.json')
            .then(response => response.json())
            .then( json => console.log(json[0].name))
    }; 
    
    window.onload = async () => {                     
            const response = await fetch('https://raw.githubusercontent.com/tech-conferences/conference-data/main/conferences/2022/javascript.json')
            const json = await response.json()
            console.log(json[0].name)

    };
    */