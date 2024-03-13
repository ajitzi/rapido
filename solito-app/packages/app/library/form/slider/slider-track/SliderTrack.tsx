import * as React from "react";
import {SliderTrack as SliderTrackBase} from "@gluestack-ui/themed";
import SliderTrackType from "./SliderTrackType";


export default function SliderTrack(props: SliderTrackType) {

    // @ts-ignore
    return <SliderTrackBase {...props}>{props.children}</SliderTrackBase>
}