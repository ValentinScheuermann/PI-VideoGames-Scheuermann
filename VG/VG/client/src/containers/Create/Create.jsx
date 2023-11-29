import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVideogame, getGenres } from "../../actions/index";
import "./Create.css";

export default function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  const genres1 = genres.slice(0, 10);
  const genres2 = genres.slice(10, 20);

  const [game, setGame] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: 0,
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const randomPlatforms = ["PC", "iOS", "Android", "macOS", "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"];

  const ChangeInput = (e) => {
    if (e.target.name === "genres" || e.target.name === "platforms") {
      const arr = game[e.target.name];
      setGame({
        ...game,
        [e.target.name]: arr.concat(e.target.value),
      });
    } else {
      setGame({
        ...game,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: game.name,
      description: game.description,
      image: game.image,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    };

    // Validaciones
    if (!obj.name) {
      alert("Hey! Don't forget the name.");
      return;
    }
    if (!obj.description) {
      alert("Hey! Don't forget the description.");
      return;
    }
    if (!obj.released) {
      alert("Hey! Don't forget the date.");
      return;
    }
    if (obj.rating > 5 || obj.rating < 0) {
      alert("Hey! The rating should be between 0 and 5.");
      return;
    }

    dispatch(createVideogame(obj));
    e.target.reset();
    alert("Videogame created successfully!");

    setGame({
      name: "",
      description: "",
      image: "",
      released: "",
      rating: 0,
      genres: [],
      platforms: [],
    });
  };

  return (
    <div className="container">
      <h1>Create your Videogame!</h1>
      <form
        id="create-form"
        className="form"
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <div>
            <div className="divTitles">
              <div>
                <label htmlFor="name">-Name-</label>
                <input
                  className="label"
                  type="text"
                  name="name"
                  id="name"
                  value={game.name}
                  onChange={(e) => ChangeInput(e)}
                />
              </div>
              <div>
                <label htmlFor="description">-Description-</label>
                <input
                  className="label"
                  type="text"
                  name="description"
                  id="description"
                  value={game.description}
                  onChange={(e) => ChangeInput(e)}
                />
              </div>
              <div>
                <label htmlFor="released">-Released-</label>
                <input
                  className="label"
                  type="date"
                  name="released"
                  id="released"
                  value={game.released}
                  onChange={(e) => ChangeInput(e)}
                />
              </div>
              <div>
                <label htmlFor="rating">-Rating-</label>
                <input
                  className="label"
                  type="number"
                  name="rating"
                  id="rating"
                  value={game.rating}
                  onChange={(e) => ChangeInput(e)}
                />
              </div>
            </div>
            <div className="imagediv">
              <label htmlFor="image">-Image URL-</label>
              <input
                className="imagein"
                type="text"
                name="image"
                id="image"
                value={game.image}
                onChange={(e) => ChangeInput(e)}
              />
            </div>
          </div>
          <div className="checkboxs">
            <div className="checks">
              <label>-Genres-</label>
              <div className="gendivs">
                <div>
                  {genres1.map((gen) => (
                    <div key={gen.name}>
                      <input
                        type="checkbox"
                        name="genres"
                        id={`genre_${gen.name}`}
                        value={gen.name}
                        onChange={(e) => ChangeInput(e)}
                      />
                      <label htmlFor={`genre_${gen.name}`}>{gen.name}</label>
                    </div>
                  ))}
                </div>
                <div>
                  {genres2.map((gen) => (
                    <div key={gen.name}>
                      <input
                        type="checkbox"
                        name="genres"
                        id={`genre_${gen.name}`}
                        value={gen.name}
                        onChange={(e) => ChangeInput(e)}
                      />
                      <label htmlFor={`genre_${gen.name}`}>{gen.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="checks">
              <label>-Platforms-</label>
              <div>
                {randomPlatforms.map((P) => (
                  <div key={P}>
                    <input
                      type="checkbox"
                      name="platforms"
                      id={`platform_${P}`}
                      value={P}
                      onChange={(e) => ChangeInput(e)}
                    />
                    <label htmlFor={`platform_${P}`}>{P}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="button" type="submit">
            Create!
          </button>
        </div>
      </form>
    </div>
  );
}
