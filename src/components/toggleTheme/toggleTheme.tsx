import "./toggleTheme.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../redux/reducers/reducers";
import { toggleTheme } from "../../redux/reducers/themeSlice";

export default function ToggleTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootReducer) => state.theme.value);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="toggleTheme">
      <label className="toggleTheme__label">
        <input
          className="toggleTheme__input"
          type="checkbox"
          onChange={handleThemeToggle}
        />
        <span className="toggleTheme__slider"></span>
      </label>
    </div>
  );
}
