import * as S from '@/presentation/styles/pages/404'
import { Space } from '@/presentation/components/Space'
import { Button } from '@/presentation/components/Button'
import { useRouter } from 'next/router'
import useI18N from '@/presentation/hooks/usei18n'

const NotFound = () => {
  const router = useRouter()
  const i18n = useI18N()

  const redirectToHome = () => {
    router.push('/')
  }

  return (
    <S.Wrapper>
      <Space stars={30} >
        <S.Title>
          404!
        </S.Title>
        <S.Subtitle>
          {i18n.t('not_found_message')}
        </S.Subtitle>
        <Button
          size="large"
          onClick={redirectToHome}
        >
          {i18n.t('go_back_home')}
        </Button>
      </Space>
    </S.Wrapper>
  )
}

export default NotFound
