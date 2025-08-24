---
anterior: "[[3.3 - Enumeraciones]]"
siguiente: "[[4.1 - Compilación Separada]]"
dg-publish: true
---
Un programa en C++ consiste en muchas partes desarrolladas por separado, como **funciones**, **tipos definidos por el usuario**, **jerarquías de clases** y **plantillas**.

La clave para manejar esto es **definir claramente las interacciones entre esas partes**.

El primer y más importante paso es **distinguir entre la interfaz de una parte y su implementación**.

A nivel de lenguaje, C++ representa las interfaces mediante **declaraciones**. Una declaración especifica todo lo necesario para usar una función o un tipo. Por ejemplo:

```cpp
double sqrt(double);  // la función raíz cuadrada toma un double y devuelve un double  

class Vector { 
public:     
	Vector(int s);     
	double& operator[](int i);     
	int tamano(); 
private:     
	double* elemento; // apunta al primer elemento de un arreglo de tamaño tmn     
	int tmn; 
};
```

El punto clave aquí es que los **cuerpos de las funciones**, las **definiciones**, están “en otra parte”.

En este ejemplo, también nos gustaría que la **representación de `Vector`** estuviera “en otra parte”, pero eso lo trataremos más adelante.

La definición de `sqrt()` sería algo así:

```cpp
double sqrt(double d) // definición de sqrt() 
{     
// ... algoritmo como se encuentra en un libro de matemáticas ... 
}
```

Para `Vector`, necesitamos definir las **tres funciones miembro**:

```cpp
Vector::Vector(int s) // definición del contructor
	: elemento {new double[s]}, tmn{s} // inicializar miembros
{
}

double& Vector::operator[](int i) // definición de una subscribir 
{ 
	return elemento[i]; 
} 

int Vector::tamano() // definición de tamano()
{ 
	return tmn; 
}
```

Debemos definir las funciones de `Vector`, pero no `sqrt()`, porque esta forma parte de la **biblioteca estándar**. Sin embargo, eso **no marca una diferencia real**: una biblioteca es simplemente algo de “otro código para que lo usemos” escrito con las mismas facilidades del lenguaje que usamos nosotros.
