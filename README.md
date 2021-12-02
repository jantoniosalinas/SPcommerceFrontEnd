# SP ecommerce FrontEnd 
UCAMP Proyecto 5
Aplicación para una página de comercio electrónico

## Intro
Generar un página que ofrezca el servicio de comercio electrónico **SP ecommerce**

## FrontEnd

### Prototipado

      Vista Principal
  <img src="/frontend/public/Home.svg" alt="Página Principal" style="height: 300px; width:500px;"/>
  
      Vista de Login/Logout
  <img src="/frontend/public/Login.svg" alt="Página Login/Logout" style="height: 300px; width:500px;"/>
  
      Vista de Formulario de Registro
  <img src="/frontend/public/Forma.svg" alt="Página Formulario" style="height: 300px; width:500px;"/>
  
      Vista de Categorias
  <img src="/frontend/public/Category.svg" alt="Página Categoria" style="height: 300px; width:500px;"/>
  
      Vista detallada del producto
  <img src="/frontend/public/Detail.svg" alt="Página Detalle del Producto" style="height: 300px; width:500px;"/>
  
      Vista de shoppingCart
  <img src="/frontend/public/ShoppingCart.svg" alt="Página ShoppingCart" style="height: 300px; width:500px;"/>
  
### Crear aplicación de FrontEnd
* Se hará uso del framework next.js que es un marco de desarrollo construido sobre Node.js.
      
      `npx create-next-app frontend`
      
* Para los estilos se utilizará el framework Bulma con los archivos de extensión sass.

      `npm i bulma node-sass`
       
* Instalar los siguientes componentes/librerias a usar:

      `npm i axios cors @fortawesome`
      
* Usaremos:

      `next/link
      { Link }`
      
      `next/router
      { useRouter }`
     
      `react
      { useState
        useEffect }`
        
      `react-icons`
 
 ### Componentes
 
 - Home
 - Principal
 - Header
 - Layout
 - Footer
 - Login
 - Logout
 - Main
 - LoginForm
 - Cart
 - DetailCart
 - ShowCart
 - Info
 
 ### ScreenShots
 
      Página Principal
 
   <img src="/frontend/public/PrincipalPage.png" alt="Página Principal" style="height: 300px; width:500px;"/>
 
      Formulario para Agregar Usuarios
      
   <img src="/frontend/public/FormularioPage.png" alt="Agregar Usuario" style="height: 300px; width:500px;"/>

      Sección de Login/Logout
      
   <img src="/frontend/public/LoginPage.png" alt="Login" style="height: 300px; width:500px;"/>
   <img src="/frontend/public/ValidationLogin.png" alt="Validar Login" style="height: 300px; width:500px;"/>
   
      Ruta para mostrar los productos de una categoría
      
   <img src="/frontend/public/CategoryPage.png" alt="Categoría" style="height: 300px; width:500px;"/>
   
      Ruta para mostrar el detalle del producto
      
   <img src="/frontend/public/DetailPage.png" alt="Detalle de Producto" style="height: 300px; width:500px;"/>

      Ruta para mostrar el ShoppingCart del usuario
      
   <img src="/frontend/public/ShoppingCartPage.png" alt="Shopping Cart" style="height: 300px; width:500px;"/>

## ¿Cómo ejecutar la aplicación FrontEnd?

En el archivo package.json dentro de la sección **"scripts"** se pueden agregar opciones de ejecución:

`"scripts": {
     "dev": "next dev"
  }`
  
  Teclear el siguiente comando en una terminal
  
    npm run dev


  <img src="/frontend/public/RunFrontEnd.png" alt="Ejecución Aplicación FrontEnd" style="height: 200px; width:700px;"/>
 
>>Esta aplicación se comunica con el server BackEnd del repositorio SPecommerce para poder funcionar de forma correcta.
>>https://github.com/jantoniosalinas/SPcommerce.git

 ## Obtener proyecto
 
 - [X] Clonar el respositorio
  - En una terminal ejecutar lo siguiente:

        git clone https://github.com/jantoniosalinas/SPcommerceFrontEnd.git
        
 - [X] Instalar los modulos
  - Ejecutar la siguiente instrucción

        npm install

## Para realizar las pruebas de funcionamiento
Ingresar en el navegador la url **http://localhost:3000**

#### Comentarios
    La aplicación FrontEnd de SP ecommerce sigue en mejora continua, siempre buscando aplicar las mejores practicas de lo
    aprendido en el UCAMP.
    
#### UCAMP - UTEL 
`UCAMP @2021
`José Antonio Salinas Ochoa`
`https://www.instagram.com/jasosalinas/`
 
