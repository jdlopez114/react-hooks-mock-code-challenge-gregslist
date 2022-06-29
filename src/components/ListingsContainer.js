import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listings => setListings(listings))
  }, [])

  function handleDeleteListings(id) {
    const updatedListingArray = listings.filter((listing) => listing.id !== id);
      setListings(updatedListingArray)
  }

  const listingCards = listings.map((listObj => {
    return <ListingCard 
              key={listObj.id} 
              listing={listObj}
              onDeleteListing={handleDeleteListings}
            />
  }))

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
