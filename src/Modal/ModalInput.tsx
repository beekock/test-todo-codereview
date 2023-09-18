import { useLocation } from 'react-router-dom';
import important from '../icons/important.svg';

interface ModalInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: string;
}

export const ModalInput: React.FC<ModalInputProps> = ({ name, setName, size }) => {
  const { pathname } = useLocation();
  const isCategories = pathname.includes('categories');
  return (
    <div className={size === 'large' ? 'modalinput-wrapper large' : 'modalinput-wrapper'}>
      <input
        id="modalinput"
        className="modalinput"
        placeholder={`Введите имя ${isCategories ? 'категории' : 'задачи'} `} // добавил склонения
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={important} alt="important" className="modalinput-icon" />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
