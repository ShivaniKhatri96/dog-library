"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import Select from "react-select";
import { colorStyles } from "@/select-styles/SelectStyles";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type selectTypes = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const SelectOption = ({ selected, setSelected }: selectTypes) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  //options for react-select
  const options = [
    { value: "sporting", label: "Sporting" },
    { value: "non-sporting", label: "Non-Sporting" },
    { value: "terrier", label: "Terrier" },
    { value: "herding", label: "Herding" },
    { value: "toy", label: "Toy" },
    { value: "working", label: "Working" },
    { value: "hound", label: "Hound" },
    { value: "mixed", label: "Mixed" },
    { value: "any", label: "Any" },
  ];
  const selectedHandler = (selectedOption: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
    setSelected(selectedOption.value);
  };
  return (
    <Select options={options} styles={colorStyles} onChange={selectedHandler} />
  );
};

export default SelectOption;
