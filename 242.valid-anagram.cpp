#include <iostream>
#include <string>
using namespace std;
/*
 * @lc app=leetcode id=242 lang=cpp
 *
 * [242] Valid Anagram
 */

// @lc code=start
class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length()!=t.length())
            return false;
        
        int mapS[26]={0}, mapT[26]={0};
        
        for(int i=0;i<s.length();i++){
            cout << "si:" << s[i] << endl;
            cout << "si-a:" << s[i]-'a' << endl;
            mapS[s[i]-'a']++;
            mapT[t[i]-'a']++;
        }

        for(int i=0;i<26;i++){
            if(mapS[i]!=mapT[i])
                return false;
        }
        return true;
    }
};
// @lc code=end

int main()
{
    Solution s;
    bool ans;
    ans = s.isAnagram("aabb", "abcb");
    cout << ans << endl;
    system("pause");
}