//SET GLOBAL VARIABLES 
// const baseURL = "https://picsum.photos/v2/list?page=3&limit=300"
const search = document.getElementById('search');
const submit = document.getElementById('submit'); 
const resultHeading = document.getElementById('result-heading'); 
const pictures = document.getElementById('pictures'); 
const img = document.getElementById('img');


//SET EVENT LISTENER 
submit.addEventListener('submit', searchPictures);


function searchPictures(e) {
    e.preventDefault();

     const term = search.value; 
    // console.log(term);
    if (term.trim()) {
        fetch(`https://picsum.photos/id/${term}/info`)
        .then(res => res.json())
        .then(data => {
            console.log(data.url);
            resultHeading.innerHTML = `<h2>Search results for number "${term}":</h2>`;
        
         
            if(data.id === null) {
            resultHeading.innerHTML = `<p>There are no pictures available. Please try another number.</p>`;
            } else {
                pictures.innerHTML = data.map(picture => 
                `
                <div class="pictures">
                    <img src = "${data.url}" alt="${data.id}"/>
                    <div class="author-info" data-pictureID="${data.id}">
                        <h3>${data.author}</h3>
                    </div>
                </div>
                `
                )
                .join('');
            }
        });
    } else {
        alert('Please enter a search term');
    }  
    
    // let author = document.createElement('p');
    // author = data.author; 

    // let img = document.createElement('img');
    // img.src = data.url; 
    // img.alt = data.id; 

    // pictures.appendChild(img); 
    // pictures.appendChild(author);
}




