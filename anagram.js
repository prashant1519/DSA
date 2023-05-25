function anagram(a,b){
    let x=a.split("").sort().join()
    let y=b.split("").sort().join()
    console.log(x,y)

    if(x === y){
        return true
    }
    else{
        return false
    }
}
let z = anagram("hello","lloeh")
console.log(z);


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/prashant1519/just.git
// git push -u origin main