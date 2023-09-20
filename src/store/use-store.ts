import { create } from 'zustand'

import { type State, ProposerNames } from '@/types'

export const useStore = create<State>(() => {
  return {
    currDish: 0,
    dishes: [],
    roomId: '1',
    proposerName: ProposerNames.Andy
  }
})
