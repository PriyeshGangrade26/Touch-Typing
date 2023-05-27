import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Main,
  Heading,
  Text,
  Input,
  Congratulations,
} from "./Home.style";
import Timer from "../../components/Timer/Timer";
import Word from "../../components/Word/Word";
import { getData } from "../../data";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export default function Home({ LogOutLocalAuthentication }) {
  const [userText, setUserText] = useState("");
  const [result, setResult] = useState(false);
  const data = useRef(getData());

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  const [typingLoadingSpinner, settypingLoadingSpinner] = useState(false);
  const [typingHideEverything, settypingHideEverything] = useState(true);

  function handleChange(value) {
    setStartCounter(true);

    if (value.endsWith(" ")) {
      if (activeWordIndex === data.current.length) {
        setUserText("");
        setResult(true);
        setStartCounter(false);
        return;
      }

      setActiveWordIndex((index) => index + 1);
      setUserText("");

      setCorrectWordArray((_data) => {
        const word = value.trim();
        const newResult = [..._data];
        newResult[activeWordIndex] = word === data.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserText(value);
    }
  }
  const LogOut = () => {
    let isLoggedOut = false;
    settypingHideEverything(false);
    settypingLoadingSpinner(true);
    sessionStorage.setItem("isLoggedOut", "true");

    setTimeout(() => {
      isLoggedOut = true;
      LogOutLocalAuthentication();
      navigate("/");
      setTimeout(() => {
        if (isLoggedOut) {
          settypingLoadingSpinner(false);
          settypingHideEverything(true);
        }
      }, 3000);
    }, 3000);
  };

  return (
    <>
      {typingLoadingSpinner && <LoadingSpinner />}
      {typingHideEverything && (
        <Container>
          <Main>
            <div className="alignLogoutBtn">
              <div>
                <Link to="/about" className="about">Created By</Link>
              </div>
              <Heading>Touch Typing</Heading>
              <button
                className="logoutBtn"
                onClick={() => LogOut()}>
                Log Out
              </button>
            </div>
            <Timer
              startCounter={startCounter}
              correctWords={correctWordArray.filter(Boolean).length}
            />
            {result ? null : (
              <Text>
                {data.current.map((word, index) => {
                  return (
                    <Word
                      text={word}
                      active={index === activeWordIndex}
                      correct={correctWordArray[index]}
                    />
                  );
                })}
              </Text>
            )}
            {result ? (
              <Congratulations>Congratulations</Congratulations>
            ) : (
              <Input
                type="text"
                value={userText}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Start Typing..."
              />
            )}
          </Main>
        </Container>
      )}
    </>
  );
}
