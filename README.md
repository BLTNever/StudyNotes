### less 模块化
[参考链接](https://fe-doc.ypshengxian.com/Webpack/react-typescript.html)

- usage
  ```less
  // test.module.less
  .test {
    color: red;
    :global .foo { } // 不会被命名空间化
    :global { // 大段文本用大括号
      .bar {}
    }
  }

  // test.less
  .test {
    font-size: 14px;
  }
  ```
  ```jsx
  // test.jsx
  import cls from 'classnames'
  import style from './test.module.less'
  import './test.less'

  export default () => {
    return (
      <div className={cls('test', style.test)}>
        The test text.
        <span className="foo">Foo</span>
        <span className="bar">Bar</span>
      </div>
    )
  }
  ```
