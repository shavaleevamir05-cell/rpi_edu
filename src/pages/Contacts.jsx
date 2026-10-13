import styles from '../styles/Contacts.module.css';


import logoLeft from '../assets/partner-1.jpg';
import logoRight from '../assets/partner-2.jpg';

const PARTNERS = [
  {
    logo: logoLeft,
    link: 'https://icl.ru/',
    text: 'ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС).',
},
  {
    logo: logoRight,
    link: 'https://tatneft.ru/',
    text: '«Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур.',
 },
];
function PartnerCard({ logo, link, text }) {
  return (
    <div className={styles.partner}>
      {/* Верхний ряд: логотип + кнопка ↗ */}
      <div className={styles.partnerTop}>
        <img
          src={logo}
          alt="Логотип партнёра"
          className={styles.partnerLogo}
        />

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.partnerLink}
          aria-label="Перейти на сайт партнёра"
          title="Перейти на сайт партнёра"
        >
          ↗
        </a>
      </div>

      {/* Подпись — под логотипом и стрелкой */}
      <p className={styles.partnerText}>{text}</p>
    </div>
  );
}

function Contacts() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.partners}>
        {PARTNERS.map((p) => (
          <PartnerCard key={p.link} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Contacts;