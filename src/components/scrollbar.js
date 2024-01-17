import React, { useEffect } from 'react';

const ScrollProgressBar = () => {
  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="myBar" style={{ width: '0%', height: '4px', backgroundColor: '#4CAF50' }}></div>
  );
};

export default ScrollProgressBar;
