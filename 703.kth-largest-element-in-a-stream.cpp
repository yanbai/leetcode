/*
 * @lc app=leetcode id=703 lang=cpp
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
class KthLargest {
public:
    KthLargest(int k, vector<int>& nums) {
        _k = k;
        for(auto n: nums) {
            minHeap.push(n);
            if(minHeap.size()>_k)
                minHeap.pop();
        }
    }
    
    int add(int val) {
        minHeap.push(val);
        if(minHeap.size()>_k)
            minHeap.pop();
        
        return minHeap.top();
    }
private:
    int _k;
    priority_queue<int, vector<int>, greater<int>> minHeap;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
// @lc code=end

