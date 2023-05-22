function anagram(a,b){
    let x=a.split("").sort().join()
    let y=b.split("").sort().join()
    // console.log(x,y);

    if(x === y){
        return true
    }
    else{
        return false
    }
}
let z = anagram("hello","lloeh")
console.log(z);