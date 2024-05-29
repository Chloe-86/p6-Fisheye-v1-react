import React from 'react';
import jsonData from '../data/data.json';
import { Link } from 'react-router-dom'; 
import '../styles/list.css'
import '../styles/banner.css'

const List = () => {
  return (
    <div>
      <ul className="grid-container">
        {jsonData.map((item, index) => (
          <li className='grid-item' key={index}>
            <article className="card">
              <Link className="wrapper" to={`../pages/${item.id}`}>
                <img src={item.cover} alt={item.title} />
                <p>{item.title}</p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

