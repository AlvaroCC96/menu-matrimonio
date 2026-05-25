# Menú Matrimonio Dashboard

Aplicación web hecha con React + Vite para registrar el menú que elegirá cada invitado de un matrimonio.

No usa base de datos. Los datos viven en memoria mientras usas la app y se pueden exportar/importar como archivo JSON.

## Funcionalidades

- Registro de invitados.
- 20 invitados precargados.
- Agregar y eliminar invitados.
- Selectores para:
  - Aperitivo
  - Bebida
  - Entrada
  - Fondo
  - Postre
- Campo de notas o alergias.
- Dashboard con conteo automático por opción.
- Vista JSON editable.
- Exportar JSON.
- Cargar JSON.
- Diseño responsive para celular.

## Requisitos

Necesitas tener instalado:

- Node.js 18 o superior
- npm

Puedes revisar tu versión con:

```bash
node -v
npm -v
```

## Instalación

Entra a la carpeta del proyecto:

```bash
cd menu-matrimonio
```

Instala las dependencias:

```bash
npm install
```

## Ejecutar en local

Levanta el proyecto con:

```bash
npm run dev
```

Luego abre en el navegador la URL que muestre Vite, normalmente:

```bash
http://localhost:5173
```

## Compilar para producción

```bash
npm run build
```

Esto generará una carpeta `dist/` lista para subir a hosting.

## Previsualizar build

```bash
npm run preview
```

## Cómo guardar la información

1. Completa los menús de los invitados.
2. Ve a la pestaña `JSON` o presiona `Exportar JSON`.
3. Descarga el archivo `menus-matrimonio.json`.
4. Para recuperar los datos después, copia el contenido del JSON en la pestaña `JSON` y presiona `Cargar JSON`.

## Estructura del proyecto

```txt
menu-matrimonio/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

## Personalizar opciones del menú

Las opciones están en `src/main.jsx`, dentro del objeto:

```js
const menuOptions = {
  aperitivo: [],
  bebida: [],
  entrada: [],
  fondo: [],
  postre: [],
};
```

Puedes editar esos arrays para agregar, quitar o cambiar platos.
