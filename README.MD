# webkit-sassui-justify
> Webkit sass ui module for justify skills.

## usage:
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


## resources:
+ https://github.com/afeiship/generator-webkit-cssui
+ https://github.com/kangax/html-minifier
+ https://www.npmjs.com/package/gulp-htmlmin
