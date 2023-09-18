/* VENDOR */
import { useState } from 'react';
import { useSelector } from 'react-redux';

/* APPLICATION */
import edit from '../icons/edit.svg';
import remove from '../icons/remove.svg';
import { selectAllCategories } from '../features/categoriesSlice';
import { ModalEditItem } from '../Modal/ModalEditItem';
import { ModalRemoveItem } from '../Modal/ModalRemoveItem';

interface ListItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const categories = useSelector(selectAllCategories);
  const [isEditModalActive, setEditModalActive] = useState(false); // переименовал функцию, сделал обьявления useState с помощью константы
  const [isRemoveModalActive, setRemoveModalActive] = useState(false); //

  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {categories.find((category) => category.id === item.category)?.name}
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description}</div>
        </div>
        <div className="list-item-col2">
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setEditModalActive(true);
            }}>
            <img src={edit} alt="edit" />
          </button>
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setRemoveModalActive(true); // изменил написание функции
            }}>
            <img src={remove} alt="remove" />
          </button>
        </div>
        {isEditModalActive && (
          <ModalEditItem item={item} active={isEditModalActive} setActive={setEditModalActive} /> // рендер только когда Active
        )}
        {isRemoveModalActive && ( // рендер только когда Active
          <ModalRemoveItem
            item={item}
            active={isRemoveModalActive}
            setActive={setRemoveModalActive}
          />
        )}
      </li>
    </>
  );
};
