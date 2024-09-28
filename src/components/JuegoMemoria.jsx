import { useState } from 'react';

const cardsData = ['🍎', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍍'];
const shuffledCards = [...cardsData, ...cardsData].sort(() => Math.random() - 0.5);

export default function JuegoMemoria() {
  const [cards, setCards] = useState(shuffledCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        setMatchedCards([...matchedCards, first, second]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div>
      <h2>Juego de Memoria</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '10px', justifyContent: 'center' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: flippedCards.includes(index) || matchedCards.includes(index) ? '#fff' : '#333',
              color: flippedCards.includes(index) || matchedCards.includes(index) ? '#000' : '#333',
              fontSize: '24px',
              cursor: 'pointer',
              borderRadius: '10px',
            }}
          >
            {flippedCards.includes(index) || matchedCards.includes(index) ? card : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
}
