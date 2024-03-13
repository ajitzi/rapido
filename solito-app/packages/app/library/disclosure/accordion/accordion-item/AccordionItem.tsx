import * as React from "react";
import {AccordionItem as AccordionItemBase} from "@gluestack-ui/themed";
import AccordionItemType from "./AccordionItemType";

export default function AccordionItem(props: AccordionItemType) {

    return (<AccordionItemBase {...props}>{props.children}</AccordionItemBase>);
}