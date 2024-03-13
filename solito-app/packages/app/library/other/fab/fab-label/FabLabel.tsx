import * as React from "react";
import {FabLabel as FabLabelBase} from "@gluestack-ui/themed";
import FabLabelType from "./FabLabelType";

export default function FabLabel(props: FabLabelType) {

    return (<FabLabelBase {...props}>{props.children}</FabLabelBase>);
}