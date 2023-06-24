/*
*   1- array should be sorted 
*   2- Binary search array takes O(log n) as a run time
*/
function binarySearchMethod(items,searchItem){
    let start =0;
    let end=items.length-1;

    while(start <=end){
        let mid = Number(((start + end )/2).toFixed(0));
        let guess = items[mid];

        if(guess==searchItem){
            return mid
        }
        else if(items[mid]>searchItem){
            end = mid-1;
        }
        else if(items[mid]<searchItem){
            start = mid+1;
        }
        else{
            return null
        }
    }
}
let arrayOfItems= [...new Array(100).keys()]; //Easy Way to get 100 numbers (0 to 99) TRICKY TIP 

let index = binarySearchMethod(arrayOfItems,0);
console.log(index);