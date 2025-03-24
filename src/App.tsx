// import { useState } from "react";
import { Button } from "@heroui/react";
import { HeroUIProvider } from "@heroui/react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <HeroUIProvider>
      <h1>X-Draw</h1>
      <Button color="secondary">Button</Button>
    </HeroUIProvider>
  );
}

export default App;
