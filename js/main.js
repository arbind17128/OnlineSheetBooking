const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
let count = document.getElementById('count');
let total = document.getElementById('total');
let movieSeleted = document.getElementById('movie-list');
let moviePrice = +movieSeleted.value;


function updateSelectCount() {
    let selectedSeat = document.querySelectorAll('.row .seat.selected')
    let indexOfSeat = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeat', JSON.stringify(indexOfSeat))
    // console.log(indexOfSeat);
    count.textContent = selectedSeat.length;
    total.textContent = selectedSeat.length * moviePrice;
}
// store movie index and price into localStorage
function movieIndex(movieindex,price) {
    localStorage.setItem('MovieIndex', movieindex);
    localStorage.setItem('priceOfMovie', price);
}



movieSeleted.addEventListener('change', (e) => {
    moviePrice = +e.target.value;
    movieIndex(e.target.selectedIndex, e.target.value)
    updateSelectCount();
})


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectCount();
    }
})