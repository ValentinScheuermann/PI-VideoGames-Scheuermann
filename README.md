# PI-VideoGames-Scheuermann
Repo PI VideoGames

Delete
//createvideogames.js
// DELETE // http://localhost:3001/videogame/:id
// Elimina un videojuego por su ID
// EJEMPLO -->  http://localhost:3001/videogame/9516f49d-da52-48fe-ae37-f65ac1b9a7a1
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Buscar el videojuego por su ID
    const gameToDelete = await Videogame.findByPk(id);

    // Verificar si el videojuego existe
    if (!gameToDelete) {
      return res.status(404).json({ error: 'El videojuego no existe' });
    }

    // Eliminar el videojuego de la base de datos
    await gameToDelete.destroy();

    res.status(200).json({ message: 'El videojuego se ha eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el videojuego' });
  }
});
module.exports = router;



FRONT
//actions/index.js

export function deleteVideogame(id) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogame/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "DELETE_VIDEOGAME",
          payload: json,
        });
      });
}


//reducer
    case "DELETE_VIDEOGAME":
      const updatedVideogames = state.videogames.filter(
        (game) => game.id !== action.payload.id
      );
      return {
        ...state,
        videogames: updatedVideogames,
      };

//GameDetails.js

<!-- import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById, deleteVideogame } from "../../actions/index";
import NotFound from "../../components/NotFound/NotFound";
import "./GameDetail.css";

function GameDetail({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const videogame = useSelector((store) => store.searchVideogameById);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getVideogameById(id));
  }, [id, dispatch]);

  const handleDeleteGame = () => {
    if (user && videogame.source === "Created") {
      dispatch(deleteVideogame(videogame.id));
      // Redirigir al usuario después de eliminar el juego
      history.push("/home");
    }
  };

  return (
    <div className="full">
      <Link to="/home">
        <button className="button" type="submit">
          🡸
        </button>
      </Link>
      <div className="info">
        <div className="image">
          {videogame.image === null || !videogame.image ? (
            <NotFound image={"noimage"} />
          ) : (
            <img src={videogame.image} alt={videogame.name} />
          )}
          <div>
            <h1>{videogame.name} </h1>
            <h5>({videogame.released})</h5>
          </div>
        </div>
        <div className="details">
          <div className="text">
            <h2>About this game:</h2>
            <p>{videogame.description}</p>
          </div>
          <div className="Genres">
            <div className="genres">
              It's an {videogame.genres} game ranked at {videogame.rating} points.
            </div>
          </div>
          <div className="Platforms">
            <div className="platforms">
              <p>Play it at {videogame.platforms}.</p>
            </div>
          </div>
        </div>
      </div>
      {user && videogame.source === "Created" && (
        <button className="eliminar" type="button" onClick={handleDeleteGame}>
          DELETE
        </button>
      )}
      <Link to="/home">
        <button className="button" type="submit">
          🡸
        </button>
      </Link>
    </div>
  );
}

export default GameDetail; -->
