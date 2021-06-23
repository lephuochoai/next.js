import React from 'react'

export const WithAuth = (WrappedComponent) =>
  class MiddlewareAuth extends React.Component {
    static async getInitialProps(ctx) {
      const { store } = ctx
      // if (!store.getState().get('auth').get('loaded')) {
      //   let unsubscribe
      //   await new Promise((resolve) => {
      //     unsubscribe = store.subscribe(() => {
      //       if (store.getState().get('auth').get('loaded')) {
      //         resolve()
      //       }
      //     })
      //   })
      //   unsubscribe()
      // }

      // const token = checkAuth(store.getState().get('auth'), role, ctx)
      const componentProps = WrappedComponent.getInitialProps
              && (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

// export async function getStaticProps (ctx) {
//   // const token = localStorage.getItem('token')
//   console.log(ctx)
//   return {
//     data: 12312
//   }
// }
