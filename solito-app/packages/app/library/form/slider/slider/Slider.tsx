import * as React from "react";
import {Slider as SliderBase} from "@gluestack-ui/themed";
import SliderType from "./SliderType";


export default function Slider(props: SliderType) {

    // @ts-ignore
    return <SliderBase {...props}>{props.children}</SliderBase>
}