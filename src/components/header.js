import styles from '@/styles/header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div id="header" className={styles.header}>
                <header className={styles.inner}>
                    <div className={styles.cover}>
                        <Link className={styles.logo} href="/">
                        <div>
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
                                paddingTop: '21.487603305785125%',
                                }}
                            ></span>
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
                            />
                            </span>
                        </div>
                        </Link>
                        <div className={styles.nav}>
                            <ul className={styles.nav_list}>
                                <li>
                                <Link href="/company" className={styles.nav_list_item}>COVERについて</Link>
                                </li>
                                <li>
                                <Link href="/business" className={styles.nav_list_item}>事業</Link>
                                </li>
                                <li>
                                <Link href="/news" className={styles.nav_list_item}>ニュース</Link>
                                </li>
                                <li>
                                <Link href="/recruit" className={styles.nav_list_item}>採用</Link>
                                </li>
                                <li>
                                <Link href="/ir" className={styles.nav_list_item}>IR</Link>
                                </li>
                                <li>
                                <Link href="/promotion" className={styles.nav_list_item}>プロモーション</Link>
                                </li>
                            </ul>
                            <form className={`${styles['is-header']} ${styles.lang}`}>
                                <fieldset className={styles.fdset}>
                                <div className={styles.fdset_jpen}>
                                    <input
                                    type="radio"
                                    name="lang"
                                    id="header2-ja"
                                    value="ja"
                                    className="fdset_jpen_input"
                                    />
                                    <label for="header2-ja" className={styles.fdset_jpen_item}>JP</label>
                                </div>
                                <div className={styles.fdset_jpen}>
                                    <input
                                    type="radio"
                                    name="lang"
                                    id="header2-en"
                                    value="en"
                                    className="fdset_jpen_input"
                                    />
                                    <label for="header2-en" className={styles.fdset_jpen_item}>EN</label>
                                </div>
                                </fieldset>
                            </form>
                        </div>
                        <button className={styles.buttton01}>
                        <span>
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
                                    paddingTop: '93.75%',
                               }}
                            ></span>
                            <Image
                                alt="メニュー"
                                sizes="100vw"
                                width="39"
                                height="36"
                                srcset="
                                /common/icon-menu-sp.svg  640w,
                                /common/icon-menu-sp.svg  750w,
                                /common/icon-menu-sp.svg  828w,
                                /common/icon-menu-sp.svg 1080w,
                                /common/icon-menu-sp.svg 1200w,
                                /common/icon-menu-sp.svg 1920w,
                                /common/icon-menu-sp.svg 2048w,
                                /common/icon-menu-sp.svg 3840w
                                "
                                src="/common/icon-menu-sp.svg"
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
                            </span>
                        </span>
                        </button>
                        <button className={styles.buttton02}>
                        <span>
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
                                paddingTop: '93.75%',
                                }}
                            ></span>
                            <Image
                                alt="メニュー"
                                sizes="100vw"
                                width="39"
                                height="36"
                                srcset="
                                /common/icon-menu-pc.svg  640w,
                                /common/icon-menu-pc.svg  750w,
                                /common/icon-menu-pc.svg  828w,
                                /common/icon-menu-pc.svg 1080w,
                                /common/icon-menu-pc.svg 1200w,
                                /common/icon-menu-pc.svg 1920w,
                                /common/icon-menu-pc.svg 2048w,
                                /common/icon-menu-pc.svg 3840w
                                "
                                src="/common/icon-menu-pc.svg"
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
                            </span>
                        </span>
                        </button>
                    </div>
                    <div className={styles.menu}>
                        <div className="main css-636bn5">
                        <div className="css-uqzg7w">
                            <div>
                            <nav className="css-0">
                                <ul className="css-1fy9q5g">
                                <li>
                                    <Link href="/" className="css-16bgvvg">Top</Link>
                                </li>
                                <li>
                                    <Link href="/company" className="css-16bgvvg">COVERについて</Link>
                                </li>
                                <li>
                                    <div className="css-1nlw5g9">
                                    <button className="spTabShow css-1261alx">事業</button>
                                    <div className="spTabHidden">
                                        <Link href="/business" className="css-1261alx">事業</Link>
                                    </div>
                                    <div className="css-1lsdr4b">
                                        <ul className="css-1xbpr7c">
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/business" className="css-ql939o">
                                                <span>事業TOP</span>
                                            </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/business/vtuber" className="css-ql939o"
                                                >VTuberプロダクション運営</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link
                                                href="/business/mediamix"
                                                className="css-ql939o"
                                                >メディアミックス</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link
                                                href="/business/metaverse"
                                                className="css-ql939o"
                                                >メタバース</Link>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/news" className="css-16bgvvg">ニュース</Link>
                                </li>
                                <li>
                                    <div className="css-1nlw5g9">
                                    <button className="spTabShow css-1261alx">採用</button>
                                    <div className="spTabHidden">
                                        <Link href="/recruit" className="css-1261alx">採用</Link>
                                    </div>
                                    <div className="css-1lsdr4b">
                                        <ul className="css-1xbpr7c">
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/recruit" className="css-ql939o">
                                                <span>採用TOP</span>
                                            </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link
                                                target="_blank"
                                                href="/recruit/newgraduate"
                                                className="css-1515rhh"
                                                >新卒・インターン</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/recruit/career" className="css-ql939o"
                                                >キャリア採用</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link
                                                href="/recruit/workstyle"
                                                className="css-ql939o"
                                                >はたらく環境</Link>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="css-1nlw5g9">
                                    <button className="spTabShow css-1261alx">IR</button>
                                    <div className="spTabHidden">
                                        <Link href="/ir" className="css-1261alx">IR</Link>
                                    </div>
                                    <div className="css-1lsdr4b">
                                        <ul className="css-1xbpr7c">
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir" className="css-ql939o">
                                                <span>IRトップ</span>
                                            </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/topMessage" className="css-ql939o"
                                                >トップメッセージ</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link
                                                href="/ir/corporateGovernance"
                                                className="css-ql939o"
                                                >コーポレート・ガバナンス</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/news" className="css-ql939o"
                                                >IRニュース</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/calendar" className="css-ql939o"
                                                >IRカレンダー</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/policy" className="css-ql939o"
                                                >ディスクロージャーポリシー</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/library" className="css-ql939o"
                                                >IRライブラリー</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/highlights" className="css-ql939o"
                                                >業績ハイライト</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link
                                                href="/ir/stockInformation"
                                                className="css-ql939o"
                                                >株式情報</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/qa" className="css-ql939o"
                                                >よくあるご質問</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link
                                                href="/ir/electronicPublicNotice"
                                                className="css-ql939o"
                                                >電子公告</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="css-92r0zk">
                                            <Link href="/ir/disclaimer" className="css-ql939o"
                                                >免責事項</Link>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/promotion" className="css-16bgvvg"
                                    >プロモーション</Link>
                                </li>
                                <li>
                                    <Link href="/recruit/future" className="css-16bgvvg"
                                    >私たちの未来展望</Link>
                                </li>
                                </ul>
                            </nav>
                            </div>
                            <div className="css-11duffp">
                            <Link href="/contact" className="css-11ft2dh">お問い合わせ</Link>
                            <Link href="/privacy" className="css-11ft2dh"
                                >プライバシーポリシー</Link>
                            </div>
                        </div>
                        </div>
                        <div className="footer css-1e6v6yg">
                        <Link className="css-217f3m" href="/">
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
                            />
                            </span>
                        </Link>
                        <form className="is-header lang">
                            <fieldset className="fieldset">
                            <div className={styles.fdset_jpen}>
                                <input
                                type="radio"
                                name="lang"
                                id="header-ja"
                                value="ja"
                                className="fdset_jpen_input"
                                />
                                <label for="header-ja" className={styles.fdset_jpen_item}>JP</label>
                            </div>
                            <div className={styles.fdset_jpen}>
                                <input
                                type="radio"
                                name="lang"
                                id="header-en"
                                value="en"
                                className="fdset_jpen_input"
                                />
                                <label for="header-en" className={styles.fdset_jpen_item}>EN</label>
                            </div>
                            </fieldset>
                        </form>
                        </div>
                    </div>
                    <button className={styles.button}>
                        <span className="css-1x89cvs">
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
                            {/* <Image
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
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2714%27%20height=%2714%27/%3e"
                            /> */}
                            </span>
                            {/* <Image
                            alt="閉じる"
                            srcset="
                                /common/icon-close-sp.svg 1x,
                                /common/icon-close-sp.svg 2x
                            "
                            src="/common/icon-close-sp.svg"
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
                            /> */}
                        </span>
                        </span>
                        <span className="css-1sinacs">
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
                            {/* <Image
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
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2734%27/%3e"
                            /> */}
                            </span>
                            {/* <Image
                            alt="閉じる"
                            srcset="
                                /common/icon-close-pc.svg 1x,
                                /common/icon-close-pc.svg 2x
                            "
                            src="/common/icon-close-pc.svg"
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
                            /> */}
                        </span>
                        </span>
                    </button>
                </header>
            </div>
        </>
    )
}