
import { data } from '../../data/index'

export const getEightBallAnswer = (): string => {

    const index = Math.floor(Math.random() * data.length)

    return data[index]

}