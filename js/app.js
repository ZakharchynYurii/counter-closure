document.querySelector('.inc').addEventListener('click', counter().incFunc);

document.querySelector('.dec').addEventListener('click', counter().decFunc);

document.querySelector('.res').addEventListener('click', counter().resFunc);

function counter() {
    return{
        incFunc(){
            let score = parseInt(document.querySelector('.score').textContent);
            score = score + 1;
            document.querySelector('.score').innerHTML = score;
        },

        decFunc(){
            let score = parseInt(document.querySelector('.score').textContent);
            if(score > 0){
                score = score - 1;
                document.querySelector('.score').innerHTML = score;
            }
        },

        resFunc(){
            let score = parseInt(document.querySelector('.score').textContent);
            if(score > 0){
                score = 0;
                document.querySelector('.score').innerHTML = score;
            }
        }
    }
}