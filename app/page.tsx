'use client';
import CardList from '@/components/CardList';
import { cats, Cat } from '@/components/Cats';
import SearchBox from '@/components/SearchBox';
import { useState, useEffect } from 'react';

export default function Home() {
  const [catList, setCats] = useState<Array<Cat>>([]);
  const [searchField, setSearchField] = useState<string>('');

  const onSearchChange = (event: any): void => {
    setSearchField(event.target.value);
  };

  const filteredCats = catList.filter((cat: Cat) => {
    if (cat.name.length > 20 || cat.email.length > 22) {
      cat.name = cat.name.substring(0, 20);
      cat.email = cat.email.substring(0, 20);
    }
    return cat.name.toLowerCase().includes(searchField.toLocaleLowerCase());
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          console.log('Fetched Data');
          return response.json();
        }
        setCats(cats);
      })
      .then((users) => setCats(users));
  }, []);

  return !catList.length ? (
    <h1 className='m-8 text-center text-3xl'>Loading...</h1>
  ) : (
    <main className='text-center'>
      <h1 className='m-8 text-5xl'>CatFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <div className='grid auto-rows-fr text-center'>
        <CardList cats={filteredCats} />
      </div>
    </main>
  );
}
