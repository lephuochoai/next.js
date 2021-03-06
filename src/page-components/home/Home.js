import {
  Form, Select, InputNumber, Switch, Slider, Button, DatePicker
} from 'antd'

import { SmileFilled } from '@ant-design/icons'
import cx from 'classnames'
import Link from 'next/link'
// import { useDarkMode } from '@/hooks'
import { HtmlMeta, PageContainer } from '@/components'
import { useTranslation } from 'react-i18next'

const FormItem = Form.Item
const {Option} = Select

export const Home = (props) => {
  // useDarkMode()
  const { t, i18n } = useTranslation()

  return (
    <PageContainer className={cx(props.className)}>
      <HtmlMeta title="Home" />
      <div>
        <div className="text-center mb-5">
          <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
          <Button onClick={() => i18n.changeLanguage('jp')}>jp</Button>
          <p className="mb-0 mt-3 text-disabled">{t('home.title')}</p>
        </div>
        <div>
          <Form layout="horizontal">
            <FormItem
              label="Input Number"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <InputNumber
                size="large"
                min={1}
                max={10}
                style={{ width: 100 }}
                defaultValue={3}
                name="inputNumber"
              />
            </FormItem>

            <FormItem
              label="Switch"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Switch defaultChecked name="switch" />
            </FormItem>

            <FormItem
              label="Slider"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Slider defaultValue={70} />
            </FormItem>

            <FormItem
              label="Select"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Select
                size="large"
                defaultValue="lucy"
                style={{ width: 192 }}
                name="select"
              >
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="disabled" disabled>
                disabled
                </Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>

            <FormItem
              label="DatePicker"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <DatePicker name="startDate" />
            </FormItem>
            <FormItem
              style={{ marginTop: 48 }}
              wrapperCol={{ span: 8, offset: 8 }}
            >
              <Button size="large" type="primary" htmlType="submit">
              OK
              </Button>
              <Button size="large" style={{ marginLeft: 8 }}>
              Cancel
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </PageContainer>
  )
}
