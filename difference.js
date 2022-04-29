import _ from "lodash"

export default function findDifferences(array1, array2) {
    const dif = _.difference(array1, [array2])
    return `The difference between ${array1} and ${array2} is ${dif}`
}