const arrayOne = [1, 2, 3]
const arrayTwo = [2, 3, 4]

import findDifferences from "./difference"

findDifferences(arrayOne, arrayTwo)
const p = document.querySelector("Result")
p.append(findDifferences(arrayOne, arrayTwo))