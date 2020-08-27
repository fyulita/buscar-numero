import random
from Ordenamiento import selectionSort


# Hacemos la lista y la ordenamos.
lista_full = [*range(1, 1001)]
random.shuffle(lista_full)
lista = lista_full[:100]
selectionSort(lista)

# Elegimos algún número de la lista.
num = lista[random.randint(1, 100)]
if num < 10:
    num_s = f"00{num}"
elif num < 100:
    num_s = f"0{num}"
else:
    num_s = str(num)

# Escondemos los números de la lista en "cartas".
lista_oculta = []
for i in range(len(lista)):
    if i < 10:
        lista_oculta.append(f"[0{i}] ")
    else:
        lista_oculta.append(f"[{i}] ")


# Esta función muestra una lista de forma bonita.
def mostrarLista(l):
    assert len(l) == 100
    for i in range(10):
        print("".join(l[i * 10 : (i + 1) * 10]), end='\n')
    print('\n')


# Imprimimos las instrucciones.
print(f"""
#-----------------------------------------------------------------------------------------#
| En esta lista hay 100 números del 1 al 1000 ordenados de menor a mayor. El objetivo es  |
| que encuentres la posición del número *{num_s}* en la menor cantidad de pasos posibles.     |
| En cada paso podes revelar el número de la posición que elijas. Suerte!                 |
#-----------------------------------------------------------------------------------------#
""")


# Esta función revela una carta que elijamos. li es la lista con números y lo la lista oculta.
# A medida que el jugador vaya revelando cartas vamos cambiando lista_oculta para que las muestre.
def revelar(li, i, lo):
    if li[i] < 10:
        lo[i] = f" {li[i]}   "
    elif li[i] < 100:
        lo[i] = f" {li[i]}  "
    else:
        lo[i] = f"{li[i]}  "


# Corremos el juego.
turnos = 1
while True:
    mostrarLista(lista_oculta)
    eleccion = int(input("Elegí una posición: "))

    revelar(lista, eleccion, lista_oculta)

    # Nos fijamos si el jugador encontró el número.
    if lista[eleccion] == num:
        for i in range(100):
            if i == eleccion:
                if num < 10:
                    lista_oculta[i] = f" ({num}) "
                elif num < 100:
                    lista_oculta[i] = f"({num}) "
                else:
                    lista_oculta[i] = f"\b({num}) "
            else:
                revelar(lista, i, lista_oculta)

        mostrarLista(lista_oculta)

        if turnos == 1:
            print("¡Ganaste! Te llevó 1 turno")
        else:
            print(f"¡Ganaste! Te llevó {turnos} turnos")
        break

    turnos += 1
