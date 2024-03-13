import * as React from "react";
import {SliderFilledTrack as SliderFilledTrackBase} from "@gluestack-ui/themed";
import SliderFilledTrackType from "./SliderFilledTrackType";


export default function SliderFilledTrack(props: SliderFilledTrackType) {

    // @ts-ignore
    return <SliderFilledTrackBase {...props}>{props.children}</SliderFilledTrackBase>
}