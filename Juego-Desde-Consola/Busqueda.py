'''
Estos son dos algoritmos de búsqueda clásicos. Son los primeros que se ven en la Lic. en
Ciencias de la Computación en la UBA y no son los únicos. Búsqueda Lineal es el más simple
y por lo tanto el menos efectivo. Búsqueda Binaria hace uso del hecho de que la lista está
ordenada y es muchísimo mejor que Búsqueda Lineal.
'''


# O(n)
def busquedaLineal(s, x):
    assert len(s) > 0
    i = 0
    while i < len(s) and s[i] != x:
        i += 1

    return i < len(s)


# O(log2(n))
# s debe ser una lista ordenada
def busquedaBinaria(s, x):
    assert len(s) > 0
    if len(s) == 1:
        return s[0] == x
    elif x <= s[0]:
        return s[0] == x
    elif x >= s[-1]:
        return s[-1] == x
    else:
        low = 0
        high = len(s) - 1
        while low + 1 < high:
            mid = int((low + high) / 2)
            if s[mid] <= x:
                low = mid
            else:
                high = mid
        return s[low] == x
