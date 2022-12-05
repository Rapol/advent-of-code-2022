import input from '../input'

enum SHAPE {
    ROCK = 'ROCK',
    PAPER = 'PAPER',
    SCISSOR = 'SCISSOR',
}

const WIN_MAP = {
    [SHAPE.ROCK]: SHAPE.SCISSOR,
    [SHAPE.PAPER]: SHAPE.ROCK,
    [SHAPE.SCISSOR]: SHAPE.PAPER
}

type SHAPE_ALIAS_TYPE = {[key:string]: SHAPE}

const SHAPE_ALIAS : SHAPE_ALIAS_TYPE = {
    A: SHAPE.ROCK,
    X: SHAPE.ROCK,
    B: SHAPE.PAPER,
    Y: SHAPE.PAPER,
    C: SHAPE.SCISSOR,
    Z: SHAPE.SCISSOR
}

const SHAPE_SCORE = {
    [SHAPE.ROCK]: 1,
    [SHAPE.PAPER]: 2,
    [SHAPE.SCISSOR]: 3,
}

const OUTCOME_SCORE = {
    LOSE: 0,
    DRAW: 3,
    WIN: 6
}

function translateMoves(moves : string[]) {
    return moves.map((move: string) => SHAPE_ALIAS[move])
}

export default function main() {
    const inputArray = input.split(/\n/)
    let totalScore = 0;
    for(const play of inputArray) {
        const [oppMove, yourMove] = translateMoves(play.split(' '))
        if(WIN_MAP[oppMove] === yourMove) {
            totalScore += OUTCOME_SCORE.LOSE +  SHAPE_SCORE[yourMove]
        }
        else if (oppMove === yourMove) {
            totalScore += OUTCOME_SCORE.DRAW + SHAPE_SCORE[yourMove]
        } else {
            totalScore += OUTCOME_SCORE.WIN + SHAPE_SCORE[yourMove]
        }
    }
    return totalScore
}