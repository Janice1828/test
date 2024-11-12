import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Pagination = () => {
    const count = useSelector(state => state.counter.value)
    console.log("Pagination...")
    console.log(count)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            {/* <ul className="list-group mb-4">
                {currentItems.map((item) => (
                    <li key={item.id} className="list-group-item">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <small>{item.date}</small>
                    </li>
                ))}
            </ul> */}
            {/* <PaginationData
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
            /> */}
        </div>

    );
};

// Pagination Component
const PaginationData = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
