import styles from "./how-to.module.css";
const HowTo = ({ className = "" }) => {
  return (
    <section id={styles.howto}>
      <h2>How to start a GIG</h2>
      <p className={[styles.descNavy, styles.textCenter].join(" ")}>
        Start Your GIG Today – Simple for Freelancers, Safe for Clients
      </p>
      <div className={styles.roles}>
        <div>
          <h4>Freelancer</h4>
          <p>Get judged only by your talent, and your GIGs paid on time.</p>
          <ul>
            <li>Verify your freelance talent.</li>
            <li>Create and join teams.</li>
            <li>Get paid with USD worldwide.</li>
            <li>Get your payment released instantly upon approval.</li>
            <li>Gain access to extra tools by staking $GIG.</li>
          </ul>
        </div>
        <div>
          <h4>Client</h4>
          <p>Hire real humans with real talent, and your budget secured.</p>
          <ul>
            <li>Hire freelancers with verified talent.</li>
            <li>Hire skillful teams.</li>
            <li>Post GIGs with zero listing fees.</li>
            <li>Your budget remains secure in escrow until job delivery.</li>
            <li>Access premium features by providing liquidity.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
