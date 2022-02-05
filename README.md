# Non Constructible Change
This was a challenge I made for a job interview, I wasn't able to solve it in the required time. After the challenge the interviewer explained to me one good solution, and I decided to go deep. In fact, it's more a math than a programming problem.

# The Challenge:
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

Sample
```
[5, 7, 1, 1, 2, 3, 22] -> 20
[1, 1, 1, 1, 1] -> 6
[1, 5, 1, 1, 1, 10, 15, 20, 100] -> 55
[1, 5] -> 2
[5, 5, 4, 3, 2] -> 1
```

# The Solution
The solution is quite simple, but achieving it is not.
It consists in:
1. Sort the coins
2. Loop the array and check if the current coin is greater than the sum of the previous coins plus one, if it is, then the result is 'the sum plus one'.
#### Why!?
1. If the coins are sorted, it means that the minimum change is the 1st coin, the 2nd minimum change is the 1st coin plus the 2nd coin, and so on.
2. In the loop, if the current coin is greater than 'the sum plus one', it means that you can't combine it with any other coin to get the next minimum change, so 'the sum' is the minimum change that you CAN do, and 'the sum plus one' is the change you CAN'T.
3. One point to observe, and to possibly improve the algorithm is: If the first coin after sorting is not one, the result is one.

# Node version: 
16 or greater

# To run the tests
`node index.test.mjs`
