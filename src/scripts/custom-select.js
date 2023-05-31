import customSelect from "custom-select";

const initCustomSelect = () => {
  const selectOptions = {
    containerClass: "custom-select",
    openerClass: "custom-select__selected",
    panelClass: "custom-select__options",
    optionClass: "custom-select__option",
    isOpenClass: "active",
  };

  customSelect("#order-select", selectOptions);
};

export default initCustomSelect;
