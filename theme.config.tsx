import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>CMSLAB</b></span>,
  project: {
    link: 'https://github.com/prayagyadav/cmslab/blob/main',
  },
  chat: {
    link: 'https://10.4.49.166/',
    icon: (
      <p>Internal Wiki</p>
    )
  },
  docsRepositoryBase: 'https://github.com/prayagyadav/cmslab/blob/main',
  footer: {
    text: '© 2024 CMSLab',
  },
  primaryHue:{dark:344.86 , light:344.86 }
}

export default config
