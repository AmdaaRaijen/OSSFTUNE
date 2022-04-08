import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <div className="typeWriter">
      <h5>
        <Typewriter
          options={{
            wrapperClassName: 'text-light',
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('NEWEST ONLINE SHOP BY AMDA')
              .pauseFor(100)
              .deleteChars(4)
              .typeString('OSIS SMANSAGU')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </h5>
    </div>
  );
};

export default TypeWriter;
