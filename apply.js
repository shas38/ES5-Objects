const numObject = {
    num: 2,
}

const multiplyMultiple = function(first, second){
    const RESULT = this.num * first * second;
    console.log(RESULT);
    return RESULT;
}

const multiplyBy = [5, 2];
multiplyMultiple.apply(numObject, multiplyBy);