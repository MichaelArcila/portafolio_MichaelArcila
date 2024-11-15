import React from 'react';

const LogrosVirtudes = () => {
  const handleCelebrate = () => {
    
    alert( "🎉🎉🎉🎉"); 
  };

  return (
    <section>
      <h2>Mis logros y virtudes</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta sem eget neque sodales faucibus. 
        Curabitur eget leo ut turpis porttitor dictum convallis porta ligula. Proin feugiat nisi orci, ac placerat metus dapibus at. 
        Vivamus in ex mattis tortor maximus commodo eu non augue. Nullam dignissim est ac mauris rutrum, eget lacinia tellus sodales. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin id imperdiet massa. 
        Proin tincidunt sagittis purus, eu mattis ante imperdiet eget. Etiam sodales turpis in erat suscipit rutrum ac vitae lacus. 
        Nunc in quam condimentum, faucibus metus in, porta sapien. Praesent ornare dictum laoreet.
        Fusce in erat at ipsum dictum pulvinar id at quam. Curabitur vel felis diam. Fusce dictum volutpat metus, quis hendrerit ipsum fringilla eu. 
        Fusce venenatis eget neque sit amet suscipit. Aliquam venenatis, ligula ac sagittis luctus, urna tortor iaculis arcu, nec pharetra tellus ligula condimentum tellus. 
        Donec non arcu ac diam elementum malesuada. Sed eu ligula eu arcu porttitor eleifend. Maecenas ut erat sit amet elit semper tincidunt vel at nisi.</p>
      <button onClick={handleCelebrate} className='custom-btn'>
        ⚽️ Celebrar
      </button>
    </section>
  );
};



export default LogrosVirtudes;
