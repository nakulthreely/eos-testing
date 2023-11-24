import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

import logo from "../public/assets/logo.png";

import { Box } from "grommet";

const HeaderResponsive = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <Logo>
          <div className="flex flex-col items-center justify-center">
            <Image
              width="250px"
              height="95px"
              className="object-center object-cover"
              src={logo}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              alt="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, BSC Token profitability, and its Virtual Item Economy."
              placeholder="blur"
            />
            <div>
              <Box animation="pulse" className="sm-view-now">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  stroke="8"
                  fill="#111"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </div>
          </div>
        </Logo>

        <MenuDrop isOpen={isOpen}>
          <MenuLink />
          <MenuLink>
            <Link href="/" passHref>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="responsiveWrapper"
              >
                HOME
              </div>
            </Link>
          </MenuLink>
          <MenuLink>
            <Link href="/accesspass" passHref>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="responsiveWrapper"
              >
                ACCESS PASS
              </div>
            </Link>
          </MenuLink>
          <MenuLink>
            <Link href="/whitepaper" passHref>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="responsiveWrapper"
              >
                WHITEPAPER
              </div>
            </Link>
          </MenuLink>
          <MenuLink>
            <Link href="/dashboard" passHref>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="responsiveWrapper"
              >
                DASHBOARD
              </div>
            </Link>
          </MenuLink>
          <MenuLink>
            <Link href="/lore" passHref>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="responsiveWrapper"
              >
                LORE
              </div>
            </Link>
          </MenuLink>
          <MenuLink>
            <Link href="/updates" passHref>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="responsiveWrapper"
              >
                UPDATES
              </div>
            </Link>
          </MenuLink>
          <MenuLink>
            <Link href="/faqs" passHref>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="responsiveWrapper"
              >
                FAQS
              </div>
            </Link>
          </MenuLink>
        </MenuDrop>
      </Nav>
    </>
  );
};

export default HeaderResponsive;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  &.active {
    color: #e6c04e;
  }
  &:hover {
    color: #e6c04e;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #111;
  overflow: visible;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
`;

const Logo = styled.a`
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  color: ${({ isOpen }) => (isOpen ? "#111" : "#ededed")};
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  img {
    width: 250px;
    height: 95px;
  }
`;

const MenuDrop = styled.div`
  z-index: -1;
  top: -68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  max-height: ${({ isOpen }) => (isOpen ? "960px" : "0")};
  transition: max-height 0.3s ease-in;
  transition: max-height 1s ease-out;
  width: 100%;
  background: #111;
`;
