import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App </h1>
      <p>
        <a href="http://www.botostart.ir" target="_blank">
          Botostart 
        </a>
        | React.js
      </p>
    </div>
  );
}

export default Header;
