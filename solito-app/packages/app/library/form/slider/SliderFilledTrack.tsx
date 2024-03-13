import * as React from "react";
import {SliderFilledTrack as UISliderFilledTrack} from "@gluestack-ui/themed";


type SliderFilledTrackProps = {
}

export default function SliderFilledTrack({children, ...props}: React.ComponentProps<typeof UISliderFilledTrack> & SliderFilledTrackProps) {

    return (
        <UISliderFilledTrack {...props}>
            {children}
        </UISliderFilledTrack>
    )
}