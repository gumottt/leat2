/* сортировка бульбашкою
console.log('Hello world')
let arra = [7, 11, 5, 17, 9, 19, 15]
console.log('до', arr)
let temp;
for(let i=0; i<arra.length - 1; i++){
    for(let o=0; o<arra.length - 1; o++){
        if(arra[o]> arra[o+1]){
            temp = arra[o]
            arra[o] = arra[o+1]
            arra[o+1] = temp
        }
    }
}
console.log('Після', arr)
*/

/*Бінарний пошук у відсортованому масиві
let arr = [4, 6, 9, 11, 13, 17, 20]
let sourch = function(arr, num){
    let left = 0
    let right = arr.length-1
    let mid;

    while(left<= right){
        mid = Math.round((right - left)/2)+ left;
        if (num === arr[mid]){
            return mid;
        }else if (num<arr[mid]){
            right = mid -1;
        }else if(num >arr[mid]){
            left = mid +1;
        }
    }
    return -1
}

console.log(sourch(arr, 9));
*/

/*Пошук за індексом
let arry = [7, 11, 5, 17, 9, 19, 15]
function lindex(arry, num){
    return arry.indexOf(num)
}
console.log(lindex(arry, 5))
*/

 /*Пошук в об єкті по age
let people = [
    {name:'John', age : 70},
    {name:'Anna', age : 15},
    {name:'Ann', age : 20},
    {name:'Oleg', age : 2}
]
people.sort(function(a, b) {

    if(a.age > b.age){
        return 1
    }if (a.age < b.age){
        return -1
    }if (a.age == b.age){
        return 0
    }
})
console.log(people)
*/

/* Пошук в об єкті по age , але показує номер об єкта
let people = [
    {name:'John', age : 70},
    {name:'Anna', age : 15},
    {name:'Ann', age : 20},
    {name:'Oleg', age : 2}
]
people.sort(function(a, b) {

    if(a.age > b.age){
        return 1
    }if (a.age < b.age){
        return -1
    }if (a.age == b.age){
        return 0
    }
})
console.log(people)

let sourch = function(arr, num){
    let left = 0
    let right = arr.length-1
    let mid;

    while(left<= right){
        mid = Math.round((right - left)/2)+ left;
        if (num === arr[mid].age){
            return mid;
        }else if (num<arr[mid].age){
            right = mid -1;
        }else if(num >arr[mid].age){
            left = mid +1;
        }
    }
    return -1
}

console.log(sourch(people, 70));
*/

// Виконав Кучера Олександр 