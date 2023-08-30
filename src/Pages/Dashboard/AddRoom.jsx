import React, { useContext, useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomFrom';
import { imageUpload } from '../../api/utils';
import { AuthContext } from '../../providers/AuthProvider';
import { addRoom } from '../../api/room';


const AddRoom = () => {
    const {user} = useContext(AuthContext);
    const [loading,setLoading] = useState(false);
    //date rages
    const [dates, setDates] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
    
    const handleSubmit = e => {
      e.preventDefault();
      const location = e.target.location.value;
      const title = e.target.title.value;
      const from = dates.startDate;
      const to = dates.endDate;
      const price = e.target.price.value;
      const guest = e.target.guest.value;
      const bedrooms = e.target.bedrooms.value;
      const bathrooms = e.target.bathrooms.value;
      const description = e.target.description.value;
      const category = e.target.category.value;
      const image = e.target.image.files[0];
      imageUpload(image)
      .then(data=>{
        const roomData = {
          location,
          title,
          from,
          to,
          price: parseFloat(price),
          guest,
          bedrooms,
          bathrooms,
          description,
          category,
          image: data.data.display_url,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        // get add room function from api/Room.js
        addRoom(roomData);
        console.log(roomData);
        setLoading(false);
      })
      .catch(err=>console.log(err.message))
      setLoading(false)
    };

    const handleImageChange = image => {
      setUploadButtonText(image.name);
    }
    
    // date ranges
    const handleDates = ranges => {
      setDates(ranges.selection);
    }

    return (
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
      />
    );
};

export default AddRoom;