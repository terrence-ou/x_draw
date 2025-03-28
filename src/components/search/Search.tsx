import { Input } from "@heroui/input";
import { Button, Chip } from "@heroui/react";
import { useContext } from "react";
import { PreferenceContext } from "@/contexts/PreferenceContext";
import { CONTENTS } from "@/consts";

const Search = () => {
  const { language } = useContext(PreferenceContext);

  return (
    <div className="flex flex-col px-20 items-center">
      <h2 className="text-xl font-semibold">{CONTENTS.search[language].title}</h2>
      <div className="mt-12 mb-4">
        <p className="mb-3">{CONTENTS.search[language].instruction}</p>
        {Array.from({ length: 2 }, (_, i) => (
          <div
            className="flex items-center my-2"
            key={CONTENTS.search[language].examples[i]}
          >
            <p className="w-6">{i + 1}. </p>
            <p className="mr-2">{CONTENTS.search[language].examples[i]}</p>
            <Chip color="secondary" variant="flat">
              {CONTENTS.search[language].exampleInputs[i]}
            </Chip>
          </div>
        ))}
      </div>
      <Input
        size="lg"
        label={CONTENTS.search[language].inputLabel}
        labelPlacement="outside"
        color="secondary"
        className="mb-10"
      />
      <Button color="secondary" variant="shadow" className="text-default-50">
        {CONTENTS.search[language].button}
      </Button>
    </div>
  );
};

export default Search;
