// import { Question } from 'pages/PageFaq/Question'
import { Collapse, Typography } from 'antd'

const { Panel } = Collapse
const { Text, Paragraph } = Typography

const FaqMain = () => {
  return (
    <div>
      {/* <Question question={que.question} answer={que.answer} /> */}

      <Collapse defaultActiveKey={['0', '2']} expandIconPosition="right" ghost>
        {questions.map((que, index) => (
          <Panel
            style={{ marginTop: '15px' }}
            header={
              <Text strong style={{ color: '#232946', fontSize: '18px' }}>
                {que.question}
              </Text>
            }
            key={index}
          >
            <Paragraph style={{ lineHeight: '1.5', letterSpacing: '0.5px' }}>
              {que.answer}
            </Paragraph>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}
export default FaqMain

const questions = [
  {
    question: '如何及时的获取笔记的提醒',
    answer:
      '保存的笔记按照艾宾浩斯遗忘曲线进行推送，书写下的笔记不应该书写完就去吃灰，iNote结合艾宾浩斯遗忘曲线规律进行笔记推送，让你的笔记不只存在于iNote，更存在于你的大脑！关注我们的公众号就可以及时获得笔记的提醒'
  },
  {
    question: '编辑器是按照什么格式进行笔记记录的',
    answer:
      '编辑器默认采用的是 md 的语法，您可以在书写笔记的时候按照 md 的规则进行书写。'
  },
  {
    question: '如何更改绑定的手机号',
    answer:
      '暂不支持直接修改，当用户用手机号登录时，若手机号未注册则会使用手机号进行用户注册，通过修改密码后可获得对应的账号与密码，若想更换手机号或某些特殊的账户内容可通过公众号联系客服修改。'
  },
  {
    question: '如何进行 bug 的反馈',
    answer:
      '可以在本网站的 Github 主页，官方用户群或微信公众号进等渠道进行 bug 的反馈。'
  }
]
