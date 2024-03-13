import * as React from "react";
import {SliderThumb as UISliderThumb} from "@gluestack-ui/themed";


type SliderThumbProps = {
}

export default function SliderThumb({children, ...props}: React.ComponentProps<typeof UISliderThumb> & SliderThumbProps) {

    return (
        <UISliderThumb {...props}>
            {children}
        </UISliderThumb>
    )
}