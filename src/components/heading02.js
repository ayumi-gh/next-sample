import styles from '@/styles/heading02.module.css'

export default function Heading02({en, jp}) {
  return (
    <>
      <h2 className={`heading ${styles.uv3bhw}`}>
        <span className={styles.en}>{en}</span>
        <span className={styles.jp}>{jp}</span>
      </h2>
    </>
  )
}