import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';
import Loader from '../components/loader';
import { PageTransition } from 'next-page-transitions';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <PageTransition timeout={2000} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </Layout>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            width: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            width: 100%;
            background-color: transparent;
            transition: opacity 5s, width 2s ease;
          }
          .page-transition-exit {
            opacity: 1;
            width: 100%;
          }
          .page-transition-exit-active {
            opacity: 0;
            width: 0;
            transition: opacity 0.5s, width 2s ease;
          }
          .page-transition-enter .title-page {
            -ms-transform: translate(400px,0px);
            -webkit-transform: translate(400px,0px);
            transform: translate(400px,0px);
            transition: transform 2s ease;
          }
          .page-transition-enter-active .title-page{
            -ms-transform: translate(0px,0px);
            -webkit-transform: translate(0px,0px);
            transform: translate(0px,0px);
            transition: transform 2s ease;
          }
          .page-transition-exit .title-page{
            -ms-transform: translate(0px,0px);
            -webkit-transform: translate(0px,0px);
            transform: translate(0px,0px);
            transition: transform 0.5s ease;
          }
          .page-transition-exit-active .title-page{
            -ms-transform: translate(400px,0px);
            -webkit-transform: translate(400px,0px);
            transform: translate(400px,0px);
            transition: transform 0.5s ease;
          }
        `}</style>
      </Container>
    )
  }
}
