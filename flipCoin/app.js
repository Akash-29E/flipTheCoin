const randomBtn = document.getElementById('randomBtn');
const coinImg = document.getElementById('coinImg');
const coinShadow = document.getElementById('coinShdw');
const results = document.getElementById('results');

// JS logic to execute flip coin functionality and update text below coin accordingly. Also, 'RANDOM' button and coin click listener stays disabled until animation completes.
function flipCoin() {
    coinImg.classList.remove('animation');
    coinShadow.classList.remove('aniSh');
    void coinImg.offsetWidth;
    void coinShadow.offsetWidth;
    results.textContent = '';
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(result);
    setTimeout(()=>{        
        randomBtn.disabled = false;
        coinImg.disabled = false;
        results.textContent = result;
        coinImg.style.pointerEvents = 'auto';      
    },1000);
    if (result === 'Heads') {
        coinImg.classList.add('animation');
        coinShadow.classList.add('aniSh');
        coinImg.style.animationIterationCount  = 2;
        coinShadow.style.animationIterationCount = 2;
    } else {
        coinImg.classList.add('animation');
        coinShadow.classList.add('aniSh');
        coinImg.style.animationIterationCount = 2.5;
        coinShadow.style.animationIterationCount = 2.5;
    }
    randomBtn.disabled = true;
    coinImg.disabled = true;
    coinImg.style.pointerEvents = 'none';
}

randomBtn.addEventListener('click', function (e) {
    e.preventDefault();
    flipCoin();
})

coinImg.addEventListener('click', function (e) {
    e.preventDefault();
    flipCoin();
})