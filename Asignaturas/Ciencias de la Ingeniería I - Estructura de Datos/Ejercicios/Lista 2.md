---
title: "Lista 2"
anterior: "[[Asignaturas/Ciencias de la Ingeniería I - Estructura de Datos/Ejercicios/Lista 1|Lista 1]]"
siguiente: "[[Asignaturas/Ciencias de la Ingeniería I - Estructura de Datos/Ejercicios/_index|Inicio]]"

---

#  Ejercicio 1: Potencia de un número
 
 Escriba una función recursiva que calcule la potencia de un número entero base elevado a un exponente entero positivo. Por ejemplo, si se ingresa base = 2 y exponente = 3, el resultado es $2^{3} = 2*2*2 = 8$.

## Solución:

```c++
#include <iostream>

int power(int base, int exp) {
	int potencia;
	
	if (exp == 0) {
		return 1;
	} else {
		if (exp == 1) {
			potencia = base;
		} else {
			potencia = base * power(base, exp - 1);
		}
	return potencia;
	}
}

int main(){
	int base, exponente;
	
	std::cout<<"Ingrese una base: ";
	std::cin>>base;
	
	std::cout<<"Ingrese un exponente: ";
	std::cin>>exponente;
		
	std::cout<<"El resultado de elevar "<<base<<" a la "<<exponente<<" potencia es "<<power(base,exponente)<<std::endl;
	
	
	return 0;
}
```

# Ejercicio 2: Contar número de dígitos

Escriba una función recursiva que calcule el número de dígitos de un numero entero. Por ejemplo, si ingreso 0, el resultado es 1 (0 equivale a un dígito); si ingreso 5, el resultado es 1 (5 equivale a un dígito); si ingreso 20, el resultado es 2 (20 equivale a dos dígitos).

## Solución:

```c++
#include <iostream>

int contador(const int num, int i = 0){
	std::string str_num = std::to_string(num);
	
	if (str_num[0] == '-') {
		str_num = str_num.substr(1);
	}
	if (i >= str_num.length())
	{
		return 0;
	}
	
	return 1 + contador(num, i + 1);
}

int main(){
	int num;
	
	std::cout << "Ingrese un numero entero: ";
	std::cin >> num;
	
	std::cout << "Los dígitos en el número "<<num<<" son "<<contador(num)<<std::endl;
	
	
	return 0;
}
```

# Ejercicio 3: Suma de n primeros números naturales

Escriba una función recursiva que calcule la suma de los n primeros números naturales (Debe solicitar al usuario un número positivo y luego llamar a la función con ese número). Por ejemplo, si ingreso el 5, la salida es 15 (1+2+3+4+5). Si ingreso el 7, la salida es 28 (1+2+3+4+5+6+7).

## Solución:

```c++
#include <iostream>

int sumador(int num) {
	if (num == 1){
		return 1;
	} else {
		return num + sumador(num - 1);
	}
}

int main() {
	int numero;
	
	std::cout << "Ingrese número entero positivo: ";
	
	std::cin >> numero;
	
	if (numero <= 1) {
		if (numero == 1) {
			std::cout<<"1 es el primer número por lo tanto su suma no tiene sentido"<<std::endl;
		} else {
			std::cout<<"Ingrese valores enteros positivos"<<std::endl;
		}
	} else {
		std::cout<<"La suma de los naturales entre 1 y "<<numero<<" es "<<sumador(numero)<<std::endl;
	}
	
	
	return 0;
}
```

# Ejercicio 4: Calcular cuadrado de un número sumando impares

Escriba una función recursiva que calcule el cuadrado de un número entero n, usando el siguiente método: el cuadrado de n es igual a la suma de los n primeros números impares. Por ejemplo, el cuadrado de 4 es 1+3+5+7=16; el cuadrado de 5 es 1+3+5+7+9= 25.

## Solución:  

```c++
#include <iostream>

int suma_de_impare(int num) {
	if (num == 1){
		return 1;
	} else {
		int impar_menor_mas_cercano = (2 * num) - 1;
		return impar_menor_mas_cercano + suma_de_impares(num - 1);
	}
}

int main(){
	int num;
	
	std::cout<<"Ingrese un número entero: ";
	std::cin>>num;
	
	std::cout<<"El cuadrado de "<<num<<" es "<<suma_de_impares(num)<<std::endl;
	
	
	return 0;
}
```
