# Consumo de una API Pública: "Advice Slip"

## Descripción del Ejercicio
El objetivo de este ejercicio es practicar el consumo de una API pública en React, aprender a manejar estados y comprender cómo integrar datos externos en nuestras aplicaciones. Usaremos la API pública de "Advice Slip" para mostrar un consejo aleatorio en una tarjeta, con la posibilidad de actualizar el consejo mediante un botón.

## Objetivos de Aprendizaje
1. Entender el concepto de API REST y su estructura básica.
2. Aprender a realizar solicitudes HTTP usando `fetch`.
3. Manejar estados en React con `useState`.
4. Ejecutar efectos secundarios (como llamadas a APIs) con `useEffect`.
5. Mostrar datos dinámicos en un componente React.

---

## Conceptos Fundamentales

### 1. ¿Qué es una API REST?
Una API REST es una interfaz que permite la comunicación entre aplicaciones mediante solicitudes HTTP. Cada solicitud se realiza a un **endpoint**, que es una URL que define qué recurso queremos obtener, crear o modificar.

**API usada:** [Advice Slip API](https://api.adviceslip.com/advice)

- **Endpoint principal:** `https://api.adviceslip.com/advice`
- **Respuesta:** Devuelve un JSON con el consejo aleatorio:
  ```json
  {
    "slip": {
      "id": 42,
      "advice": "Don't count the days, make the days count."
    }
  }
  ```

---

### 2. Flujo del Programa

1. Al cargar la aplicación, se realiza una solicitud HTTP al endpoint de la API para obtener un consejo aleatorio.
2. La respuesta se procesa y se guarda en un estado local usando `useState`.
3. El estado se muestra en la interfaz mediante JSX.
4. Un botón permite actualizar el consejo manualmente al volver a llamar a la API.

---

### 3. Herramientas de React Utilizadas

#### `useState`
- **Qué hace:** Permite almacenar y actualizar valores dinámicos en un componente.
- **Uso en este ejercicio:** Creamos un estado `advice` para guardar el consejo obtenido de la API.
- **Ejemplo:**
  ```javascript
  const [advice, setAdvice] = useState('');
  ```
  - `advice`: El valor actual del consejo.
  - `setAdvice`: La función para actualizar el valor de `advice`.

#### `fetch`
- **Qué hace:** Realiza solicitudes HTTP.
- **Flujo:**
  1. Llama a una URL (el endpoint).
  2. Espera la respuesta del servidor.
  3. Convierte la respuesta en un formato manejable (JSON).
- **Uso en este ejercicio:** Llamamos a la API de Advice Slip para obtener el consejo.

#### `async` y `await`
- **Qué hacen:** Manejan código asíncrono de forma más legible.
- **Ejemplo en este ejercicio:**
  ```javascript
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  ```
  1. `fetch` devuelve una "promesa" que esperamos con `await`.
  2. `response.json()` convierte la respuesta en un objeto JSON.

#### `useEffect`
- **Qué hace:** Ejecuta código cuando el componente se monta o cuando cambian sus dependencias.
- **Uso en este ejercicio:** Llamamos a la API al montar el componente para mostrar un consejo inicial.
- **Ejemplo:**
  ```javascript
  useEffect(() => {
    fetchAdvice();
  }, []);
  ```
  - El array vacío `[]` asegura que la función solo se ejecute una vez al montar el componente.

---

### 4. Explicación Detallada de la Lógica

1. **Inicialización del estado:** Usamos `useState` para almacenar el consejo. El valor inicial es una cadena vacía `''` porque no tenemos datos al inicio.
2. **Función para obtener datos:** Creamos `fetchAdvice`, una función asíncrona que:
   - Llama a la API con `fetch`.
   - Convierte la respuesta a JSON.
   - Actualiza el estado con el consejo obtenido usando `setAdvice`.
3. **Uso de efectos:** Con `useEffect`, llamamos a `fetchAdvice` una vez al cargar el componente, asegurando que se muestre un consejo al inicio.
4. **Interfaz dinámica:** Usamos JSX para mostrar el consejo almacenado en `advice`. Si el estado está vacío, mostramos un mensaje de carga.
5. **Botón para actualizar:** El botón llama a `fetchAdvice` cuando se hace clic, lo que permite actualizar el consejo manualmente.

---

### 5. Respuestas a Preguntas Frecuentes

#### ¿Qué pasa si la API no responde?
Incluimos un bloque `try-catch` en la función `fetchAdvice` para manejar errores:
```javascript
try {
  // Llamada a la API
} catch (error) {
  console.error('Error al obtener el consejo:', error);
}
```
De esta forma, si ocurre un error (como problemas de conexión), lo registramos en la consola y la aplicación no se bloquea.

#### ¿Por qué usamos `useEffect` en lugar de llamar a la función directamente?
`useEffect` garantiza que `fetchAdvice` solo se ejecute al montar el componente, evitando que la llamada a la API se repita innecesariamente.

#### ¿Cómo podemos mejorar este ejercicio?
1. **Diseño:** Usar librerías como Tailwind CSS o Material-UI para estilizar el componente.
2. **Mejor manejo de errores:** Mostrar un mensaje en la interfaz si la API falla.
3. **Optimización:** Usar React Query para manejar el estado y la obtención de datos de manera más eficiente.

---

### 6. Reflexión Final
Este ejercicio refuerza la importancia de dividir las tareas en pequeños pasos:
1. Configuramos el estado y las herramientas necesarias.
2. Implementamos la lógica para consumir datos.
3. Conectamos la lógica con la interfaz.

Cada una de estas etapas es esencial para desarrollar aplicaciones escalables y robustas. ¡Felicidades por completar este reto! 🎉

