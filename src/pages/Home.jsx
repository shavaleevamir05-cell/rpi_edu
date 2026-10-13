import styles from '../styles/Home.module.css';

// Hero-картинка
import heroImg from '../assets/hero.jpg';

// Логотипы партнёров
import partnerLeft from '../assets/partner-1.jpg';
import partnerRight from '../assets/partner-2.jpg';

// ⬇️⬇️⬇️ ВАШИ ДАННЫЕ О ПАРТНЁРАХ ⬇️⬇️⬇️
const PARTNERS = [
    {
        logo: partnerLeft,
        link: 'https://icl.ru/',
        text: 'ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России.',
    },
    {
        logo: partnerRight,
        link: 'https://tatneft.ru/',
        text: '«Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча.',
    },
];
// ⬆️⬆️⬆️ КОНЕЦ ДАННЫХ ⬆️⬆️⬆️

function PartnerCard({ logo, link, text }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partner}
        >
            <img src={logo} alt="Логотип партнёра" className={styles.partnerLogo} />
            <p className={styles.partnerText}>{text}</p>
        </a>
    );
}

function Home({ onFindLecturers }) {
    return (
        <div className={styles.pageContainer}>
            {/* 1. Hero: картинка + текст */}
            <div className={styles.hero}>
                <img
                    src={heroImg}
                    alt="Наши лекторы"
                    className={styles.heroImage}
                />
                <p className={styles.heroText}>
                    Наши лекторы — признанные специалисты в своих областях, готовые
                    делиться опытом и знаниями.
                </p>
            </div>

            {/* 2. Кнопка на всю ширину → ведёт на страницу лекторов */}
            <button className={styles.findBtn} onClick={onFindLecturers}>
                Найти лектора
            </button>

            {/* 3. Партнёры */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Наши партнёры</h2>
                <div className={styles.partners}>
                    {PARTNERS.map((p) => (
                        <PartnerCard key={p.link} {...p} />
                    ))}
                </div>
            </section>

            {/* 4. О нас */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>О нас</h2>
                <div className={styles.aboutText}>
                    <p>
                        Наша учебная платформа соединяет компании, образовательные
                        учреждения и НКО с профессиональными лекторами, спикерами и
                        тренерами.
                    </p>
                    <p>
                        Мы упрощаем процесс подбора, бронирования и организации л —екций,
                        помогая находить экспертов, которые не просто делятся знаниями,
                        но и вдохновляют аудиторию.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;