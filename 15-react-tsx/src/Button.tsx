import React, { useEffect, useRef, useState } from "react";
import {type ButtonColor} from '../lib/types'

// type ButtonProps = {
//   backgroundColor: string;
//   fontSize: number;
//   pillShaped: boolean;
//   padding: [number, number, number, number];
// };
type ButtonStyle = {
  style: React.CSSProperties;
};

type componentProps = React.ComponentPropsWithoutRef<"button"> & {};

type User = {
  name: string;
};

// const elements will make the value not just string but actual value
const buttonText = [
  "click me",
  "Click me again",
  "Click me one more time",
] as const;

type UserProfile = {
  sessionId: string;
  name: string;
};

// THis is used to omit some type from existing type
type GuestProfile = Omit<UserProfile, "name">;



const Button = () => {
  //   const [count, setCount] = useState<number>(0);
  //   const [text, setText] = useState("click me");
  //   const [user, setUser] = useState<User | null>(null);

  //   const name = user?.name;

  //   useEffect(() => {
  // //no need type
  //   })

  //   const ref = useRef<HTMLButtonElement>(null);

  //   useEffect(() => {
  //     //Assert the type of buttoncolor to the value we are getting from localstorage
  //     const previousColor = localStorage.getItem("buttonColor") as ButtonColor;
  //   });

  //Generics type
  const convertToArray = <T,>(value: T): T[] => {
    return [value];
  };

  convertToArray(5);
  convertToArray("name");

  return (
    <button>
      {buttonText.map((option) => {
        return option;
      })}
    </button>
  );
};

export default Button;
