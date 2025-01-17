import React, { useState, useRef } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from 'react-bootstrap';

const ItemsSlider = ({ title, children }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollBy({
      left: shift,
      behavior: 'smooth'
    });

    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <Container fluid className='my-3 py-3 item-slider-container'>
      <h4 className='px-3 mb-3 item-title'>ALL PRODUCTS</h4>
        {/* <div className="right">
            <div className="btn search">
              Search
              <i className="fas fa-search"></i>
            </div>
          </div> */}
      <div className='item-slider'>
        <div onClick={() => slide(-100)} className={`left-arrow-left ${(scrollX < 1) ? 'is-disabled-hide' : ''}`}>
          <MdArrowBackIos size="70px" />
        </div>
        <div ref={scrl} onScroll={scrollCheck} className="item-container">
          {children.map((child, index) => (
            <div key={index} className="item-wrapper">
              <img src={child.props.image} alt={child.props.alt} />
              {child}
            </div>
          ))}
        </div>
        <div className={`right-arrow-right ${(!scrollEnd) ? '' : 'is-disabled-hide'}`} onClick={() => slide(+100)}>
          <MdArrowForwardIos size="70px" />
        </div>
      </div>
    </Container>
  );
};

export default ItemsSlider;
