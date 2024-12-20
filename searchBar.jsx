import { useState } from "react";
import FeaturedItemCard from "./FeaturedItemCard";

function SearchBar(props) {
    const [searchItem, setSearchItem] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showResults, setShowResults] = useState(false); // Track whether to show results
    const [currentSearch, setCurrentSearch] = useState("");

    const handleInputChange = (e) => { 
        setSearchItem(e.target.value); // Update search term as user types
        
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page

        if (searchItem.trim()) {
            const filteredItems = props.data.filter((dataItem) =>
                dataItem.title.toLowerCase().includes(searchItem.toLowerCase())
            );
            setFilteredUsers(filteredItems);
        } else {
            setFilteredUsers([]); // If search term is empty, clear the results
        }

        setShowResults(true); // Show results after submit
        setCurrentSearch(searchItem)
    };

    return (
        <div className="w-full border-b-2 border-gray-300">
            <form onSubmit={handleSubmit} className="border-b-2 border-gray-300 w-full pb-10 flex gap-10 justify-center items-center">
                <label className="font-bold">Search Product</label>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder="Type to search"
                    className="rounded-md w-96"
                />
                <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Submit</button>
                    
            </form>

            {showResults && (
                <>
                    <p className="flex gap-2 pt-7 flex-wrap justify-center mx-56 text-lg">
                        <span className="font-bold">Search Result:</span> {currentSearch}
                    </p>
                    <ul className="flex gap-12 py-10 flex-wrap justify-center mx-56">
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((dataItem) => (
                                <li className="w-[20%] ml-15 border-t-2" key={dataItem.id}>
                                    <FeaturedItemCard
                                        title={dataItem.title}
                                        src={dataItem.src}
                                        price={dataItem.price}
                                        pathBtn={dataItem.pathBtn}
                                    />
                                </li>
                            ))
                        ) : (
                            <p>No results found</p> // Show a message if no results are found
                        )}
                    </ul>
                </>
            )}
        </div>
    );
}

export default SearchBar;
