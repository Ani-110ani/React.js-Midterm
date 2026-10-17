import { Suspense } from "react";
import styles from "./page.module.css";

async function ProfileContent() {
  const res = await fetch("https://fakestoreapi.com/users/3", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to load profile: ${res.status}`);
  }

  const user = await res.json();

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Your account</p>
        <h1 className={styles.heading}>Profile information</h1>
      </header>
      <div className={styles.card}>
        <div className={styles.details}>
          <div className={styles.label}>Full name</div>
          <div className={`${styles.value} ${styles.capitalize}`}>
            {user.name.firstname} {user.name.lastname}
          </div>

          <div className={styles.label}>Username</div>
          <div className={styles.value}>{user.username}</div>

          <div className={styles.label}>Email</div>
          <div className={styles.value}>{user.email}</div>

          <div className={styles.label}>Phone</div>
          <div className={styles.value}>{user.phone}</div>

          <div className={styles.label}>Address</div>
          <div className={`${styles.value} ${styles.capitalize}`}>
            {user.address.city}, {user.address.street}, {user.address.number}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={<p className={styles.loading}>Loading your profile...</p>}
    >
      <ProfileContent />
    </Suspense>
  );
}
