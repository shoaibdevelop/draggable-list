import { useState } from 'react';

const LocationList = () => {
  const initialData = [
    { id: '1', name: 'Scotland Island', location: 'Sydney, Australia', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'The Charles Grand Brasserie & Bar', location: 'Lorem ipsum, Dolor', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Bridge Climb', location: 'Dalor, Sit amet', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Bondi Beach', location: 'Sydney, Australia', image: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Clam Bar', location: 'Etcetera veni, Vidi vici', image: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Vivid Festival', location: 'Sydney, Australia', image: 'https://via.placeholder.com/150' }
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
      <h2 className="text-xl font-bold mb-4">Locations</h2>
      <ul>
        {locations.map((location) => (
          <li
            key={location.id}
            draggable
            onDragStart={(e) => handleDragStart(e, location.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, location.id)}
            className="bg-gray-200 p-2 mb-2 flex items-center"
          >
            <img src={location.image} alt={location.name} className="mr-2 w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-semibold">{location.name}</h3>
              <p className="text-gray-600">{location.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
