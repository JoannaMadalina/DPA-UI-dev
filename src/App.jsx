import './App.css';
import HomeBanner from './Global components/HomeBanner';
import Navbar from './Global components/Navbar';

import React from 'react';
import { Card } from 'react-bootstrap';
import { BiGhost } from "react-icons/bi";
import ItemsSlider from "./Small components/ItemsSlider";

import Board from "./Pages/Board";

const App = () => {
  const topDealsItems = [
    { title: 'Item 1', weight: 10, image: 'item1.jpg', alt: 'Item 1' },
    { title: 'Item 2', weight: 20, image: 'item2.jpg', alt: 'Item 2' },
    { title: 'Item 3', weight: 30, image: 'item3.jpg', alt: 'Item 3' },
    // Add more items as needed
  ];

  return (
    <main>
      <Navbar />
      <HomeBanner />
      <ItemsSlider title="ALL PRODUCTS">
        {topDealsItems.map((item, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} alt={item.alt} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <span className='actual-weight'><BiGhost size={20}/> {item.weight}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </ItemsSlider>
      <Board />
    </main>
  );
};

export default App;