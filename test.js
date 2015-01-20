/*
    sample function ultimately implemented as method on Array
 */

(function(){
    'use strict';

    function sum(arr){
        var result = 0;
        for(var i=0, length=arr.length; i<length; i++){
            result += arr[i];
        }
        return result;
    }

    function canAddTo(arrIntVals, targetSum, numOperands){

        /** base cases **/

        //if not enough elements to add, return false
        if(arrIntVals.length < numOperands){
            return false;
        }

        //if numOperands is 1, see if any one of items in array equals targetSum
        if(numOperands === 1){
            for(var i=0; i<arrIntVals.length; i++){
                if(arrIntVals[i] === targetSum){
                    return true;
                }
            }
            return false;
        }

        //if array is same length as numOperands, check the sum
        if(arrIntVals.length === numOperands){
            return sum(arrIntVals) === targetSum;
        }

        /** end of base cases **/

        var result;

        for(var i=0; i<arrIntVals.length; i++){

            //there are two possibilities:
            //1. use the current number to see if array adds up to targetSum
            //2. don't use the current number and see if the remaining array can add up to targetSum

            //get result using the current number, as long as it's not too large
            if(arrIntVals[i] <= targetSum){
                result = canAddTo(arrIntVals.slice(i+1), targetSum-arrIntVals[i], numOperands-1);

                if(result){
                    return true;
                }
            }

            //get result not using the current number
            result = canAddTo(arrIntVals.slice(i+1), targetSum, numOperands);

            if(result){
                return true;
            }
        }

        //no results found, return false
        return false;
    }

    Array.prototype.canAddTo = function(targetSum, numOperands){
        return canAddTo(this, targetSum, numOperands);
    };

})();


