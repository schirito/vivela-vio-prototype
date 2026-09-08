# Bandeja Legal — Vívela (prototipo)

Prototipo interactivo del rol Legal: bandeja de informes con filtros, tabs de
estado y tabla paginada, más el flujo de Informe Legal (carga de documento,
excepciones, checklist y generación de contrato o envío a Comercial).

Es un sitio **100% estático**: HTML, CSS y JavaScript puro, sin frameworks,
sin build ni dependencias de npm. Los datos (clientes, estados, checklist)
viven en memoria del navegador — no hay backend ni persistencia real.

## Estructura del proyecto

```
.
├── index.html          punto de entrada
├── style.css           todos los estilos (tema claro/oscuro incluido)
├── script.js           toda la lógica (datos, tabla, tabs, buscador, checklist, flujo de guardado)
├── assets/
│   └── logo-vivela.png logo de Vívela usado en el sidebar
├── netlify.toml         configuración de despliegue para Netlify
└── .gitignore
```

## Previsualizar en local

No requiere instalación. Cualquiera de estas opciones funciona:

- Abrir `index.html` directamente con doble clic en el navegador.
- O, si prefieres servirlo por HTTP (recomendado para evitar restricciones
  de algunos navegadores con `file://`):

  ```bash
  python3 -m http.server 8000
  # luego abre http://localhost:8000
  ```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Prototipo Bandeja Legal"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

## Desplegar en Netlify

1. Entra a [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
2. Conecta tu cuenta de GitHub y selecciona este repositorio.
3. Configuración de build (Netlify puede autodetectarla gracias a `netlify.toml`, pero por si la pide manualmente):
   - **Build command:** (dejar vacío)
   - **Publish directory:** `.`
4. Deploy site. Netlify sirve `index.html` automáticamente en la raíz — no hace falta ninguna regla de redirect porque el prototipo es una sola página.

Cada `git push` a la rama conectada vuelve a desplegar el sitio automáticamente.

## Notas

- La tipografía (Public Sans) se carga desde Google Fonts vía `<link>` en
  `index.html`; es la única solicitud a un servicio externo que hace el sitio.
- El diseño y el comportamiento son idénticos al prototipo original: esta
  reorganización solo separó el HTML, CSS y JS en archivos independientes y
  movió el logo de un `data:` URI embebido a un archivo real en `assets/`.
