# Approach

I start every day with defining the problem and trying to run my first solution in JS on example.txt. Once that's working, I switch the execution to input.txt and solve any edge cases. Rinse and repeat for part 2.

# Scripts

- `./newday.sh` to create a new folder for the day, connect to https://adventofcode.com/ and retrieve the latest data as example.txt and input.txt
- `./run.sh DAY PART DATA` to execute the scripts, all arguments are optional, without any arguments it'll execute both parts of the node.js solution for the latest day with real input. Set DATA to 0 to run example data.
