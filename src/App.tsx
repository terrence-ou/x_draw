// import { useState } from "react";
import { Button } from "@heroui/react";
import { HeroUIProvider } from "@heroui/react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <HeroUIProvider>
      <Button color="secondary">Button</Button>
    </HeroUIProvider>
  );
}

export default App;
