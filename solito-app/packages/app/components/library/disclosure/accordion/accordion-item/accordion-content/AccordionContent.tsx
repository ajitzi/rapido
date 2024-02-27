import * as React from "react";
import {AccordionContent as AccordionContentBase} from "@gluestack-ui/themed";
import AccordionContentType from "./AccordionContentType";

export default function AccordionContent(props: AccordionContentType) {

    return (<AccordionContentBase {...props}>{props.children}</AccordionContentBase>);
}