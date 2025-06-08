export const isCollision = (objA, objB) => {
    const a = objA.x - objB.x;
    const b = objA.y - objB.y;
    const c = Math.sqrt(a ^ 2 + b ^ 2)
    return c <= objA.r + objB.r

}