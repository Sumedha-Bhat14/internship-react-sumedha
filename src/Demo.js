import React from "react";
import TestImg from "./happy-woman-standing-indoors-drinking-citrus-beverage_171337-14305.jpg";
import './App.css'

function Demo() {
  return (
    <div>
      <div className="firstPage">
        <div className="u-layout">
          <img src={TestImg}></img>
        </div>
        <div className="intro">
          <h1> Prices </h1>
          <p> Images from Freepik </p>
          <button type="button" className="btnn">
            {" "}
            Work with us{" "}
          </button>
        </div>
      </div>
      <br></br>

      <div>
        <div className="section">
          <h1> Benefits </h1>
          <div className="Page">
            <p>
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla
              pariatur.
            </p>
          </div>
          <div className="flex-container">
            <div className="flex-box1">
              <h1> Test Day </h1>
              <h1> $12 </h1>
              <button type="button" className="btn">
                {" "}
                Choose Package{" "}
              </button>
              <p>
                {" "}
                1 Initial Assessment (1 hour) Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </p>
            </div>

            <div className="flex-box">
              <h1> Basic Bundle </h1>
              <h1> $55 </h1>
              <button type="button" className="btn">
                {" "}
                Choose Package{" "}
              </button>
              <p>
                {" "}
                1 Initial Assessment (1 hour) 4 (30 minute) Follow-up Sessions{" "}
              </p>
            </div>

            <div className="flex-box">
              <h1> Advance Bundle </h1>
              <h1> $150 </h1>
              <button type="button" className="btn">
                {" "}
                Choose Package{" "}
              </button>
              <p>
                {" "}
                1 Initial Assessment (1 hour) 4 (30-minute) Follow-up Sessions
                10% off any tests Access to your personal dietitians email to
                ask questions and clarify doubt{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>


        <div className="frequently_asked_section">
          <div className="page1">
            <h1> Frequently Asked Questions </h1>
            {/* <p> What is Naturopath? </p>  */}
            <disable>
              {" "}
              <input type="Name" placeholder="What is Naturopath? ^"></input>
            </disable>
            <p>
              {" "}
              Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur id suscipit ex. Suspendisse rhoncus aoreet purus quis
              elementum. Phasellus sed efficitur dolor, et ultricies sapien.
              Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
              odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit
              amet.
            </p>
          </div>

          <div className="form-page">
            <form className="form">
              <h1> How can i help you? </h1>
              <p>
                Please take a few moments to let me know about yourself and your
                health goals before we start working together:
              </p>
              <div>
                {/* <label for="NameFormControlInput1" className="form-label"><ins> Name </ins></label> */}
                <input type="Name" placeholder="Enter Name"></input>
              </div>

              <div>
                {/* <label for="exampleFormControlInput1" className="form-label"><ins> Email adresss </ins></label> */}
                <input type="email" placeholder="Enter Email"></input>
              </div>

              <div>
                <br></br>
                <label for="exampleFormControlTextarea1" class="form-label">
                  ...
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <br></br>
                <button type="button" className="bbtn">
                  {" "}
                  Send Message{" "}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="portfolio">
          <div className="container">
            <h1> NUTRITION </h1>
            <p className="links"> f x @ </p>

            <h1> Quick Links </h1>
            <a className="links" href="#">
              {" "}
              About me{" "}
            </a>
            <a className="links" href="#">
              {" "}
              Consulation{" "}
            </a>
            <a className="links" href="#">
              {" "}
              My Blog{" "}
            </a>
            <a className="links" href="#">
              {" "}
              Books{" "}
            </a>

            <h1> Our Service </h1>
            <a className="links" href="#">
              {" "}
              Support & Motivation{" "}
            </a>
            <a className="links" href="#">
              {" "}
              Weight Loss Programs{" "}
            </a>
            <a className="links" href="#">
              {" "}
              Personalized Nutrition{" "}
            </a>
            <a className="links" href="#">
              {" "}
              Healthy Daily Life
            </a>
            <a className="links" href="#">
              {" "}
              Balance Body & Mind{" "}
            </a>

            <h1> Newsletter </h1>
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input type="email" placeholder="Enter email"></input>
            <button type="button" className="bttn">
              {" "}
              SUBMIT{" "}
            </button>
          </div>
        </div>
        <div className="content">
          <div className="last">
            <p>
              {" "}
              This site was created with{" "}
              <a className="links" href="#">
                {" "}
                Nicepage{" "}
              </a>{" "}
            </p>
          </div>
        </div>

    </div>
  );
}

export default Demo;
