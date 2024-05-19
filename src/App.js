// src/App.js
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import product from './product';
import { Card } from 'react-bootstrap';

function App() {
  const firstName = "Votre prénom";

  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image image={product.image} />
        </Card.Body>
      </Card>
      <p>Bonjour, {firstName ? firstName : "là"}!</p>
      {firstName && <img src="chemin/vers/votre/image.jpg" alt="Votre photo" />}
    </div>
  );
}

export default App;
