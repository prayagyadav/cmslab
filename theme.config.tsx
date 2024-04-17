import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>CMSLAB</b></span>,
  project: {
    link: 'https://github.com/prayagyadav/cmslab.git',
  },
  chat: {
    link: 'https://10.4.48.61/',
    icon: (
      <p>Internal Wiki</p>
    )
  },
  docsRepositoryBase: 'https://github.com/prayagyadav/cmslab.git',
  footer: {
    text: '© 2024 CMSLab',
  },
}

export default config
