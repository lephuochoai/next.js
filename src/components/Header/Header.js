import accountApis from '@/apis/account'
import Breadcrumbs from '@/commons/breadcrumbs'
import { removeAccount } from '@/store/slices/accountSlice'
import { Avatar, Button, Dropdown, Input, Menu } from 'antd'
import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FaSignInAlt } from 'react-icons/fa'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.less'

function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [search, setSearch] = useState('')
  const { token, profile } = useSelector(state => state.account)

  const onLogout = () => {
    accountApis.logout()
    localStorage.removeItem('token')
    dispatch(removeAccount())
  }

  const onDirectToProfile = () => {
    router.push('/profile')
  }

  const dropdownMenu = (
    <Menu mode='vertical' className={cx(styles['menu-dropdown'])}>
      <Menu.Item
        key="1"
        className={
          cx(styles['profile-account'])
        }
        onClick={onDirectToProfile}
      >
        <div className="p-2 d-flex align-items-center">
          <div className="left">
            <Avatar
              size={64}
              icon={<AiOutlineUser />}
              src={profile.avatar}
            />
          </div>
          <div className="account-info ms-2 fs-5">
            Phuoc Hoai
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="2" onClick={onLogout}>
        <div className="d-flex align-items-center">
          <div className={cx(styles['icon-menu-dropdown-box'])}>
            <RiLogoutCircleLine
              className={cx(styles['icon-menu-dropdown-box-icon'])}
            />
          </div>
          <div>
            Logout
          </div>
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <header
      className={cx(
        styles['header-container'],
        'd-flex align-items-center shadow-sm',
      )}
    >
      <div className="container d-flex">
        <div className="left-container flex-grow-1 d-flex align-items-center">
          <ul className="mb-0 list-unstyled d-flex fw-bold">
            <li className={cx(styles['nav-li'], 'me-2')}>
              <Link href="/">
                <a
                  className={cx({
                    active222: router.pathname === '/',
                  })}
                >
                  Posts
                </a>
              </Link>
            </li>
            <li className={cx(styles['nav-li'], 'me-2')}>
              <Link href="/questions">
                <a
                  className={cx({
                    active222: router.pathname === '/questions',
                  })}
                >
                  Questions
                </a>
              </Link>
            </li>
            <li className={cx(styles['nav-li'], 'me-2')}>
              <Link href="/discussion">
                <a
                  className={cx({
                    active222: router.pathname === '/discussion',
                  })}
                >
                  Discussion
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="right-container flex-grow-1
            d-flex align-items-center justify-content-end"
        >
          <form
            className="search-container d-flex
              flex-grow-1 justify-content-end me-2"
          >
            <Input
              className={cx(styles['input-search'])}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button className={cx(styles['button-search'])} type="primary">
              <BsSearch />
            </Button>
          </form>
          {
            !token ? (
              <div className="auth-container">
                <Link href={Breadcrumbs.LOGIN} passHref>
                  <span
                    className={cx(styles['link-auth'], 'pe-auto')}
                    tabIndex="-1"
                    role="button"
                  >
                    <FaSignInAlt className="fs-4 me-2" />
                    <span className="fs-5">Login / Register</span>
                  </span>
                </Link>
              </div>
            ) : (
              <div className={cx(styles['account-container'])}>
                <Dropdown
                  trigger={['click']}
                  overlay={dropdownMenu}
                  placement="bottomRight"
                >
                  <div className="pe-auto"
                    role="button"
                    tabIndex="-1"
                  >
                    <Avatar
                      size="large"
                      icon={<AiOutlineUser />}
                      src={profile.avatar}
                    />
                  </div>
                </Dropdown>
              </div>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header
