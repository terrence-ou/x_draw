import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/Header";
import PreferenceProvider from "@/contexts/PreferenceContext";

function App() {
  return (
    <PreferenceProvider>
      <HeroUIProvider>
        <h1>X-Draw</h1>
        <Header />
      </HeroUIProvider>
    </PreferenceProvider>
  );
}

export default App;
