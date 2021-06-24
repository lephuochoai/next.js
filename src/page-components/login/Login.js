import accountApis from '@/apis/account'
import axiosClient from '@/apis/axiosClient'
import { HtmlMeta, PageContainer } from '@/components'
import { withAuth } from '@/middlewares/auth'
import { setToken } from '@/store/slices/accountSlice'
import { COLORS } from '@/styles/styles'
import errorHelper from '@/utils/errorHelper'
import yup from '@/utils/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input, Tooltip } from 'antd'
import cx from 'classnames'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { RiLockPasswordFill, RiUserFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import styles from './Login.module.less'

const schema = yup.object().shape({
  userCode: yup.string().required().trim(),
  password: yup.string().required(),
})

const Login = (props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onLogin = (values) => {
    setLoading(true)
    accountApis.login({
      user_code: values.userCode,
      password: values.password
    })
      .then((result) => {
        setLoading(false)
        if (result.success) {
          const { access_token } = result.data
          axiosClient.defaults.headers.common = {
            'admin-key': `Bearer ${access_token}`,
          }
          localStorage.setItem('token', access_token)
          dispatch(setToken({
            token: access_token
          }))
        } else {
          throw result
        }
      })
      .catch((err) => {
        setLoading(false)
        errorHelper(err)
      })
  }

  return (
    <PageContainer className={cx(props.className)}>
      <HtmlMeta title="Login" />
      <div
        className="h-100 d-flex justify-content-center align-items-center p-4"
      >
        <Form
          labelAlign="left"
          labelCol={{
            xs: { span: 24 },
            md: { span: 5 },
          }}
          wrapperCol={{
            xs: { span: 24 },
            md: { span: 19 },
          }}
          className={cx(
            styles['width-box'],
            'shadow px-3 py-5 bg-body rounded',
          )}
          onFinish={handleSubmit(onLogin)}
        >
          <h3 className="text-center mb-4">Login</h3>
          <Controller
            name="userCode"
            control={control}
            defaultValue='AT215632-01'
            render={({ field }) => (
              <Form.Item
                label="User Code"
                hasFeedback={errors.userCode?.message}
                validateStatus={
                  errors.userCode?.message ? 'error' : 'success'
                }
              >
                <Tooltip
                  color={COLORS.COLOR_TOOLTIP_ERROR}
                  placement="top"
                  title={errors.userCode?.message}
                >
                  <Input
                    {...field}
                    disabled={loading}
                    prefix={<RiUserFill />}
                  />
                </Tooltip>
              </Form.Item>
            )}  
          />
          <Controller
            name="password"
            control={control}
            defaultValue="12345678"
            render={({ field }) => (
              <Form.Item
                label="Password"
                hasFeedback={errors.password?.message}
                validateStatus={
                  errors.password?.message ? 'error' : 'success'
                }
              >
                <Tooltip
                  color={COLORS.COLOR_TOOLTIP_ERROR}
                  placement="top"
                  title={errors.password?.message}
                >
                  <Input.Password
                    {...field}
                    disabled={loading}
                    prefix={<RiLockPasswordFill />}
                  />
                </Tooltip>
              </Form.Item>
            )}
          />
          <div className="d-flex justify-content-center w-100">
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </PageContainer>
  )
}

export default withAuth(Login)
