import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFetchData } from "../../hooks/useFetchData";
import { useNotification } from "../../hooks/useNotification";
import { Recipe } from "../../types";
import { RecipeCard } from "../../components/RecipeCard";
import { FilterPanel } from "../../components/FilterPanel";

const Receta: React.FC = () => {
    const [favorites, setFavorites] = useState<Recipe[]>(
        () => JSON.parse(localStorage.getItem("favorites") || "[]")
    );
    const [filters, setFilters] = useState<string[]>([]);
    const { data: recipes, loading, error } = useFetchData<Recipe[]>(
        "https://forkify-api.herokuapp.com/api/search?q=pasta"
    );
    const { notify } = useNotification();

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (recipe: Recipe) => {
        const isFav = favorites.find((fav) => fav.recipe_id === recipe.recipe_id);
        if (isFav) {
            setFavorites(favorites.filter((fav) => fav.recipe_id !== recipe.recipe_id));
            notify("Receta removida de favoritos");
        } else {
            setFavorites([...favorites, recipe]);
            notify("Receta agregada a favoritos");
        }
    };

    const filteredRecipes = recipes?.filter((recipe) => {
        if (filters.length === 0) return true;
        return filters.includes(recipe.publisher);
    });

    return (
        <div className="p-4">
            <ToastContainer />
            <FilterPanel
                recipes={recipes || []}
                activeFilters={filters}
                setFilters={setFilters}
            />
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="row">
                {filteredRecipes?.map((recipe) => (
                    <RecipeCard
                        key={recipe.recipe_id}
                        recipe={recipe}
                        isFavorite={!!favorites.find((fav) => fav.recipe_id === recipe.recipe_id)}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
};

export default Receta;