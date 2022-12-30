/// Menu
import Metismenu from 'metismenujs';
import React, { Component, useContext, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import useScrollPosition from 'use-scroll-position';

import { ThemeContext } from '../../../context/ThemeContext';
import LogoImg from '../../../images/logo.png';

/// Scroll
/// Link
/// Image
class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    // function toggleFunc() {
    //   return aaa.classList.toggle("menu-toggle");
    // }
    // btn.addEventListener("click", toggleFunc);
  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "",
      "dashboard-dark",
      "coin-details",
      "my-wallet",
      "transactions",
      "portofolio",
      "market-capital",
      "task"
    ],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail"
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail"
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart"
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid"
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery"
    ],
    redux = ["redux-form", "redux-wizard", "todo"],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery"
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503"
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503"
    ];

  return (
    <div className={`deznav _i-hover`} style={{ backgroundColor: "0a0a76" }}>
          
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">
          <li style={{marginBottom: "4rem"}}>
          <Link children="ai-icon" to="/">
              <i>
                <img src={LogoImg} alt="logo"width={30}/>
            </i>
              <span className="nav-text">GSC Exchange</span>
           
            </Link>
            </li>
          <li className={`${path === "dashboard" ? "mm-active" : ""}`}>
            <Link children="ai-icon" to="/dashboard">
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className={`${path === "deposit" ? "mm-active" : ""}`}>
            <Link  to="#">
              <i className="flaticon-050-info"></i>
              <span className="nav-text">Deposit</span>
            </Link>
          </li>
          <li className={`${path === "withdraw" ? "mm-active" : ""}`}>
            <Link  to="#">
              <i className="flaticon-041-graph"></i>
              <span className="nav-text">Withdraw</span>
            </Link>
          </li>
          <li className={`${path === "buy-sell" ? "mm-active" : ""}`}>
            <Link  to="#">
              <i className="flaticon-086-star"></i>
              <span className="nav-text">Buy/Sell</span>
            </Link>
          </li>
          <li className={`${path === "exchange" ? "mm-active" : ""}`}>
            <Link  to="#">
              <i className="flaticon-045-heart"></i>
              <span className="nav-text">Exchange</span>
            </Link>
          </li>
          <li className={`${path === "setting" ? "mm-active" : ""}`}>
            <Link  to="#">
              <i className="flaticon-087-setting"></i>
              <span className="nav-text">Setting</span>
            </Link>
          </li>
        </MM>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
