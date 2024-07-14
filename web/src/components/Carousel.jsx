import React, { useState, useRef, useEffect } from 'react';

export const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const slideLeft = () => {
    const newPosition = Math.max(scrollPosition - 300, 0);
    setScrollPosition(newPosition);
    carouselRef.current.scrollTo({
      top: 0,
      left: newPosition,
      behavior: 'smooth',
    });
  };

  const slideRight = () => {
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const newPosition = Math.min(scrollPosition + 300, maxScroll);
    setScrollPosition(newPosition);
    carouselRef.current.scrollTo({
      top: 0,
      left: newPosition,
      behavior: 'smooth',
    });
  };

  const carouselContainerStyle = {
    position: 'relative',
    width: '100%',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const carouselStyle = {
    display: 'flex',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    width: '100%',
    padding: '10px 0',
  };

  const carouselItemStyle = {
    minWidth: '200px',
    margin: '0 10px',
    backgroundColor: '#2d2d2d',
    border: '2px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  };

  const arrowStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '2rem',
    color: '#ccc',
    cursor: 'pointer',
    zIndex: 1,
    width: '4rem',
    height: '3rem',
    alignItems: 'center',
    marginRight: '2rem'
  };

  const arrowsContainerStyle = {
    marginTop: '1rem',
  };

  return (
    <div style={carouselContainerStyle}>
      <div style={carouselStyle} ref={carouselRef}>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Drive.png" alt="Google Drive" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Google Drive</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Docx.png" alt="Google Docs" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Google Docs</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Gmail.png" alt="Gmail" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Gmail</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Planilhas.png" alt="Google Planilhas" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Google Planilhas</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Apresentações.png" alt="Google Apresentações" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Google Apresentações</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Classroom.png" alt="Google Classroom" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Google Classroom</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Segurança.png" alt="Segurança e Tecnologia" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Segurança e Tecnologia</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Excel.png" alt="Excel Iniciante" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Excel Iniciante</p>
        </div>
        <div style={carouselItemStyle}>
          <img src="../src/assets/Excel.png" alt="Excel Intermediário" />
          <p className="text-xl font-medium leading-8 text-gray-300 text-center">Excel Intermediário</p>
        </div>
      </div>
      <div style={arrowsContainerStyle}>
        <button style={arrowStyle} onClick={slideLeft}>
          &#10094;
        </button>
        <button style={arrowStyle} onClick={slideRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};