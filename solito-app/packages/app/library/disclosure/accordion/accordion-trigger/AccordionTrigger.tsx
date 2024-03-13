import * as React from "react";
import {AccordionTrigger as AccordionTriggerBase} from "@gluestack-ui/themed";
import AccordionTriggerType from "./AccordionTriggerType";

export default function AccordionTrigger(props: AccordionTriggerType) {

    return (<AccordionTriggerBase {...props}>{props.children}</AccordionTriggerBase>);
}