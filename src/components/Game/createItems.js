


let id = 0;
export const createPlayer = (x, y) => {
    id += 1
    return {
        x: x,
        y: y,
        width: 45,
        height: 84,
        r: 22,
        dy: -15,
        direction: "down",
        isMoving: false,
        isCarryingPoop: false,
    }
}

export const createDog = (x, y) => {
    id += 1
    return {
        x: x,
        y: y,
        width: 82,
        height: 68,
        r: 36,
        dy: -28,
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
        dy: -15,
        type: "poop",
    }
};

export const createBin = (x, y) => {
    id += 1
    return {
        id: id,
        x: x,
        y: y,
        width: 55,
        height: 68,
        r: 35,
        dy: -20,
        type: "bin",
    }
};

export const createTree = (x, y) => {
    id += 1
    return {
        id: id,
        x: x,
        y: y,
        width: 140,
        height: 158,
        r: 35,
        dy: -35,
        type: "tree",
    }
};

export const createBench = (x, y) => {
    id += 1
    return {
        id: id,
        x: x,
        y: y,
        width: 80,
        height: 50,
        r: 35,
        dy: -20,
        type: "bench",
    }
};