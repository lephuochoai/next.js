import { HtmlMeta, PageContainer } from '@/components'
import { WithAuth } from '@/middlewares/auth'
import { COLORS } from '@/styles/styles'
import yup from '@/utils/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input, Tooltip } from 'antd'
import cx from 'classnames'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { RiLockPasswordFill, RiUserFill } from 'react-icons/ri'
import styles from './Login.module.less'

const schema = yup.object().shape({
  userCode: yup.string().required().trim(),
  password: yup.string().required(),
})

const Login = (props) => {
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  })
  const onLogin = (values) => {
    console.log(values)
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
                    prefix={<RiUserFill />}
                  />
                </Tooltip>
              </Form.Item>
            )}  
            defaultValue=""
          />
          <Controller
            name="password"
            control={control}
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
                  <Input
                    {...field}
                    prefix={<RiLockPasswordFill />}
                  />
                </Tooltip>
              </Form.Item>
            )}  
            defaultValue=""
          />
          <div className="d-flex justify-content-center w-100">
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </PageContainer>
  )
}

export default WithAuth(Login)