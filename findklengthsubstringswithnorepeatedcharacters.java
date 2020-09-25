//Java Solution

class Solution {
    public int numKLenSubstrNoRepeats(String S, int K) {
        int count = 0;
        int left = 0;
        int right = 0;
        Set<Character> set = new HashSet<>();
        
        while (right < S.length()) {
            char c = S.charAt(right);
            while (set.contains(c)) {
                set.remove(S.charAt(left++));
            }
            
            set.add(c);
            
            if (right - left + 1 == K) {
                count++;
                set.remove(S.charAt(left++));
            }
            
            right++;
        }
        
        return count;
    }
}