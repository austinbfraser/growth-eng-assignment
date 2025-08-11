## Requirements

1. Clicking on the button should call fetch last location and display data in a new row in the table.

2. In the table, display a timestamp of the call, and the execution time of each call.

3. At the bottom, display the fastest time, slowest time, and average time

4. `App.tsx` comes with a fake endpoint called `fetchLastLocations`. Please do not modify the file `fetchLastLocations`. 

5. Once completed, upload it to a repository and send the repository link back to your recruiter. 

## Other things to consider
This exercise was meant as a very basic set up. We've got a few questions for you before you leave. Feel free to add to this read me and let us know here. 
1. What can you do to improve it?
2. In the 1-2 hours time frame, what did you do to improve it?
3. Did you find any potential bugs?

# My notes

## State Management

- How will we store all past response data as state?  Should the response state instead be an array of objects, like the sample data, where every time we get a new response we add it to the existing list?  If so, we’d need to change how we use the setter function, because right now it’s set up only to store the latest (the latest takes the place of and wipes out the previous state

## interfaces, types

- Response (straight from the API)
- Result: a Response, with timestamp and execution time properties added
- Results: Result[]

## How to calculate execution time?

- Execution time = end - start
  - Start = timestamp
  - We’ll need to set up a new variable called ‘end’ by storing Date.now() after calling fetchLastLocation()

## Error handling and retries for fetchLastLocation?

## How to handle Fastest, Slowest, and Average?

- Iterate over results, pushing each result.executionTime into an array
- Sort this array, store first and last as Fastest and Slowest
- Use reduce on this array divided by results.length to get Average
- …….but this would get inefficient
  - It could be optimized by maintaining sorted order from the start, using binary search to insert values into the correct place into an already-always sorted array

- Why is it assumed in response.timestamp that both response and timestamp are non-null, but the ? operator is used in the next few properties?

- Would we want to show all rows?
  - If so, how would we deal with the issue of too many rows for the available vertical space?