import React from 'react';
import {Image,View} from 'react-native';

const Filter6 = ({
face : {
    bounds : {
        size :  {width : faceWidth,height : faceHeight}
    },
   leftEyePosition,
   rightEyePosition,
   noseBasePosition
}
}) => {
const filterWidth = faceWidth
const filterHeight = faceHeight/3
const transFormAngle = (angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y)/(rightEyePosition.x - leftEyePosition.x))) => {
angleRad = (angleRad*180)/Math.PI
   return(
       <View style={{
           position : 'absolute',
           left,
           right,
           top,
           width,
           height
       }}>
       </View>
   )
}
return(
    <View style = {{position:'absolute',left : leftEyePosition.x - filterWidth*0.675,top : leftEyePosition.y - filterHeight*0.5}}>
        <Image source = {require("./assets/flower-pic3.png")}
         style={{width : 3.5 , 
            height : 1.2,
            left : 0.46,
            right : 0.15,
            top : 0.7, 
            resizeMode : "contain",
            transform : [{rotate : `${ transFormAngle()}deg`}]
            }}/>
    </View>
)
}
export default Filter6 