# Prototipo_1
# Taller de Desarrollo Prototipo de Guitar Hero en JavaScript, HTML y CSS

***Instrucciones para ejecutar el juego:***

1. **Clonar el Repositorio:**

   - Abre tu terminal o línea de comandos.
   - Navega al directorio donde deseas guardar el juego.
   - Ejecuta el siguiente comando para clonar el repositorio:

     ```
     git clone https://github.com/DerlyYanneth/Prototipo1GH
     ```

   - Esto descargará una copia local del repositorio en tu máquina.

2. **Abrir el Juego en el Navegador:**

   - Ve al directorio del repositorio clonado:

     ```
     cd Prototipo1GH
     ```

   - Encuentra el archivo `inicio.html` y ábrelo en tu navegador. 

   - El juego debería cargarse en tu navegador y estar listo para jugar.

# Funcionalidades Implementadas:
1.   **Sonido:** Función llamada sonido() que reproduce un sonido cuando se llama. Se llama a esta función cuando el jugador presiona la tecla correspondiente. Por ejemplo, puedes llamar a sonido() dentro de las funciones nota1(), nota2(), nota3(), y nota4() cuando el círculo correspondiente esté en la posición correcta. También se agrego una canción a la aplicación.
2.   **Contador de Puntos:** Variable contador que registra el puntaje del jugador. Actualiza esta variable dentro de las funciones que manejan la detección de teclas (donde incrementas el puntaje) y llama a la función actualizarPuntaje() para reflejar el cambio en el HTML.
3.   **Mínimo 4 Cuerdas:** El código ya maneja cuatro cuerdas (representadas por los círculos) asociadas a teclas específicas (a, s, k, l).
4.   **Aleatoriedad en las Notas:** Actualmente, las notas se mueven verticalmente en la pantalla de manera constante. Las notas se generen aleatoriamente en la parte superior de la pantalla y se muevan hacia abajo de manera aleatoria. Esto puede hacerse ajustando las funciones nota1(), nota2(), nota3(), y nota4() para generar posiciones y velocidades aleatorias.
5.   **Botón de Pausa:** Funciones mostrarMenu() y ocultarMenu() que muestran y ocultan un menú de pausa. Se llaman a estas funciones cuando el jugador presione el botón de pausa.
6.   **Botón de Inicio:** Función llamada iniciar() que inicia el juego y muestra el contenido principal. Se llama a esta función cuando se presione el botón de inicio.
