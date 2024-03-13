import * as React from "react";
import {Slider as UISlider} from "@gluestack-ui/themed";


type SliderProps = {
}

export default function Slider({children, ...props}: React.ComponentProps<typeof UISlider> & SliderProps) {

    return (
        <UISlider {...props}>
            {children}
        </UISlider>
    )
}