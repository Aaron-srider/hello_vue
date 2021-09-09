v-model 实质是两个指令集和（语法糖）：

* 将model绑定到input，v-bind:value="message"
* 利用input的input事件，将输入框的值绑定到model（$event.target.value传值） 可以用户textArea、input、radio

用于radio:

* model到radio：改变字符串值即可改变被选中的按钮
* radio到model：选中的radio的value绑定到一个字符串值

用于checkbox:

单个checkbox，通过Boolean值判断是否选中

* 是否选中绑定到一个boolean值，选中则为true，否则为false

多个checkbox，通过数组获取选中复选框的value值集合

* model到checkbox：数组中的值决定哪些复选框被选中（数组值与value对应）
* checkbox到model：选中的复选框的value值放到model数组中（数组值与value对应）

修饰符：

* 输入框,type=text，v-model.lazy="message"：敲回车或失去焦点时绑定到model
* 输入框，type=number,v-model.number="message"：绑定到model的是number类型数值（因为v-model默认绑定下来的是string）

组件： 
* 按页面组成抽出页面的某些功能块，作为模板，方便直接复用。 

创建组件：
* 创建组件构造器
* 注册组件 

全局&&局部组件
* 局部：只有在vue实例中注册才能使用
```vue

<div id="app">
    <mydiv></mydiv>
    <mydiv></mydiv>
    <mydiv></mydiv>
</div>

<div id="app2">
    <mydiv></mydiv>
    <mydiv></mydiv>
</div>

<script src="../../js/vue.js"></script>
<script>

    <!--组件构造器-->
    let mydivConstructor = Vue.extend({
      template: `
                <div>
                    <p>标题</p>
                    <p>内容</p>
                </div>
            `
    });
    
    let app = new Vue({
      el: "#app",
      data: {
        message: "hello vue"
      },
      //局部注册
      components: {
        //组件标签名：组件构造器变量名
        mydiv: mydivConstructor
      }
    })
    
    let app2 = new Vue({
      el: "#app2",
      data: {
        message: "hello vue"
      }
    })
</script>
```

* 全局：所有vue实例作用域都能使用
```vue
<script src="../../js/vue.js"></script>
<script>

    <!--组件构造器-->
    let mydivConstructor = Vue.extend({
        template: `
            <div>
                <p>标题</p>
                <p>内容</p>
            </div>
        `
    });

    //全局注册
    let component = Vue.component("mydiv", mydivConstructor);

    let app = new Vue({
        el: "#app",
        data: {
            message: "hello vue"
        },
        components: {
            //组件标签名：组件构造器变量名
            mydiv: mydivConstructor
        }

    })

    let app2 = new Vue({
        el: "#app2",
        data: {
            message: "hello vue"
        }
    })

</script>
```

组件使用语法糖：

使用组件需要创建后再注册:
* 创建:
```vue
let mydivConstructor = Vue.extend({
    template: `
        <div>
            <p>标题</p>
            <p>内容</p>
        </div>
    `
});
```

* 注册
```vue
<!--全局-->
Vue.component("mydiv", mydivConstructor);
```

组件使用语法糖就是**省略 Vue.extend 函数的使用，直接在组件注册时创建**：
```vue
<!--全局-->
Vue.component("mydiv", {
    template: `
        <div>
            <p>标题</p>
            <p>内容</p>
        </div>
    `
}); 

<!--局部-->
let app2 = new Vue({
    el: "#app2",
    data: {
        message: "hello vue"
    },
    components: {
        mydiv: {
            template: `
                <div>
                    <p>标题</p>
                    <p>内容</p>
                </div>`
        }
    }
})
```

下面是完整实例：

```vue
<div id="app">
    <global></global>
    <local></local>
</div>

<script src="../../js/vue.js"></script>
<script>

    <!--注册全局组件语法糖-->
    Vue.component("global", {
      template: `
              <div>
              global
                  <p>标题</p>
                  <p>内容</p>
              </div>
            `
    })
    
    let app = new Vue({
      el: "#app",
      data: {
        message: "hello vue"
      },
      //注册局部组件语法糖
      components: {
        local: {
          template: `
                          <div>
                              local
                              <p>标题</p>
                              <p>内容</p>
                          </div>`
        }
      }
})
</script>
```

组件的data函数和methods:
```vue
<div id="app">
    <counter></counter>
    <counter></counter>
    <counter></counter>
</div>

<!--组件模板-->
<template id="temp1">
  <div>
    <h2>计数器:{{count}}</h2>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
  </div>
</template>

<script src="../../js/vue.js"></script>
<script>

    Vue.component("counter", {
      template: "#temp1",
      data() {
        return {
          count: 0
        }
      },
      methods: {
        increment() {
          this.count++;
        },
        decrement() {
          this.count--;
        }
      }
    })
    
    let app = new Vue({
      el: "#app",
      data: {
        message: "hello vue"
      }
    })
</script>
```

可以看到，一个组件连同它的template，data和methods等等，与vue实例及其相似，都是模板与数据相互照应，同时还能有函数。

父子组件概念：
```vue
<div id="app">
    <comp2></comp2>
</div>

<template id="comp1">
  <div>
    子组件
    <p>标题</p>
    <p>内容</p>
  </div>
</template>

<template id="comp2">
  <div>
    父组件
    <p>标题</p>
    <p>内容</p>
    <comp1></comp1>
  </div>
</template>

<script src="../../js/vue.js"></script>
<script>

let app = new Vue({
  el: "#app",
  data: {
    message: "hello vue"
  },
  components: {
    //组件标签名：组件构造器变量名
    comp2: {
      template: "#comp2",
      components: {
        comp1: {
          template: "#comp1"
        }
      }
    }
  }
})
</script>
```

将vue实例看作父组件
如上所示，在vue实例中注册了组件comp2，同时在comp2中注册了comp1，将vue实例看作父组件，comp2是vue的子组件，comp1是comp2的子组件

vue组件对应的模板引用了子组件comp2的模板：
```vue
<div id="app">
    <comp2></comp2>
</div>
```

通过vue的el字段绑定：
```vue
let app = new Vue({
    el: "#app",
    data:...
})
```

comp2的模板引用了comp1的模板：
```vue
<template id="comp2">
  <div>
    父组件
    <p>标题</p>
    <p>内容</p>
    <comp1></comp1>
  </div>
</template>
```

通过comp2的template字段绑定：
```vue
{
    comp2: {
        template: "#comp2",
        components: {
            comp1: {
              template: "#comp1"
            }
        }
    }
}
```

组件comp1没有子组件了


向子组件中传递数据
子组件的属性：
为子组件定义标签属性：
```vue
        components: {
            cpm: {
                template: "#temp1",
                props: {
                    newsTitle: {
                        type: String,
                        required: true
                    },
                    content: {
                        type: String,
                        required: true
                    }
                }
            }
        }
```

可以在子组件中用{{}}中引用标签属性以展示，
```vue
<!--组件模板-->
<template id="temp1">
    <div>
        <h2>{{newsTitle}}</h2>
        <p>{{content}}</p>
    </div>
</template>
```

在引用子组件时为标签属性赋值即可：
```vue
<div id="app">
    <cpm news-title="news" news-title="A cow killed a man"></cpm>
    <cpm :news-title="title" :content="content"></cpm>
    <cpm :news-title="title1" :content="content1"></cpm>
</div>
```

属性赋值有两个来源：
* 普通字符串：
```vue
  <cpm news-title="news" content="A cow killed a man"></cpm> 
```
* 来自vue实例：由于子组件是在vue实例中使用的，所以可以用v-bind将vue中data的值赋值给指定属性。
```vue
  `<cpm :news-title="title" :content="content"></cpm>`
```

注意：在引用模板标签时，如果是驼峰定义的属性，必须转化为使用-连接，比如属性
```vue
    props: {
        newsTitle: {
            type: String,
            required: true
        }
    }
```

在引用时应该：
```vue
     `<cpm :news-title="title" :content="content"></cpm>`
```
下面是错误写法：
```vue
     `<cpm :newsTitle="title" :content="content"></cpm>`
```

下面是完整实例：

```vue
<div id="app">
    <cpm news-title="news" content="A cow killed a man"></cpm>
    <cpm :news-title="title" :content="content"></cpm>
    <cpm :news-title="title1" :content="content1"></cpm>
</div>

<!--组件模板-->
<template id="temp1">
    <div>
        <h2>{{newsTitle}}</h2>
        <p>{{content}}</p>
    </div>
</template>

<script src="../../js/vue.js"></script>
<script>

    let app = new Vue({
        el: "#app",
        data: {
            message: "hello vue",
            title: "big news",
            content: "xxxxxxxxxxxxxxxx",
            title1: "big news1",
            content1: "xxxxxxxxxxxxxxxx1"
        },
        components: {
            cpm: {
                template: "#temp1",
                props: {
                    newsTitle: {
                        type: String,
                        required: true
                    },
                    content: {
                        type: String,
                        required: true
                    }
                }
            }
        }
    })
</script>
```