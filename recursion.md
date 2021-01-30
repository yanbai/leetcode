
## n!
```js
def Factorial(n):
  if n <= 1:
    return 1
  return n*Factorial(n-1)
```
## n! recursion graph
```md
factorial(6)
6*factorial(5)
6*(5*factorial(4))
6*(5*4*factorial(3))
6*(5*4*3*factorial(2))
6*(5*4*3*2*factorial(1))
6*(5*4*3*2*1)
6*(5*4*3*2)
6*(5*4*6)
6*(5*24)
6*(120)
720
```
## fibonacci o(2^n)
```js
function fib(n) {
  if(n===0||n===1)
    return n
  return fib(n-1) + fib(n-2)
}

```
## backtracking structure
```js
def recursion(level, param1, param2):
  // recursion terminator
  if level>MAX_LEVEL:
    print_result
    return
  
  // process logic in current level
  process_data(level, data...)

  // drill down
  self.recursion(level+1, p1, ...)

  // reverse the current level status if needed
  reverse_state(level)
```
## divide&conquer
```py
  def divide_conquer(problem, param1, param2, ...):

    # recursion terminator
    if problem is None:
      print_result
      return

    # prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)

    # conquer subproblems
    subresult1 = self.divide_conquer(subproblems[0], p1, ...)
    subresult2 = self.divide_conquer(subproblems[1], p1, ...)
    subresult3 = self.divide_conquer(subproblems[2], p1, ...)
    ...

    # process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)
```
## DFS recusion structure
```js
visited = set()
def dfs(node, visited):
  visited.add(node)
  // process current node here
  ...
  for next_node in node.children():
    if not next_node in visited:
      dfs(next_node, visited)
```
## DFS not recusion structure
```js
def DFS(self, tree):
  if tree.root is None:
    return []
  
  visited, stack = [], [tree.root]

  while stack:
    node = stack.pop()
    visited.add(node)

    process(node)
    nodes = generate_related_nodes(node)
    stack.push(nodes)
  
  // other processing work
```
## BFS structure
```js
def BFS(graph, start, end):
  queue = []
  queue.append([start])
  visited.add(start)

  while queue:
    node=queue.pop()
    visited.add(node)

    process(node)
    nodes=generate_related_nodes(node)
    queue.push(nodes)
  
  // other processing work
  ...
```

## binary search
```js

function bs(arr, target) {
  let left=0
  let right=arr.length-1

  while(left<=right) {
    // let mid = (left+right)/2
    // 为避免出现溢出问题，二分查找代码第三行建议写为
    let mid = left+(right-left)/2
    if(arr[mid] === target) {
      // break or return res
    } else if(arr[mid] < target) {
      left = mid+1
    } else {
      right = mid-1
    }
  }
}


```