import { View, Text } from 'react-native'
import SVG, { Circle } from "react-native-svg"


type RingProgressProps = {
    radius?: number
    strokeWidth?: number
    progress: number
}

const color= "#EE0f55"

const RingProgress = ({radius = 100, strokeWidth = 35, progress}: RingProgressProps) => {

    const innerRadius = radius - strokeWidth / 2
    const circumference = 2 * Math.PI * innerRadius

  return (
    <View style={{width:radius * 2, height:radius * 2, alignSelf:"center"}} >
      <SVG>
        {/* background */}
        <Circle cx={radius} cy={radius} r={innerRadius} strokeWidth={strokeWidth} stroke={color} opacity={0.2} />

        {/* foreground */}
        <Circle cx={radius} cy={radius} originX={radius} originY={radius} r={innerRadius} strokeWidth={strokeWidth} stroke={color} strokeDasharray={[circumference * progress, circumference]} strokeLinecap='round' rotation="-90" />
      </SVG>
    </View>
  )
}

export default RingProgress