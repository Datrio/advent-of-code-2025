#!/bin/bash

# Assign arguments to variables for better readability
DAY=$1
PART=$2
TYPE=$3

if [ -z "$DAY" ]; then
    DAY=$(find . -maxdepth 1 -type d -name '[0-9]*' | awk -F'/' '{print $NF}' | sort -n | tail -1)
fi

execute_script() {
    local part=$1
    local type=${2:-input}

    echo "Executing AoC 2025, Day $DAY, Part $part, Data: $type"

    node "$DAY/part$part.js" "$type"
}

# Execute based on whether PART is provided or not
if [ -z "$PART" ]; then
    # Execute for both PART 1 and 2
    execute_script 1 1
    execute_script 2 1
else
    # Execute for the specified PART
    execute_script $PART $TYPE
fi