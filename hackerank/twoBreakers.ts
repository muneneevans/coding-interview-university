function towerBreakers(n, m) {
    // Write your code here
    let towers = new Array(n).fill(m)
    let possibleActions = []
    let towerHeight = m
    for (let i = 1; i < towerHeight; i++) {
        if ((towerHeight % (towerHeight - i)) === 0) {
            possibleActions.push(i)
            towerHeight -= i
        }
    }

    if ((possibleActions.length * n) % 2 === 0) {
        // Player 1 loses
        return 2
    } else {
        return 1
    }
    // let winner = towers.reduce((winner,current,curentIndex)=>{
    //     // Find possible Options
    //     // loop to get possible 

    // },0)


    // while( !gameOver  ){

    // }
}

console.log(towerBreakers(1, 4))


