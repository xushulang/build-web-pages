# Build Web Pages

## 使用方法

### 1、代码编写

`public`里为最终使用的文件，以`/public/index.html`为例

-   引入`css`、`javascript`文件，引入文件为编译后文件

    ```html
    <!-- Styles -->
    <link rel="stylesheet" href="css/app.css" />

    <!-- Scripts -->
    <script src="js/manifest.js" defer></script>
    <script src="js/vendor.js" defer></script>
    <script src="js/app.js" defer></script>
    ```

-   知道要使用的样式对应的`class`名是什么，可通过[Tailwind CSS](https://tailwindcss.com/docs/)官网文档查找`class`

    ```html
    <div class="text-red-500 md:text-yellow-400">Logo</div>
    ```

-   使用其他 js 库，如`axios`(已引入)、`jQuery`

    ```
    npm install -D jquery
    ```

    在`/resources/js/app.js`引入`jQuery`

    ```javascript
    window.$ = window.jQuery = require('jquery');
    ```

    相应修改`/webpack.mix.js`，增加`.extract(['jquery'], 'jquery.js')`

    ```javascript
    const mix = require('laravel-mix');

    mix.js('resources/js/app.js', 'js')
        .postCss('resources/css/app.css', 'css', [require('postcss-import'), require('tailwindcss')])
        .setPublicPath('public')
        .extract(['jquery'], 'jquery.js')
        .extract();

    if (mix.inProduction()) {
        mix.version();
    }
    ```

-   在终端中运行以下命令，编译`css`和`js`文件

    开发环境

    ```
    npm run watch
    ```

    生产环境

    ```
    npm run prod
    ```

### 2、上线

-   `public`里的所有文件即为最终使用的文件

<br />
<br />
<br />

## 附：相关软件安装

### Windows

推荐`WSL2 (Windows Subsystem for Linux 2)`，使用`宝塔`快速搭建本地开发环境

#### 1、安装`WSL2`

-   以管理员身份运行`Windows Terminal`，以下命令将默认安装`Ubuntu`子系统

    ```
    wsl --install
    ```

#### 2、安装`宝塔`

-   `Ubuntu/Deepin`

    ```
    wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
    ```

-   `Centos`

    ```
    yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
    ```

#### 3、安装`node.js版本管理器`

-   登录宝塔->`软件商店`->`node.js版本管理器`->`Node版本(v14.x.x)`，并将环境变量设置为该版本

### Linux

同`Windows`步骤 2、3

### MacOS

-   使用包管理器`homebrew`安装`nvm`
-   使用`nvm`管理`node.js`版本，建议安装 v14.x.x
