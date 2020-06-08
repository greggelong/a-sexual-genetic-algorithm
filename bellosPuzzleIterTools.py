import itertools as it

l = list(it.permutations('0123456789'))
n = [int(''.join(i)) for i in l] # list of strings

n = [x for x in n if ((x//100000000) %2 ==0)]   #list comprehension reducing list n to the ones that
print("2",len(n))
n = [x for x in n if ((x//10000000 ) %3 ==0)]  # satisfiy the if staement in the comprhension
print("3",len(n))
n = [x for x in n if ((x//1000000 ) %4 ==0)]   # working on a smaller and smaller list each time
print("4",len(n))
n = [x for x in n if ((x//100000 ) %5 ==0)]   # rather than searching the whole list of near 3.9 million numbers
print("5",len(n))
n = [x for x in n if ((x//10000 ) %6 ==0)]
print("6",len(n))
n = [x for x in n if ((x//1000 ) %7 ==0)]
print("7",len(n))
n = [x for x in n if ((x//100 ) %8 ==0)]
print("8",len(n))
n = [x for x in n if ((x//10 ) %9 ==0)]
print("9",len(n))
n = [x for x in n if ((x//1 ) %10 ==0)]

print(n)