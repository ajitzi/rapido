import * as React from "react";
import {PopoverBackdrop as PopoverBackdropBase} from "@gluestack-ui/themed";
import PopoverBackdropType from "./PopoverBackdropType";

export default function PopoverBackdrop(props: PopoverBackdropType) {

    return (
        <PopoverBackdropBase {...props}>{props.children}</PopoverBackdropBase>);
}