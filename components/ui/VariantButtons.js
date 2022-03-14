import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import MenuButton from "./MenuButton";
const VariantButtons = ({ materials, sizes }) => {
  const [anchorElMaterials, setAnchorElMaterials] = useState(null);
  const [anchorElSizes, setAnchorElSizes] = useState(null);
  const openMaterials = Boolean(anchorElMaterials);
  const handleClickMaterials = (event) => {
    setAnchorElMaterials(event.currentTarget);
  };
  const handleCloseMaterials = () => {
    setAnchorElMaterials(null);
  };
  const openSizes = Boolean(anchorElSizes);
  const handleClickSizes = (event) => {
    setAnchorElSizes(event.currentTarget);
  };
  const handleCloseSizes = () => {
    setAnchorElSizes(null);
  };
  return (
    <>
      <MenuButton
        sx={{ marginBottom: "1.3rem" }}
        onClick={handleClickMaterials}
      >
        Material
      </MenuButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorElMaterials}
        open={openMaterials}
        onClose={handleCloseMaterials}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {materials.map((m) => {
          const { id, title } = m;
          return (
            <MenuItem key={id} onClick={handleCloseMaterials}>
              {title}
            </MenuItem>
          );
        })}
      </Menu>
      <MenuButton onClick={handleClickSizes}>Size</MenuButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorElSizes}
        open={openSizes}
        onClose={handleCloseSizes}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {sizes.map((s) => {
          const { id, size } = s;
          return (
            <MenuItem key={id} onClick={handleCloseSizes}>
              {size}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default VariantButtons;
