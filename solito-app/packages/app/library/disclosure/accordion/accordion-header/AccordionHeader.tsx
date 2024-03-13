import * as React from "react";
import {AccordionHeader as AccordionHeaderBase} from "@gluestack-ui/themed";
import AccordionHeaderType from "./AccordionHeaderType";

export default function AccordionHeader(props: AccordionHeaderType) {

    return (<AccordionHeaderBase {...props}>{props.children}</AccordionHeaderBase>);
}