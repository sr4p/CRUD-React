function sum(num) {
    var summnum = 0
    for (var i = 0; i < num ;i++){
        (i%2!=0) ? summnum += i : summnum
    }
    return summnum;
}

console.log("1) ",sum(8))
////////////////////////////////////////////////////////////////
function plym(num){
    var arr = [];
    for (var i = 0; i <= num ;i++){
        for (var j = 0; j <=num ;j++){
            (i==num || j==num || j == num - i) ? arr.push("*") : arr.push(" ")
        }
        arr.push("\n")
    }
    console.log(arr.join(""))
}
console.log("2) ")
plym(8)

////////////////////////////////////////////////////////////////

function plym2() {
    var numplym = 4
    var arr2 = [];
    for (var i = 0; i <= numplym ;i++){
        for(var j = 0; j <= i ;j++){
            arr2.push(j)
        }
        console.log(arr2.join(" "))
        arr2 = [];
    }

    for (var i = numplym-1;i >= 0;i--){
        for(var j = 0; j <= i ;j++){
            arr2.push(j)
        }
        console.log(arr2.join(" "))
        arr2 = [];
    }


}
console.log("3) ")
plym2()


////////////////////////////////////////////////////////////////

console.log("-----------------------------------------------------------------------")

// const fetch = require('node-fetch');
// var responce;

// async function resAPI(){
//     fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=5').then(res => res.json()).then(data => responce = data).then(() => {console.log(responce)})
// }
// resAPI();
// // const data = resAPI();

// // fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=30').then(res => {return res.json()}).then(data => {test = data})

// console.log("ddddddd",responce)