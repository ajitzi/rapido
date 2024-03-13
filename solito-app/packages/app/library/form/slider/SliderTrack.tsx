import * as React from "react";
import {SliderTrack as UISliderTrack} from "@gluestack-ui/themed";


type SliderTrackProps = {
}

export default function SliderTrack({children, ...props}: React.ComponentProps<typeof UISliderTrack> & SliderTrackProps) {

    return (
        <UISliderTrack {...props}>
            {children}
        </UISliderTrack>
    )
}