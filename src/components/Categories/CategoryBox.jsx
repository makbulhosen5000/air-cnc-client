import React from 'react';
import qs from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({label,icon:Icon}) => {
    const [params,setParams] = useSearchParams();
    const value = params.get('category');
    const navigate = useNavigate();
    const handleClick =()=>{
      let currentQuery = {}
      if(params){
        currentQuery = qs.parse(params.toString())
      }
      const updateQuery = {
        ...currentQuery,
        category:label,
      };
      const url = qs.stringifyUrl(
        {
        url: "/",
        query: updateQuery,
      },
      {skipNull:true}
      )
      navigate(url)
    }
    console.log(value);

    return (
      <div 
       onClick={handleClick}
       className="flex cursor-pointer flex-col items-center justify-center p-3 gap-2 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
        <Icon size="26" />
        <div className="text-sm font-medium">{label}</div>
      </div>
    );
};

export default CategoryBox;