import Item from './Item';

function ItemList({ productos }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {productos.map((prod) => (
          <div key={prod.id} className="col-md-4 d-flex justify-content-center">
            <Item producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;