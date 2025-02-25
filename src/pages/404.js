import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer.js'
import '../styles/fix.css'

const NotFoundPage = () => (
  <>
  <Layout style={{bottom:'40px'}}>
  <div style={{overflowY:'hidden', marginTop:'15%', bottom:'30px'}}>
    <SEO title='404: Not found' />
    <h1 style={{ color: 'white' }}>404: A road less travelled</h1>
    <p style={{ color: 'white' }}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    <p style={{ color: 'white' }}>
      Nothing to worry though! You can either go to our homepage or sit right
      here comtemplating your life choices..
    </p>
    </div>
  </Layout>
    <Footer />
    </>
)

export default NotFoundPage
