import * as React from "react";
import {HStack as HStackBase} from "@gluestack-ui/themed";
import HStackType from "./HStackType";


export default function HStack(props: HStackType) {

    return (<HStackBase {...props}>{props.children}</HStackBase>);
}