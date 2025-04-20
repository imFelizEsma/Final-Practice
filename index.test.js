const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Mi Página Web', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('debe tener un título "Mi Página Web"', () => {
    expect(document.title).toBe('Mi Página Web');
  });

  test('debe mostrar un encabezado h1 con "Hola, Mundo!"', () => {
    const h1 = document.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe('Hola, Mundo!');
  });

  test('debe tener un párrafo con el texto esperado', () => {
    const p = document.querySelector('p');
    expect(p).not.toBeNull();
    expect(p.textContent).toBe('Bienvenido a mi página web desplegada con GitHub Actions :D!');
  });
});
