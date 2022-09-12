import Modal from "./modal";
import { ChangesObject } from "../pages/sub-menu";

type Props = {
  dish: any;
  modalOpen: string;
  setModalOpen: React.Dispatch<React.SetStateAction<string>>;
  updateMenuItem: (changesObject: ChangesObject) => void;
};

export default function SubMenuItem({
  dish,
  modalOpen,
  setModalOpen,
  updateMenuItem,
}: Props) {
  let { description, name, price, toppingsGroups, isCombo, dishId } = dish;

  return (
    <>
      <div className={modalOpen ? "hidden" : "sub-menu-item"}>
        <h1 className="item-name">{name}</h1>
        {isCombo && <span className="is-combo">Combo</span>}
        <div>תיאור: {description ? description : "..."}</div>
        <div>
          מספר תוספות:{" "}
          {toppingsGroups.length > 0 ? toppingsGroups[0].toppings.length : "0"}
        </div>
        <div>מחיר: {price}</div>
        <button onClick={() => setModalOpen(dishId)}>הגדרות/לראות הכל</button>
      </div>
      {modalOpen === dishId && (
        <Modal
          updateMenuItem={updateMenuItem}
          setModalOpen={setModalOpen}
          dish={dish}
        />
      )}
    </>
  );
}
