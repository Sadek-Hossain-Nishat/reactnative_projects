import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
export type ButtonProps={
    onPress?: () => void;
    text:string;
    size?:"double";
    theme?:"secondary" | "accent";

}


export type ChildrenProps={
    children:ReactNode
}

export type CalculatorState={
    currentValue:string;
    operator:string|null;
    previousValue?:string|null

}