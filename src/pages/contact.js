import useTrans from '@/hooks/useTrans'
import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

function Contact(props) {
  const { t, changeLang } = useTrans()
  const { token } = useSelector(state => state.account)
  console.log(token)

  return (
    <div>
      <p className="mb-0 mt-3 text-disabled">{t.home.title}</p>
      <Button onClick={() => changeLang('en')}>en</Button>
      <Button onClick={() => changeLang('jp')}>jp</Button>
    </div>
  )
}

export default Contact