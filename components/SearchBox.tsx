import React from 'react';

type Props = { searchChange: any };

export default function SearchBox({ searchChange }: Props) {
  return (
    <>
      <input
        className='mb-4 border-4 border-[#9eebcf] bg-blue-200 p-4 text-black placeholder:text-slate-700'
        type='search'
        placeholder='Search cats...'
        onChange={searchChange}
        name='robot search'
      />
    </>
  );
}
