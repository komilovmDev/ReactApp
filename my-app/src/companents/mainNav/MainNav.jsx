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
import { Timer } from "../deadline/Timer";

export default function MainNav({ setTaskData, taskData }) {
  const closeRef = useRef();
  const inputRef = useRef();
  const [inputDate, setInputDate] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [currentHorseTime, setHourseDateTime] = useState(null);

  let interval;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds, isRunning]);

  const tokenw = localStorage.getItem("accessToken");
  const userID = localStorage.getItem("userID");

  const AddBoard = async () => {
    try {
      const response = await axios.post(
        "https://manager.zafarr.uz/routers/boards/",
        {
          title: inputRef.current.value,
          user: [userID],
          end_date: `${newDateValue}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${tokenw}`,
          },
        }
      );
      console.log(response.data);

      // Обновление данных без перезагрузки страницы
      setTaskData([...taskData, response.data]);

      closeRef.current.classList.add("none");
    } catch (error) {
      console.error("Error:", error);
      console.log( `"${newDateValue}"`);
    }
  };

  const { boardChange, setBoardChange } = useContext(AppContext);

  const handleButtonClick = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const formattedDate = `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day}`;
    const formattedDateTime = `${formattedDate}`;

    setCurrentDateTime(formattedDateTime);
    console.log(`${year}-${month}-${day}`);
  };

  const handleButtonClickTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${(hours < 10 ? '0' : '') + hours}:${(minutes < 10 ? '0' : '') + minutes}`;

    setHourseDateTime(formattedTime);
  };


  const [newDateValue , setNewDataValue] = useState(null)

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
                <div class="menu-items">
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
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="dropdownbtnmenu">
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
        </div>
        <div className="QoshishBtn">
          <button onClick={() => { closeRef.current.classList.remove("none"); handleButtonClick(); handleButtonClickTime() }}>
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
          <label className="Vazifa-Inp" for="textref" >
            <p>Vazifa:</p>
            <input ref={inputRef} name="textref" type="text" placeholder="Add board title" />
          </label>
          <div className="Timer">
            <label className="DateRegister" for="Date" >
              <p>Boshlash:</p> 
              {currentDateTime && <p> {currentDateTime}</p>}
              {currentHorseTime && <p> {currentHorseTime}</p>}
            </label>
            <label className="DateRegister" for="Date" >
              <p>Tugatish:</p>
              <input
                type="datetime-local"
                name="Date"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value) + setNewDataValue(e.target.value)}
              />
            </label>
          </div>
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
