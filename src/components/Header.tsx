import { useContext } from "react";
import { PreferenceContext } from "@/contexts/PreferenceContext";
import { LANGUAGE_MENU, type AvailableLanguagesType } from "@/consts";
import {
  Button,
  Switch,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@heroui/react";

const Header = () => {
  const { theme, language, toggleTheme, updateLanguage } = useContext(PreferenceContext);
  console.log(language);
  const languageDiplay = LANGUAGE_MENU.find((item) => item.key === language)?.text;
  return (
    <div>
      <Button color="secondary">Button</Button>
      <Switch isSelected={theme === "light"} onValueChange={toggleTheme} />
      <Dropdown>
        <DropdownTrigger>
          <Button className="min-w-[1rem] w-[3rem]" variant="bordered">
            {languageDiplay}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="bordered"
          onAction={(key) => updateLanguage(key as AvailableLanguagesType)}
        >
          {LANGUAGE_MENU.map((item) => (
            <DropdownItem key={item.key}>{item.text}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
