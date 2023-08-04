import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
      <>
        <Heading
          title="Veluvana Bail, Owl Bamboo House"
          subtitle="Sideman, Indonesia"
        ></Heading>
        <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
          <img src="https://i.ibb.co/sHcf1xN/apu.jpg" className='object-cover w-full' alt="header image" />
        </div>
      </>
    );
};

export default Header;