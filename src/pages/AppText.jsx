import { Text, StyleSheet } from 'react-native';

const AppText = () => {
  // Use the font family name that matches your file names (e.g., 'Inter-Regular')
  return <Text className='font-inter-semibold'>Hello How are you</Text>;
};

const styles = StyleSheet.create({
  // Use the exact filenames without .ttf/.otf
  InterRegular: {
    fontFamily: 'Inter-Regular', 
  },
  InterMedium: {
    fontFamily: 'Inter-Medium',
  },
  InterSemiBold: {
    fontFamily: 'Inter18pt-SemiBold',
  },
  // ... and so on for other weights
});

export default AppText