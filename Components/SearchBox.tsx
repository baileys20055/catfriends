import React from 'react'

type Props = {searchChange: any}

export default function SearchBox({searchChange}: Props) {
  return (
    <>
    <input
    className='p-4 mb-4 border-[#9eebcf] text-black placeholder:text-slate-700 bg-blue-200 border-4'
    type="search"
    placeholder='Search cats...'
    onChange={searchChange}
    name='robot search'/>
    </>
  )
}