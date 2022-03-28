import React from "react";
import styled from "styled-components";
import links from "../data";
import { NavLink } from "react-router-dom";
import { FaTimes, FaAlignLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeader } from "../redux/headerSlice";
const SmallSide = () => {
  //   const showSidebar = true;
  const { isOpen } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  console.log(isOpen);
  return (
    <Wrapper>
      <div
        className={
          isOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatch(toggleHeader())}
          >
            <FaTimes />
          </button>
          <header>
            <h4>reynal admin</h4>
          </header>
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
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: 650px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
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
`;
export default SmallSide;
