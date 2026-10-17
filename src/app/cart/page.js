"use client";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import styles from "./page.module.css";

const initialCart = [
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    quantity: 1,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    price: 55.99,
    quantity: 2,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    id: 4,
    name: "Mens Casual Slim Fit",
    price: 15.99,
    quantity: 1,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          if (newQty >= 1 && newQty <= 10) {
            return { ...item, quantity: newQty };
          }
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Your selection</p>
        <h1 className={styles.heading}>Shopping cart</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.cart}>
          <div className={styles.columnLabels}>
            <span>Product</span>
            <span>Quantity</span>
            <span>Price</span>
          </div>
          {cartItems.length === 0 ? (
            <p className={styles.empty}>Your cart is waiting for something lovely.</p>
          ) : (
            cartItems.map((item) => (
              <div className={styles.item} key={item.id}>
                <div className={styles.product}>
                  <div className={styles.imageFrame}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.image}
                    />
                  </div>
                  <div>
                    <h2 className={styles.productName}>{item.name}</h2>
                  </div>
                </div>
                <div className={styles.quantity}>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className={styles.quantityButton}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span className={styles.quantityValue}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className={styles.quantityButton}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <div className={styles.price}>
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className={styles.removeButton}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={18} strokeWidth={1.7} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <aside className={styles.summary} aria-label="Cart total">
          <p className={styles.summaryEyebrow}>Order summary</p>
          <div className={styles.summaryRow}>
            <span>Items</span>
            <span>{cartItems.reduce((count, item) => count + item.quantity, 0)}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <p className={styles.summaryNote}>Total updates as you adjust your cart.</p>
        </aside>
      </div>
    </section>
  );
}
