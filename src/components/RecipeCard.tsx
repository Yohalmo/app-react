import React from "react";
import { Recipe } from "../types";

interface Props {
    recipe: Recipe;
    isFavorite: boolean;
    onToggleFavorite: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<Props> = ({ recipe, isFavorite, onToggleFavorite }) => {
    return (
        <div className="col-xl-3 col-md-4 col-sm-12">
            <div className="border rounded shadow p-4 mb-3">
                <img src={recipe.image_url} alt={recipe.title} className="col-12 mb-2 rounded" 
                style={{ maxHeight: '120px' }}/>
                <h4 className="font-semibold mb-2">{recipe.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{recipe.publisher}</p>
                <button
                    className={`btn ${isFavorite ? "btn-danger" : "btn-success"}`}
                    onClick={() => onToggleFavorite(recipe)}
                >
                    {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
                </button>
            </div>
        </div>
    );
};