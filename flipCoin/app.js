const randomBtn = document.getElementById('randomBtn');
const coinImg = document.getElementById('coinImg');
const coinShadow = document.getElementById('coinShdw');
const results = document.getElementById('results')

function flipCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(result);
    setTimeout(()=>{
        coinImg.classList.remove('animation');
        randomBtn.disabled = false;
        coinImg.disabled = false;
    },2251)
    if (result === 'Heads') {
        coinImg.classList.add('animation');
        results.textContent = result;
        coinImg.src = ``;
        coinImg.style.animationIterationCount = 2;
    } else {
        coinImg.classList.add('animation');
        results.textContent = result;
        coinImg.src = `resources/${result.toLowerCase()}.svg`
        coinImg.style.animationIterationCount = 2.5;
    }
    randomBtn.disabled = true;
    coinImg.disabled = true;
}

randomBtn.addEventListener('click', function (e) {
    e.preventDefault();
    flipCoin();
})

coinImg.addEventListener('click', function (e) {
    e.preventDefault();
    flipCoin();
})