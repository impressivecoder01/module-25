console.log('dom event')
function makeYellow(){
    document.body.style.backgroundColor = 'gray'
    const big = document.getElementById('big');
    big.style.fontSize = '80px'
}
function makeRed(){
    document.body.style.backgroundColor = 'red'
    const big = document.getElementById('big');
    big.style.fontWeight = '100'
    big.style.fontSize = '10px'

}

// option 3
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'green'
}

const pTag = document.getElementById('pTag')
pTag.onclick = function makeBig(){
    pTag.style.fontWeight = '100'
    pTag.style.fontSize = '10px'
}
function makePurple(){
    document.body.style.backgroundColor = 'purple'
}
const purple = document.getElementById('make-btn-purple')
purple.onclick = makePurple;