import { Suspense } from "react";
import styles from "./page.module.css";

async function ProductContent({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) return <div className={styles.notFound}>Product not found</div>;

  const product = await res.json();

  if (!product?.image) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  return (
    <article className={styles.page}>
      <div className={styles.imageFrame}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.category}>{product.category}</p>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.purchaseInfo}>
          <span className={styles.price}>${product.price}</span>
          <div className={styles.rating}>
            ★ {product.rating.rate} ({product.rating.count} reviews)
          </div>
        </div>
        <button className={styles.addButton}>Add to Cart</button>
      </div>
    </article>
  );
}

export default function ProductDetails({ params }) {
  return (
    <Suspense
      fallback={
        <div className={styles.loading}>Loading product details...</div>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
