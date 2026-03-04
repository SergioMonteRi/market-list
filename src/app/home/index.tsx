import { Image, View } from 'react-native'

import { IMAGES } from '@/assets'
import { BaseButton } from '@/components'

import { styles } from './styles'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOGO} style={styles.logo} />

      <BaseButton title="Adicionar" />
    </View>
  )
}
