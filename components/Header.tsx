import { Logo } from "./icons/Logo";
import { ButtonUI } from "./UI/ButtonUI";
export const Header = () => {
  return (
    <header className="fixed top-2 left-[15px] w-[calc(100%_-_30px)] p-2 bg-white rounded-xl flex justify-between">
      <Logo />
      <div className="flex gap-3">
        <button type="button">Hello</button>
        <button type="button">Hi</button>
      </div>
      <div>
        <ButtonUI type="button" generic="secondary" value="Preview" />
      </div>
    </header>
  );
};
