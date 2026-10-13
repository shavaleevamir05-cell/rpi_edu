import styles from '../styles/Partners.module.css';


function Contacts() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.headerH1}>Контакты</h1>

      <div className={styles.contactsList}>
        {CONTACTS.map(({ label, value }) => (
          <div key={label} className={styles.contactItem}>
            <strong>{label}:</strong> {value}
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <p className={styles.noteText}>
          💡 <strong>Важно:</strong> Для связи лучше использовать Telegram —
          отвечаем быстрее всего!
        </p>
      </div>
    </div>
  );
}

export default Contacts;