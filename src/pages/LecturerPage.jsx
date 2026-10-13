import LECTURERS from '../data/lecturers';
import styles from '../styles/LecturerPage.module.css';

function LecturerPage({ lecturerId, onBack }) {
    const lecturer = LECTURERS.find((l) => l.id === lecturerId);

    if (!lecturer) {
        return (
            <div className={styles.pageContainer}>
                <p>Лектор не найден.</p>
                <button className={styles.backBtn} onClick={onBack}>
                    ← Назад к списку
                </button>
            </div>
        );
    }

    const {
        name,
        role,
        photo,
        education,
        experience,
        degree,
        disciplines = [],
        prices = [],
    } = lecturer;

    return (
        <div className={styles.pageContainer}>
            <button className={styles.backBtn} onClick={onBack}>
                ← Назад к списку
            </button>

            <div className={styles.layout}>
                {/* Левая колонка: фото + имя */}
                <aside className={styles.sidebar}>
                    <img src={photo} alt={name} className={styles.photo} />
                    <h2 className={styles.name}>{name}</h2>
                    {role && <p className={styles.role}>{role}</p>}
                    <button className={styles.orderBtn} onClick={() => {}}>
                        Заказать
                    </button>
                </aside>

                {/* Правая колонка: блоки информации */}
                <div className={styles.content}>
                    {/* Блок: Образование / Стаж / Учёная степень */}
                    {(education || experience || degree) && (
                        <section className={styles.block}>
                            {education && (
                                <p className={styles.row}>
                                    <span className={styles.rowLabel}>Образование:</span>
                                    <span>{education}</span>
                                </p>
                            )}
                            {experience && (
                                <p className={styles.row}>
                                    <span className={styles.rowLabel}>Стаж:</span>
                                    <span>{experience}</span>
                                </p>
                            )}
                            {degree && (
                                <p className={styles.row}>
                                    <span className={styles.rowLabel}>Учёная степень:</span>
                                    <span>{degree}</span>
                                </p>
                            )}
                        </section>
                    )}

                    {/* Блок: Преподаваемые дисциплины */}
                    {disciplines.length > 0 && (
                        <section className={styles.block}>
                            <h3 className={styles.blockTitle}>Преподаваемые дисциплины:</h3>

                            {disciplines.map((d) => (
                                <div key={d.title} className={styles.discipline}>
                                    <h4 className={styles.disciplineTitle}>
                                        ● {d.title}
                                    </h4>
                                    {d.description && (
                                        <p className={styles.disciplineDesc}>— {d.description}</p>
                                    )}

                                    {d.topics && d.topics.length > 0 && (
                                        <ol className={styles.topics}>
                                            {d.topics.map((t, i) => (
                                                <li key={i} className={styles.topic}>
                                                    {t}
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Блок: Тарифы */}
                    {prices.length > 0 && (
                        <section className={styles.block}>
                            <h3 className={styles.blockTitle}>Тарифы:</h3>
                            <ul className={styles.prices}>
                                {prices.map((p) => (
                                    <li key={p.label} className={styles.priceItem}>
                                        <span>{p.label}</span>
                                        <span className={styles.priceValue}>{p.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LecturerPage;