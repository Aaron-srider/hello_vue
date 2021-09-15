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

注意点：组件的 `template` 中如果有不知一个标签内容，那么必须将他们包裹在一个大标签比如`<h2/>`、`<div/>`中，才能将他们全部显示，否则只显示第一个标签。



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

子组件向父组件传递数据：
子组件产生事件，父组件中使用事件接收。父组件中在methods中定义方法作为监听者，当子组件产生事件，事件上浮到父组件，触发监听者，执行请求代码。
```vue
<div id="app">
    <!--监听子组件上浮的事件-->
    <comp @myevent="request($event)"></comp>
</div>

<template id="comp">
    <div>
        子组件
        <button v-for="item in items" @click="userHit(item)">{{item.name}}</button>
    </div>
</template>

<script src="../../js/vue.js"></script>
<script>
    let app = new Vue({
        el: "#app",
        data: {
            message: "hello vue"
        },
        methods: {
            request(event) {
                console.log(event)
            }
        },
        components: {
            //子组件
            comp: {
                template: "#comp",
                data() {
                    return {
                        items: [
                            {id: 1, name: "aaa"},
                            {id: 2, name: "bbb"},
                            {id: 3, name: "ccc"}
                        ]
                    }
                },
                methods: {
                    userHit(item) {
                        //子组件中发送事件
                        this.$emit("myevent", item);
                    }
                }
            }
        }
    })
</script>
```

![image-20210913222351522](https://mymdimage.oss-cn-beijing.aliyuncs.com/typoraImage/image-20210913222351522.png)

![image-20210913222317772](https://mymdimage.oss-cn-beijing.aliyuncs.com/typoraImage/image-20210913222317772.png)


插槽slot
组件需要扩展性，要有固定的东西（便于节省代码），也要能扩展（便于复用和扩展），slot插槽就是为了向组件中插入不同的东西。
* 使用`<slot>default elements</slot>`代表一个插槽。
* 使用组件时标签对中的所有标签放入对应的插槽中。
* 多个插槽时为插槽指定名字`<slot name="slotName">default elements</slot>`，插入元素时指定插入的插槽名称即可`<comp><elem slot="slotName">text</elem></comp>`。
```vue
<div id="app">
    <comp>
        <button slot="slot1">按钮</button>
        <input slot="slot2" placeholder="这是文本框">
        <p slot="slot3">这是一段文字</p>
    </comp>

    <comp></comp>
</div>

<template id="comp">
    <div>
        我是带有插槽的子组件
        <!--插槽-->
        <div>
            <slot name="slot1"><h3>这是插槽1</h3></slot>
        </div>
        <div>
            <slot name="slot2"><h3>这是插槽2</h3></slot>
        </div>
        <div>
            <slot name="slot3"><h3>这是插槽3</h3></slot>
        </div>
    </div>
</template>

<script src="../../js/vue.js"></script>
<script>
    let app = new Vue({
        el: "#app",
        data: {
            message: "hello vue"
        }, methods: {},
        components: {
            //子组件
            comp: {
                template: "#comp"
            }
        }
    })
</script>
```

作用域插槽：
有可能想在插槽中插入的标签需要子组件中的数据，这可以通过slot-scope字段实现。

* 使用组件时使用template标签，写上slot-scope属性，属性值就是为组件slot起的别名，假设是slotObj。
* 在插槽标签上使用v-bind将子标签中的数据绑定到插槽属性上，如：`<slot :abc="movies"></slot>`。
* 在`<template>`中使用`插槽别名.插槽上的属性名`获取插槽属性上绑定的数据。
* 总结就是：将子组件的数据绑定在插槽属性上，在父组件中通过`插槽别名.插槽上的属性名`的方式获取插槽属性上绑定的值。
下面是示例：
```vue
<div id="app">
    <comp></comp>

    <comp>
        <template slot-scope="slotObj">
            {{showSlotData(slotObj.abc)}}
        </template>
    </comp>

</div>

<template id="comp">
    <div>
        我是带有插槽的子组件
        <!--插槽-->
        <div>
            <slot :abc="movies">
                <h3 v-for="item in movies">{{item}}</h3>
            </slot>
        </div>
    </div>
</template>

<script src="../../js/vue.js"></script>
<script>
    let app = new Vue({
        el: "#app",
        data: {
            message: "hello vue"
        },
        methods: {
            showSlotData(data) {
                let nameArr=[];
                for(let i = 0; i < data.length; i++ ){
                    nameArr.push(data[i]);
                }
                return nameArr.join(" - ");
            }
        },
        components: {
            //子组件
            comp: {
                template: "#comp",
                data() {
                    return {
                        movies:[
                            "血战上海滩","抢滩登陆","东京沦陷"
                        ]
                    }
                }
            }
        }
    })
</script>
```

# webpack

## 安装

* 支持并强调模块化开发:webpack将前端模块化的解决方案（es6,commonjs,amd等）转换成浏览器能识别的代码。
* 处理模块间的依赖关系。
* 附带打包功能：json,css,图片都能打包。

注意，webpack依赖node.js环境，安装node.js时自动安装npm（node package manage）工具，方便管理node运行时用到的各种包。
webpack -> node -> npm

全局安装(命令行中能使用)webpack:

```
npm install webpack -g 
```

![image-20210915074241694](https://mymdimage.oss-cn-beijing.aliyuncs.com/typoraImage/image-20210915074241694.png)

![image-20210915074227050](https://mymdimage.oss-cn-beijing.aliyuncs.com/typoraImage/image-20210915074227050.png)

## 打包

初学webpack的项目结构:

![image-20210915075627058](https://mymdimage.oss-cn-beijing.aliyuncs.com/typoraImage/image-20210915075627058.png)

src中存放js源代码，dist存放打包的源码包，index.html中引用打包好的源码包。

使用webpack将js打包，webpack自动识别包中导入的依赖并连同打包：（使用任何模块化模型webpack都能识别）

```js
webpack ./main.js ../dist/bundle.js
```

![image-20210915075445425](https://mymdimage.oss-cn-beijing.aliyuncs.com/typoraImage/image-20210915075445425.png)

