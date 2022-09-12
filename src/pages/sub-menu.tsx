import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubMenuItem from "../components/sub-menu-item";

type Props = {
  menuItems: any;
  setModalOpen: React.Dispatch<React.SetStateAction<string>>;
  modalOpen: string;
};

export type ChangesObject = {
  id: string;
  name?: string;
  description?: string;
  price?: number;
};

export default function SubMenu({ menuItems, modalOpen, setModalOpen }: Props) {
  const [subMenuItem, setSubMenuItem] = useState<any>({});

  const updateMenuItem = (changesObject: ChangesObject) => {

    const { id, description, name, price } = changesObject;

    const dishToMutate = subMenuItem.dishes.find((dish: any) => dish.dishId === id)
    
      dishToMutate.name = name;
      dishToMutate.price = price;
      dishToMutate.description = description;
  };

  const params = useParams();
  const { sortIndex } = params;

  useEffect(() => {
    if (menuItems) {
      setSubMenuItem(
        menuItems.filter((item: any) => item.sortIndex === Number(sortIndex))[0]
      );
    }
  }, [params]);

  return (
    <div className="sub-menu">
      <h1>{subMenuItem && subMenuItem.name}</h1>
      <div className="sub-menu">
        {subMenuItem?.dishes?.map((dish: any) => (
            <SubMenuItem
              updateMenuItem={updateMenuItem}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              key={dish.dishId}
              dish={dish}
            />
          ))}
      </div>
    </div>
  );
}
