function Item({ producto }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <a href={`/item/${producto.id}`} className="btn btn-primary">Ver detalle</a>
      </div>
    </div>
  );
}

export default Item;