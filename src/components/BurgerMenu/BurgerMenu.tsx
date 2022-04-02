import { BurgerMenuProps } from "../../types";
import "./burger-menu.scss";

const menuDisplayStyles = ["burger-menu__item--display"];
const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isMenuDisplay,
  onMenuDisplay,
}) => {
  return (
    <div className="burger-menu" onClick={onMenuDisplay}>
      <div
        className={`burger-menu__item ${
          isMenuDisplay ? menuDisplayStyles.join(" ") : ""
        }`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
