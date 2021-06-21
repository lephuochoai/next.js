import { useRouter } from 'next/router'
import en from 'public/lang/en.js'
import jp from 'public/lang/jp.js'

const useTrans = () => {
  const router = useRouter()
  console.log(router)
  const { locale, query, pathname } = router
  const t = locale === 'jp' ? jp : en

  const changeLang = (lang = 'en') => {
    router.push({
      pathname,
      query,
    }, {}, { locale: lang })
  }
  return { t, changeLang }
}

export default useTrans