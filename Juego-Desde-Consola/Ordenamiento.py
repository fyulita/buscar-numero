'''
Estos son algunos algoritmos clásicos de ordenamiento. Estos son los primeros que se aprenden
en la carrera de Lic. en Ciencias de la Computación de la UBA y no son los únicos. Sirven
para demostrar la efectividad en tiempo de distintos algoritmos (Orden de Cómputo).
'''


# O(1)
def swap(s, i, j):
    aux = s[i]
    s[i] = s[j]
    s[j] = aux


# O(h - d)
def findMinPos(s, d, h):
    min_pos = d
    for i in range(d, h):
        if s[i] < s[min_pos]:
            min_pos = i

    return min_pos


# O(n^2)
def insertionSort(s):
    assert len(s) > 0
    for i in range(len(s)):
        j = i
        while (j > 0 and s[j] < s[j - 1]):
            swap(s, j, j - 1)
            j -= 1

# O(n^2)
def selectionSort(s):
    assert len(s) > 0
    for i in range(len(s)):
        min_pos = findMinPos(s, i, len(s))
        swap(s, i, min_pos)


# O(n^2)
def bubbleSort(s):
    assert len(s) > 0
    i = 0
    j = 0
    while i < len(s) - 1:
        j = 0
        while j < len(s) - 1:
            if s[j] > s[j + 1]:
                swap(s, j, j + 1)
            j += 1
        i += 1
