import React from 'react';
import Heading from '../Heading/Heading';

const Header = ({roomData}) => {
    return (
      <>
        <Heading title={roomData?.title} subtitle={roomData?.location}></Heading>
        <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
          <img
            src={roomData?.image}
            className="object-cover w-full"
            alt="header image"
          />
        </div>
      </>
    );
};

export default Header;