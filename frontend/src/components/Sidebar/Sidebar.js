import React from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const [open, setOpen] = React.useState(false);

  // Используем медиазапросы для адаптивности
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // проверка на мобильные устройства

  // Обработчик для открытия и закрытия бокового меню
  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <>
      {/* Кнопка для открытия меню на мобильных устройствах */}
      {isMobile && (
        <Button onClick={() => toggleDrawer(true)} sx={{ marginBottom: 2 }}>
          Открыть меню
        </Button>
      )}

      {/* Drawer для бокового меню */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        variant={isMobile ? "temporary" : "permanent"} // Используется временное меню для мобильных и постоянное для десктопа
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {categories.map((category) => (
            <ListItem
              button
              key={category}
              onClick={() => onSelectCategory(category)}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
