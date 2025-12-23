export default function ProductModal({ open, onClose, product }) {
  if (!open || !product) return null;

  const d = product.details || {};

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        aria-modal="true"
        role="dialog"
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-content">
          {/* Product Details */}
          <h3>Product Details</h3>
          {(d.productDetails || []).map((line, i) => (
            <p key={`pd-${i}`}>{line}</p>
          ))}

          {/* Size & Fit */}
          <h3>Size &amp; Fit</h3>
          {(d.sizeFit || []).map((line, i) => (
            <p key={`sf-${i}`}>{line}</p>
          ))}

          {/* Material & Care */}
          <h3>Material &amp; Care</h3>
          {(d.materialCare || []).map((line, i) => (
            <p key={`mc-${i}`}>{line}</p>
          ))}

          {/* Specifications */}
          <h3>Specifications</h3>
          {(d.specifications || []).map((line, i) => (
            <p key={`sp-${i}`}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
