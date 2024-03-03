export const colorStyles = {
    control: (styles) => ({
      ...styles,
      border: "solid #c5c5c5 2px",
      boxShadow: "none",
      fontSize: "1rem",
      padding: "0.2rem",
      "&:hover": { border: "solid #c5c5c5 2px" },
    }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        fontSize: "1rem",
        "&:hover": {
          backgroundColor: isSelected ? "#80669d" : "#f1e6f5",
        },
        backgroundColor: isSelected ? "#80669d" : "#ffffff",
      };
    },
    input: (styles) => ({ ...styles, color: "#000" }),
    singleValue: (styles) => ({ ...styles, color: "#000" }),
  };