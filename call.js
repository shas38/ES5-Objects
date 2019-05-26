const numObject = {
    num: 2,
}

const multiply = function(multiplyBy){
    const RESULT = this.num * multiplyBy;
    console.log(RESULT);
    return RESULT;
}

// functionToUse.call(objectToUse, Arguments)
multiply.call(numObject, 5);

const multiplyMultiple = function(first, second){
    const RESULT = this.num * first * second;
    console.log(RESULT);
    return RESULT;
}

multiplyMultiple.call(numObject, 5, 2);