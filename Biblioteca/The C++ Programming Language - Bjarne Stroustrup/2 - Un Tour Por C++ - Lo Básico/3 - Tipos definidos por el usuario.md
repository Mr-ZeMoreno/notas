---
title: "Tipos definidos por el usuario"
anterior: "[[Biblioteca/The C++ Programming Language - Bjarne Stroustrup/2 - Un Tour Por C++ - Lo Básico/2.5 - Punteros, arreglos y bucles]]"
siguiente: "[[Biblioteca/The C++ Programming Language - Bjarne Stroustrup/2 - Un Tour Por C++ - Lo Básico/3.1 - Estructuras]]"

---
Llamamos tipos integrados (_built-in types_) a aquellos que pueden construirse a partir de los tipos fundamentales, el modificador `const` y los operadores declaradores. El conjunto de tipos y operaciones integradas de C++ es amplio, pero deliberadamente de bajo nivel. Reflejan de manera directa y eficiente las capacidades del hardware convencional de las computadoras.

Sin embargo, no ofrecen al programador facilidades de alto nivel para escribir cómodamente aplicaciones avanzadas. En su lugar, C++ complementa los tipos y operaciones integradas con un conjunto sofisticado de mecanismos de abstracción, a partir de los cuales los programadores pueden construir esas facilidades de alto nivel.

Los mecanismos de abstracción de C++ están diseñados principalmente para que los programadores puedan diseñar e implementar sus propios tipos, con las representaciones y operaciones adecuadas, y para que otros programadores puedan utilizarlos de manera simple y elegante.

Los tipos construidos a partir de los tipos integrados mediante los mecanismos de abstracción de C++ se denominan tipos definidos por el usuario (_user-defined types_). Estos corresponden a clases y enumeraciones.

La mayor parte de este libro está dedicada al diseño, implementación y uso de tipos definidos por el usuario. El resto de este capítulo presenta las facilidades más simples y fundamentales para ello.

El Capítulo 3 ofrece una descripción más completa de los mecanismos de abstracción y de los estilos de programación que soportan. El Capítulo 4 y el Capítulo 5 presentan una visión general de la biblioteca estándar que, dado que está compuesta principalmente de tipos definidos por el usuario, proporciona ejemplos de lo que puede construirse usando las facilidades del lenguaje y las técnicas de programación presentadas en el Capítulo 2 y el Capítulo 3.