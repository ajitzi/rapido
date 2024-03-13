import * as React from "react";
import {Tooltip as TooltipBase} from "@gluestack-ui/themed";
import TooltipType from "./TooltipType";

export default function Tooltip(props: TooltipType) {

    return (<TooltipBase {...props}>{props.children}</TooltipBase>);
}