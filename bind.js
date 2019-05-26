const numObject = {
    num: 2,
}

const multiplyMultiple = function(first, second){
    const RESULT = this.num * first * second;
    console.log(RESULT);
    return RESULT;
}

const boundMultiply = multiplyMultiple.bind(numObject);

console.log(boundMultiply);
boundMultiply(5, 2);