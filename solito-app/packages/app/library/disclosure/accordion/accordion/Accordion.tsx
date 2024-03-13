import * as React from "react";
import {Accordion as AccordionBase} from "@gluestack-ui/themed";
import AccordionType from "./AccordionType";

export default function Accordion(props: AccordionType) {

    return (<AccordionBase {...props}>{props.children}</AccordionBase>);
}