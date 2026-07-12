import Header from "./components/Header";
import Kart from "./components/Yemekkarti";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Header />
      <Container>
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
            ]} />
      </Container>
    </div>
  );
}

export default App;