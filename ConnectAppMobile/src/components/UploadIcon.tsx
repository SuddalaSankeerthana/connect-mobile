import React from 'react';
import {Image, ImageSourcePropType, ImageStyle, ViewStyle} from 'react-native';

interface UploadIconProps {
  testID: string;
  source: ImageSourcePropType;
  style: ImageStyle;
}

const UploadIcon: React.FC<UploadIconProps> = ({testID, source, style}) => {
  return <Image testID={testID} style={style} source={source} />;
};

export default UploadIcon;
