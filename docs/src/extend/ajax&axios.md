# ajax 和 axios

## ajax

```js
ajax和axios都是数据请求的一种
ajax主要就是为了完成对数据的请求，而请求又分为post请求和get请求
例如：
		如果接口中要求请求方式为post
    那么在发送ajax请求的时候就使用：
    		$.post("请求的地址")
		如果接口中要求请求方式为get
    那么发送ajax请求的时候就使用：
    		$.get("请求的地址")
		当然对于ajax请求会有两种情况：
    		第一种：$.get 或 $.post
						$.get("http://www.xxx.com",{参数的键:参数的值},function(形参){
              而这个回调函数的形参就是请求接口返回的数据
            })
				例如：
        		接口的请求地址：http://www.xiaosutongxue.com/index
						请求这个接口需要参数：id
            请求的方式：get
            那么我们在请求的时候就需要写成：
            $.get("http://www.xiaosutongxue.com/index",{id:12},function(res){
              这里的res就是接口返回的数据
            })
            当然如果请求的方式是post，那么就写成
            $.post("http://www.xiaosutongxue.com",function(res){
              这里的res也是请求这个接口的返回结果
            })
				第二种：使用 $.ajax进行做数据请求
						语法格式：
            		$.ajax({
                  //这里的url就是你请求接口的地址
                  url:"http://www.xiaosutongxue.com",
                  //这里的data键就是你在请求这个接口的时候所需要携带的参数
                  //当然，需不需要携带参数需要看接口文档中是否需要
                  data:{
                    参数的键:参数的值
                  },
                  //success这个键后边的函数会在请求成功后自动执行
                  //然后会在请求成功后将请求成功的结果放到形参的位置
                  success:function(形参){
                    所以这个形参就是你请求这个接口得到的数据，我们可以把得到的数据
                    进行循环到任何元素中
                  },
                  //这个error是错误的意思，只有在请求失败的时候才会执行这个error后边的函数
                  //当然错误信息也会存储在这个err参数中
                  error:function(err){
                    
                  }
                })
				以上的两种方式都是用于ajax数据请求，目的就是为了得到接口中的数据
        拿到数据后，想用数据干什么都可以
```

## axios

```js
axios的语法格式：
		axios数据请求的语法和ajax几乎一致
    但是axios是需要在vue脚手架项目中使用的，在使用之前需要安装
    安装的语法格式：
    		npm i axios -S
		也是有post和get请求的：
    		语法格式：
        		第一种语法格式：
            		axios.get("请求的路径")
								.then(res=>{
                  如果接口请求成功，那么res就是请求成功的结果
                })
								.catch(err=>{
                  如果请求失败，那么err里边就是失败的错误信息
                })
		如果在axios进行数据请求的时候需要传递参数，那么语法格式就需要写成：
    		axios.get("请求的地址+路径",{
          params:{
            参数的键:参数的值
          }
        })
				.then(res=>{
          如果接口请求成功，那么res就是请求成功的结果
        })
				.catch(err=>{
          如果请求失败，那么err里边就是失败的错误信息
        })
		例如：
    		如果我们要请求的接口地址是：http://www.xiaosutongxue.com/index
				请求需要的参数是：let par = {id:10,name:abc}
				请求的方式为：post
        那么我们就可以写成：
        		axios.post("http://www.xiaosutongxue.com/index",par)
						.then(res=>{
              	如果接口请求成功，那么res就是请求成功的结果
            })
						.catch(err=>{
              如果请求失败，那么err里边就是失败的错误信息
            })
		当然我们如果在记住axios数据请求的时候，我们可以将我们请求成功的结果存储到本组件中的data数据中
    例如：
    		data(){
          return {
            list:[]
          }
        },
        created(){
          axios.post("http://www.xiaosutongxue.com/index",par)
          .then(res=>{
            这里的res就是请求成功的数据，我们就可以进行将请求到的数据进行存储到我们自己的data中
            this.list = res;
          })
          .catch(err=>{
            如果请求失败，那么err里边就是失败的错误信息
          })
        }
		
		总结：
    		不管使用什么方式进行接口的数据请求，都必须先记住语法格式，然后自己找一个接口
        进行测试，如果能拿到数据，就表示学会了
```



