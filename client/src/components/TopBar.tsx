import MenuButton from "./MenuButton";
import LanguageButton from "./LanguageButton";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <MenuButton />
      <LanguageButton />
    </div>
  );
};

export default TopBar;
