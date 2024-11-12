import React, { useEffect } from 'react'
import { useState } from 'react'
const Test2 = () => {
    const [brandsList, setBrandsList] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);  // for brand filtering
    const [selectedColors, setSelectedColors] = useState([]);  // for color filtering
    const [displayingData, setDisplayingData] = useState([]);
    const [colorList, setColorList] = useState([]);

    // Fetch data and set initial brand and color lists
    useEffect(() => {
        fetch("Products.json").then((data) => data.json()).then((res) => {
            setFetchedData(res);
            // Extract unique brands and colors
            let brands = [];
            let colors = [];
            res.forEach((product) => {
                brands.push(product.brand);
                colors.push(product.color);
            });
            setBrandsList(Array.from(new Set(brands)));  // unique brands
            setColorList(Array.from(new Set(colors)));   // unique colors
        });
    }, []);
    // Handle filtering for brands
    const handleBrandFilter = (event) => {
        if (event.target.checked) {
            setSelectedBrands([...selectedBrands, event.target.value]);
        } else {
            setSelectedBrands(selectedBrands.filter((brand) => brand !== event.target.value));
        }
    };
    // Handle filtering for colors
    const handleColorFilter = (event) => {
        if (event.target.checked) {
            setSelectedColors([...selectedColors, event.target.value]);
        } else {
            setSelectedColors(selectedColors.filter((color) => color !== event.target.value));
        }
    };

    // Filter data based on selected brands and colors
    useEffect(() => {
        let filteredData = fetchedData;
        // If any brand is selected, filter by selected brands
        if (selectedBrands.length > 0) {
            filteredData = filteredData.filter((item) => selectedBrands.includes(item.brand));
        }
        // If any color is selected, filter by selected colors
        if (selectedColors.length > 0) {
            filteredData = filteredData.filter((item) => selectedColors.includes(item.color));
        }

        setDisplayingData(filteredData);  // Update the displayed data
    }, [selectedBrands, selectedColors, fetchedData]);  // Re-run whenever selected filters or fetched data change

    return (
        <div>
            <div style={{ display: "flex", gap: "20px" }}>
                <div className='d-flex gap-3'>
                    <div>
                        <h1>Brands Lists</h1>
                        <div>
                            {brandsList.map((item, key) => (
                                <div key={key}>
                                    <input type="checkbox" id={item} value={item} onChange={handleBrandFilter} />
                                    <label htmlFor={item}>{item}</label>
                                </div>)
                            )
                            }
                        </div>
                        <h1>Color List</h1>
                        <div>
                            {colorList.map((item, key) => (
                                <div key={key}>
                                    <input type="checkbox" id={item} value={item} onChange={handleColorFilter} />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {displayingData.map((item) => (
                            <div key={item.id}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div >
    )
}

export default Test2