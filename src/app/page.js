"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import styles from "./page.module.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className={styles.loading}>Loading products...</div>;

  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>The everyday edit</p>
          <h1 className={styles.heading}>Find your new favorite.</h1>
        </div>
        <p className={styles.introText}>
          Thoughtful picks for your wardrobe, home, and the little things in
          between.
        </p>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link
            href={`/products/details/${product.id}`}
            key={product.id}
            className={styles.productCard}
          >
            <div className={styles.imageFrame}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.shipping}>Ships to Ukraine</p>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={
                        i < Math.round(product.rating.rate)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>
                <span className={styles.reviewCount}>
                  {product.rating.count} reviews
                </span>
              </div>
              <p className={styles.price}>${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
