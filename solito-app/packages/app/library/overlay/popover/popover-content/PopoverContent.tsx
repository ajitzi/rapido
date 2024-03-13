import * as React from "react";
import {PopoverContent as PopoverContentBase} from "@gluestack-ui/themed";
import PopoverContentType from "./PopoverContentType";

export default function PopoverContent(props: PopoverContentType) {

    return (
        <PopoverContentBase {...props}>{props.children}</PopoverContentBase>);
}