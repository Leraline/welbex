import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Background from './components/background/Background';
import { useEffect, useState } from 'react';

function App() {

  const desktopNav = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"];
  const mobileNav = ["Услуги", "Виджеты", "Интеграции", "Кейсы"];

  const [isMobile, setIsMobile] = useState(false)
 

const handleViewport = () => {
  if (window.innerWidth < 600) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

useEffect(() => {
  window.addEventListener("resize", handleViewport)
})

  return (
    <Background>
      <div className="App">
        <Header navigation={isMobile ? mobileNav : desktopNav}></Header>
        <Main />
        <Footer />
      </div>
    </Background>

  );
}

export default App;
