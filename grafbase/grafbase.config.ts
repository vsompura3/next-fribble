import { auth, config, g } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 3, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ max: 100 }).optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g
    .relation(() => Projects)
    .list()
    .optional(),
})

const Projects = g.model('Projects', {
  title: g.string().length({ min: 3, max: 20 }),
  description: g.string().length({ max: 100 }),
  image: g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

export default config({
  schema: g,
})
