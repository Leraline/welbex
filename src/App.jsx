import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Background from './components/background/Background';

function App() {

  const navigation = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"];

  return (
    <Background>
      <div className="App">
        <Header navigation={navigation}></Header>
        <Main />
        <Footer />
      </div>
    </Background>

  );
}

export default App;
