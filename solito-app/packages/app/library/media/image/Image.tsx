import * as React from "react";
import {Image as ImageBase} from "@gluestack-ui/themed";
import ImageType from "./ImageType";


export default function Image(props: ImageType) {

    return (<ImageBase {...props} />);
}