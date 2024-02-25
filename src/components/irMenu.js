import styles from '@/styles/irMenu.module.css'
import Link from 'next/link'

export default function IRMenu() {
  return (
    <>
      <div className={`${styles.col4} ${styles.i9tvbw}`}>
        <div className="contents">
          <div className={styles.head}>その他のIR情報</div>
          <ul className={styles.col4}>
            <li>
              <Link href="/ir/qa">よくあるご質問</Link>
            </li>
            <li>
              <Link href="/ir/contact">IRに関するお問い合わせ</Link>
            </li>
            <li>
              <Link href="/ir/electronicPublicNotice">電子公告</Link>
            </li>
            <li>
              <Link href="/ir/disclaimer">免責事項</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}