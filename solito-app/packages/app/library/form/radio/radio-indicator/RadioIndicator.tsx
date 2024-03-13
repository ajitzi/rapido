import * as React from "react";
import {RadioIndicator as RadioIndicatorBase} from "@gluestack-ui/themed";
import RadioIndicatorType from "app/library/form/radio/radio-indicator/RadioIndicatorType";


export default function RadioIndicator(props: RadioIndicatorType) {

    return <RadioIndicatorBase {...props}>{props.children}</RadioIndicatorBase>
}