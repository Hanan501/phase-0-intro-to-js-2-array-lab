// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function destructivelyRemoveLastCat(){
        cats.pop()
}

function appendCat(name){
    const arr = [...cats]
    arr.push(name)
    return arr
}

function  prependCat(name){
    const arr = [...cats]
    arr.unshift(name)
    return arr
}

function  removeLastCat(){
    const arr = [...cats]
    arr.pop()
    return arr
}

function removeFirstCat(){
    const arr = [...cats]
    arr.shift()
    return arr
}