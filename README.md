# Número Secreto

Esta es una página web simple donde se puede jugar un juego que consiste en buscar un número escondido.
El propósito de la página es poder interactuar y aprender sobre algoritmos de búsqueda.

## Instrucciones de Juego

Este es un juego que consiste en encontrar un número escondido. Se tienen 100 cartas, cada una con un número entre el 1 y el 1000.
Las cartas están ordenadas de menor a mayor, de tal forma que la Carta 1 tenga el número más chico y la Carta 100 el número más grande.
La computadora va a elegir un número al azar que esté escondido en alguna carta y el objetivo es encontrarlo revelando la menor
cantidad de cartas posibles.

## Instalación

### Página Web

(*Requisitos: Python >= 3.8 y Node >= 6.14*)

1. Clonar el proyecto:

```
git clone https://github.com/fyulita/numero-escondido.git
cd numero-escondido
```

2. Instalar Pipenv y las dependencias:

```
npm install
pip install pipenv
pipenv shell
pipenv install
```

3. Correr la página (por default corre en puerto 8000):

```
python website/manage.py runserver
```

¡Listo! La página está en http://127.0.0.1:8000.

### Juego desde consola

(*Requisitos: Python >= 3.8*)

1. Clonar el proyecto:

```
git clone https://github.com/fyulita/numero-escondido.git
cd numero-escondido/Juego-Desde-Consola
```

2. Correr el juego desde la consola:

```
python JuegoDesdeConsola.py
```

También incluí otros dos archivos de Python: `Ordenamiento.py` con algunos algoritmos de ordenamiento y `Busqueda.py` con algunos algoritmos de búsqueda.
El archivo `Analisis.ipynb` se puede correr con Jupyter y contiene un breve análisis sobre estos algoritmos.
