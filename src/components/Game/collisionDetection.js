export const isCollision = (objA, objB) => {
    const a = objA.x - objB.x;
    const b = (objA.y + objA.dy) - (objB.y + objB.dy);
    const c = Math.sqrt(a ** 2 + b ** 2)
    return c <= objA.r + objB.r

}