import React from "react";
// pass list of categories from App
function CategoryFilter({onButton,selectedButton,categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* update the component to dsplay button elements */}
        {categories.map((category,index)=>(
        <button
         className={onButton===category?'selected':''}
         key={index}
         onClick={()=>{selectedButton(category)}}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;