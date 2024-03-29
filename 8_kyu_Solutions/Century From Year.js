/*Century From Year
DESCRIPTION:
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
*/

function century(year) {
    // Finish this :)
    if (year%100 == 0) {
        return Math.floor(year/100)
        } else return (Math.floor(year/100) + 1);
}

function centuryTernary(year) {
    // Finish this :)
    return (year%100 == 0) ? Math.floor(year/100) : (Math.floor(year/100) + 1);
}

