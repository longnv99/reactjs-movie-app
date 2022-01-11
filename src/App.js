import 'swiper/scss';
import 'swiper/scss/navigation';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import RoutesConfig from './routes/RoutesConfig';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <RoutesConfig />
            <Footer />
        </BrowserRouter>
      );
}

export default App;
