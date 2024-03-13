import * as React from "react";
import {PopoverBody as PopoverBodyBase} from "@gluestack-ui/themed";
import PopoverBodyType from "./PopoverBodyType";

export default function PopoverBody(props: PopoverBodyType) {

    return (
        <PopoverBodyBase {...props}>{props.children}</PopoverBodyBase>);
}