//Objective is to find the number of substrings of k-length and that has no
//repeated characters

let S = "havefunonleetcode", K = 5


//O(n) solution that uses a set to keep track of any repeated characters
//and a sliding window approach to traverse the array

if (K > S.length) {
    return 0
}

let count = 0
let set = new Set()
let left = 0
let right = 0

while (right < S.length) {
    //Get rid of any duplicate letters by moving left pointer
    while(set.has(S[right])) {
        set.delete(S[left++])
    }
    
    set.add(S[right])
    
    if(right - left + 1 == K) {
        set.delete(S[left++])
        count++
    }
    
    right++
}

return count;