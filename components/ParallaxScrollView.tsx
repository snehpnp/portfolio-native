import type { PropsWithChildren, ReactElement } from "react";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";


const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { bgColor: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
  
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView
      style={{
        flex: 1,
        backgroundColor: headerBackgroundColor.bgColor,
      }}
    >
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
        style={{ flex: 1 , backgroundColor: headerBackgroundColor.bgColor}}
      >
       
        <Animated.View
          style={[
            {
              height: HEADER_HEIGHT,
              overflow: "hidden",
              backgroundColor: headerBackgroundColor.bgColor,
            },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
      
        <ThemedView
          style={{
            flex: 1,
            padding: 32,
            gap: 16,
            overflow: "hidden",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: headerBackgroundColor.bgColor,
          }}
        >
          {children}
        </ThemedView>

      </Animated.ScrollView>
    </ThemedView>
  );
}
