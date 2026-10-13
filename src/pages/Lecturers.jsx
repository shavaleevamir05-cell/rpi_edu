import LECTURERS from '../data/lecturers';
import styles from '../styles/Lecturers.module.css';

// onSelect — колбэк из App.jsx: сообщает, какого лектора открыть
function Lecturers({ onSelect }) {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.list}>
                {LECTURERS.map((l) => (
                    <div key={l.id} className={styles.card}>
                        <img src={l.photo} alt={l.name} className={styles.photo} />

                        <div className={styles.info}>
                            <h3 className={styles.name}>{l.name}</h3>
                            <p className={styles.role}>{l.role}</p>
                            <p className={styles.short}>{l.short}</p>
                        </div>

                        <button
                            className={styles.detailsBtn}
                            onClick={() => onSelect(l.id)}
                        >
                            Подробнее
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lecturers;