# Pages Starter

A simple starter for building your site with Next.js' Pages Router and Drupal.

## How to use

`npx create-next-app -e https://github.com/chapter-three/next-drupal-pages-starter`

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchapter-three%2Fnext-drupal-pages-starter&env=NEXT_PUBLIC_DRUPAL_BASE_URL,NEXT_IMAGE_DOMAIN,DRUPAL_CLIENT_ID,DRUPAL_CLIENT_SECRET&envDescription=Learn%20more%20about%20environment%20variables&envLink=https%3A%2F%2Fnext-drupal.org%2Fdocs%2Fenvironment-variables&project-name=next-drupal&demo-title=Next.js%20for%20Drupal&demo-description=A%20next-generation%20front-end%20for%20your%20Drupal%20site.&demo-url=https%3A%2F%2Fdemo.next-drupal.org&demo-image=https%3A%2F%2Fnext-drupal.org%2Fimages%2Fdemo-screenshot.jpg)

## Documentation

See https://next-drupal.org

# 100 Days of Vibe Coding - Landing Page

Landing page para 100daysofvibecoding.com

## Desarrollo local

Para ejecutar el proyecto localmente:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Después, abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Añadir el logo

Para añadir el logo de 100 Days of Vibe Coding:

1. Guarda tu archivo de logo (preferiblemente en formato PNG o JPG) en la carpeta `public/images/`
2. Edita el archivo `pages/index.tsx` y reemplaza el placeholder del logo con el siguiente código:

```tsx
{/* Logo */}
<div className="mb-10 flex justify-center">
  <Image 
    src="/images/tu-logo.png" 
    alt="100 Days of Vibe Coding Logo" 
    width={256} 
    height={256}
    className="rounded-lg"
  />
</div>
```

Asegúrate de cambiar `tu-logo.png` por el nombre real de tu archivo.

## Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Luego, despliega la carpeta `out` en tu proveedor de hosting preferido.
