import * as React from "react";
import {Box as BoxBase} from "@gluestack-ui/themed";
import BoxType from "./BoxType";


export default function Box(props: BoxType) {

    return (<BoxBase {...props}>{props.children}</BoxBase>);
}