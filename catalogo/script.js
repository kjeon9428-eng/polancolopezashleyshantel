// ===== 1. Array de películas =====
const productos = [
    {
        nombre: 'El Aro',
        descripcion: 'Una cinta misteriosa que causa la muerte de quien la ve siete días después.',
        precio: 59.99,
        imagen: 'img/img1.jpg'
    },
    {
        nombre: 'Evil Dead',
        descripcion: 'Un grupo de amigos desata el horror tras leer un antiguo libro en una cabaña.',
        precio: 69.99,
        imagen: 'img/img2.jpg'
    },
    {
        nombre: 'La Cosa',
        descripcion: 'Una criatura alienígena cambia de forma y aterroriza a un grupo en la Antártida.',
        precio: 79.99,
        imagen: 'img/img3.jpg'
    },
    {
        nombre: 'El Silencio de los Inocentes',
        descripcion: 'Una joven agente del FBI busca la ayuda de un asesino para atrapar a otro.',
        precio: 89.99,
        imagen: 'img/img4.jpg'
    }
];

// ===== 2. Crear tarjeta de película =====
const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Ver ahora 🍿';

    // Insertar los elementos en la tarjeta
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

// ===== 3. Renderizar catálogo =====
function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

// ===== 4. Cargar al inicio =====
window.onload = renderizarCatalogo;
