import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosByCategoria } from '../data/productos';
import ItemList from '../components/ItemList';

function ItemListContainer({ saludo }) {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = categoryId ? getProductosByCategoria : getProductos;

    fetchData(categoryId)
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  const categoriaFormateada = categoryId
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
    : null;

  return (
    <div className="container text-center mt-4">
      <h2>{categoryId ? `Categoría: ${categoriaFormateada}` : saludo}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
