import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { Pokeball } from "./Pokeball";
import { useEffect } from "react";

export const PokeballAnimation = () => {
  const DURATION = 500;

  const offset = useSharedValue(-30);
  const translateX = useSharedValue(50);
  const opacity = useSharedValue<number>(0);
  const opacity2 = useSharedValue<number>(0);
  const scale = useSharedValue<number>(1);
  const scaleX = useSharedValue<number>(1);
  const rotate = useSharedValue<number>(30);

  const animatedPokeball = useAnimatedStyle(() => ({
    transform: [
      { translateY: offset.value },
      { scaleX: scaleX.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity2.value,
  }));

  const animatedShadow = useAnimatedStyle(() => ({
    scale: scale.value,
    opacity: opacity.value,
  }));

  const animatedHorisontal = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  useEffect(() => {
    rotate.value = withDelay(
      DURATION,
      withRepeat(withTiming(-rotate.value, { duration: 1000 }), 2, true, () => {
        rotate.value = withTiming(0, { duration: 300 });
      })
    );

    opacity.value = withRepeat(
      withTiming(1, { duration: 1000 }),
      3,
      false,
      () => {
        opacity.value = withTiming(0, { duration: 0 });
      }
    );
    opacity2.value = withSpring(1, { duration: 500 }, () => {
      opacity2.value = withDelay(2500, withSpring(0, { duration: 500 }));
    });
    scale.value = withRepeat(withTiming(2, { duration: DURATION }), 6, true);
    offset.value = withRepeat(
      withTiming(-offset.value, { duration: DURATION }),
      5,
      true,
      () => {
        offset.value = withTiming(-10 * offset.value, { duration: DURATION });
      }
    );
    scaleX.value = withRepeat(
      withTiming(1.2, { duration: DURATION }),
      5,
      true,
      () => {
        scaleX.value = withTiming(1, { duration: DURATION });
      }
    );
    translateX.value = withDelay(
      DURATION,
      withRepeat(
        withTiming(-translateX.value, { duration: 1000 }),
        1,
        true,
        () => {
          translateX.value = withTiming(0, { duration: 1000 });
        }
      )
    );
  }, []);
  return (
    <View
      style={{
        position: "absolute",
        bottom: 100,
        left: 0,
        right: 0,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={[
          animatedHorisontal,
          {
            justifyContent: "center",
            alignItems: "center",
          },

          ,
        ]}
      >
        <Animated.View style={[animatedPokeball, { width: 150, height: 150 }]}>
          <Pokeball />
        </Animated.View>
        <Animated.View style={[styles.shadow, animatedShadow]} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    width: 15,
    height: 15,
    backgroundColor: "rgba(61, 61, 61, 0.5)",
    borderRadius: 50,
    transform: [{ scaleX: 2 }],
  },
});
