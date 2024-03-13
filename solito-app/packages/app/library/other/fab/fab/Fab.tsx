import * as React from "react";
import {Fab as FabBase} from "@gluestack-ui/themed";
import FabType from "./FabType";

export default function Fab(props: FabType) {

    return (<FabBase {...props}>{props.children}</FabBase>);
}