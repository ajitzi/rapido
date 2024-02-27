import * as React from "react";
import {Spinner as UISpinner} from "@gluestack-ui/themed";


type SpinnerProps = {}

export default function Spinner({...props}: React.ComponentProps<typeof UISpinner> & SpinnerProps) {

    return (<UISpinner {...props} />)
}