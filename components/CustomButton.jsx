import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={` ${containerStyles} {isLoading ? "opacity-50" : ""} bg-secondary rounded-xl min-h-[62px] items-center justify-center`}
      disabled={isLoading}
    >
      <Text className={` ${textStyles} text-primary text-lg font-psemibold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
