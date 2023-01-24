import React from "react";

function CategoryFilter({categories,selectCategory,onCategory}) {
  const catButtons=categories.map((category)=>{
    const className= category ===selectCategory ? "selected":"null";
    return(
      <button
        key={category}
        className={className}
        onClick={()=>onCategory(category)}> {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
