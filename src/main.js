// 获取元素的数组
let div1=dom.find('#test_find')[0]
// 获取目标元素的第一个
let div2=dom.findOne('#test_find')
// 获取某个div下面的元素
let div3=dom.find('#test_find',div1)[0]
// 获取多个div.red元素
const divList = dom.find('.red')
console.log(div1);
console.log(div2);
console.log(div3);
console.log(divList);

// 测试style
let div4=dom.findOne('#test_style')
dom.style(div4,'color','blue')
console.log(dom.style(div4,'color'));
dom.style(div4,{color:'red',fontSize:'19px'})

// 测试each
fn=(n)=>{
    console.log(n);
}
dom.each(divList,fn)