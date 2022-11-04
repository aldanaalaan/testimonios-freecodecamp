import "./App.css";
import Testimonio from "./Components/Testimonio.jsx";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Testimonios de Practia:</h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          puesto="Ingeniero de Software"
          empresa="Amazon"
          texto="Mollit quis Lorem culpa amet do dolore et fugiat exercitation. Velit aute reprehenderit non sunt eu proident reprehenderit adipisicing. Velit eu sint aute occaecat nostrud enim sit dolore culpa Lorem dolor eu adipisicing sit. Magna eu deserunt culpa elit magna velit reprehenderit mollit aliquip."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          puesto="Ingeniera de Software"
          empresa="ChatDesk"
          texto="Consequat pariatur amet voluptate quis qui dolor. Labore laboris irure id id sint aliquip nulla. Culpa proident ex pariatur cillum nulla id nulla sunt ad sint eu et ea. Eu ex voluptate eu et eiusmod. Ipsum ad irure mollit nisi. Mollit incididunt ullamco laborum minim. Esse nulla eu sunt aliqua aute velit culpa."
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          puesto="Ingeniera de Software"
          empresa="Spotify"
          texto="Eiusmod consectetur aliquip consequat consequat amet ad culpa consequat ipsum dolor fugiat proident officia. Irure reprehenderit dolor cillum labore. Aute culpa sint fugiat ut do dolore nostrud veniam. Exercitation quis do voluptate et reprehenderit nisi ad velit ullamco magna magna nulla. Qui deserunt labore occaecat id tempor ullamco id magna ullamco ullamco."
        />
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
