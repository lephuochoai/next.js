import { HtmlMeta, PageContainer } from '@/components'
import { genColor } from '@/utils/funcs'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Input, Tag } from 'antd'
import cx from 'classnames'
// import styles from './styles.module.less'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

let timeSearch = null

export const Search = (props) => {
  const router = useRouter()
  const [q, setQ] = useState()
  const [listRecentSearch, setListRecentSearch] =
    useState(Array
      .isArray(JSON.parse(localStorage.getItem('recent-search')))
      ? JSON.parse(localStorage.getItem('recent-search')) : []
    )
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    setQ(router.query?.q)
    onSearch()
  }, [router.query])

  const onSearch = () => {
    setSearching(true)
    if (q) {
      if (listRecentSearch.length) {
        setListRecentSearch([q, ...listRecentSearch.slice(0, 10)])
        localStorage.setItem('recent-search',
          JSON.stringify([q, ...listRecentSearch.slice(0, 10)]))
      } else {
        setListRecentSearch([q])
        localStorage.setItem('recent-search', JSON.stringify([q]))
      }
    }

    if (timeSearch) {
      clearTimeout(timeSearch)
    }
    timeSearch = setTimeout(() => {
      setSearching(false)
    }, 500)
  }

  const onSubmitFormSearch = (e) => {
    e?.preventDefault()
    router.push(`/search?q=${q}`)
    onSearch()
  }

  const clearRecentSearch = (index) => {
    let list = [...listRecentSearch.slice(0, 10)]
    list.splice(index, 1)
    localStorage.setItem('recent-search', JSON.stringify(list))
    setListRecentSearch(list)
  }

  const renderRecentSearch = useMemo(() => (
    listRecentSearch
      .slice(0, 15)
      .map((s, index) => {
        const color = genColor()
        return (
          <li className="mb-2" key={index}>
            <Tag
              className="d-inline-flex align-items-center"
              closable
              onClose={() => clearRecentSearch(index)} color={color}>
              <span
                role="button"
                tabIndex="-1"
                onClick={() => setQ(s)}>
                {s.length >= 51 ? `${s.slice(0, 50)}...` : s}
              </span>
            </Tag>
          </li>
        )
      })
  ), [listRecentSearch.length])

  return (
    <PageContainer className={cx(props.className)}>
      <HtmlMeta title="Search" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={onSubmitFormSearch} className="form-search d-flex">
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="me-3"
                disabled={searching}
              />
              <Button
                htmlType="submit"
                disabled={searching}
                icon={<span className="anticon"><BsSearch /></span>}
                type="primary">
              Search
              </Button>
            </form>
            <div className="result-search mt-4">
              <center>
                {searching ? <LoadingOutlined /> : (
                  <b>We couldn't find anything</b>
                )}
              </center>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="lh-lg">Recent search</h5>
            <ul>
              {renderRecentSearch}
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
