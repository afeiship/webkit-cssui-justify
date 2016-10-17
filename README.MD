# webkit-sassui-justify
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
  2.Child elements must have font-size.
  */
  font-size: 14px;
}
</style>
<div class="webkit-sassui-justify justify-demo">
  <span>item1</span>
  <span>item2</span>
  <span>item3</span>
</div>

```


## resources:
+ https://github.com/afeiship/generator-webkit-cssui
+ https://github.com/kangax/html-minifier
+ https://www.npmjs.com/package/gulp-htmlmin
