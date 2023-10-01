const path=require('path');

const config={
    mode:"development" ,
    entry: './src/signup.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    watch: true
    
}

module.exports=config;