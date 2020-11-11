import * as S from '@/presentation/styles/pages/404'
import { Space } from '@/presentation/components/Space'
import { Button } from '@/presentation/components/Button'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

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
          Opss, parece que a página que você tentou acessar não existe!
        </S.Subtitle>
        <Button
          size="large"
          onClick={redirectToHome}
        >
          Voltar ao home
        </Button>
      </Space>
    </S.Wrapper>
  )
}

export default NotFound
