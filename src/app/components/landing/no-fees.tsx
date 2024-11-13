import styles from "./no-fees.module.css";

const NoFees = ({ className = "" }) => {
  return (
    <section id={styles.zerofees}>
      <div className={[styles.zeroWrap, styles.maxScreen].join(" ")}>
        <div>
          <h2>
            No fees,
            <br />
            means zero fees
          </h2>
          <p className={styles.descNeon}>
            A fair game for everyone worldwide.
            <br />
            Hiring and working the right way.
          </p>
        </div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHead}>
              <th className={styles.th}></th>
              <th className={styles.gig}>
                <img
                  src="assets/gig-logo.svg"
                  alt="Logo of GiG2Hire the trustless, zero-fees freelancer marketplace"
                />
              </th>
              <th className={styles.th}>
                <img src="assets/upwork.svg" alt="Upwork logo" />
              </th>
              <th className={styles.th}>
                <img src="assets/fiverr.svg" alt="Fiverr logo" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={[styles.rowTitle, styles.td].join(" ")}>
                Freelancer fees
              </td>
              <td className={[styles.gig, styles.td].join(" ")}>0</td>
              <td className={styles.td}>
                Up to 10%
                <br />
                <small>of earnings</small>
              </td>
              <td className={styles.td}>
                Up to 10%
                <br />
                <small>of earnings</small>
              </td>
            </tr>
            <tr>
              <td className={[styles.rowTitle, styles.td].join(" ")}>
                Client fees
              </td>
              <td className={[styles.gig, styles.td].join(" ")}>0</td>
              <td className={styles.td}>2.75%</td>
              <td className={styles.td}>5.5% + $2.5</td>
            </tr>
            <tr>
              <td className={[styles.rowTitle, styles.td].join(" ")}>
                Withdrawal fees
              </td>
              <td className={[styles.gig, styles.td].join(" ")}>0</td>
              <td className={styles.td}>Up to $30</td>
              <td className={styles.td}>Up to $30</td>
            </tr>
            <tr>
              <td className={[styles.rowTitle, styles.td].join(" ")}>
                Processing time
              </td>
              <td className={[styles.gig, styles.td].join(" ")}>INSTANT</td>
              <td className={styles.td}>
                Up to 22 <small>days</small>
              </td>
              <td className={styles.td}>
                Up to 14 <small>days</small>
              </td>
            </tr>
            <tr>
              <td className={[styles.rowTitle, styles.td].join(" ")}>
                Pay to work
              </td>
              <td className={[styles.gig, styles.td].join(" ")}>NO</td>
              <td className={styles.td}>
                Buy credits
                <br />
                <small>(connects)</small>
              </td>
              <td className={styles.td}>no</td>
            </tr>
            <tr>
              <td className={[styles.rowTitle, styles.td].join(" ")}>
                Authority
              </td>
              <td className={[styles.gig, styles.td].join(" ")}>
                Decentralized
              </td>
              <td className={styles.td}>Centralized</td>
              <td className={styles.td}>Centralized</td>
            </tr>
            <tr>
              <td className={[styles.rowTitle, styles.td].join(" ")}>
                Geo-Restrictions
              </td>
              <td className={[styles.gig, styles.td].join(" ")}>NO</td>
              <td className={styles.td}>YES</td>
              <td className={styles.td}>YES</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NoFees;
