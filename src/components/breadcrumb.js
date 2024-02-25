import styles from '@/styles/breadcrumb.module.css'
import Link from 'next/link'

export default function Breadcrumb() {
  return (
    <>
      <div className={styles.d8nh75}>
        <div class={styles.tyk6rf}>
          <ul>
            <li>
              <Link href="/">Top</Link>
            </li>
            <li>IR</li>
          </ul>
        </div>
      </div>
    </>
  )
}