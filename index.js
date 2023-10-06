const score = document.querySelector('.score')

const actual=76
let output = 0
const timer = setInterval(() => {
    score.textContent = output
    if (output ===  actual){
        clearInterval(timer)
    }else{output++}
}, 10 )

