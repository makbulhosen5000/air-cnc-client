import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Card from './Card';
import Loader from '../Shared/Loader';
import { useSearchParams } from 'react-router-dom';
import { MdRecommend } from 'react-icons/md';
import Heading from '../Heading/Heading';
import { getAllRooms } from '../../api/room';

const Rooms = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    const [rooms,setRooms] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      // get all rooms function from api/Room.js
      getAllRooms()
        .then((data) => {
          if (category) {
            const filtered = data.filter((room) => room.category === category);
            setRooms(filtered);
          }else{
              setRooms(data);
          }
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, [category]);

    if (loading) {
      return (
        <p>
          <Loader />
        </p>
      );
    }

    return (
      <Container>
        {rooms && rooms.length ? (
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {rooms.map((room) => (
              <Card room={room} />
            ))}
          </div>
        ) : (
          <div className="pt-12">
            <Heading
              title="No rooms available in this category"
              subtitle="Please select other categories."
              center={true}
            ></Heading>
          </div>
        )}
      </Container>
    );
};

export default Rooms;