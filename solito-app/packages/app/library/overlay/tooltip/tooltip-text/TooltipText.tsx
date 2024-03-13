import * as React from "react";
import {TooltipText as TooltipTextBase} from "@gluestack-ui/themed";
import TooltipTextType from "./TooltipTextType";

export default function TooltipText(props: TooltipTextType) {

    return (<TooltipTextBase {...props}>{props.children}</TooltipTextBase>);
}