import { useColorMode, IconButton } from "@chakra-ui/core";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton aria-label="Toggle Dark Switch" icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} />
    </div>
  );
};

export default DarkModeSwitch;
