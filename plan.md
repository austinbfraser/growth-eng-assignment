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