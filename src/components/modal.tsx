import { ChangesObject } from "../pages/sub-menu";
import { useState, useEffect } from "react";

export default function Modal({
  dish,
  setModalOpen,
  updateMenuItem,
}: {
  updateMenuItem: (changesObject: ChangesObject) => void;
  dish: any;
  setModalOpen: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {
    description,
    name,
    price,
    toppingsGroups,
    isCombo,
    comboSubs,
    dishId,
  } = dish;

  const [editMode, setEditMode] = useState(false);

  const [nameValue, setNameValue] = useState(name);
  const [priceValue, setPriceValue] = useState(price);
  const [descValue, setDescValue] = useState(description);

  const handleNameValue = (e: any) => {
    const value = e.target.value;
    setNameValue(value);
  };

  const handlePriceValue = (e: any) => {
    const value = e.target.value;
    setPriceValue(value);
  };

  const handleDescValue = (e: any) => {
    const value = e.target.value;
    setDescValue(value);
  };

  const saveClickHandle = () => {
    updateMenuItem({
      id: dishId,
      name: nameValue,
      description: descValue,
      price: priceValue === " " ? 0 : Number(priceValue),
    });
    setEditMode(false);
  };

  const editClickHandle = () => {
    setNameValue(name)
    setDescValue(description)
    setPriceValue(price)
    setEditMode(true)
  }

  useEffect(() => {
   return () => {
    setModalOpen("")
   } 
  }, [])

  return (
    <div className="modal-wrapper">
      <button
        className={editMode? "disabled-btn button exit-btn" : "button exit-btn"}
        disabled={editMode}
        onClick={() => setModalOpen("")}
      >
        X
      </button>
      <div className="mane-item-desc">
        {editMode ? (
          <>
            <div className="input-wrapper">
              <span className="property">שם</span>
              <input
                value={nameValue}
                onChange={handleNameValue}
                className="value item-name input"
              />
            </div>
            <div className="input-wrapper">
              <span className="property">מחיר</span>
              <input
                type="number"
                value={priceValue}
                onChange={handlePriceValue}
                className="value item-name input"
              />
            </div>
            <div className="input-wrapper">
              <span className="property">תיאור</span>
              <input
                value={descValue}
                onChange={handleDescValue}
                className="value item-name input"
              />
            </div>
            <div className="input-wrapper">
              <span className="property">Combo</span>
              <div className="value">{isCombo ? "YES" : "NO"}</div>
            </div>
          </>
        ) : (
          <>
            <div>
              <span className="property">שם</span>
              <div className="value item-name">{name}</div>
            </div>
            <div>
              <span className="property">מחיר</span>
              <div className="value">{price}</div>
            </div>
            <div>
              <span className="property">תיאור</span>
              <div className="value">{description}</div>
            </div>
            <div>
              <span className="property">Combo</span>
              <div className="value">{isCombo ? "YES" : "NO"}</div>
            </div>
          </>
        )}
        {toppingsGroups.length > 0 && (
          <div>
            <div className="toppings-h">תוספות: {toppingsGroups[0].name}</div>
            <ul>
              {toppingsGroups[0].toppings.map((item: any) => (
                <li key={item._id}>{item.name} {item.costAddition}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {editMode ? (
        <div>
          <button className="button" onClick={() => setEditMode(false)}>
            Back
          </button>
          <button onClick={saveClickHandle} className="button">
            Save
          </button>
        </div>
      ) : (
        <button className="button edit-btn" onClick={editClickHandle}>
          Edit
        </button>
      )}
      {comboSubs.length > 0 && (
        <div className="sub-items">
          <div className="property">SubItems: </div>
          <div className="combo-subs">
            {comboSubs.map((comboSub: any) => (
              <div key={comboSub.name} className="combosubs-container">
                <div
                className="combo-sub"
                >
                  {comboSub.name}
                </div>
                {comboSub.dishes.map((dish: any) => (
                  <div
                    key={dish.dishId}
                    className="combo-dish"
                  >
                    <span className="blue">
                      {dish.name} - {dish.costAddition}₪
                    </span>
                    {dish.toppingsGroups?.length > 0 && (
                      <>
                        <div className="bold">
                          תוספות: {dish.toppingsGroups[0].name}
                        </div>
                        <ul>
                          {dish.toppingsGroups[0].toppings.map(
                            (topping: any) => (
                              <li
                                className="font-14"
                                key={topping._id}
                              >
                                {topping.name} - {topping.costAddition}₪
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
