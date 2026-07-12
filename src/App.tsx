import Header from "./components/Header";
import Kart from "./components/Yemekkarti";

function App() {
  return (
    <div>
      <Header />
      <Kart 
        yemekAdi="Mantı" 
        pisirmeSuresi={2} 
        zorluk="Zor" 
        vejetaryan={false}
        malzemeler={[
        "Un",
        "Su",
        "Yumurta",
        "Tuz",
        "Kıyma",
        "Soğan",
        "Yoğurt"
        ]}/>
        <Kart 
        yemekAdi="Mercimek Çorbası"
        pisirmeSuresi={1}
        zorluk="Kolay"
        vejetaryan={true}
        malzemeler={[
          "Mercimek",
          "Soğan",
          "Havuç",
          "Su",
          "Tuz",
          "Biber"
        ]}/>
    </div>
  );
}

export default App;