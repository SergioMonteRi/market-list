import { Image, View } from 'react-native'

import { IMAGES } from '@/assets'

import { styles } from './styles'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOGO} style={styles.logo} />
    </View>
  )
}
