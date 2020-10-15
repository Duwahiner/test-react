import { config, useTransition } from 'react-spring'

export const transitions = (state, duration) => {
  return useTransition(state, null, {
    from: {
      opacity: 0,
      position: 'absolute'
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 3,
      duration: duration || 100,
      ...config.wobbly
    }
  })
}
