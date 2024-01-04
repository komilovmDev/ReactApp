/* eslint-disable react/prop-types */
import { BiSolidLock } from "react-icons/bi";
import "../../companents/mainNav/mainNav.scss";
import { useContext, useRef } from "react";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { ImEarth } from "react-icons/im";
import axios from "axios";
import { useState, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

export default function AdminNav({ setTaskData, taskData , getBoard}) {
  const closeRef = useRef();
  const inputRef = useRef();

  // function Addtack() {
  //     if (inputRef.current.value == '') {
  //         inputRef.current.classList.add('inError')
  //         closeRef.classList.add('none')
  //     } else {
  //         const newTask = {
  //             id: taskData.length + 1,
  //             name: inputRef.current.value,
  //             users: [
  //                 {
  //                     image: "https://img.a.transfermarkt.technology/portrait/big/8198-1685035469.png?lm=1"
  //                 }
  //             ]
  //         };

  //         setTaskData([...taskData, newTask])
  //         inputRef.current.classList.remove('inError')
  //         inputRef.current.value = null
  //     }

  // };

  const tokenw = localStorage.getItem("accessToken");
  const userID = localStorage.getItem("userID");

  const AddBoard = async () => {
    try {
      const response = await axios.post(
        "https://manager.zafarr.uz/routers/boards/",
        {
          title: inputRef.current.value,
          user: [userID],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${tokenw}`,
          },
        }
      );
      console.log(response.data);
      getBoard()
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const { boardChange, setBoardChange } = useContext(AppContext);

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };



  return (
    <>
      <div className="mainNav">
        <div className="BurgerDrop">
          <nav>
            <div class="navbarburg">
              <div class="containerburg nav-container">
                <input class="checkbox" type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                  <span class="line line1"></span>
                  <span class="line line2"></span>
                  <span class="line line3"></span>
                </div>
                {/* <div class="menu-items">
                  <div className="ButtonDivMain">
                    <button onClick={() => setBoardChange("active")}>
                      Bajarilmoqda
                    </button>
                    <button
                      onClick={() => setBoardChange("check")}
                    >
                      Tekshiruvda
                    </button>
                    <button
                      onClick={() => setBoardChange("red")}
                    >
                      Qutilmoqda
                    </button>
                    <button
                      onClick={() => setBoardChange("green")}
                    >
                      Bajarilgan
                    </button>
                    <button
                      onClick={() => setBoardChange("red")}
                    >
                      Bajarilmagan
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
        {/* <div className="dropdownbtnmenu">
          <Dropdown>
            <MenuButton>MENU</MenuButton>
            <Menu>
              <div className="ButtonDivMain">
                <button onClick={() => setBoardChange("active")}>
                  Bajarilmoqda
                </button>
                <button
                  onClick={() => setBoardChange("check")}
                >
                  Tekshiruvda
                </button>
                <button
                  onClick={() => setBoardChange("red")}
                >
                  Qutilmoqda
                </button>
                <button
                  onClick={() => setBoardChange("green")}
                >
                  Bajarilgan
                </button>
                <button
                  onClick={() => setBoardChange("red")}
                >
                  Bajarilmagan
                </button>
              </div>
            </Menu>
          </Dropdown>
        </div> */}
        <div className="QoshishBtn">
          <button onClick={() => closeRef.current.classList.remove("none")}>
            Qoshish
          </button>
        </div>
      </div>
      <div ref={closeRef} className="mainNavModel none">
        <div className="mainNavModelCard">
          <button
            className="close"
            onClick={() => closeRef.current.classList.add("none")}
          >
            X
          </button>
          <input ref={inputRef} type="text" placeholder="Add board title" />
          <div className="btns">
            <button onClick={() => closeRef.current.classList.add("none")} className="btns1">Cancel</button>
            <button
              className="btns2"
              onClick={() =>
                AddBoard() + closeRef.current.classList.add("none")
              }
            >
              + Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
