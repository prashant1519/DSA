let arr=[2,6,1,3,9,7]

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
        if(arr[j+1]<arr[j]){
            let temp=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=temp
        }
    }
  
}
console.log(arr);













