import React, { useEffect, useRef, useState } from "react";
import * as S from "./StyledBurger";

export const Burger = ({ children }) => {
  const navArea = useRef();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(event) {
    event.stopPropagation();
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navArea.current && !navArea.current.contains(event.target)) {
        closeMenu();
      }
    }

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <S.Burger onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <S.TopLine />
        <S.CenterLine />
        <S.BottomLine />
      </S.Burger>
      {/* <S.Clone className={isOpen ? "open" : ""} /> */}

      <S.Navigation ref={navArea} className={isOpen ? "open" : ""}>
        {children}
      </S.Navigation>

      <S.OutsideArea className={isOpen ? "open" : ""} />
    </>
  );
};
