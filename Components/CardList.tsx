import React from 'react';
import { Cat } from './Cats';
import Card from '@/components/Card';

type Props = { cats: Cat[] };

export default function CardList({ cats }: Props) {
  return (
    <div className='h-[800px] overflow-y-auto border-4 border-black'>
      {...cats.map((user, i) => {
        return (
          <Card
            key={cats[i].id}
            id={cats[i].id}
            name={cats[i].name}
            email={cats[i].email}
          />
        );
      })}
    </div>
  );
}
