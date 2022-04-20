
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

// fetch random color from free and open API of herokuapp.com

fetch("https://x-colors.herokuapp.com/api/random/200")
    .then(response => response.json())
    .then (data =>{
        document.body.style.backgroundColor = data.hex;
    })
    .catch(err =>{
        console.error("something went wrong" , err.message);
    });

    async function getUsers() {
        let url = 'https://randomuser.me/api/?results=5';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log('my error is: ', error);
        }
    }
    
    async function renderUsers() {
        const payload = await getUsers();
        const users = payload.results;
        let html = '';
    
        users.forEach(user => {
            let htmlSegment = 
                `<div class="user">
                    <img class="user-img" src="${user.picture.thumbnail}" >
                    <h2>${user.name.first} ${user.name.last}</h2>
                    <p class="user-email"><a href="email:${user.email}">${user.email}</a></p>
                </div>`;
    
            html += htmlSegment;
        });
    
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }
    
    renderUsers();

 // html elements added dynamically by JS
fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = " ";
        html +=`<dl class="datalist">`;
        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" , ");
            
            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
           let dt =`<dt class="housename">${house.name}</dt>`;
            html += dt;
            let dd=`<dd class="membername">${family}</dd>`;
           html += dd;

            
        });
        html += `</dl>`;  
        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process
