import { Button, Switch } from "@heroui/react";
import { useContext } from "react";
import { PreferenceContext } from "@/contexts/PreferenceContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(PreferenceContext);

  return (
    <div>
      <Button color="secondary">Button</Button>
      <Switch isSelected={theme === "light"} onValueChange={toggleTheme} />
    </div>
  );
};

export default Header;
