import React from 'react';
import { View, Text, Button, Animated} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

// export default function CountDown() {
//     const [isPlaying, setIsPlaying] = React.useState(true)
//     return (
//       <View style = {{position: 'absolute', alignSelf: 'center', top: '5%'}}>
//         <CountdownCircleTimer
//           isPlaying={isPlaying}
//           duration={2}
//           colors={[
//             ['#004777', 0.4],
//             ['#F7B801', 0.4],
//             ['#A30000', 0.2],
//           ]}
//           onComplete={() => [false]}
//       >
//         {({ remainingTime, animatedColor }) => (
//           <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
//             {remainingTime}
//           </Animated.Text>
//         )}
//       </CountdownCircleTimer>
//       <Button title="Next Exercise" onPress={() => setIsPlaying(prev => !prev)}/>
//     </View>
//     );
//   }

  export default function CountDown() {
    const [isPlaying, setIsPlaying] = React.useState(true)
    return (
        <View style = {{position: 'absolute', alignSelf: 'center', top: '5%'}}>
            <CountdownCircleTimer
            isPlaying={isPlaying}
            trailColor = '#d9d9d9'
            duration={40}
            rotation = 'counterclockwise'
            colors={[
                ['#A30000', 1],
            ]}
            onComplete={() => [false]}
        >
            {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
                {remainingTime}
            </Animated.Text>
            )}
        </CountdownCircleTimer>
        <Button title="Finish" onPress={() => setIsPlaying(prev => !prev)}/>
        </View>
    );
}
