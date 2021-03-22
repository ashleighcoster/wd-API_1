//SET GLOBAL VARIABLES 
const search = document.getElementById('search');
const submit = document.getElementById('submit'); 
const resultHeading = document.getElementById('result-heading'); 
const img = document.getElementById('img');
const pictures = document.getElementById('pictures'); 
const addPic = document.getElementById('pictures');

//SET EVENT LISTENER 
submit.addEventListener('submit', searchPictures);

//CREATE FUNCTION THAT WILL BE CALLED UPON 
function searchPictures(e) {
    e.preventDefault();

     const term = search.value; 
    // console.log(term);

    // FETCH FROM API 
        fetch(`https://picsum.photos/id/${term}/info`)
        .then(res => res.json())
        .then(data => displayPicture(data.download_url, 
        // console.log(data.download_url);
        resultHeading.innerHTML = `<h2>Search results for number "${term}":</h2>`))
        .catch(e => console.log(e));
}

//CREATE FUNCTION TO DISPLAY PICTURE
function displayPicture(data) {
    let pic = data;
    // console.log(pic);
    
    //INJECT PICTURE INFO 
    img.src = data;

    if(pic === 0) {
        let para = document.createElement('p'); 
        para.textContent = 'No results returned.'
        // console.log("No results");
        } else {
        //DISPLAY DATA
        for(let i = 0; i < pic; i++) {
                       
            para.appendChild(resultHeading);
            addPic.appendChild(pic);
            pic.appendChild(pictures); 
            img.appendChild(pictures);
 
        }
    }
}



