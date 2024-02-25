import styles from '@/styles/irMenu.module.css'

export default function IRMenu() {
  return (
    <>
      <div className={`${styles.col4} ${styles.i9tvbw}`}>
        <div className="contents">
          <div className={styles.head}>その他のIR情報</div>
          <ul className={styles.col4}>
            <li>
              <a href="/ir/qa">よくあるご質問</a>
            </li>
            <li>
              <a href="/ir/contact">IRに関するお問い合わせ</a>
            </li>
            <li>
              <a href="/ir/electronicPublicNotice">電子公告</a>
            </li>
            <li>
              <a href="/ir/disclaimer">免責事項</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}