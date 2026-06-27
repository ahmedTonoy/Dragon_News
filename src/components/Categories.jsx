import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold mb-5">All Category</h2>
      <div className="categories grid grid-cols-1 gap-2">
        {categories.map((category) => (
          <NavLink
            className="btn pl-10 justify-start bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
