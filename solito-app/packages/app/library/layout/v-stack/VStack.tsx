import * as React from "react";
import {VStack as VStackBase} from "@gluestack-ui/themed";
import VStackType from "app/library/layout/v-stack/VStackType";


export default function VStack(props: VStackType) {

    return (<VStackBase {...props}>{props.children}</VStackBase>);
}