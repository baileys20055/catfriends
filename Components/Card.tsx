import React from 'react';
import Image from 'next/image';

type Props = { id: number; name: string; email: string };

export default function Card({ id, name, email }: Props) {
  return (
    <div className='prose m-2 mt-4 inline-block h-[22rem] w-72 rounded-md bg-[#9eebcf] p-4 text-center shadow-md transition duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:scale-105'>
      <Image
        src={`https://robohash.org/${id}?set=set4&200x200`}
        width={200}
        height={200}
        className='m-0 inline-block'
        alt='cats'
        priority={true}
      />
      <div>
        <h2 className='prose-h2 text-wrap my-5'>{name}</h2>
        <p className='my-4'>{email}</p>
      </div>
    </div>
  );
}
