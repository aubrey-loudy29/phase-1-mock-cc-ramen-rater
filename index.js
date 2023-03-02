// write your code here
// data.forEach((ramen) => {
//     addRamenToMenuBar(ramen)
// })
// fetch("http://localhost:3000/ramens")
//     .then((resp) => resp.json())
//     .then(data => {
//         data.forEach((ramen) => {
//             addRamenToMenuBar(ramen)
//         }) 
//     })

const addRamenToMenuBar = (ramensObj) => {
    const ramenBar = document.getElementById('ramen-menu');
    const ramenPhotos = document.createElement('img')
    ramenPhotos.src = ramensObj.image
    ramenBar.append(ramenPhotos)
}
console.log(addRamenToMenuBar)

//console.log(addRamenToMenu);
document.addEventListener("DOMContentLoaded", () => {fetch("http://localhost:3000/ramens")
.then((resp) => resp.json())
.then(data => {
    data.forEach((ramen) => {
        addRamenToMenuBar(ramen)
    }) 
})} )
