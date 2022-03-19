import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { Category, Post } from '../../../../@types/interfaces'
import api from '../../../../services/api'
import { PostRow } from './components/PostRow'
import {
  ButtonSeeMore,
  Container,
  IconStyled,
  TextSeeMore,
  TitleCategory,
  WrapperCategories,
  WrapperHeader,
} from './styles'

interface CategoryRowProps {
  category: Category
}

export const CategoryRow = ({ category }: CategoryRowProps) => {
  const theme = useTheme()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function getData() {
      const { data } = await api.get(`/posts?categories=${category.id}&per_page=4`)
      setPosts(data)
    }
    getData()
  }, [category])

  return (
    <Container>
      <WrapperHeader>
        <TitleCategory>{category.name}</TitleCategory>
        <ButtonSeeMore>
          <TextSeeMore>Ver mais</TextSeeMore>
          <IconStyled name='chevron-right' size={RFValue(24)} color={theme.COLORS.DARK} />
        </ButtonSeeMore>
      </WrapperHeader>
      <WrapperCategories>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostRow post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </WrapperCategories>
    </Container>
  )
}
