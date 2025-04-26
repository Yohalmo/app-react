import React from "react";
import { Recipe } from "../types";

interface Props {
    recipes: Recipe[];
    activeFilters: string[];
    setFilters: (filters: string[]) => void;
}

export const FilterPanel: React.FC<Props> = ({ recipes, activeFilters, setFilters }) => {
    const categories = Array.from(new Set(recipes.map((r) => r.publisher)));

    const toggleFilter = (category: string) => {
        if (activeFilters.includes(category)) {
            setFilters(activeFilters.filter((f) => f !== category));
        } else {
            setFilters([...activeFilters, category]);
        }
    };

    return (
        <div className="flex gap-2 flex-wrap mb-4">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-3 py-1 rounded border ${activeFilters.includes(category) ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                    onClick={() => toggleFilter(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};
