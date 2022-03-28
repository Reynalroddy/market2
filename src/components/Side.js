import React from "react";
import styled from "styled-components";
import links from "../data";
import { NavLink } from "react-router-dom";
const Side = () => {
  return (
    <Wrapper>
      <div className="logo">
        <h4>reynal admin</h4>
      </div>
      <hr />
      <div className="side-link">
        {links.map((link) => {
          const { id, icon, path, text } = link;
          return (
            <NavLink
              to={path}
              key={id}
              className={({ isActive }) =>
                isActive ? "nav-linkz active" : "nav-linkz"
              }
            >
              {icon}
              <span>{text}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="toggle">
        <div className="black"></div>

        <div className="white"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 100vh;
  /* background-color: red; */
  /* align-items: center; */
  /* justify-content: center; */
  padding: 0.9rem 0.6rem;
  border-right: 0.5px solid var(--grey-200);
  position: sticky;
  top: 0;
  left: 0;
  hr {
    border: 0.5px solid var(--grey-200);
  }
  .logo {
    color: #7451f8;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      margin-bottom: 0;
    }
  }
  .side-link {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    padding-left: 1.2rem;
    .nav-linkz {
      color: #888;
      margin: 0.6rem 0rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      /* background-color: white; */
      border-radius: var(--borderRadius);
      padding: 0.57rem 0rem;
      padding-left: 0.2rem;
      &:hover {
        background: #ece3ff;
        transition: var(--transition);
      }
      svg {
        font-size: 1.2rem;
        color: #7451f8;
        margin: 0 0.4rem;
      }
      span {
        margin-left: 0.78rem;
      }
    }
    .active {
      background: #ece3ff;
    }
  }

  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: auto;
    .black {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: var(--black);
      border: 1px solid #7451f8;
    }
    .white {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: var(--white);
      border: 1px solid #7451f8;
      margin-left: 0.4rem;
    }
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
export default Side;
