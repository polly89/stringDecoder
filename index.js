function stringDecoder(string){
    let arr = string.split('')
    let answer = ''

    for(let i = 0; i < arr.length; i++){
        if(!isNaN(+arr[i])){
            i += +arr[i]
        } else{
            answer +=arr[i]
        }
    }
    return answer
}   

console.log(stringDecoder('0h2xce5ngbrdy'))
console.log(stringDecoder('0A1cb2cdb1iy'))