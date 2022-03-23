import { useState } from "react";
import { BurgerMenuProps } from "../../types";
import "./burger-menu.scss";

const menuDisplayStyles = ["burger-menu__item--display"];
const BurgerMenu: React.FC<BurgerMenuProps> = ({ onMenuDisplay }) => {
  const [display, setDisplay] = useState(false);

  function displayMenuBar() {
    setDisplay(!display);
    onMenuDisplay();
  }
  return (
    <div className="burger-menu" onClick={displayMenuBar}>
      <div
        className={`burger-menu__item ${
          display ? menuDisplayStyles.join(" ") : ""
        }`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
