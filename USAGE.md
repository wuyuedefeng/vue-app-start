### Dependents

> support `scss`
```
npm install node-sass --save-dev
npm install sass-loader --save-dev
```

> global `scss vars`
```
npm install sass-resources-loader --save-dev
```
需改utils.js 查找到
```
scss: generateLoaders('sass'),
```
替换为
```
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/assets/stylesheets/global/**/*.scss')
    }
  }
),
```
> share vars between `SCSS` And 'JS'
github: https://github.com/epegzz/sass-vars-loader
```
npm install @epegzz/sass-vars-loader --save-dev
```
需改utils.js 查找到
```
scss: generateLoaders('sass'),
```
替换为
```
scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/assets/stylesheets/_global/**/*.scss')
        }
      }
    ).concat(// Reads Sass vars from files in the options property
      {
        loader: "@epegzz/sass-vars-loader", options: {
        syntax: 'scss',
        files: [
          // Option 3) Load vars from JavaScript file
          path.resolve(__dirname, '../src/assets/javascripts/_share_scss_vars.js')
        ]}
    }),
```



