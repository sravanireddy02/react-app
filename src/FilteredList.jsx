import React, { useState } from "react";
import "./dropdown.css"; // Import your CSS file for styling

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("fruit"); // Default to "fruit"
  const [isOpen, setIsOpen] = useState(false);

  // Hardcoded produce items (for demonstration)
  const produceItems = [
    { name: "Apple", type: "fruit" },
    { name: "Banana", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Grapes", type: "fruit" },
    { name: "Lettuce", type: "vegetable" },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filteredItems = produceItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm);
    const matchesType = selectedType === "all" || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="form-container">
      <div className="container">
        <h1>Produce Search</h1>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="all"
              checked={selectedType === "all"}
              onChange={() => handleTypeChange("all")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="fruit"
              checked={selectedType === "fruit"}
              onChange={() => handleTypeChange("fruit")}
            />
            Fruit
          </label>
          <label>
            <input
              type="radio"
              value="vegetable"
              checked={selectedType === "vegetable"}
              onChange={() => handleTypeChange("vegetable")}
            />
            Vegetable
          </label>
        </div>
        <div className="dropdown-container">
          <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
            Type:{" "}
            {selectedType === "all"
              ? "All"
              : selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
            <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <label>
                <input
                  type="radio"
                  value="all"
                  checked={selectedType === "all"}
                  onChange={() => handleTypeChange("all")}
                />
                All
              </label>
              <label>
                <input
                  type="radio"
                  value="fruit"
                  checked={selectedType === "fruit"}
                  onChange={() => handleTypeChange("fruit")}
                />
                Fruit
              </label>
              <label>
                <input
                  type="radio"
                  value="vegetable"
                  checked={selectedType === "vegetable"}
                  onChange={() => handleTypeChange("vegetable")}
                />
                Vegetable
              </label>
            </div>
          )}
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul className="produce-list">
          {filteredItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
