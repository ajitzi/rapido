import * as React from "react";
import {Pressable as PressableBase} from "@gluestack-ui/themed";
import PressableType from "./PressableType";


type PressableProps = {
}

export default function Pressable(props: PressableType) {

    // @ts-ignore
    return <PressableBase {...props}>{props.children}</PressableBase>
}