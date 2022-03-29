import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
const Widgets = ({ title, price, icon, color, bg }) => {
  return (
    <Wrapper>
      <div className="widget-top">
        <h5>{title}</h5>
        <p>
          <FaChevronDown />
          <span>20 %</span>
        </p>
      </div>

      <div className="pri">
        <h4>{price}</h4>
      </div>

      <div className="widget-butt">
        <button className="my-btn">view</button>
        <div
          className="ic"
          style={{ backgroundColor: `${bg}`, color: `${color}` }}
        >
          {icon}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 0.6rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  .widget-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: green;
      svg {
        margin-right: 0.3rem;
      }
    }
  }

  .widget-butt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ic {
      height: 2rem;
      width: 2rem;
      border-radius: var(--borderRadius);
      align-items: center;
      justify-content: center;
      display: flex;
      /* background: ${(props) => props.bg}; */
    }
  }
`;
export default Widgets;
