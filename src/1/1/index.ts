import input from '../input'

export default function main() {
    const inputArray = input.split(/\n/)
    let maxCalories = 0;
    let currentCalories = 0
    for(const calorie of inputArray) {
        if(calorie == ""){
            if(currentCalories > maxCalories) {
                maxCalories = currentCalories
            }
            currentCalories = 0
        } else {
            currentCalories += parseInt(calorie)
        }
    }
    return maxCalories
}