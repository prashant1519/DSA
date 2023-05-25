// let arr=[4,2,3,7,1,9]
// let left=arr[i]
// let right=arr[j+1]

// for(let i=0;i<arr.length;i++){
//     let min=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min=j
//         }
//     }
//     if(min != i){
//         swap(arr,min,i)
//     }
// }

// console.log(arr);





// function swap(arr,i,j){
// let temp=arr[i]
// arr[i]=arr[j]
// arr[j]=temp
// }



function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             swap(inputArr,i,min)      
        }
    }
    return inputArr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr);

function swap(inputArr,i,min){
    let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp; 
}

