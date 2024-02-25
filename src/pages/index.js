import Heading01 from "@/components/heading01";
import Heading02 from "@/components/heading02";
import ViewMore from "@/components/viewMore";
import Breadcrumb from "@/components/breadcrumb";
import PageTop from "@/components/pagetop";
import IRMenu from "@/components/irMenu";
import IRPanel from "@/components/irPanel";
import utils from '@/styles/utils.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Heading01 />
      <div className={`contents irTop ${utils.ftwb0b}`}>
        <section>
          <div className={`is-mbsm ${utils.spaceBetween}`}>
            <div>
              <Heading02 en="IR News" jp="IRニュース" />
            </div>
            <div>
              <ViewMore url="/ir/news" />
            </div>
          </div>
          <div class="css-0">
            <ul id="xj-mainlist" class="css-0 xj-list xj-list__irnews">
              <li class="css-mqnptn xj-list__col"><a href="https://finance.logmi.jp/articles/379146" target="_blank" class="css-1n4410e"><time datetime="2024.02.29" class="css-1rcpqza xj-list__date">2024.02.29</time><span class="css-8hukbe xj-list__label icon_ir">IR資料</span><div class="css-1wufuga xj-list__title"><p>2024年３月期 第３四半期 決算説明会 書き起こし（ログミーファイナンス掲載）<span class="xj-list__icon-blank"></span></p></div></a></li>
              <li class="css-mqnptn xj-list__col"><a href="https://contents.xj-storage.jp/xcontents/AS05169/1a2b7582/f1a7/4231/a767/1d038c4a1081/S100SSHV.pdf" target="_blank" class="css-1n4410e"><time datetime="2024.02.08" class="css-1rcpqza xj-list__date">2024.02.08</time><span class="css-8hukbe xj-list__label icon_legal">有報</span><div class="css-1wufuga xj-list__title"><p>四半期報告書－第8期第3四半期(2023/10/01－2023/12/31)<span class="xj-list__icon-pdf">（94KB）</span></p></div></a></li>
              <li class="css-mqnptn xj-list__col"><a href="https://contents.xj-storage.jp/xcontents/AS05169/a4730530/c503/496f/b429/ceb21d6412c7/140120240208530150.pdf" target="_blank" class="css-1n4410e"><time datetime="2024.02.08" class="css-1rcpqza xj-list__date">2024.02.08</time><span class="css-8hukbe xj-list__label icon_result">決算</span><div class="css-1wufuga xj-list__title"><p>2024年３月期 第３四半期決算短信〔日本基準〕（非連結）<span class="xj-list__icon-pdf">（224KB）</span></p></div></a></li>
              <li class="css-mqnptn xj-list__col"><a href="https://contents.xj-storage.jp/xcontents/AS05169/5fa27c47/40da/4d42/890e/c5502988e1c4/140120240208530198.pdf" target="_blank" class="css-1n4410e"><time datetime="2024.02.08" class="css-1rcpqza xj-list__date">2024.02.08</time><span class="css-8hukbe xj-list__label icon_discro">適時開示</span><div class="css-1wufuga xj-list__title"><p>通期業績予想の修正に関するお知らせ<span class="xj-list__icon-pdf">（254KB）</span></p></div></a></li>
            </ul>
          </div>
          <IRPanel />
        </section>
        <section className={utils.cf5vac}>
          <div className={`is-mbsm ${utils.spaceBetween}`}>
            <div>
              <Heading02 en="IR Calendar" jp="IRカレンダー" />
            </div>
            <div>
              <ViewMore url="/ir/calendar" />
            </div>
          </div>
          <p className={utils.r4a87y}>
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
                  width="1120"
                  height="740"
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
                  src="/img-07.webp"
                />
              </span>
              <Image
                alt=""
                width="1120"
                height="740"
                src="/img-07.webp"
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
          </p>
        </section>
      </div>
      <IRMenu />
      <Breadcrumb />
      <PageTop />
    </>
  )
}