import * as React from "react";
import {TooltipContent as TooltipContentBase} from "@gluestack-ui/themed";
import TooltipContentType from "./TooltipContentType";

export default function TooltipContent(props: TooltipContentType) {

    return (<TooltipContentBase {...props}>{props.children}</TooltipContentBase>);
}