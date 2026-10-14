// Devuelve siempre un array: vacío si la API falla o responde algo inesperado,
// para que los componentes no rompan al mapear la respuesta.
async function runCode(input) {
  if (typeof input !== 'string') {
    throw new Error('La entrada debe ser una cadena de texto');
  }
  try {
    const response = await fetch('https://fundacion.colegionqnoeste.com/run-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: input })
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error: ' + error.message);
    return [];
  }
}


export { runCode }
