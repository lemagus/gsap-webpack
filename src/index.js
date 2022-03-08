import square from './modules/square';

const sq = square();

document.getElementById("start").addEventListener("click", () => {
    sq.start();
})

document.getElementById("back").addEventListener("click", () => {
    sq.back();
})