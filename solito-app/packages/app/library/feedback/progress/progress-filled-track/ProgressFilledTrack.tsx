import * as React from "react";
import {ProgressFilledTrack as ProgressFilledTrackBase} from "@gluestack-ui/themed";
import ProgressFilledTrackType from "./ProgressFilledTrackType";


export default function ProgressFilledTrack(props: ProgressFilledTrackType) {

    return (<ProgressFilledTrackBase {...props} />);
}