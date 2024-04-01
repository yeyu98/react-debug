<!--
 * @Author: yeyu98
 * @Date: 2024-03-30 09:59:43
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-04-01 20:32:43
 * @Description:
-->
启动后，浏览器调试即可
```bash
npm i
npm run start
```

启用flow类型
- 通过配置.vscode 关闭ts类型校验
    ```
    {
    "javascript.validate.enable": false
    }
    ```
- 安装 Flow Language Support vscode插件
- yarn执行安装部分react源码中的npm包，执行yarn postinstall