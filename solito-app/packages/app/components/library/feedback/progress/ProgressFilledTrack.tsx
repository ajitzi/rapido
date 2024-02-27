import * as React from "react";
import {ProgressFilledTrack as UIProgressFilledTrack} from "@gluestack-ui/themed";


type ProgressFilledTrackProps = {
}

export default function ProgressFilledTrack(props: React.ComponentProps<typeof UIProgressFilledTrack> & ProgressFilledTrackProps) {

    return (
        <UIProgressFilledTrack {...props} />
    )
}