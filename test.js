(function(w){
    'use strict';

    function sum(arr){
        var result = 0;
        for(var i=0, length=arr.length; i<length; i++){
            result += arr[i];
        }
        return result;
    }

    function canArraySumTo(arrOfIntValues, targetSum, numberOfOperands){

        //base cases

        //if not enough elements to add, return false
        if(arrOfIntValues.length < numberOfOperands){
            return false;
        }

        //if numberOfOperands is 1, see if any one of the items in array equals targetSum
        if(numberOfOperands === 1){
            for(var i=0; i<arrOfIntValues.length; i++){
                if(arrOfIntValues[i] === targetSum){
                    return true;
                }
            }
            return false;
        }

        //if array is same length as numberOfOperands, check the sum
        if(arrOfIntValues.length === numberOfOperands){
            return sum(arrOfIntValues) === targetSum;
        }

        //end of base cases

        var result;

        for(var i=0; i<arrOfIntValues.length; i++){

            //there are two possibilities:
            //1. use the current number to see if we can add remaining array to targetSum - current number
            //2. don't use the current number and see if the remaining array can add up to targetSum

            //get result using the current number, as long as it's not too large
            if(arrOfIntValues[i] <= targetSum){
                result = canArraySumTo(arrOfIntValues.slice(i + 1), targetSum - arrOfIntValues[i], numberOfOperands - 1);

                if(result){
                    return true;
                }
            }

            //get result not using the current number
            result = canArraySumTo(arrOfIntValues.slice(i + 1), targetSum, numberOfOperands);

            if(result){
                return true;
            }
        }

        //no results found, return false
        return false;
    }

    window.sampleNamespace = window.sampleNamespace || {};
    window.sampleNamespace.canArraySumTo = canArraySumTo;

})(window);


