import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css';

export default function Search() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? '');
  }, [searchTerm]);

  const search = async () => {
    term ? navigate('/search/' + term) : navigate('/');
  };
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search AR Food"
        onChange={e => {setTerm(e.target.value) && search()}}
        onKeyUp={e => e.key === 'Enter' && search()}
        defaultvalue={searchTerm}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
