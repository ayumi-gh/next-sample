import styles from '@/styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.bjn8wh}>
                <Link href="/" className={styles.logo}>
                    <span
                    style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                    }}
                    >
                    <span
                        style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        paddingTop: '21.22641509433962%',
                        }}
                    ></span>
                    <Image
                        alt="cover"
                        width="224"
                        height="48"
                        src="/common/logo.svg"
                        decoding="async"
                        data-nimg="responsive"
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
                    />
                    <noscript>
                        <Image
                        alt="cover"
                        sizes="100vw"
                        width="224"
                        height="48"
                        srcset="
                            /common/logo.svg  640w,
                            /common/logo.svg  750w,
                            /common/logo.svg  828w,
                            /common/logo.svg 1080w,
                            /common/logo.svg 1200w,
                            /common/logo.svg 1920w,
                            /common/logo.svg 2048w,
                            /common/logo.svg 3840w
                        "
                        src="/common/logo.svg"
                        decoding="async"
                        data-nimg="responsive"
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
                    </noscript>
                    </span>
                </Link>
                <div className={styles.xhkkcn}>
                    <div className={styles.menu}>
                    <nav>
                        <ul className={styles.nav}>
                            <li className={styles.pcHidden}>
                                <Link href="/" className={styles.bzknke}>トップ</Link>
                            </li>
                            <li>
                                <Link href="/company" className={styles.bzknke}>COVERについて</Link>
                            </li>
                            <li>
                                <Link href="/business" className={styles.bzknke}>事業</Link>
                            </li>
                            <li>
                                <Link href="/news" className={styles.bzknke}>ニュース</Link>
                            </li>
                            <li>
                                <Link href="/recruit" className={styles.bzknke}>採用</Link>
                            </li>
                            <li>
                                <Link href="/ir" className={styles.bzknke}>IR</Link>
                            </li>
                            <li>
                                <Link href="/promotion" className={styles.bzknke}>プロモーション</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.menu_sub}>
                        <div className={styles.m0fzyp}>
                        <div>
                            <Link href="/recruit/future" className={styles.iw6pan}>私たちの未来展望</Link>
                        </div>
                        <div>
                            <Link className={`spHidden ${styles.contact}`} href="/contact">お問い合わせ</Link>
                        </div>
                        </div>
                        <Link className={`pcHidden ${styles.contact}`} href="/contact">お問い合わせ</Link>
                    </div>
                    </div>
                    <div className={styles.mqnaq6}>
                    <nav>
                        <ul className={styles.nmoko4}>
                        <li>
                            <Link
                            href="https://hololivepro.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >ホロライブプロダクション公式サイト</Link>
                        </li>
                        <li>
                            <Link
                            href="https://hololive.hololivepro.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >hololive（ホロライブ）公式サイト</Link>
                        </li>
                        <li>
                            <Link
                            href="https://holostars.hololivepro.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >HOLOSTARS（ホロスターズ）公式サイト</Link>
                        </li>
                        <li>
                            <Link
                            href="https://alt.hololive.tv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >ホロライブ・オルタナティブ</Link>
                        </li>
                        <li>
                            <Link
                            href="https://holoearth.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >ホロアース 公式サイト</Link>
                        </li>
                        </ul>
                        <ul className={styles.a13hdp5x}>
                        <li>
                            <Link href="/privacy">プライバシーポリシー</Link>
                        </li>
                        <li>
                            <Link
                            href="https://hololivepro.com/terms/"
                            className="-hasIcon"
                            target="_blank"
                            rel="noopener noreferrer"
                            >二次創作ガイドライン</Link>
                        </li>
                        <li>
                            <Link
                            href="https://hololivepro.com/request-to-minors/"
                            className="-hasIcon"
                            target="_blank"
                            rel="noopener noreferrer"
                            >未成年の方々へのお願い</Link>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                    <div className={styles.a1s5lcum}>
                        <div className={styles.noe7qe}>
                            <form className={styles.jadyh0}>
                                <fieldset className={styles.a49aokf}>
                                <div className={styles.r16bb7}>
                                    <input
                                    type="radio"
                                    name="lang"
                                    id="footer-ja"
                                    value="ja"
                                    className="styles.144qfr8"
                                    />
                                    <label for="footer-ja" className={styles.z23znw}>JP</label>
                                </div>
                                <div className={styles.r16bb7}>
                                    <input
                                    type="radio"
                                    name="lang"
                                    id="footer-en"
                                    value="en"
                                    className="styles.144qfr8"
                                    />
                                    <label for="footer-en" className={styles.z23znw}>EN</label>
                                </div>
                                </fieldset>
                            </form>
                            <div className={styles.r2ksbu}>
                                <Link
                                href="https://twitter.com/cover_corp"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>
                                    <span
                                    style={{
                                        boxSizing: 'border-box',
                                        display: 'inline-block',
                                        overflow: 'hidden',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: 'relative',
                                        maxWidth: '100%',
                                    }}
                                    >
                                    <span
                                        style={{
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        maxWidth: '100%',
                                        }}
                                    >
                                    <Image
                                        width="21"
                                        height="21"
                                        style={{
                                            display: 'block',
                                            maxWidth: '100%',
                                            width: 'initial',
                                            height: 'initial',
                                            background: 'none',
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                        }}
                                        alt=""
                                        aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2721%27%20height=%2721%27/%3e"
                                        />
                                    </span>
                                    <Image
                                        alt="X"
                                        width="21"
                                        height="21"
                                        srcset="/common/logo-x.svg 1x, /common/logo-x.svg 2x"
                                        src="/common/logo-x.svg"
                                        decoding="async"
                                        data-nimg="intrinsic"
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
                                    />
                                    </span>
                                </span>
                                </Link>
                                <Link
                                href="https://jp.linkedin.com/company/cover-corp"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>
                                    <span
                                    style={{
                                        boxSizing: 'border-box',
                                        display: 'inline-block',
                                        overflow: 'hidden',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: 'relative',
                                        maxWidth: '100%',
                                    }}
                                    >
                                    <span
                                        style={{
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        width: 'initial',
                                        height: 'initial',
                                        background: 'none',
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        maxWidth: '100%',
                                        }}
                                    >
                                    <Image
                                        width="21"
                                        height="21"
                                        style={{
                                            display: 'block',
                                            maxWidth: '100%',
                                            width: 'initial',
                                            height: 'initial',
                                            background: 'none',
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                        }}
                                        alt=""
                                        aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2722%27/%3e"
                                        />
                                    </span>
                                    <Image
                                        alt="linkedin"
                                        width="21"
                                        height="21"
                                        src="/common/icon-linkedin.png"
                                        decoding="async"
                                        data-nimg="intrinsic"
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
                                    />
                                    </span>
                                </span>
                                </Link>
                            </div>
                        </div>
                        <p className={styles.ad3wfl}>© 2016 COVER Corp.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}