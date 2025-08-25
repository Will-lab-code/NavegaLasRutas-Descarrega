# NavegaLasRutas+Descarrega

Proyecto realizado como parte del curso de React JS.
Esta aplicación simula una tienda en línea e implementa los fundamentos de **React Router**, navegación dinámica y organización por **componentes contenedores** y **componentes de presentación**.

---

## **Descripción del proyecto**

Este proyecto incluye:

* **Navegación entre vistas** utilizando React Router DOM.
* **Vista de catálogo** general y filtrada por categoría.
* **Vista detallada de cada producto**, incluyendo imagen, descripción, precio y un contador de unidades.
* **NavBar** con enlaces funcionales a categorías y contacto.
* **Ruta 404** para manejar errores de navegación.

---

## **Componentes principales**

### Contenedores (manejan lógica y estado):

* `ItemListContainer`: obtiene productos y los filtra por categoría.
* `ItemDetailContainer`: obtiene un producto por ID para mostrar su detalle.

### Presentación (renderizan visualmente):

* `NavBar`, `CartWidget`, `ItemList`, `Item`, `ItemDetail`, `ItemCount`, `NotFound`

---

## **Tecnologías utilizadas**

* [React](https://react.dev/)
* [React Router DOM](https://reactrouter.com/)
* [Bootstrap](https://getbootstrap.com/) para estilos y diseño responsive.
* [Create React App](https://create-react-app.dev/) como herramienta de inicialización.

---

## **Estructura de carpetas** (simplificada)

```
src/
│
├── components/
│   ├── CartWidget.js
│   ├── NavBar.js
│   ├── ItemList.js
│   ├── Item.js
│   ├── ItemDetail.js
│   ├── ItemCount.js
│   └── NotFound.js
│
├── containers/
│   ├── ItemListContainer.js
│   └── ItemDetailContainer.js
│
├── data/
│   └── productos.js
│
├── App.js
└── index.js
```

---

## **Autor**

William Descarrega
Proyecto entregado como parte del curso de React JS.


