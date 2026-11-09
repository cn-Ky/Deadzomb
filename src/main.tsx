import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/game.css';
import './styles/extra.css';

// StrictMode kullanılmıyor: oyun motoru efektte bir kez kurulur ve dev'de çift
// çalıştırılması WebGL/Audio bağlamını iki kez oluşturur.
createRoot(document.getElementById('root')!).render(<App />);
