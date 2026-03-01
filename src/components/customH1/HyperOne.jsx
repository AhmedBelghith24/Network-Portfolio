import styles from './about.module.css'

const HyperOne = ({ value }) => {
  return (
    <div className={styles.h1Wrap}>
      <p className={styles.h1}>
        {value}
        <span className={styles.h1Sweep} />
        <span className={styles.h1Underline} />
      </p>
    </div>
  )
}

export default HyperOne
