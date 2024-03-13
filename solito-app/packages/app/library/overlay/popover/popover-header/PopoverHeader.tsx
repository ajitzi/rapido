import * as React from "react";
import {PopoverHeader as PopoverHeaderBase} from "@gluestack-ui/themed";
import PopoverHeaderType from "./PopoverHeaderType";

export default function PopoverHeader(props: PopoverHeaderType) {

    return (<PopoverHeaderBase {...props}>{props.children}</PopoverHeaderBase>);
}