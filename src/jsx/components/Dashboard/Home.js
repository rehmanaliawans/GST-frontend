import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../../context/ThemeContext';
import solidCoin from '../../../images/solid_coin.jpeg';
import CardSlider from '../Boltz/Home/CardSlider';
import OrderData from '../Boltz/Home/OrderData';
import PreviousTab from '../Boltz/Home/PreviousTab';
import QuickTrade from '../Boltz/Home/QuickTrade';
import QuickTransfer from '../Boltz/Home/QuickTransfer';

//Import
const CurrentRadialApex = loadable(() => pMinDelay(import("../Boltz/Home/CurrentRadialApex"), 1000));
const MarketLineApex = loadable(() => pMinDelay(import("../Boltz/Home/MarketLineApex"), 1000));

const Home = () => {
  const { changeBackground, background } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  const [country1, setCountry1] = useState("Medan, IDN");
  const [duration2, setDuration2] = useState("Weekly (2021)");

  return (
    <>
      <div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
        <h2 className="font-w600 mb-2 me-auto">Dashboard</h2>
        <Dropdown className=" weather-btn mb-2">
          <span className="fs-22 font-w600 d-flex">
            <i className="fa fa-cloud me-3 ms-3"></i>21
          </span>
          <Dropdown.Toggle variant="" as="div" className="form-control style-3 default-select cursor-pointer">
            {country1}{" "}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setCountry1("Medan, IDN")}>Medan, IDN</Dropdown.Item>
            <Dropdown.Item onClick={() => setCountry1("Jakarta, IDN")}>Jakarta, IDN</Dropdown.Item>
            <Dropdown.Item onClick={() => setCountry1("Surabaya, IDN")}>Surabaya, IDN</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to={"#"} className="btn btn-primary mb-2 rounded">
          <i className="las la-calendar scale5 me-3"></i>Filter Periode
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-3 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-body d-flex">
              <div className="icon me-3">
                <img src={solidCoin} alt="solid-coin" width={100} />
              </div>
              <div>
                <h2 className="invoice-num">$984</h2>
                <p className="mb-0 invoice-num1">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1"
                      stroke="#13B440"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-success me-1 ms-1">45%</span> This week
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-body d-flex">
              <div className="icon me-3">
                <img src={solidCoin} alt="solid-coin" width={100} />
              </div>
              <div>
                <h2 className="invoice-num">$22,567</h2>
                <p className="mb-0">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1"
                      stroke="#13B440"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-success  ms-1 me-1">45%</span> This week
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-body d-flex">
              <div className="icon me-3">
                <img src={solidCoin} alt="solid-coin" width={100} />
              </div>
              <div>
                <h2 className="invoice-num">$168,331.09</h2>
                <p className="mb-0">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1C1.91797 2.08433 4.89728 5.27228 6.5 7L12.5 4L19.5 13"
                      stroke="#F04444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-danger ms-1 me-1">45%</span> This week
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-body d-flex">
              <div className="icon me-3">
                <img src={solidCoin} alt="solid-coin" width={100} />
              </div>
              <div>
                <h2 className="invoice-num">$7,784</h2>
                <p className="mb-0">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1C1.91797 2.08433 4.89728 5.27228 6.5 7L12.5 4L19.5 13"
                      stroke="#F04444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-danger ms-1 me-1">45%</span> This week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-xxl-4">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="fs-20 mb-0">Current Statistic</h4>
            </div>
            <div className="card-body">
              <div id="currentChart">
                <CurrentRadialApex />
              </div>
              <div className="chart-content">
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#EB8153" />
                    </svg>
                    <span className="fs-14">Income (66%)</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$167,884.21</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#4441DE" />
                    </svg>
                    <span className="fs-14">Spends (50%))</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$56,411.33</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#60C695" />
                    </svg>
                    <span className="fs-14">Installment (11%)</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$81,981.22</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#F34F80" />
                    </svg>
                    <span className="fs-14">Invest (23%)</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$12,432.51</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-xxl-8">
          <div className="card">
            <div className="card-header pb-0 border-0 flex-wrap">
              <div className="mb-3">
                <h4 className="fs-20 text-black">Market Overview</h4>
                <p className="mb-0 fs-12 text-black">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="d-flex flex-wrap mb-2">
                <div className="form-check custom-checkbox me-4 default-checkbox">
                  <input type="checkbox" className="form-check-input" id="customCheckBox1" required />
                  <label className="form-check-label" htmlFor="customCheckBox1">
                    ETH
                  </label>
                </div>
                <div className="form-check custom-checkbox me-4 default-checkbox">
                  <input type="checkbox" className="form-check-input" id="customCheckBox2" required />
                  <label className="form-check-label" htmlFor="customCheckBox2">
                    XMR
                  </label>
                </div>
                <div className="form-check custom-checkbox me-4 default-checkbox">
                  <input type="checkbox" className="form-check-input" id="customCheckBox3" required />
                  <label className="form-check-label" htmlFor="customCheckBox3">
                    LTC
                  </label>
                </div>
                <div className="form-check custom-checkbox me-4 default-checkbox">
                  <input type="checkbox" className="form-check-input" id="customCheckBox4" required />
                  <label className="form-check-label" htmlFor="customCheckBox4">
                    XMR
                  </label>
                </div>
              </div>
              <Dropdown className=" weather-btn mb-2">
                <Dropdown.Toggle
                  variant=""
                  as="div"
                  className="form-control style-2 default-select border text-primary cursor-pointer"
                >
                  {duration2}{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setDuration2("Weekly (2021)")}>Weekly (2021)</Dropdown.Item>
                  <Dropdown.Item onClick={() => setDuration2("Daily (2021)")}>Daily (2021)</Dropdown.Item>
                  <Dropdown.Item onClick={() => setDuration2("Yearly (2021)")}>Yearly (2021)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body pb-0 pt-3">
              <div id="marketChart" className="market-line">
                <MarketLineApex />
              </div>
            </div>
          </div>
        </div>
        <CardSlider />
        <div className="col-xl-12">
          <div className="row">
            <PreviousTab />
            <div className="col-xl-3 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="mb-0 fs-20 text-black">Sell Order</h4>
                  <Dropdown className="dropdown custom-dropdown mb-0">
                    <Dropdown.Toggle variant="" as="div" className="btn sharp tp-btn dark-btn i-false">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          stroke="#342E59"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          stroke="#342E59"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          stroke="#342E59"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item>Details </Dropdown.Item>
                      <Dropdown.Item className="text-danger">Cancel </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body px-4">
                  <Dropdown className="dropdown custom-dropdown d-block tbl-orders">
                    <Dropdown.Toggle
                      variant=""
                      as="div"
                      className="btn  d-flex align-items-center border-0 order-bg rounded  i-false"
                    >
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.4169 0.00384777C10.7089 -0.226161 0.233857 9.88466 0.00384777 22.5831C-0.226161 35.2815 9.88466 45.7661 22.5831 45.9961C35.2815 46.2261 45.7661 36.1153 45.9961 23.4073C46.2261 10.7089 36.1153 0.224273 23.4169 0.00384777ZM22.6598 41.6834C12.3573 41.4918 4.12485 32.9622 4.31652 22.6598C4.49861 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49861 41.8655 13.0281 41.6834 23.3306C41.5013 33.6331 32.9622 41.8655 22.6598 41.6834Z"
                          fill="#374C98"
                        />
                        <path
                          d="M23.3038 6.22751C14.0555 6.06459 6.3981 13.4536 6.23518 22.7019C6.06267 31.9406 13.4517 39.598 22.7 39.7705C31.9483 39.9334 39.6057 32.5444 39.7686 23.3057C39.9315 14.0574 32.5521 6.40002 23.3038 6.22751ZM30.2136 32.7361H14.9564L16.8252 22.3952L14.6593 22.8457V21.0823L17.151 20.5552L18.7707 11.6615H24.8563L23.4763 19.2326L25.6039 18.7822V20.5456L23.1504 21.0535L21.732 28.8738H31.3445L30.2136 32.7361Z"
                          fill="#374C98"
                        />
                      </svg>
                      <div className="text-start ms-3">
                        <span className="d-block fs-16 text-black">Litecoin</span>
                      </div>
                      <i className="fa fa-angle-down scale5 ms-auto"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item>Bitcoin </Dropdown.Item>
                      <Dropdown.Item>ETH coin </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="table-responsive">
                    <OrderData />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                  <Dropdown className="dropdown custom-dropdown mb-0 tbl-orders-style">
                    <Dropdown.Toggle variant="" as="div" className="btn sharp tp-btn dark-btn i-false">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          stroke="#342E59"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          stroke="#342E59"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          stroke="#342E59"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item>Details </Dropdown.Item>
                      <Dropdown.Item className="text-danger">Cancel </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pb-0 px-4">
                  <Dropdown className="dropdown custom-dropdown d-block tbl-orders">
                    <Dropdown.Toggle
                      variant=""
                      as="div"
                      className="btn  d-flex align-items-center border-0 order-bg rounded  i-false"
                    >
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.4169 0.00384778C10.7089 -0.226162 0.233857 9.88467 0.00384778 22.5831C-0.226162 35.2816 9.88467 45.7662 22.5831 45.9962C35.2816 46.2262 45.7662 36.1153 45.9962 23.4073C46.2262 10.7089 36.1153 0.224274 23.4169 0.00384778ZM22.6598 41.6835C12.3573 41.4918 4.12485 32.9623 4.31653 22.6598C4.49862 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49862 41.8656 13.0281 41.6835 23.3306C41.5014 33.6332 32.9623 41.8656 22.6598 41.6835Z"
                          fill="#FF782C"
                        />
                        <path
                          d="M23.3019 6.22369C14.0536 6.06076 6.3962 13.4498 6.23327 22.6981C6.17864 25.6077 6.8773 28.3592 8.14427 30.7705H13.4163V14.2616C13.4163 13.2524 14.7877 12.9313 15.2334 13.837L23 29.5649L30.7667 13.838C31.2123 12.9313 32.5837 13.2524 32.5837 14.2616V30.7705H37.8395C39.0182 28.5298 39.7198 25.9997 39.7667 23.3019C39.9297 14.0536 32.5502 6.3962 23.3019 6.22369Z"
                          fill="#FF782C"
                        />
                        <path
                          d="M30.667 31.7289V18.3672L23.8587 32.1534C23.5367 32.808 22.4624 32.808 22.1403 32.1534L15.333 18.3672V31.7289C15.333 32.2579 14.9046 32.6872 14.3746 32.6872H9.34223C12.3237 36.8763 17.1712 39.6632 22.6981 39.7667C28.4455 39.8683 33.5747 37.0507 36.6769 32.6872H31.6254C31.0954 32.6872 30.667 32.2579 30.667 31.7289Z"
                          fill="#FF782C"
                        />
                      </svg>
                      <div className="text-left ms-3">
                        <span className="d-block fs-16 text-black">Monero</span>
                      </div>
                      <i className="fa fa-angle-down scale5 ms-auto"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item">Dash coin</Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">ETH coin</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="table-responsive">
                    <OrderData />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-6 col-xxl-12">
              <QuickTransfer />
            </div>
            <div className="col-xl-6 col-xxl-12">
              <QuickTrade />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
