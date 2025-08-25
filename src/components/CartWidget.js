function CartWidget({ cantidad }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Ícono del carrito */}
      <span className="fs-4">🛒</span>

      {/* Burbuja de notificación */}
      <span 
        style={{
          position: 'absolute',
          top: '-5px',
          right: '-10px',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}
      >
        {cantidad}
      </span>
    </div>
  );
}

export default CartWidget;