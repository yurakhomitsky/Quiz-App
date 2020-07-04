import { Score } from '../../interfaces/intefaces';
export function getTitleByScore(score: Score): string {
    if (score.scoreInPercent >= 60) return 'Експерт'
    if (score.scoreInPercent > 40 && score.scoreInPercent < 60) return 'Геймер'
    if (score.scoreInPercent <= 40) return 'Нуб'
  }

export function  getStyleByScore(score: Score) {
    return {
      success: (score.scoreInPercent >= 60),
      middle: (score.scoreInPercent > 40 && score.scoreInPercent < 60),
      bad: (score.scoreInPercent <= 40)
    }
  }