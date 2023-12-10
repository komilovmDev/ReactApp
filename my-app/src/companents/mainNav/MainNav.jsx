/* eslint-disable react/prop-types */
import { BiSolidLock } from "react-icons/bi";
import "./mainNav.scss";
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

export default function MainNav({ setTaskData, taskData }) {
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
      window.location.reload();
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
          <input id="toggle" type="checkbox"/>
            <label class="toggle-container" for="toggle">
              <span class="button button-toggle"></span>
            </label>
            <nav class="nav">
              <a class="nav-item" href="">Dashboard</a>
              <a class="nav-item" href="">History</a>
              <a class="nav-item" href="">Statistics</a>
              <a class="nav-item" href="">Settings</a>
            </nav>

        </div>
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
        <button onClick={() => closeRef.current.classList.remove("none")}>
          Qoshish
        </button>
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
          <Dropdown className="Privat">
            <MenuButton className="PrivatBtn">
              <button className="PrivatOnBtn">
                <BiSolidLock /> <span>Private</span>
              </button>
            </MenuButton>
            <Menu className="dropMenu1">
              <div className="tskSelectorTitle">
                <h3>Visibility</h3>
                <p>Choose who can see this board</p>
              </div>
              <MenuItem className="dropBtn">
                <ImEarth color="#61BD4F" />
                <span>Public</span>
                <p>Anyone can see this board. Only board members can edit</p>
              </MenuItem>
              <MenuItem className="dropBtn">
                <BiSolidLock color="#EB5A46" />
                <span>Private</span>
                <p>Only board members can see and edit this board</p>
              </MenuItem>
            </Menu>
          </Dropdown>
          <div className="btns">
            <button className="btns1">Canel</button>
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
