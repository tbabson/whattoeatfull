import React, { useState, useEffect } from "react";

const Menu = () => {
  const [menu, setMenu] = useState("");

  useEffect(() => {
    const updateMenu = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setMenu("What would you like to cook for breakfast?");
      } else if (currentHour >= 12 && currentHour < 16) {
        setMenu("What would you like to cook for lunch?");
      } else if (currentHour >= 16 && currentHour < 23) {
        setMenu("What would you like to cook for dinner?");
      } else {
        setMenu("What would you like to eat/cook now?");
      }
    };

    updateMenu();

    // Update Menu every minute
    const intervalId = setInterval(updateMenu, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <h3>{menu}</h3>;
};

export default Menu;
