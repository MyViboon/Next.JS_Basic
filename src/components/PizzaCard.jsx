import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>FRPOO DI ZAKA</h1>
      <span className={styles.price}>$19.99</span>
      <p className={styles.desc}>
        The standard chunk of Lorem Ipsum used since the 1500s
      </p>
    </div>
  );
};

export default PizzaCard;
