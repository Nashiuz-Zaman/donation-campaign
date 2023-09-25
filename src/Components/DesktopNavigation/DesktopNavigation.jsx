// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

const DesktopNavigation = ({ navigatonOptions }) => {
  return (
    <ul className="hidden lg:flex gap-[3.0625rem]">
      {navigatonOptions &&
        navigatonOptions.map((option) => {
          return (
            <li key={option.id}>
              <NavLink className="text-lg leading-[normal]" to={option.url}>
                {option.text}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

DesktopNavigation.propTypes = {
  navigatonOptions: PropTypes.array.isRequired,
};

export default DesktopNavigation;
