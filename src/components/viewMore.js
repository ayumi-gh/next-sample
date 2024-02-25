import styles from '@/styles/viewMore.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ViewMore({ url }) {
  return (
    <>
        <Link className={styles.link} href={url}>
        <span className={`text ${styles.text}`}>View More</span>
        <span className={`is-sm is-mlSm ${styles.icon}`}>
            <span
            style={{
                boxSizing: 'border-box',
                display: 'inline-block',
                overflow: 'hidden',
                width: '54px',
                height: '54px',
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: 'relative',
            }}
            >
            <Image
                alt=""
                width="60"
                height="60"
                srcset="
                    /common/icon-circle-arrow.svg 1x,
                    /common/icon-circle-arrow.svg 2x
                "
                src="/common/icon-circle-arrow.svg"
                decoding="async"
                data-nimg="fixed"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: 'border-box',
                    padding: 0,
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: 0,
                    height: 0,
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                }}
                loading="lazy"
            />
            </span>
        </span>
        </Link>
    </>
  )
}