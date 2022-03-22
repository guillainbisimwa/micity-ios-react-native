import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  radius: 6,
  base: 16,
  padding: 25,
  font: 16,
  opacity: 0.8,
  CAPTURE_SIZE: Math.floor(height * 0.08),
  sizes: {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,
  
    // font sizes
    h1: 23,
    h2: 20,
    h3: 14,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,
    small: 10
  }
};
