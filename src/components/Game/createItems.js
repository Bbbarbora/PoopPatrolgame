


let id = 0;
export const createPlayer = (x, y) => {
    id += 1
    return {
        x: x,
        y: y,
        width: 45,
        height: 84,
        r: 22,
        direction: "down",
        isMoving: false,
    }
}

export const createDog = (x, y) => {
    id += 1
    return {
        x: x,
        y: y,
        width: 82,
        height: 68,
        r: 41,
        direction: "down-left",
        isMoving: true,
        stepsToGo: 50,
    };
}




export const createPoop = (x, y) => {
    id += 1
    return {
        id: id,
        x: x,
        y: y,
        width: 30,
        height: 30,
        r: 15,
        type: "poop",
    }
};

export const createBin = (x, y) => {
    id += 1
    return {
        id: id,
        x: x,
        y: y,
        width: 60,
        height: 60,
        r: 30,
        type: "bin",
    }
};

export const createTree = (x, y) => {
    id += 1
    return {
        id: id,
        x: x,
        y: y,
        width: 200,
        height: 200,
        r: 100,
        type: "tree",
    }
};