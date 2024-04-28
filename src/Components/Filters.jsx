import React from 'react'


function Filters({filter,setFilter,FILTERS}) {
  return (<>
        <h1 className='font-bold text-2xl my-2 text-center text-white'>Filter</h1>
      <div className='w-full flex flex-wrap justify-center mx-4 gap-2'>
        <SelectBox filter={filter} label="Language" setFilter={setFilter} key={1} name="lang" options={FILTERS.LANGS}/>
        <SelectBox filter={filter} label="Country" setFilter={setFilter} key={2} name="country" options={FILTERS.COUNTRIES}/>
        <SelectBox filter={filter} label="Genre" setFilter={setFilter} key={3}  name="genre" options={FILTERS.GENRES}/>       
     </div>
    </>
  )
}

export default Filters

function SelectBox({filter, setFilter,name,label, options=[]}) {
    return <select className='p-2 px-4 rounded shadow' value={filter[name] ? filter[name] : ""} onChange={(e) => {
        const val = e.target.value ? e.target.value : null
        setFilter({ ...filter, [name]: val })
    } }>
        <option value={""}>Select {label}</option>
        {options.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
}
