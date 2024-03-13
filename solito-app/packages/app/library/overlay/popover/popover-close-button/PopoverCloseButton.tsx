import * as React from "react";
import {PopoverCloseButton as PopoverCloseButtonBase} from "@gluestack-ui/themed";
import PopoverCloseButtonType from "./PopoverCloseButtonType";

export default function PopoverCloseButton(props: PopoverCloseButtonType) {

    return (
        <PopoverCloseButtonBase {...props}>{props.children}</PopoverCloseButtonBase>);
}