v-model
实质是两个指令集和（语法糖）：
* 将model绑定到input，v-bind:value="message"
* 利用input的input事件，将输入框的值绑定到model（$event.target.value传值）
可以用户textArea、input、radio

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