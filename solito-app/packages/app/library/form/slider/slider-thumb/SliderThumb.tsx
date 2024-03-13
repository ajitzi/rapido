import * as React from "react";
import {SliderThumb as SliderThumbBase} from "@gluestack-ui/themed";
import SliderThumbType from "./SliderThumbType";


export default function SliderThumb(props: SliderThumbType) {

    // @ts-ignore
    return <SliderThumbBase {...props}>{props.children}</SliderThumbBase>
}