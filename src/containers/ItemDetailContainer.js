import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../data/productos';
import ItemDetail from '../components/ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams(); // ← obtenemos el ID desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoById(itemId)
      .then((res) => {
        setProducto(res);
      })
      .catch((err) => console.error(err));
  }, [itemId]);

  // Mientras se carga
  if (!producto) {
    return <p style={{ padding: '20px' }}>Cargando producto...</p>;
  }

  return <ItemDetail producto={producto} />

}

export default ItemDetailContainer;