---
title: "Lo Básico"
anterior: "[[Biblioteca/The C++ Programming Language - Bjarne Stroustrup/2 - Un Tour Por C++ - Lo Básico/1 - Introducción]]"
siguiente: "[[Biblioteca/The C++ Programming Language - Bjarne Stroustrup/2 - Un Tour Por C++ - Lo Básico/2.1 - Hello World]]"

---
C++ es un lenguaje compilado. Para que un programa se ejecute, su texto fuente debe ser procesado por un compilador, que produce archivos de objeto. Estos archivos se combinan mediante un enlazador para generar un programa ejecutable. 

Un programa C++ típicamente consta de muchos archivos de código fuente (comúnmente llamados **archivos fuente**).

![Capture](/img/Captura-de-pantalla-2025-03-30-a-las-8.49.09-p.m..png)

Un programa ejecutable se crea para una combinación específica de hardware/sistema; no es portable, por ejemplo, de una Mac a una PC con Windows.

Cuando hablamos de portabilidad de los programas C++, generalmente nos referimos a la portabilidad del **código fuente**. Es decir, el código fuente puede ser compilado y ejecutado con éxito en una variedad de sistemas.

El estándar ISO de C++ define dos tipos de entidades:
- **Características del lenguaje básico**, como tipos incorporados (por ejemplo, `char` e `int`) y bucles (por ejemplo, sentencias `for` y `while`).
- **Componentes de la biblioteca estándar**, como contenedores (por ejemplo, `vector` y `map`) y operaciones de I/O (por ejemplo, `<<` y `getline()`).

Nota: La biblioteca estándar (`std`) se utilizará bastante. 

Los componentes de la biblioteca estándar son simplemente código C++ ordinario proporcionado por cada implementación de C++. Es decir, la **biblioteca estándar de C++** puede ser implementada en C++ mismo (y lo es, con muy pocos usos de código de máquina para tareas como el cambio de contexto de hilos).

Esto implica que C++ es suficientemente expresivo y eficiente para las tareas más exigentes de programación de sistemas.

C++ es un lenguaje de **tipado estático**. Es decir, el tipo de cada entidad (por ejemplo, objeto, valor, nombre y expresión) debe ser conocido por el compilador en el punto de uso.

El tipo de un objeto determina el conjunto de operaciones que se le pueden aplicar.