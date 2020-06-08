# a-sexual-genetic-algorithm
## a-sexual genetic algorithm for solving an Alex Bellos math puzzle

A real mutant of a genetic algorithm in #p5js that solves a math puzzle, much more easily solved in #python.
Alex Bellos published two math puzzles on Monday April 20, in honor of John Horton Conway, the legendary British mathematician, who died earlier this month.
One of them was:
The Ten Divisibilities

I have a ten digit number, abcdefghij. Each of the digits is different, and

a is divisible by 1

ab is divisible by 2

abc is divisible by 3

abcd is divisible by 4

abcde is divisible by 5

abcdef is divisible by 6

abcdefg is divisible by 7

abcdefgh is divisible by 8

abcdefghi is divisible by 9

abcdefghij is divisible by 10

What’s my number?

I could not solve it with paper and pen. But used #python itertools to permutate around 3.9 million numbers and use list comprehension to keep making the list smaller until The unique number is found.

However this seemed too easy to me. So I tried a genetic algorithm.

My genetic algorithm has numimal (number+animal) class that keeps track of its DNA, a string of 10 digits and, a fitness score starting at zero.

I create an initial population with 1000 numimals.

the ones that pass the fitness test (being divisible evenly as the rules state) survive the others die.

The ones that survive go through a sort of a-sexual reproduction where they produce an identical copy and a slightly mutated copy (two numbers have swapped places); The populations rise and fall and it gets an answer messy as it is.

[a-sexual genetic algorithm](https://editor.p5js.org/greggelong/full/JGddd1svz)
