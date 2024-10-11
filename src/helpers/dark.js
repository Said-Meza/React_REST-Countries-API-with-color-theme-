const rootelement=document.documentElement;

const dark = () => {
    rootelement.style.setProperty('--Element', 'hsl(209, 23%, 22%)');
    rootelement.style.setProperty('--Background', 'hsl(207, 26%, 17%)');
    rootelement.style.setProperty('--Text', 'white');
}

const light = () => {
    rootelement.style.setProperty('--Element', 'hsl(0, 0%, 100%)');
    rootelement.style.setProperty('--Background', 'hsl(0, 100%, 98%)');
    rootelement.style.setProperty('--Text', 'hsl(200, 15%, 8%)');
}

export default {
    dark,
    light
}
