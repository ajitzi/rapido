import * as React from "react";
import {FormControlHelper as FormControlHelperBase} from "@gluestack-ui/themed";
import FormControlHelperType from "./FormControlHelperType";


export default function FormControlHelper(props: FormControlHelperType) {

    return <FormControlHelperBase {...props}>{props.children}</FormControlHelperBase>
}