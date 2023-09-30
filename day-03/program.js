
const radius=[1,2,3,4]

function diameterOfCircle(arr){
    ans=[]
    for(let i=0;i<arr.length;i++){
        ans.push(arr[i]*2);
    }
    return ans;
}

console.log(diameterOfCircle(radius));

function areaOfCircle(arr){
    ans=[]
    for(let i=0;i<arr.length;i++){
        ans.push(Math.PI*arr[i]**2);
    }
    return ans;
}

console.log(areaOfCircle(radius));