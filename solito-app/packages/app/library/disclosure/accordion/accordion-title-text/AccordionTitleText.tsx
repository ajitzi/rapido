import * as React from "react";
import {AccordionTitleText as AccordionTitleTextBase} from "@gluestack-ui/themed";
import AccordionTitleTextType from "./AccordionTitleTextType";

export default function AccordionTitleText(props: AccordionTitleTextType) {

    return (<AccordionTitleTextBase {...props}>{props.children}</AccordionTitleTextBase>);
}