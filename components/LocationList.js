import { useState } from 'react';

const LocationList = () => {
  const initialData = [
    { id: '1', name: 'Scotland Island', location: 'Sydney, Australia', image: 'https://i.ibb.co/0f2F0qY/d-Top-Image-container-6.png' },
    { id: '2', name: 'The Charles Grand Brasserie & Bar', location: 'Lorem ipsum, Dolor', image: 'https://i.ibb.co/QbvqvXZ/d-Top-Image-container-5.png' },
    { id: '3', name: 'Bridge Climb', location: 'Dalor, Sit amet', image: 'https://i.ibb.co/gPWXg4n/d-Top-Image-container-3.png' },
    { id: '4', name: 'Vivid Festival', location: 'Sydney, Australia', image: 'https://i.ibb.co/SQtcCBX/d-Top-Image-container-1.png' },
    { id: '5', name: 'Clam Bar', location: 'Etcetera veni, Vidi vici', image: 'https://i.ibb.co/28h0B36/d-Top-Image-container.png' }
  ];

  



  const [locations, setLocations] = useState(initialData);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const handleDrop = (e, dropId) => {
    const dragId = e.dataTransfer.getData('id');
    const dragIndex = locations.findIndex((location) => location.id === dragId);
    const dropIndex = locations.findIndex((location) => location.id === dropId);
    const newLocations = [...locations];
    const [draggedLocation] = newLocations.splice(dragIndex, 1);
    newLocations.splice(dropIndex, 0, draggedLocation);
    setLocations(newLocations);
  };

  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li
            key={location.id}
            draggable
            onDragStart={(e) => handleDragStart(e, location.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, location.id)}
            className="bg-white p-2 mb-2 flex items-center"
          >
            <img src={location.image} alt={location.name} className="mr-4 w-16 h-16 rounded-md" />
            <div>
              <h3 className="text-[19px] leading-6 font-medium">{location.name}</h3>
              <p className="font-normal text-[17px] leading-[22px] text-[#aba9ae]">{location.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
