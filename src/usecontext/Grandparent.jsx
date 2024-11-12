import React, { createContext } from 'react'
import Parent from './Parent';
const DataContext = createContext();
const Grandparent = () => {
    const value = "Hello From Grand Parent";
    return (
        <DataContext.Provider value={value}>
            <div>
                <p className="text-2xl font-bold">This is Grand Parent</p>
                <Parent />
            </div>
        </DataContext.Provider>
    )
}
export default Grandparent;
export { DataContext };