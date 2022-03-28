import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { toggleHeader } from "../redux/headerSlice";
import { BsFullscreen, BsFillBrightnessHighFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { FaBell, FaAlignLeft } from "react-icons/fa";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <FaAlignLeft className="tog" onClick={() => dispatch(toggleHeader())} />
      <div className="inp-box">
        <input placeholder="Search" />
        <div className="inp-icon">
          <BiSearchAlt />
        </div>
      </div>
      <div className="items">
        <div className="item wr">
          <GrLanguage className="icon" style={{ marginRight: "0.4rem" }} />
          English
        </div>
        <div className="item">
          <BsFillBrightnessHighFill
            className="icon"
            // onClick={() => dispatch({ type: "TOGGLE" })}
          />
        </div>
        <div className="item wr">
          <BsFullscreen className="icon" />
        </div>
        <div className="item">
          <FaBell className="icon" />
          <div className="counter">1</div>
        </div>

        <div className="item">
          <div className="prof-img">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="img"
            />
          </div>
          {/*  */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  /* height: 2.9rem; */
  align-items: center;
  width: 100%;
  /* border-bottom: 0.5px solid var(--grey-200); */

  .inp-box {
    width: 20rem;
    max-width: 20rem;
    position: relative;
    height: 1.8rem;
    input {
      width: 100%;
      /* background: transparent; */
      height: 100%;
      border: none;
      outline: none;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      color: var(--black);
      font-size: 1rem;
      padding: 0.3rem 2.5rem;
      padding-left: 0.6rem;
    }
    .inp-icon {
      width: 2.5rem;
      height: 1.8rem;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.3rem;
      color: var(--grey-400);
      text-align: center;
      line-height: 1.8rem;
      /* padding-top: 0.3rem; */
    }
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.99rem;
    .item {
      /* margin-right: 0.7rem; */
      position: relative;
      .counter {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 50%;
        background: red;
        top: 0.2rem;
        left: 0.6rem;
        font-size: 0.5rem;
        font-weight: bold;
      }
      .prof-img {
        width: 1.5rem;
        height: 1.5rem;
        img {
          border-radius: 50%;
          height: 100%;
        }
      }
    }
  }

  .nav-header {
    display: flex;
    align-items: center;
    .logo {
      height: 5vh;
    }
    .nav-toggle {
      display: none;
    }
  }

  .links-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    gap: 2rem;
    .links {
      display: flex;
      li {
        padding: 0rem 1rem;
        /* margin-right:1rem */
        transition: var(--transition);
        &:first-of-type {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: var(--black);
          }
        }
        &:hover {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: var(--black);
          }
        }
      }
      a {
        color: var(--white);
        font-weight: bold;

        &:hover {
          padding: 0;
        }
      }
    }
  }

  .tog {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 650px) {
    .tog {
      display: none;
    }
  }

  @media screen and (max-width: 850px) {
    .items .item.wr {
      display: none;
    }
    .inp-box {
      width: 7.5rem;
      z-index: 90;
      input {
        &:focus {
          width: 15rem;
          transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      }
    }
  }
`;
export default Navbar;
