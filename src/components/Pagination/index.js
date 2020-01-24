import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";
import { useHistory } from "react-router-dom";

export default function Pagination({ props, currentPage }) {
  const [pageNumbers, setPageNumbers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getNumbers = async () => {
      let maxPages = await api.get("/post/pageNumbers");
      maxPages = maxPages.data.data;

      let n = [];
      for (let i = 1; i <= maxPages; i++) {
        n.push(i);
      }

      setPageNumbers(n);
    };

    getNumbers();
  }, []);

  console.log(currentPage);

  function changePage(page) {
    history.push(`/${page}`);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pageNumbers.map(page => (
          <li key={page} className="page-item">
            {page == currentPage ? (
              <button href="#" onClick={() => {return false}} className="current">
                {page.toString()}
              </button>
            ) : (
              <button href="#" onClick={()=>{changePage(page)}}>{page.toString()}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
