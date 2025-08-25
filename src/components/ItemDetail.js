import ItemCount from './ItemCount';

function ItemDetail({ producto }) {
  const handleAddToCart = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades del producto:`, producto.nombre);
    // Aquí podrías agregar lógica real para agregar al carrito
  };

  return (
    <div className="container text-center mt-4">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} width="250" className="my-3" />
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      
      <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;