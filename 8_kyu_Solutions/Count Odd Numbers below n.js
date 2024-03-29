/*Count Odd Numbers below n
DESCRIPTION:
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
*/
//if else variant
function oddCount(n){
    if (n%2==0) return n/2;
    else return (n-1)/2;
}

// the same with ternary
function oddCount(n){
    return (n%2==0) ? n/2 :(n-1)/2;
}

//using built-in function:
function oddCount(n){
    return Math.floor(n/2);
}



