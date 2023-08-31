"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import {
  Container,
  LinksContainer,
  BurgerAndLoginBtnWrapper,
  StyledLink,
} from "./HeaderWithNav.style";
import { BarOne, BarThree, BarTwo, BarWrapper } from "./BurgerMenu.style";
import { MainTitle } from "@/ui";
import { UserLoginButton } from "@/ui/actions";

interface Props {}
interface BurgerMenuProps {
  setToogleMenu: Dispatch<SetStateAction<boolean | null>>;
  toogleMenu: boolean | null;
}

export const HeaderWithNav: FC<Props> = () => {
  const [toogleMenu, setToogleMenu] = useState<boolean | null>(null);
  const Links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];
  return (
    <Container>
      <MainTitle />
      <LinksContainer
        $menuanimationstate={
          toogleMenu === null ? "stale" : toogleMenu === true ? "open" : "close"
        }
      >
        {Links.map((link, i) => {
          return (
            <StyledLink
              onClick={() => setToogleMenu(false)}
              key={i}
              href={link.href}
            >
              {link.text}
            </StyledLink>
          );
        })}
      </LinksContainer>
      <BurgerAndLoginBtnWrapper>
        <UserLoginButton />
        <BurgerMenu setToogleMenu={setToogleMenu} toogleMenu={toogleMenu} />
      </BurgerAndLoginBtnWrapper>
    </Container>
  );
};

export const BurgerMenu: FC<BurgerMenuProps> = ({
  setToogleMenu,
  toogleMenu,
}) => {
  return (
    <BarWrapper onClick={() => setToogleMenu(!toogleMenu)}>
      <BarOne />
      <BarTwo />
      <BarThree />
    </BarWrapper>
  );
};

//to skip animation when changing page: onClick={() => setToogleMenu(null)}
//Pnpm/npm: styled-components
//If needed update to server-component by removeing "use client"
