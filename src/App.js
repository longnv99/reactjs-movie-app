import 'swiper/scss';
import 'swiper/scss/navigation';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import RoutesConfig from './routes/RoutesConfig';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { GlobalProvider } from './store/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Header />
                <RoutesConfig />
                <Footer />
            </BrowserRouter>
        </GlobalProvider>
      );
}

export default App;
