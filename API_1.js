const baseURL = "https://picsum.photos/v2/list?page=2&limit=100"
let camera = document.getElementById('camera')

async function getPictures() {
    let res = await fetch(baseURL)
    let data = await res.json()
    console.log(data);
     // showPicture(data);
}
   


getPictures();

let showPicture = data => {
    console.log(data);
}

const pictures = async () => {
    for(let i = 0; i <=100; i++ ) {
        // await getPictures(i)
        console.log(data.url);
    }
}