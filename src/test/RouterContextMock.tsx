import React from 'react'
import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { Url, format } from 'url'

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
}
interface NextHistoryState {
  url: string;
  as: string;
  options: TransitionOptions;
}

type RouterContextMockProps = {
  children: React.ReactNode
  nextRouter: NextRouter
}

export const RouterContextMock = ({ children, nextRouter = new NextRouterStub() }: RouterContextMockProps) => {
  const [pathname, setPathname] = React.useState('/')
  const [nextRouterStub] = React.useState(nextRouter)

  return (
    <RouterContext.Provider value={{
      asPath: nextRouterStub.asPath,
      back: nextRouterStub.back,
      events: nextRouterStub.events,
      basePath: nextRouterStub.basePath,
      beforePopState: nextRouterStub.beforePopState,
      isFallback: nextRouterStub.isFallback,
      pathname: pathname,
      prefetch: nextRouterStub.prefetch,
      push: (url: Url, ...props) => {
        const formatteUrl = format(url)
        setPathname(formatteUrl)
        return nextRouterStub.push(formatteUrl, ...props)
      },
      query: nextRouterStub.query,
      reload: nextRouterStub.reload,
      replace: nextRouterStub.replace,
      route: nextRouterStub.route,
      defaultLocale: nextRouterStub.defaultLocale,
      locale: nextRouterStub.locale,
      locales: nextRouterStub.locales
    }}>
      {children}
    </RouterContext.Provider>
  )
}

export class NextRouterStub implements NextRouter {
  route = '/'
  pathname = '/'
  query = {}
  asPath = '/'
  basePath = '/'
  locale?: string | undefined
  locales?: string[] | undefined
  defaultLocale?: string | undefined

  push (url: string): Promise<boolean> {
    this.pathname = url
    this.route = url
    return new Promise((resolve) => resolve(true))
  }

  replace (url: string): Promise<boolean> {
    this.pathname = url
    this.route = url
    return new Promise((resolve) => resolve(true))
  }

  reload (): void {
    throw new Error('Method not implemented.')
  }

  back (): void {
    throw new Error('Method not implemented.')
  }

  prefetch (url: string): Promise<void> {
    console.log(url)
    return new Promise((resolve) => resolve())
  }

  beforePopState (cb: (state: NextHistoryState) => boolean): void {
    console.log(cb)
  }

  events = {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  }

  isFallback = false
}
