import BScroll from "better-scroll";

const scroll = (options)=>{
    let {el ,handler} = options
    let scroll = new BScroll(el,{
        probeType: 2,
        pullUpLoad: {
            threshold :0,
            moreTxt:'加载更多',
            noMoreTxt:'数据加载完啦'
        },
        click:true

    })
    scroll.on('pullingUp',async()=>{
        await handler()
        scroll.finishPullUp()
        scroll.refresh()
    })
    return scroll
}
export default scroll