### Dependent

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

