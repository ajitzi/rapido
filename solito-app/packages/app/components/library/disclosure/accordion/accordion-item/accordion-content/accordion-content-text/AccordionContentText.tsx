import * as React from "react";
import {AccordionContentText as AccordionContentTextBase} from "@gluestack-ui/themed";
import AccordionContentTextType from "./AccordionContentTextType";

export default function AccordionContentText(props: AccordionContentTextType) {

    return (<AccordionContentTextBase {...props}>{props.children}</AccordionContentTextBase>);
}