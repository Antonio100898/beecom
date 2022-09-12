import MenuItem from "../components/menu-item";
import { useNavigate } from "react-router-dom";

type Props = {
  menuItems: any[];
};
export default function MainMenu({ menuItems }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="menu-h">Beecom Back Office</h1>
      <div className="menu-wrapper">
        {menuItems &&
          menuItems.map((item: any) => (
            <MenuItem
              key={item._id}
              onClick={() => navigate("/" + item.sortIndex)}
            >
              {item.name}
            </MenuItem>
          ))}
      </div>
    </div>
  );
}
