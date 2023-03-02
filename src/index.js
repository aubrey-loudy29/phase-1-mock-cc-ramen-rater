// write your code here
//document.addEventListener("DOMContentLoaded", fetchRamens)

function fetchRamens() {
    fetch(' http://localhost:3000/ramens')
    .then(res => res.json())
    .then(results => renderAllRamen(results))
}

function renderAllRamen(results) {
    const ramenTab = document.getElementById("ramen-menu")
    results.forEach((ramens) => {
        const ramenPhotos = document.createElement('img')
        ramenPhotos.src = ramens.image
        ramenTab.append(ramenPhotos)

        ramenPhotos.addEventListener('click', () => {
            const ramenDetail = document.getElementById('ramen-detail')

            const detailImage = document.querySelector('.detail-image')
            detailImage.src = ramens.image
            detailImage.style.width = "640px"
            detailImage.style.height = "640px"

            const detailName = document.querySelector('.name')
            detailName.innerText = ramens.name

            const detailRestaurant = document.querySelector('.restaurant')
            detailRestaurant.innerText = ramens.restaurant

            const detailRating = document.querySelector('#rating-display')
            detailRating.innerText = ramens.rating

            const detailComments = document.querySelector('#comment-display')
            detailComments.innerText = ramens.comment
            
        })
    })
}

let form = document.querySelector('#new-ramen')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById("new-name").value
    let restaurant = document.getElementById("new-restaurant").value
    let image = document.getElementById("new-image").value
    let rating = document.getElementById("new-rating").value
    let comment = document.getElementById("new-comment").value

    const newName = document.querySelector('.name')
    newName.innerText = name
    const newRestaurant = document.querySelector('.restaurant')
    newRestaurant.innerText = restaurant
    const newImage = document.querySelector('.detail-image')
    newImage.src = image
    const newRating = document.querySelector('#rating-display')
    newRating.innerText = rating
    const newComment = document.querySelector('#comment-display')
    newComment.innerText = comment

})
document.addEventListener("DOMContentLoaded", fetchRamens)
    