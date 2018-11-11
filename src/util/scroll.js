import BScroll from "better-scroll";

const scroll = ({
    el,//拉动刷新的元素
    handler, //拉动刷新后处理的函数
})=>{
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
    // scroll.on('scroll',()=>{
    //     onscroll(scroll.y)
    // })
    return scroll
}
export default scroll