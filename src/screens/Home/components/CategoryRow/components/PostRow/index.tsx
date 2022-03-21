import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'
import utf8 from 'utf8'
// import RenderHtml from 'react-native-render-html'

import { Post } from '../../../../../../@types/interfaces'
import api from '../../../../../../services/api'
import { stripHTML } from '../../../../../../utils'

import {
  Container,
  ContentPost,
  ImagePost,
  SeeMore,
  TitlePost,
  WrapperHeader,
  WrapperText,
} from './styles'

interface PostRowProps {
  post: Post
}

export const PostRow = ({ post }: PostRowProps) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const [image, setImage] = useState<string | null>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const { data } = await api.get(`/media/${post.featured_media}`)
      setImage(data.media_details.sizes.medium.source_url)
      setLoading(false)
    }
    getData()
  }, [post])

  return (
    <Container
      style={{
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      {loading && !image ? (
        <ActivityIndicator color={theme.COLORS.PRIMARY} size='large' />
      ) : (
        <>
          <WrapperHeader>{image ? <ImagePost source={{ uri: image }} /> : null}</WrapperHeader>
          <WrapperText>
            <TitlePost>{utf8.encode(post.title.rendered).substring(0, 34) + '...'}</TitlePost>
            {/* <RenderHtml contentWidth={235 - 16} source={post.content.rendered} /> */}
            <ContentPost>
              {stripHTML(post.content.rendered.toString()).slice(0, 113)}...
            </ContentPost>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', { id: post.id, image: image ? image : '' })
              }
            >
              <SeeMore>Leia mais</SeeMore>
            </TouchableOpacity>
          </WrapperText>
        </>
      )}
    </Container>
  )
}
