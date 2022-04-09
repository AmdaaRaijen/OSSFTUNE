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
              .typeString('OSIS SMA NEGRI')
              .pauseFor(100)
              .deleteChars(2)
              .typeString('ERI 1 GUBUG')
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
