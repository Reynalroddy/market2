import React from "react";
import Side from "./Side";
import styled from "styled-components";
import Navbar from "./Navbar";
import Widgets from "./Widgets";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { widget } from "../data";
import Graph from "./Graph";
import Table from "./Table";
import SmallSide from "./SmallSide";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  const data = [
    { total: 50, month: "jan" },
    { total: 80, month: "feb" },
    { total: 250, month: "mar" },
    { total: 70, month: "apr" },
    { total: 750, month: "may" },
    { total: 500, month: "jun" },
    { total: 55, month: "jul" },
  ];
  return (
    <Wrapper>
      <SmallSide />
      <Side />
      <div className="main-container">
        <Navbar />
        <div className="dash">
          <div className="widgets">
            {widget.map((item, i) => {
              const { title, price, icon, bg, color } = item;
              return (
                <Widgets
                  key={i}
                  title={title}
                  price={price}
                  icon={icon}
                  bg={bg}
                  color={color}
                />
              );
            })}
          </div>

          <div className="charts">
            <div className="frst">
              <div className="top">
                <h5>total revenue</h5>
                <BiDotsVerticalRounded />
              </div>
              <div className="butts">
                <div className="prog-cont">
                  <CircularProgressbar
                    value="70"
                    text="70%"
                    strokeWidth={5}
                    styles={buildStyles({
                      textColor: "#8c73e4",
                      pathColor: "#ece3ff",
                    })}
                  />
                </div>
                <p className="titles">Total sales made today</p>
                <h5 className="amount">$420</h5>
                <p className="desc">
                  Previous transactions processing. Last payments may not be
                  included.
                </p>
                <div className="summary">
                  <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                      <FaChevronDown />
                      <div className="resultAmount">$12.4k</div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                      <FaChevronDown />
                      <div className="resultAmount">$12.4k</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult negative">
                      <FaChevronDown />
                      <div className="resultAmount">$12.4k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sec">
              <h5>last 6 months(Revenue)</h5>
              <Graph data={data} />
            </div>
          </div>

          <div className="tabsl">
            <Table />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  .main-container {
    width: calc(100% - 16rem);
    padding: 1.3rem;
    padding-top: 0.9rem;
  }
  .dash {
    margin-top: 1rem;
  }
  .widgets {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.1rem;
  }
  .charts {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    gap: 0.9rem;

    .frst {
      width: calc(100% - 70%);
      background-color: var(--white);
      padding: 0.6rem;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h5 {
          margin-bottom: 0;
        }
        svg {
          font-size: 1.52rem;
        }
      }
      .butts {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.3rem;
        text-align: center;
        p,
        h5 {
          margin-bottom: 0;
        }

        .prog-cont {
          width: 10rem;
          height: 10rem;
          margin: 0.3rem 0rem;
        }
        .summary {
          display: flex;
          justify-content: space-between;
          /* align-items: center; */
          gap: 0.9rem;
          .item {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            flex-wrap: wrap;
            &:nth-child(1) {
              .itemResult {
                color: red;
              }
            }
            .itemResult {
              display: flex;
              align-items: center;
              gap: 0.2rem;
            }
          }
        }
      }
    }
    .sec {
      width: calc(100% - 30%);
      background-color: var(--white);
      padding: 0.6rem;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
  }

  .tabsl {
    background-color: var(--white);
    padding: 0.6rem;
    border-radius: var(--borderRadius);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-top: 1rem;
  }
  #col {
    stroke: rgb(228, 225, 225);
  }
  .cellImg {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  @media screen and (max-width: 1100px) {
    .widgets {
      grid-template-columns: 1fr 1fr;
    }
    .charts .frst {
      width: calc(100% - 60%);
    }
    .charts .sec {
      width: calc(100% - 40%);
    }
  }

  @media screen and (max-width: 860px) {
    .charts .frst {
      width: calc(100% - 55%);
    }
    .charts .sec {
      width: calc(100% - 45%);
    }
  }

  @media screen and (max-width: 810px) {
    .charts {
      flex-direction: column;
    }
    .charts .frst {
      width: 100%;
    }
    .charts .sec {
      width: 100%;
    }
  }

  @media screen and (max-width: 650px) {
    .main-container {
      width: 100%;
    }
  }
  @media screen and (max-width: 400px) {
    .widgets {
      grid-template-columns: 1fr;
    }
  }
`;
export default Home;
