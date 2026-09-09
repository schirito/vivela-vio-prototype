# Vìvela — Prototipo Informe legal / Contratos

Sitio estático, sin frameworks ni dependencias de npm. Portado del prototipo original conservando diseño, textos, estados e interacciones.

## Estructura

```
vivela-vio-prototype/
├── index.html          punto de entrada
├── style.css           tokens Vìvela + kit Minimals + estilos de página
├── script.js           estado e interacciones (JS vanilla)
├── netlify.toml        publish = "."
└── assets/
    ├── vivela-logo.svg
    └── fonts/          Public Sans (400–800)
```

## Local

Abrir `index.html` directamente, o servirlo:

```
npx serve .
```

## Netlify

1. Subir esta carpeta a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project** y elegir el repo.
3. Build command: vacío. Publish directory: `.` (ya definido en `netlify.toml`).

## Recursos externos (CDN)

- Iconify (`code.iconify.design`) para los iconos `solar:*` y `eva:*`.
- Google Fonts para Barlow / DM Sans / Be Vietnam Pro. Public Sans se sirve localmente desde `assets/fonts/`.

## Alcance funcional

Prototipo de front-end sin backend: la carga de documento usa el input de archivo del navegador y vive en memoria durante la sesión; las observaciones y la validación no se persisten.
