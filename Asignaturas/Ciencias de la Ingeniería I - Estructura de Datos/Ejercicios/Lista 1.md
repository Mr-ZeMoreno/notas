---
title: "Lista 1"
anterior: "[[Asignaturas/Ciencias de la Ingeniería I - Estructura de Datos/Ejercicios/_index|Inicio]]"
siguiente: "[[Asignaturas/Ciencias de la Ingeniería I - Estructura de Datos/Ejercicios/Lista 2|Lista 2]]"
---
# Ejercicio 1: Saludo
  
Solicite al usuario que ingrese su nombre y luego muestra un mensaje de saludo que incluya su nombre. Por ejemplo: "Hola, [nombre]. Bienvenido a C++"

## Solución

```c++
#include <iostream>

void saludo(){
    std::string nombre;

    std::cout << "-- Saludo --\n" << std::endl;

    std::cout << "Ingrese su nombre: ";

    std::cin >> nombre;

    std::cout << "Hola, " << nombre << ". Bienvenido a C++" << std::endl;
}

```

# Ejercicio 2: Suma de dos números

Pida al usuario que ingrese dos números. Luego, muestre la suma de los dos números ingresados

## Solución

```c++
#include <iostream>

void suma_de_dos_numeros(){
    int numero1, numero2, suma;

    std::cout << "-- Suma de dos números --\n" << std::endl;

    std::cout << "Por favor ingrese el primer numero: ";
    std::cin >> numero1;

    std::cout << "Por favor ingrese el segundo numero: ";
    std::cin >> numero2;

    suma = numero1 + numero2;

    std::cout << "La suma de ambos numeros es: " << suma << std::endl;
}

```

# Ejercicio 3: Mayor de tres números

Pida al usuario que ingrese tres números. Luego, muestre en pantalla el mayor de los tres números ingresados

## Solución

```c++
#include <iostream>
#include <algorithm>

void mayor_de_tres_numeros(){
	int numero1, numero2, numero3;
	
	std::cout << "-- Mayor de tres números --\n" << std::endl;
	
	std::cout << "Por favor ingrese el primer numero: ";
	std::cin >> numero1;
	
	std::cout << "Por favor ingrese el segundo numero: ";
	std::cin >> numero2;
	
	std::cout << "Por favor ingrese el tercer numero: ";
	std::cin >> numero3;
	
	std::cout << "El numero mayor de entre los tres numeros ingresado es: " << std::max(std::max(numero1, numero2), numero3) << std::endl;
}
```

## Ejercicio 4: Área de un rectángulo

Solicite al usuario que ingrese la longitud y el ancho de un rectángulo. Luego, calcule y muestre el área del rectángulo (Área = longitud * ancho).

## Solución:

```c++
#include <iostream>

void area_de_un_rectangulo(){
	std::cout << "-- Área de un rectangulo --\n" << std::endl;
	
	float area, longitud, ancho;
	
	std::cout << "Ingrese la longitud del rectangulo: ";
	std::cin >> longitud;
	
	std::cout << "Ingrese el ancho del rectangulo: ";
	std::cin >> ancho;
	
	area = ancho * longitud;
	
	std::cout << "El área de tu rectángulo es: " << area << " unidades cuadradas." << std::endl;
}
```

# Ejercicio 5: Conversión de temperatura

Pida al usuario que ingrese una temperatura en grados Celsius. Luego, convierta la temperatura a grados Fahrenheit utilizando la fórmula: Fahrenheit = (Celsius * 9/5) + 32 y muestra el resultado.

## Solución:  

```c++
#include <iostream>

void conversion_de_temperatura(){
	std::cout << "-- Conversión de temperatura -- \n" << std::endl;
	float celcius, farenheit;
	
	std::cout << "Vamos a convertir grados Celcius a grados Farenheit" << std::endl;
	
	std::cout << "Ingrese la temperatura en grados Celcius: ";
	std::cin >> celcius;
	
	farenheit = (celcius * 1.8f) + 32;
	
	std::cout << "La temperatura de " << celcius << "°C son " << farenheit << "°F" << std::endl;
}
```

# Ejercicio 6: Factorial de un número

Solicite al usuario que ingrese un número entero positivo. Luego, calcule y muestre el factorial del número ingresado. El factorial de un número "n" se calcula como la multiplicación de todos los números enteros desde 1 hasta "n".

## Solución:

```c++
#include <iostream>

void factorial_de_un_numero(){
	std::cout << "-- Factorial de un número --\n" << std::endl;
	
	int numero, factorial;
	
	std::cout << "Calcularemos el factorial de un numero: " << std::endl;
	
	std::cout << "Ingrese el numero: ";
	std::cin >> numero;
	
	factorial = 1;
	
	for (int i = 1; i <= numero; i++) {
		factorial = i * factorial;
	}
	
	std::cout << "El factorial del numero " << numero << " (" << numero << "!) es " << factorial << std::endl;
}
```

# Ejercicio 7: Números pares e impares

Pida al usuario que ingrese un número entero. Luego, determine si el número ingresado es par o impar y muestra un mensaje.

## Solución:

```c++
#include <iostream>

void numeros_pares_e_impares() {
	std::cout << "-- Números pares e impares --\n" << std::endl;
	
	int numero;
	
	std::cout << "Vamos a definir si un numero es par o impar" << std::endl;
	
	std::cout << "Por favor ingrese un numero: ";
	std::cin >> numero;
	
	if (numero % 2 == 0){
		std::cout << "El numero " << numero << " es par" << std::endl;
	} else {
		std::cout << "El numero " << numero << " es impar" << std::endl;
	}
}

```

# Ejercicio 8: Cálculo del promedio

Pida al usuario que ingrese un número entero. Luego, determine si el número ingresado es par o impar y muestra un mensaje.
  
## Solución:
  
```c++
#include <iostream>

void calculo_del_promedio(){
	std::cout << "-- Cálculo del promedio --\n" << std::endl;
	
	float numero1, numero2, numero3, promedio;
	
	std::cout << "Por favor ingrese el primer numero: ";
	std::cin >> numero1;
	
	std::cout << "Por favor ingrese el segundo numero: ";
	std::cin >> numero2;
	
	std::cout << "Por favor ingrese el tercer numero: ";
	std::cin >> numero3;
	
	promedio = (numero1 + numero2 + numero3) / 3;
	
	std::cout << "El promedio de los tres número es: " << promedio << std::endl;
}
```

# Ejercicio 9: Área de un triángulo

Solicite al usuario que ingrese la base y la altura de un triángulo. Luego, calcule y muestre el área del triángulo (Área = (base * altura) / 2).

## Solución:  

```c++
#include <iostream>

void area_de_un_triangulo(){
	std::cout << "-- Área de un triángulo --\n" << std::endl;
	
	float base, altura, area;
	
	std::cout << "Ingrese la base del triangulo: ";
	std::cin >> base;
	
	std::cout << "Ingrese la altura del triangulo: ";
	std::cin >> altura;
	
	area = (base * altura) * 0.5f;
	
	std::cout << "El area del triangulo es: " << area << " unidades cuadradas." << std::endl;
}
```

# Ejercicio 10: Números positivos, negativos y ceros

Escriba un programa que pida al usuario que ingrese una secuencia de números enteros y luego muestre la cantidad de números positivos, negativos y ceros ingresados.

## Solución:
  
```c++
#include <iostream>

void numeros_positivos_negativos_y_ceros() {
	std::cout << "-- Números positivos, negativos y ceros --\n" << std::endl;
	
	std::string entrada;
	
	int positivos = 0, negativos = 0, ceros = 0;
	
	bool x = true;
	
	do {
		std::cout << "Ingrese un numero entero o presiones 'q' (minúscula)" << std::endl;
	std::cin >> entrada;
	
		try {
			int numero = std::stoi(entrada);
			
			if (numero > 0) {
				positivos += 1;
			} else if (numero == 0) {
				ceros += 1;
			} else if (numero < 0) {
				negativos += 1;
			}
		} catch ( const std::invalid_argument &e ) {
			if (entrada == "q") {
				x = false;
				std::cout << "\nPositivos: " << positivos << std::endl;
				std::cout << "Negativos: " << negativos << std::endl;
				std::cout << "Ceros: " << ceros << std::endl;
			} else {
				std::cout << "\n- Por favor ingrese un valor valido -" << std::endl;
			}
		}
	} while (x);
}

```

# Ejercicio 11: Tabla de multiplicar

Escribe un programa que imprima la tabla de multiplicar de un número ingresado por el usuario, desde 1 hasta 10.

## Solución:

```c++
#include <iostream>

void tabla_de_multiplicar(){
	std::cout << "-- Tabla de multiplicar --\n" << std::endl;
	
	int numero;
	
	std::cout << "Ingrese un numero: ";
	std::cin >> numero;
	
	for (int i = 1; i <= 10; i++) {
		std::cout << numero << " * " << i << " = " << i * numero << std::endl;
	}
}
```

# Ejercicio 12: Potencia y raíz cuadrada

Escribe un programa que imprima la tabla de multiplicar de un número ingresado por el usuario, desde 1 hasta 10.

## Solución:

```c++
#include <iostream>
#include <cmath>

void potencia_y_raiz_cuadrada() {
	std::cout << "-- Potencia y raíz cuadrada --\n" << std::endl;
	
	int numero1, numero2;
	
	std::cout << "Ingrese el numero base: ";
	std::cin >> numero1;
	
	std::cout << "Ingrese el numero exponente: ";
	std::cin >> numero2;
	
	std::cout << "La potencia de " << numero1 << " al exponente " << numero2 << " es: " << pow(numero1, numero2) << std::endl;
	std::cout << "y la raiz cuadrada del " << numero1 << " y el " << numero2 << " son " << sqrt(numero1) << " y " << sqrt(numero2) << " respectivamente." << std::endl;
}
```

# Ejercicio 13: Redondeo y valor absoluto

Escriba un programa que pida al usuario un número decimal y calcule su valor absoluto utilizando la función fabs() de cmath, y luego redondee el resultado a su valor entero más cercano utilizando la función round() de cmath.

# Solución:

```c++
#include <iostream>
#include <cmath>

void redondeo_y_valor_absoluto() {
	std::cout << "-- Redondeo y valor absoluto --\n" << std::endl;
	
	float decimal;
	
	std::cout << "Ingrese un numero decimal: ";
	std::cin >> decimal;
	
	std::cout << "El valor absoluto de " << decimal << " es " << fabs(decimal) << " y su entero (del valor absoluto) mas cercano es " << round(fabs(decimal)) << std::endl;
}
```

# Ejercicio 14: Longitud de una cadena

Solicite al usuario que ingrese una cadena de texto y muestre su longitud, utilizando la función length().

## Solución:

```c++
#include <iostream>

void longitud_de_una_cadena() {
	std::cout << "-- Longitud de una cadena --\n" << std::endl;
	
	std::string texto;
	
	std::cout << "Ingrese un texto: ";
	std::cin >> texto;
	  
	std::cout << "La longitud del texto '" << texto << "' es de " << texto.length() << " caracteres" << std::endl;
}
```

# Ejercicio 15: Chequear contraseña

 Solicite al usuario que ingrese una contraseña y verifique si es la contraseña correcta, comparándola con otra previamente creada por usted. Si no es correcta, debe permitir al usuario intentarlo nuevamente hasta que la contraseña sea correcta.
  
## Solución:

```c++
#include <iostream>

void chequear_contraseña() {
	std::cout << "-- Chequear contraseña --\n" << std::endl;
	
	std::string contraseña = "oro";
	
	std::string intento;
		
	std::cout << "Adivina buen adivinador la contraseña es muy cotizada y se esconde en tesoro" << std::endl;
	
	std::cout << "Contraseña: ";
	std::cin >> intento;
	
	while (intento != contraseña) {
		std::cout << "Recuerda 'la contraseña es muy cotizada y se esconde en tesoro'" << std::endl;
	
		std::cout << "Contraseña: ";
		std::cin >> intento;
	}
	if (intento == contraseña) {
		std::cout << "¡Felicitaciones has adivinado la contraseña!" << std::endl;
	}	
}
```

# Ejercicio 16: Condición según edad

Pida al usuario ingresar su edad y muestre un mensaje indicando si es un niño (menor de 12 años), adolescente (entre 12 y 18 años), adulto joven (entre 19 y 35 años) o adulto (mayor de 35 años).

## Solución:

```c++
#include <iostream>

void condicion_segun_edad() {
	int edad;
	
	std::cout << "-- Condición según edad --\n" << std::endl;  
	
	std::cout << "Ingrese su edad: ";
	std::cin >> edad;
	
	if (edad < 12) {
		std::cout << "Usted es un niño" << std::endl;
	} else if (12 <= edad && edad <= 18) {
		std::cout << "Usted es adolecente" << std::endl;
	} else if (19 <= edad && edad <= 35) {
		std::cout << "Usted es adulto joven" << std::endl;
	} else if (35 < edad) {
		std::cout << "Usted es adulto" << std::endl;
	} else {
	std::cout << "Por favor ingrese una edad válida para la próxima vez" << std::endl;
	}
}
```

# Ejercicio 17: Distancia entre dos puntos

Escriba un programa que calcule la distancia entre dos puntos, de los que conocemos sus coordenadas. Recuerde que la fórmula para calcular la distancia entre (x1,y1) y (x2,y2) es: $\sqrt{ (x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2} }$

## Solución:

```c++
#include <iostream>
#include <cmath>

void distancia_entre_dos_puntos() {
	std::cout << "-- Distancia entre puntos --\n" << std::endl;
	
	int x1, x2, y1, y2;
	
	std::cout << "Ingrese la coordenada X del primer punto: ";
	std::cin >> x1;
	
	std::cout << "Ingrese la coordenada Y del primer punto: ";
	std::cin >> y1;
	
	std::cout << "Ingrese la coordenada X del segundo punto: ";
	std::cin >> x2;
	
	std::cout << "Ingrese la coordenada Y del segundo punto: ";
	std::cin >> y2;
	
	float distancia;
	
	distancia = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
	
	std::cout << "La distancia entre los puntos (" << x1 << "," << y1 << ") y (" << x2 << "," << y2 << ") es de " << distancia << " unidades." << std::endl;
}
```

## Ejercicio 18: Problemas con sushi

Siempre que me junto con mis amigos y encargamos sushi tenemos el mismo problema. Pedimos una determinada cantidad de rolls y después no sabemos cuántas piezas le tocan a cada uno. Más aún, dependiendo de dónde encargamos, los rolls tienen distinta cantidad de piezas. Escriba un programa para ayudar a repartir la comida. Las entradas deben ser la cantidad de amigos, la cantidad de piezas por roll y la cantidad de rolls que se compraron. La salida debe ser la cantidad de piezas que cada uno tiene derecho a comer. Este valor puede tener decimales.

## Solución:

```c++
#include <iostream>

void problemas_con_sushi() {
	std::cout << "-- Problemas con sushi --\n" << std::endl;
	
	float amigos, piezas, rolls;
	
	std::cout << "Cuantos amigos son: ";
	std::cin >> amigos;
	
	std::cout << "Cuantas piezas son por roll: ";
	std::cin >> piezas;
	
	std::cout << "Cuantos rolls son: ";
	std::cin >> rolls;
	
	std::cout << "La cantidad correspondiente a cada amigo es de " << (rolls * piezas) / amigos << " piezas" << std::endl;
}
```