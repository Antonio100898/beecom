import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SubMenu from "./pages/sub-menu";
import MainMenu from "./pages/main-menu";
import { menuService } from "./sercives/menu-service";

function App() {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState("");
  
  const fetchMenu = async () => {
    try {
      const response = await menuService.getMenu();
      setMenuItems(response.data.data.deliveryMenu.categories[0].subCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="app" dir="rtl">
      <Routes>
        <Route path="/" element={<MainMenu menuItems={menuItems} />} />
        <Route
          path="/:sortIndex"
          element={
            <SubMenu
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              menuItems={menuItems}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
