import * as React from "react";
import {Center as CenterBase} from "@gluestack-ui/themed";
import CenterType from "./CenterType";

export default function Center(props: CenterType) {

    return (<CenterBase {...props}>{props.children}</CenterBase>);
}