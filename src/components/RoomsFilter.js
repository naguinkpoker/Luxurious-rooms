import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
// Get all unique values
const getUnique =(items, value) => { 
    return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

// Get unique types
let types= getUnique(rooms,"type");
// Add all
types = ["all", ...types];
// Map to JSX
types = types.map((item, index) => {
    return <option key={index} value={item}>
            {item}
        </option>;
});
let people = getUnique(rooms,"capacity");
people = people.map((item, index) => {
    return (
        <option key={index} value={item}>
            {item}
        </option>
    );
})
return (
    <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
            {/* Select Type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select 
                    name="type" 
                    id="type" 
                    value={type}
                    className="form-control"
                    onChange={handleChange}
                >
                    {types}
                </select>
            </div>
            {/* End Select Type */}
            {/* Guest Type */}
            <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                >
                    {people}
                </select>
            </div>
            {/* End Guests Type  */}
            {/* RoomPrice */}
            <div className="form-group">
                <label htmlFor="price">
                    Room Price ${price}
                </label>
                <input 
                    type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price" 
                    value={price} 
                    onChange={handleChange} 
                    className="form-control" 
                />
            </div>
            {/* End of Room Price */}
            {/* Size */}
            <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input 
                        type="number" 
                        name="minSize" 
                        id="size" 
                        value={minSize} 
                        onChange={handleChange} 
                        className="size-input" 
                    />
                    <input 
                        type="number" 
                        name="maxSize" 
                        id="size" 
                        value={maxSize} 
                        onChange={handleChange} 
                        className="size-input" 
                    />
                </div>
            </div>
        {/* End of Size */}
    {/* Extras */}
    <div className="from-group">
        <div className="single-extra">
            <input 
                type="checkbox" 
                name="breakfast" 
                id="breakfast" 
                checked={breakfast}
                onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
        </div>
        <div className="single-extra">
            <input 
                type="checkbox" 
                name="pets" 
                id="pets" 
                checked={pets}
                onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
        </div>
    </div>
    {/* End of Extras */}
        </form>          
    </section>
    );
}