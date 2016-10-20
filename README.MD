# webkit-sassui-layout-justify
> Webkit sass ui module for justify skills.

## usage:
+ use sass mixin:
```sass
.justify-demo {
  //Child must have font-size:
  @include webkit-sassui-justify(14px);
  >*{
    width: 24px;
    line-height: 24px;
    text-align: center;
    background: #333;
    color: white;
    border-radius: 50%;
  }
}
```

+ OR you can use css directily:
```html
<style media="screen">
.justify-demo>*{
  /*
  1.Child elements must by original inline elements.
  2.Child elements must have height.(If NOT,the box will has a hidden height)
  */
  height:24px;
}
</style>
<div class="webkit-sassui-justify justify-demo">
  <span>item1</span>
  <span>item2</span>
  <span>item3</span>
</div>

```
+ justify-text(ONLY for 'inline-element')
```html
<div class="webkit-sassui-justify-text justify-text-demo">
  <i>1</i>
  <i>2</i>
  <i>3</i>
  <i>4</i>
</div>
```



## resources:
+ https://github.com/afeiship/generator-webkit-cssui
+ https://github.com/kangax/html-minifier
+ https://www.npmjs.com/package/gulp-htmlmin
+ https://kristinlbradley.wordpress.com/2011/09/15/cross-browser-css-justified-block-list/
