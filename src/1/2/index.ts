import input from '../input'

export default function main() {
    const inputArray = input.split(/\n/)
    const topThreeElves : number[] = [0,0,0]
    let currentCalories = 0
    for(const calorie of inputArray) {
        if(calorie != ""){
            currentCalories += parseInt(calorie)
        } else {
            const indexToReplace = topThreeElves.findIndex((curCal) => {
                return curCal < currentCalories
            })
            if( indexToReplace != -1) {
                topThreeElves.splice(indexToReplace,1)
                topThreeElves.push(currentCalories)
            }
            currentCalories = 0;
        }
    }
    return topThreeElves.reduce((partialSum, a) => partialSum + a, 0);
}