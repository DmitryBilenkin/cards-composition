import cards from './data/cards';
import Cards from './components/Cards/Cards';
import Card from './components/Card/Card'
import CardWithImage from './components/CardWithImage/CardWithImage';
import CardWithoutImage from './components/CardWithoutImage/CardWithoutImage';
import './App.css';


function App() {
    return (
      <div className="App">
        <Cards>
          {cards.map(card =>

            card.img ?
              <Card>
                <CardWithImage img={card.img} title={card.title} text={card.text} />             
              </Card>
            : 
              <Card>
                <CardWithoutImage title={card.title} text={card.text} />
              </Card>
          )} 

        </Cards>
      </div>
    );
};

export default App;
