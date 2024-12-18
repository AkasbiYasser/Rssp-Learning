import styles from "./Newsletter.module.css";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert("Saving: " + email);
  };

  return (
    <div id="newsletter" className={styles.container}>
      <div className={styles.background}>
        <h2>Abonnez-vous à notre newsletter</h2>
        <p>Abonnez-vous à notre newsletter pour obtenir les nouveautés des domaines IT.</p>

        <div className={styles.details}>
          <div className={styles.input}>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre adresse email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Abonnez-vous</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
