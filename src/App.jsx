import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Lecturers from './pages/Lecturers';
import LecturerPage from './pages/LecturerPage';
import styles from './styles/App.module.css';

const PAGES = {
    about: About,
    contacts: Contacts,
    lecturers: Lecturers,
};

function App() {
    const [currentSection, setCurrentSection] = useState('home');
    const [selectedLecturerId, setSelectedLecturerId] = useState(null);

    const handleNavigate = (section) => {
        setSelectedLecturerId(null);
        setCurrentSection(section);
    };

    const renderContent = () => {
        
        if (currentSection === 'home') {
            return <Home onFindLecturers={() => handleNavigate('lecturers')} />;
        }

        if (currentSection === 'lecturers') {
            return selectedLecturerId ? (
                <LecturerPage
                    lecturerId={selectedLecturerId}
                    onBack={() => setSelectedLecturerId(null)}
                />
            ) : (
                <Lecturers onSelect={setSelectedLecturerId} />
            );
        }

        const CurrentPage = PAGES[currentSection];
        return <CurrentPage />;
    };

    return (
        <div className={styles.app}>
            <Navbar currentSection={currentSection} onNavigate={handleNavigate} />
            <main className={styles.main}>{renderContent()}</main>
            <footer className={styles.footer}>
                &copy; 2025.
            </footer>
        </div>
    );
}

export default App;